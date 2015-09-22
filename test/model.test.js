import {assert, expect} from 'chai';

import {Model} from '../src/model';

describe('Model base class', function() {
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
            Model.registerModelType({constructor: {name: 'a'}});
            assert.ok(Model.registeredModelTypes);
            assert.notEqual(Object.keys(Model.registeredModelTypes).length, 0);
        });
        
        it('registerModelType twice same should throw', function() {
            Model.registerModelType({constructor: {name: 'a'}});
            expect(() => { Model.registerModelType({constructor: {name: 'a'}}); }).to.throw(Error);
        });
        
        it('registerModelType twice different should not throw', function() {
            Model.registerModelType({constructor: {name: 'a'}});
            expect(() => { Model.registerModelType({constructor: {name: 'b'}}); }).to.not.throw(Error);
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
    });
});