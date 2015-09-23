import {assert, expect} from 'chai';

export function testInputModel(name, constructModel) {
    describe(name, function() {
        beforeEach(function() {
            this.model = constructModel();
        });
        
        describe('instance', function() {
            it('constructed', function() {
                assert.ok(this.model);
            });
        });
    });
}
