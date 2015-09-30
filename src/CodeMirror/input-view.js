import * as diff from 'fast-diff';
import {Pos} from 'codemirror';

import {Model} from '../model';
import {InputView} from '../input-view';
import {CursorView} from '../cursor-view';
import {CoordinateView} from '../coordinate-view';

/**
 * CodeMirror model
 */
export class CodeMirrorInputView extends InputView {

    /**
     * Public constructor
     * @param  {[string]} id
     * @param  {CodeMirror} cm CodeMirror instance
     */
    constructor(id, cm) {
        super(id);
        
        this.cm = cm;
        
        this.declare('text', this.cm.getValue.bind(this.cm), this.cm.setValue.bind(this.cm), true);
        this.declare('language', () => this.cm.getOption('mode'), x => this.cm.setOption('mode', x), true);
        this.declare('cursors', this.getCursors.bind(this), this.setCursors.bind(this));
        
        // TODO: Implement readonly cursors
        this.declare('readonlyCursors');
        
        this._cursorsLock = false;
        this._bindEvents();
        this.cursors = [];
    }
    
    /**
     * Bind events.
     */
    _bindEvents() {
        // CodeMirror instance events
        this.cm.on('cursorActivity', this._fetchCursors.bind(this));
        this.cm.on('beforeChange', this._handleBeforeChange.bind(this));
        this.cm.on('changes', this._handleChanges.bind(this));
        
        // Model events
        // When the cursors are changed, update CodeMirror.
        this.changed.connect((sender, data) => {
            if (data.key.startsWith('cursors')) {
                this._pushCursors();
            }
        }, this);
    }

    /**
     * Gets the cursors
     * @return {CursorView[]}
     */
    getCursors() {
        this._fetchCursors();
        return this._cursors;
    }
    
    /**
     * Sets the cursors
     * @param {CursorView[]} cursors
     */
    setCursors(cursors) {
        this._cursors = cursors;
    }
    
    /**
     * Update local cursor state from CodeMirror cursor state.
     */
    _fetchCursors() {
        this._lockCursors(() => {
            let ranges = this.cm.listSelections();
            
            // Add cursors that are missing.
            let cursors = (this._cursors || []).splice();
            while (ranges.length > cursors.length) {
                let cursor = new CursorView();
                cursor.headPos = new CoordinateView();
                cursor.anchorPos = new CoordinateView();
                cursors.push(cursor);
            }
            
            // Remove cursors that no longer exist.
            if (ranges.length < cursors.length) {
                cursors.splice(ranges.length, cursors.length - ranges.length);
            }
            
            // Update all cursor coordinates.
            ranges.forEach((range, index) => {
                cursors[index].headPos.y = range.head.line;
                cursors[index].headPos.x = range.head.ch;
                cursors[index].anchorPos.y = range.anchor.line;
                cursors[index].anchorPos.x = range.anchor.ch;
            });
            this.cursors = cursors;
        });
    }
    
    /**
     * Push local cursor state to CodeMirror cursor state.
     */
    _pushCursors() {
        this._lockCursors(() => {
            // The CodeMirror API is limited, changing the Range objects or Pos 
            // objects alone doesn't properly update the instance.  Instead, we have
            // to reset everything using the setSelections API.
            this.cm.setSelections(this._cursors.map(x => {
                return {
                    head: this.cm.clipPos(new Pos(x.headPos.y, x.headPos.x)),
                    anchor: this.cm.clipPos(new Pos(x.anchorPos.y, x.anchorPos.x))
                };
            }));
        });
    }
    
    /**
     * Context manager that locks write access to the cursors list.
     * @param  {function} f
     */
    _lockCursors(f) {
        if (!this._cursorsLock) {
            this._cursorsLock = true;
            try {                
                return f.call(this);
            } finally {
                this._cursorsLock = false;
            }
        }
    }
    
    /**
     * Handles before the text changes.
     */
    _handleBeforeChange() {
        if (!this._oldText) {                
            this._oldText = this.text; 
        }
    }
    
    /**
     * Handles after the text changes.
     */
    _handleChanges() {
        if (this._oldText && this._oldText !== this.text) {
            let segments = diff.default(this._oldText, this.text);
            this._oldText = undefined;
            
            let left = 0;
            for (let i = 0; i < segments.length; i++) {
                let text = segments[i][1];
                switch (segments[i][0]) {
                    case diff.INSERT:
                        this.textInserted.emit({index: left, text: text});
                        left += text.length;
                        break;
                        
                    case diff.EQUAL:
                        left += text.length;
                        break;
                        
                    case diff.DELETE:
                        this.textRemoved.emit({index: left, length: text.length});
                        break;
                }
            }
            
            // Emit text change event after fine grained events are emitted.
            this.emitChange('text', this.text);
        }
    }
}
Model.registerModelType(CodeMirrorInputView);
