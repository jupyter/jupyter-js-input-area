import {assert, expect} from 'chai';

import {CursorModel, CoordinateModel} from '../../src/cursor-model';

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
            
            it('can create cursors', function() {
                this.model.text = 'te\nst\nit';
                let cursor = new CursorModel(undefined, new CoordinateModel(undefined, 1, 2), new CoordinateModel(undefined, 2, 1));
                this.model.cursors = this.model.cursors.concat([cursor]);
                
                // Test
                let ranges = this.cm.listSelections();
                assert.equal(ranges.length, 2);
                assert.equal(ranges[1].head.ch, 1);
                assert.equal(ranges[1].head.line, 2);
                assert.equal(ranges[1].anchor.ch, 2);
                assert.equal(ranges[1].anchor.line, 1);
            });
            
            it('can remove cursors', function() {
                this.model.text = 'te\nst\nit';
                let cursor = new CursorModel(undefined, new CoordinateModel(undefined, 1, 2), new CoordinateModel(undefined, 2, 1));
                this.model.cursors = this.model.cursors.concat([cursor]);
                
                let ranges = this.cm.listSelections();
                assert.equal(ranges.length, 2);
                
                // Remove a cursor
                this.model.cursors = this.model.cursors.slice(0,1);
                assert.equal(this.cm.listSelections().length, 1);
            });
            
            it('can modify a cursor by a single coordinate', function() {
                this.model.text = 'te\nst\nit';
                debugger;
                this.model.cursors[0].headPos = new CoordinateModel(undefined, 1, 2);
                
                // Test
                let ranges = this.cm.listSelections();
                assert.equal(ranges[0].head.ch, 1);
                assert.equal(ranges[0].head.line, 2);
            });
            
            it('can modify a cursor by a single dimension', function() {
                this.model.text = 'te\nst\nit';
                this.model.cursors[0].headPos.y = 2;
                
                // Test
                let ranges = this.cm.listSelections();
                assert.equal(ranges[0].head.line, 2);
            });
            
            it('detects new cursors', function() {
                this.model.text = 'te\nst\nit';
                this.cm.setSelections([
                    {head: {line: 0, ch: 0}, anchor: {line: 0, ch: 0}},
                    {head: {line: 2, ch: 1}, anchor: {line: 1, ch: 2}},
                ]);
                
                assert.equal(this.model.cursors[1].headPos.y, 2);
                assert.equal(this.model.cursors[1].headPos.x, 1);
                assert.equal(this.model.cursors[1].anchorPos.y, 1);
                assert.equal(this.model.cursors[1].anchorPos.x, 2);
            });
            
            it('detects cursor deletion', function() {
                this.model.text = 'te\nst\nit';
                let cursor = new CursorModel(undefined, new CoordinateModel(undefined, 1, 2), new CoordinateModel(undefined, 2, 1));
                this.model.cursors = this.model.cursors.concat([cursor]);
                
                let ranges = this.cm.listSelections();
                assert.equal(ranges.length, 2);
                
                this.cm.setSelections(ranges.slice(0,1));
                assert.equal(this.cm.listSelections().length, 1);
            });
            
            it('detects cursor movement', function() {
                this.model.text = 'te\nst\nit';
                this.cm.setSelections([
                    {head: {line: 2, ch: 1}, anchor: {line: 1, ch: 2}},
                ]);
                
                assert.equal(this.model.cursors[0].headPos.y, 2);
                assert.equal(this.model.cursors[0].headPos.x, 1);
                assert.equal(this.model.cursors[0].anchorPos.y, 1);
                assert.equal(this.model.cursors[0].anchorPos.x, 2);
            });
        });
    });
}
