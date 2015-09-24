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
            this.model.text = '';
        });
        
        describe('instance', function() {
            it('constructed', function() {
                assert.ok(this.model);
            });
            
            it('implements textInserted correctly', function() {
                let changes = [];
                this.model.textInserted.connect((sender, data) => {
                    changes.push({type: 'insert', data: data});
                }, this);
                this.model.textRemoved.connect((sender, data) => {
                    changes.push({type: 'remove', data: data});
                }, this);
                function checkEvents(expected) {
                    assert.equal(JSON.stringify(changes), JSON.stringify(expected));
                    changes = [];
                }
                
                this.model.text = 'aaacc';
                changes = [];
                this.model.text = 'aaabbcc';
                checkEvents([ { type: 'insert', data: { index: 3, text: 'bb' } } ]);
            });
            
            it('implements textRemoved correctly', function() {
                let changes = [];
                this.model.textInserted.connect((sender, data) => {
                    changes.push({type: 'insert', data: data});
                }, this);
                this.model.textRemoved.connect((sender, data) => {
                    changes.push({type: 'remove', data: data});
                }, this);
                function checkEvents(expected) {
                    assert.equal(JSON.stringify(changes), JSON.stringify(expected));
                    changes = [];
                }
                
                this.model.text = 'aaabbcc';
                changes = [];
                this.model.text = 'aaacc';
                checkEvents([ { type: 'remove', data: { index: 3, length: 2 } } ]);
            });
            
            it('clips cursor coordinates', function() {
                this.model.text = 'abc';
                this.model.cursors[0].headPos.x = 5; // Max 3
                this.model.cursors[0].headPos.y = 2; // Max 0
                assert.equal(this.model.cursors[0].headPos.x, 3);
                assert.equal(this.model.cursors[0].headPos.y, 0);
            });
            
            it('nested coordinate single dimension change signaled', function() {
                let triggered;
                this.model.changed.connect((sender, data) => {
                    if (data.key === 'cursors.anchorPos.x') {
                        triggered = true;
                    }
                });
                
                this.model.text = 'abc';
                this.model.cursors[0].anchorPos.x = 2; 
                assert.ok(triggered, 'event for cursors.anchorPos.x triggered');
            });
            
            it('event fired for text change', function() {
                let triggered = 0;
                this.model.changed.connect((sender, data) => {
                    if (data.key === 'text') {
                        triggered++;
                    }
                });
                
                this.model.text = 'ab';
                this.model.text = 'bc';
                this.model.text = 'bc';
                this.model.language = 'html';
                
                assert.equal(triggered, 2);
            });
            
        });
    });
}
