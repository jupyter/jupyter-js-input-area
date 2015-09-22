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
        it('should have generated id', function() {
            assert.ok(this.model.id);
            assert.notEqual(this.model.id.length, 0);
        });
    });
});