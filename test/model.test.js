import {assert, expect} from 'chai';

import {Model, SERIALIZATION_ID} from '../src/model';

describe('Model base', function() {
    beforeEach(function() {
        if (Model.registeredModelTypes) delete Model.registeredModelTypes;
        this.model = new Model();
    });
    
    describe('class', function() {
        it('should not have registeredModelTypes', function() {
            assert.notOk(Model.registeredModelTypes);
        });
        
        it('registerModelType should create registeredModelTypes', function() {
            assert.notOk(Model.registeredModelTypes);
            Model.registerModelType({name: 'a'});
            assert.ok(Model.registeredModelTypes);
            assert.notEqual(Object.keys(Model.registeredModelTypes).length, 0);
        });
        
        it('registerModelType twice same should throw', function() {
            Model.registerModelType({name: 'a'});
            expect(() => { Model.registerModelType({name: 'a'}); }).to.throw(Error);
        });
        
        it('registerModelType twice different should not throw', function() {
            Model.registerModelType({name: 'a'});
            expect(() => { Model.registerModelType({name: 'b'}); }).to.not.throw(Error);
            assert.equal(Object.keys(Model.registeredModelTypes).length, 2);
        });
    });
    
    describe('instance', function() {
        it('should be able to set an id', function() {
            var m = new Model('test');
            assert.ok(m.id);
            assert.equal(m.id, 'test');
        });
        
        it('should have generated id', function() {
            assert.ok(this.model.id);
            assert.notEqual(this.model.id.length, 0);
        });
        
        it('should be stored in instance dictionary', function() {
            assert.ok(Model.instanceMap[this.model.id]);
            assert.equal(Model.instanceMap[this.model.id], this.model);
        });
        
        it('should be stored in instance dictionary', function() {
            assert.ok(Model.instanceMap[this.model.id]);
            assert.equal(Model.instanceMap[this.model.id], this.model);
        });
        
        it('typeName defined', function() {
            assert.ok(this.model.typeName);
        });
        
        it('changed defined', function() {
            assert.ok(this.model.changed);
        });
        
        it('keys defined and empty', function() {
            assert.ok(this.model.keys);
            assert.equal(this.model.keys.length, 0);
        });
        
        it('placeholder defines an inaccessable key', function() {
            this.model.placeholder('test');
            assert.equal(this.model.keys.length, 1);
            assert.equal(this.model.keys[0], 'test');
            expect(() => { this.model.test = 'a'; }).to.throw(Error);
            expect(() => { var a = this.model.test; }).to.throw(Error);
        });
        
        it('placeholder followed by declare defines a key', function() {
            this.model.placeholder('test');
            this.model.declare('test', () => 'b', x => {});
            assert.equal(this.model.keys.length, 1);
            assert.equal(this.model.keys[0], 'test');
            expect(() => { this.model.test = 'a'; }).to.not.throw(Error);
            expect(() => { var a = this.model.test; }).to.not.throw(Error);
            assert.equal(this.model.test, 'b');
        });
        
        it('placeholder followed by declare on a subclass defines a key', function() {
            class A extends Model {
                constructor() { super(); this.placeholder('test'); }
            }
            class B extends A {
                constructor() { super(); this.declare('test', () => 'b', x => {}); }
            }
            let b = new B();
            assert.equal(b.keys.length, 1);
            assert.equal(b.keys[0], 'test');
            expect(() => { b.test = 'a'; }).to.not.throw(Error);
            expect(() => { var a = b.test; }).to.not.throw(Error);
            assert.equal(b.test, 'b');
        });
        
        it('declare defines a key', function() {
            this.model.declare('test', () => 'b', x => {});
            assert.equal(this.model.keys.length, 1);
            assert.equal(this.model.keys[0], 'test');
            this.model.test = 'a';
            assert.equal(this.model.test, 'b');
        });
        
        it('abitrary key declaration', function() {
            this.model.declare('test');
            assert.equal(this.model.keys.length, 1);
            assert.equal(this.model.keys[0], 'test');
            assert.equal(this.model.test, undefined);
            this.model.test = 'a';
            assert.equal(this.model.test, 'a');
        });
        
        it('can\'t declare readonly key', function() {
            expect(() => { this.model.declare('test', () => 'b'); }).to.throw(Error);
        });
        
        it('change signal emitted', function() {
            this.model.declare('test');
            this.model.changed.connect((sender, data) => {
                assert.equal(data.key, 'test');
                assert.equal(data.value, 'a');
                assert.equal(sender, this.model);
            }, this);
            this.model.test = 'a';
        });
        
        it('nested change signal emitted', function() {
            let submodel = new Model();
            submodel.declare('b');
            
            this.model.declare('a');
            this.model.a = submodel;
            
            this.model.changed.connect((sender, data) => {
                assert.equal(data.key, 'a.b');
                assert.equal(data.value, 'c');
                assert.equal(sender, this.model);
            }, this);
            submodel.b = 'c';
        });
        
        it('double nested change signal emitted', function() {
            let submodel = new Model();
            submodel.declare('b');
            
            let intermediateModel = new Model();
            intermediateModel.declare('a');
            
            this.model.declare('a');
            this.model.a = intermediateModel;
            intermediateModel.a = submodel;
            
            this.model.changed.connect((sender, data) => {
                assert.equal(data.key, 'a.a.b');
                assert.equal(data.value, 'c');
                assert.equal(sender, this.model);
            }, this);
            submodel.b = 'c';
        });
        
        it('nested in a list change signal emitted', function() {
            let submodel = new Model();
            submodel.declare('b');
            
            this.model.declare('a');
            this.model.a = [1, submodel, 2];
            
            this.model.changed.connect((sender, data) => {
                assert.equal(data.key, 'a.b');
                assert.equal(data.value, 'c');
                assert.equal(sender, this.model);
            }, this);
            submodel.b = 'c';
        });
        
        it('nested in an object change signal emitted', function() {
            let submodel = new Model();
            submodel.declare('b');
            
            this.model.declare('a');
            this.model.a = { test: submodel };
            
            this.model.changed.connect((sender, data) => {
                assert.equal(data.key, 'a.b');
                assert.equal(data.value, 'c');
                assert.equal(sender, this.model);
            }, this);
            submodel.b = 'c';
        });
        
        it('old nested change signal not triggered', function() {
            let submodel = new Model();
            submodel.declare('b');
            
            this.model.declare('a');
            this.model.a = submodel;
            this.model.a = null;
            
            this.model.changed.connect((sender, data) => {
                assert.fail('event fired', 'event not fired');
            }, this);
            submodel.b = 'c';
        });
        
        it('nested state json', function() {
            let submodel = new Model();
            submodel.declare('c');
            submodel.c = 'c';
            
            this.model.declare('a');
            this.model.a = submodel;
            this.model.declare('b');
            this.model.b = 1;
            
            let state = JSON.parse(this.model.state);
            assert.equal(state.a, submodel.toJSON());
            assert.equal(state.b, 1);
        });
        
        it('recursive state json', function() {
            this.model.declare('a');
            this.model.a = this.model;
            
            let state = JSON.parse(this.model.state);
            assert.equal(state.a, this.model.toJSON());
        });
        
        it('set state json', function() {
            let submodel = new Model();
            this.model.declare('a');
            this.model.a = submodel;
            this.model.declare('b');
            this.model.b = 1;
            
            let state = JSON.parse(this.model.state);
            state.b = state.a;
            state.a = 2;
            this.model.state = JSON.stringify(state);
            
            assert.equal(this.model.b, submodel);
            assert.equal(this.model.a, 2);
        });
        
        it('set state json with unknown model', function() {
            Model.registerModelType(Model);
            
            this.model.declare('a');
            let state = JSON.parse(this.model.state);
            state.a = SERIALIZATION_ID + 'Model,custom';
            this.model.state = JSON.stringify(state);
            
            assert.ok(this.model.a);
            assert.ok(this.model.a.id);
            assert.equal(this.model.a.id, 'custom');
        });
        
        it('preventChanged surpressed change signals', function() {
            this.model.declare('test');
            this.model.changed.connect((sender, data) => {
                assert.fail('signal emitted', 'signal not emitted');
            }, this);
            this.model.preventChanged(() => {                
                this.model.test = 'a';
            });
        });
        
        it('watch monitors for value changes', function() {
            let valueA = 0;
            this.model.declare('a', () => valueA, x => {});
            let valueB = 0;
            this.model.declare('b', () => valueB, x => {});
            
            let triggered = false;
            this.model.changed.connect((sender, data) => {
                triggered = true;
            }, this);
            
            this.model.watch(() => {                
                valueA = 1;
            });
            assert.ok(triggered, 'all watched (1)');
            
            triggered = false;
            this.model.watch(() => {                
                valueB = 1;
            });
            assert.ok(triggered, 'all watched (2)');
            
            triggered = false;
            this.model.watch(() => {                
                valueB = 2;
            }, ['a']);
            assert.notOk(triggered, 'a watched');
            
            triggered = false;
            this.model.watch(() => {                
                valueB = 3;
            }, ['b']);
            assert.ok(triggered, 'b watched');
        });
        
        it('getModels gets all of the nested Models in an object', function() {
            let a = new Model();
            let b = new Model();
            let c = new Model();
            
            function arraysEqual(x, y) {
                assert.equal(JSON.stringify(x), JSON.stringify(y));
            }
            arraysEqual([a,b], a._getModels([1, a, 2, 'test', b, 3]));
            arraysEqual([a,b], a._getModels([1, a, a, b, 3]));
            arraysEqual([a,c], a._getModels({first: a, second: 2, third: [3, c]}));
            arraysEqual([a], a._getModels(a));
            arraysEqual([], a._getModels([1, 2, 3]));
            arraysEqual([], a._getModels(1));
            arraysEqual([], a._getModels());
        });
    });
});
