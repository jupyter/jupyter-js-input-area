import {v4} from 'node-uuid';
import {Signal} from 'phosphor-signaling';
import * as _ from 'underscore';

var SERIALIZATION_ID = 'model#';

var changed = Signal();

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
            Model.registeredModelTypes = [];
        }

        let name = modelClass.constructor.name;
        if (Model.registeredModelTypes.indexOf(name) === -1) {            
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
        if (!Model.weakMap) {
            Model.weakMap = new WeakMap();
        }
        
        this.id = id || this._newId();
        Model.weakMap.set(this.id, this);
        
        this._changedLock = 0;
        this._keys = [];
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
     */
    declare(key, getter, setter) {
        if (getter === undefined) throw new Error('getter not defined');
        if (setter === undefined) throw new Error('setter not defined');
        
        if (this._keys.indexOf(key) === -1) {
            this._keys.push(key);
        }
        
        Object.defineProperty(this, key, {
            get: getter,
            set: (x) => {
                let changed = x !== this[key];
                setter.call(this, x);
                if (changed) {
                    if (changedLock <= 0) {                        
                        this.changed.emit(key, v, this);
                    }
                    
                    // Recursively listen to change signals.  Duck typing.
                    if (x.changed) {
                        x.changed.connect((k, v, sender) => {
                            if (changedLock <= 0) {                        
                                this.changed.emit(key + '.' + k, v, this);
                            }
                        }, this);
                    }
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
        for (let key of state) {
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
            f.call(this);
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
            if (Model.weakMap.has(id)) {
                return Model.weakMap.get(id);
            } else {
                return new (Model.registeredModelTypes[className])(id);
            }
        } else {
            return v;
        }
    }

    /**
     * Generates a new id.
     * @return {string} id
     */
    _newId() {
        return v4();
    }
}
