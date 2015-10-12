import {v4} from 'node-uuid';
import {Signal, clearSignalData} from 'phosphor-signaling';
import * as _ from 'underscore';

export var SERIALIZATION_ID = 'model#';

var changed = new Signal();

/**
 * Base model
 */
export class Model {

    /**
     * Register a model class.  Require for model serialization and 
     * deserialization.
     * @param  {Model class} modelClass
     */
    static registerModelType(modelClass) {
        if (!Model.registeredModelTypes) {
            Model.registeredModelTypes = {};
        }

        let name = modelClass.name;
        if (!Model.registeredModelTypes[name]) {
            Model.registeredModelTypes[name] = modelClass;
        } else {
            throw new Error('A class with the name "' + name + '" has already been registered.');
        }
    }

    /**
     * Public constructor
     * @param  {[string]} id - uuid
     */
    constructor(id) {
        if (!Model.instanceMap) {
            Model.instanceMap = {};
        }
        
        this.id = id || this._newId();
        // TODO: replace with weakref
        Model.instanceMap[this.id] = this;
        
        this._changedLock = 0;
        this._keys = [];
        this._changeHandlers = [];
    }
    
    /**
     * Get the registered type name of the class.
     * @return {string}
     */
    get typeName() {
        return this.constructor.name;
    }

    /**
     * Changed signal
     * @return {Signal}
     */
    get changed() {
        return changed.bind(this);
    }
    
    /**
     * Declare a state key.
     * @param  {string} key
     * @param  {()=>object} getter
     * @param  {(object)=>void} setter
     * @param  {[boolean]} peventSetterChanges an optional parameter that allows 
     *                                         you to prevent change signals 
     *                                         from being emitted while the 
     *                                         setter callback is being executed.
     */
    declare(key, getter, setter, peventSetterChanges) {
        if (getter === undefined && setter === undefined) {
            let closedValue;
            getter = () => closedValue;
            setter = x => { closedValue = x; };
        } else if (getter === undefined) {
            throw new Error('getter not defined for ' + key);
        } else if (setter === undefined) {
            throw new Error('setter not defined for ' + key);
        }
        
        if (this._keys.indexOf(key) === -1) {
            this._keys.push(key);
            
            this._changeHandlers[key] = function handleChange(sender, data) {
                this.emitChange(key + '.' + data.key, data.value);
            };
        }
        
        Object.defineProperty(this, key, {
            configurable: true,
            enumerable: true,
            get: getter,
            set: function(x) {
                let old = this[key];
                if (x !== old) {
                    if (peventSetterChanges) {
                        this.preventChanged(() => setter.call(this, x));
                    } else {
                        setter.call(this, x);
                    }
                    
                    this.emitChange(key, x);
                    
                    // Unlisten to old's signals.
                    this._getModels(old).forEach((x) => {
                        x.changed.disconnect(this._changeHandlers[key], this);
                    });
                    
                    // Recursively listen to change signals.
                    this._getModels(x).forEach(x => {
                        x.changed.connect(this._changeHandlers[key], this);
                    });
                }
            }
        });
    } 
    
    /**
     * Declare a placeholder for a state key.
     * Useful for base class models
     * @param  {string} key
     */
    placeholder(key) {
        let barf = () => { throw new Error(key + ' not implemented'); };
        if (this._keys.indexOf(key) === -1) {
            this.declare(key, barf, barf);
        }
    }
    
    /**
     * Context handler that watches a set of keys for value changes.  At the end
     * of the context, for each value that has changed, a change signal will be 
     * emitted.
     * @param  {function} f
     * @param  {[string[]]} keys
     * @return {string[]} list of keys that changed
     */
    watch(f, keys) {
        keys = keys || this.keys;
        
        let oldValues = {};
        keys.forEach(key => {
            oldValues[key] = this[key];
        });
        
        try {
            f.call(this);
        } finally {
            return keys.map(key => {
                if (oldValues[key] !== this[key]) {
                    this.emitChange(key, this[key]);
                    return key;
                } else {
                    return undefined;
                }
            }).filter(key => key !== undefined);
        }
    }
    
    /**
     * Emit a change signal for a key
     * @param  {string} key
     * @param  {any} value new value of the key
     */
    emitChange(key, value) {
        if (this._changedLock <= 0) { 
            this.changed.emit({key: key, value: value});
        }
    }
    
    /**
     * Readonly copy of the internal keys array
     * @return {[type]} [description]
     */
    get keys() {
        return this._keys.slice();
    }
            
    /**
     * Model state - jsonable
     * @return {object}
     */
    get state() {
        return JSON.stringify(this.stateObject);
    }

    /**
     * Model state - jsonable
     * @param  {object} x
     */
    set state(x) {
        this.stateObject = JSON.parse(x, this.fromJSON);
    }
    
    /**
     * Model state - not jsonable
     * @return {object}
     */
    get stateObject() {
        let state = {};
        for (let key of this.keys) {
            state[key] = this[key];
        }
        return state;
    }
    
    /**
     * Model state - not jsonable
     * @param  {object} state
     */
    set stateObject(state) {
        for (let key of Object.keys(state)) {
            this[key] = state[key];
        }
    }
    
    /**
     * Context handler that prevents state change signals from emitting.
     * @param  {function} f
     */
    preventChanged(f) {
        this._changedLock += 1;
        try {
            return f.call(this);
        } finally {            
            this._changedLock -= 1;
        }
    }
    
    /**
     * For serialization using JSON.stringify.
     * @return {string}
     */
    toJSON() {
        return SERIALIZATION_ID + this.typeName + ',' + this.id;
    }
    
    /**
     * For deserialization using JSON.parse
     * @return {any} value
     */
    fromJSON(k, v) {
        if (typeof v === 'string' && v.startsWith(SERIALIZATION_ID) && v.indexOf(',') !== -1) {
            let serialized = v.substring(SERIALIZATION_ID.length).split(',', 2);
            let className = serialized[0];
            let id = serialized[1];
            if (Model.instanceMap[id]) {
                return Model.instanceMap[id];
            } else {
                let classType = Model.registeredModelTypes[className];
                return new classType(id);
            }
        } else {
            return v;
        }
    }
    
    /**
     * Releases remaining handles on this model.
     */
    dispose() {
        // Remove from instance mapping
        delete Model.instanceMap[this.id];
        // Release event related things
        clearSignalData(this);
    }

    /**
     * Generates a new id.
     * @return {string} id
     */
    _newId() {
        return v4();
    }
    
    /**
     * Get all of the Models in an object or array.
     * @param  {any} x object, or array.  If it's an instance of a Model, it 
     *                 will be returned alone.
     * @return {Model[]}
     */
    _getModels(x) {
        let models;
        if (_.isArray(x)) {
            models = x.map(y => this._getModels(y));
        } else if (x instanceof Model) {
            models = [x];
        } else if (x instanceof Object) {
            models = Object.keys(x).map(y => this._getModels(x[y]));
        } else {
            models = [];
        }
        return _.uniq(_.flatten(models));
    }
}
