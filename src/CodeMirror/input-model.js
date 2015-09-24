import * as diff from 'fast-diff';
import {Pos} from 'codemirror';

import {Model} from '../model';
import {InputModel} from '../input-model';
import {CursorModel, CoordinateModel} from '../cursor-model';

/**
 * CodeMirror model
 */
export class CodeMirrorInputModel extends InputModel {

    /**
     * Public constructor
     * @param  {[string]} id
     * @param  {CodeMirror} cm CodeMirror instance
     */
    constructor(id, cm) {
        super(id);
        
        this.cm = cm;
        
        this.declare('text', this.cm.getValue.bind(this.cm), this.cm.setValue.bind(this.cm));
        this.declare('language', () => this.cm.getOption('mode'), x => this.cm.setOption('mode', x));
        this.declare('cursors', this.getCursors.bind(this), this.setCursors.bind(this));
        
        // TODO: Implement readonly cursors
        this.declare('readonlyCursors');
        
        this._cursors = [];
        this._cursorsLock = false;
        this._bindEvents();
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
     * @return {CodeMirrorCursorModel[]}
     */
    getCursors() {
        this._fetchCursors();
        return this._cursors;
    }
    
    /**
     * Sets the cursors
     * @param {CodeMirrorCursorModel[]} cursors
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
            while (ranges.length > this._cursors.length) {
                let cursor = new CursorModel();
                cursor.headPos = new CoordinateModel();
                cursor.anchorPos = new CoordinateModel();
                this._cursors.push(cursor);
            }
            
            // Remove cursors that no longer exist.
            if (ranges.length < this._cursors.length) {
                this._cursors.splice(ranges.length, this._cursors.length - ranges.length);
            }
            
            // Update all cursor coordinates.
            ranges.forEach((range, index) => {
                this._cursors[index].headPos.y = range.head.line;
                this._cursors[index].headPos.x = range.head.ch;
                this._cursors[index].anchorPos.y = range.anchor.line;
                this._cursors[index].anchorPos.x = range.anchor.ch;
            });
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
                    head: cm.clipPos(new Pos(x.headPos.y, x.headPos.x)),
                    anchor: cm.clipPos(new Pos(x.anchorPos.y, x.anchorPos.x))
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
                f.call(this);
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
Model.registerModelType(CodeMirrorInputModel);
