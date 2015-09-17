import {v4} from 'node-uuid';
import {Signal} from 'phosphor-signaling';

export class Model {
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
    
    constructor(id) {
        this.id = id || this._newId();
        this.changedLock = 0;
        this.keys = [];
    }
    
    get changed() {
        return Model.changedSignal.bind(this);
    }
    
    declare(key, getter, setter) {
        if (getter === undefined) throw new Error('getter not defined');
        if (setter === undefined) throw new Error('setter not defined');
        
        if (this.keys.indexOf(key) === -1) {
            this.keys.push(key);
        }
        
        Object.defineProperty(this, key, {
            get: getter,
            set: (x) => {
                let changed = x !== this[key];
                setter.call(this, x);
                if (changed) {
                    // TODO: Signal value change
                }
            }
        });
    }
    
    placeholder(key) {
        let barf = () => { throw new Error(key + ' not implemented'); };
        if (this.keys.indexOf(key) === -1) {
            this.declare(key, barf, barf);
        }
    }
    
    get state() {
        let state = { main: this.id };
        state[this.id] = {};
        
        for (let key of this.keys) {
            let modelState = this._packModels(state[key]);
            state[this.id][key] = modelState.state;
            
            for (let modelId of Object.keys(modelState.models)) {
                state[modelId] = modelState.models[modelId];
            }
        }
        return state;
    }
    set state() {
        
    }
    
    preventChanged(f) {
        this.changedLock += 1;
        try {
            f.call(this);
        } finally {            
            this.changedLock -= 1;
        }
    }
    
    _packModels() {
        
    }

    _unpackModels() {
        
    }

    _newId() {
        return v4();
    }
}

Model.changedSignal = new Signal();
