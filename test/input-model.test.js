import {assert, expect} from 'chai';

/**
 * Tests an input model implementation.
 * @param  {string} name             display name for the test group
 * @param  {function} constructModel function that returns a model instance
 */
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
