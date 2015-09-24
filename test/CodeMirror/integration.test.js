import {assert, expect} from 'chai';

export function testIntegration(constructModel) {
    describe('integration', function() {
        beforeEach(function() {
            this.model = constructModel();
            this.cm = this.model.cm;
            this.cm.setValue('');
            this.cm.setSelection({line: 0, ch: 0}, {line: 0, ch: 0});
        });
        
        describe('instance', function() {
            it('constructed', function() {
                assert.ok(this.model);
                assert.ok(this.cm);
            });
            
            it('codemirror to .text', function() {
                this.cm.setValue('abc');
                assert.equal(this.model.text, 'abc');
            });
            
            it('.text to codemirror', function() {
                this.model.text = 'abc';
                assert.equal(this.cm.getValue(), 'abc');
            });
            
            it('text modifications trigger change events', function() {
                let changes = 0;
                this.model.changed.connect((sender, data) => {
                    if (data.key === 'text') {
                        changes++;
                    }
                }, this);
                
                assert.equal(changes, 0);
                
                this.model.text = 'a';
                this.model.text = 'b';
                assert.equal(changes, 2, 'set model.text');
                
                this.model.text = 'b';
                assert.equal(changes, 2, 'set model.text to the same value');
                
                this.cm.setValue('a');
                this.cm.setValue('b');
                assert.equal(changes, 4, 'set CodeMirror value');
                
                this.cm.setValue('b');
                assert.equal(changes, 4, 'set CodeMirror same value ');
            });
            
            it('text modifications trigger fine grained change events', function() {
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
                
                this.model.text = 'a';
                this.model.text = 'ab';
                checkEvents([ { type: 'insert', data: { index: 1, text: 'b' } } ]);
                
                this.model.text = 'b';
                checkEvents([ { type: 'remove', data: { index: 0, length: 1 } } ]);
                
                this.cm.setValue('ba');
                checkEvents([ { type: 'insert', data: { index: 1, text: 'a' } } ]);
                
                this.cm.setValue('c');
                checkEvents([ { type: 'remove', data: { index: 0, length: 2 } },
                              { type: 'insert', data: { index: 0, text: 'c' } } ]);
            });
        });
    });
}
