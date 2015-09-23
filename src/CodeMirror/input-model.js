import * as diff from 'fast-diff';

import {Model} from '../model';
import {InputModel} from '../input-model';

import {CodeMirrorCursorModel} from './cursor-model';

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
        Model.registerModelType(CodeMirrorInputModel);
        
        this.cm = cm;
        
        this.declare('text', this.cm.getValue, this.cm.setValue);
        this.declare('language', () => this.cm.getOption('mode'), x => this.cm.setOption('mode', x));
        this.declare('cursors', this.getCursors, this.setCursors);
        
        // TODO: Implement readonly cursors
        this.declare('readonlyCursors');
        
        this._cursors = [];
        
        this._bindEvents();
    }
    
    /**
     * Bind to CodeMirror instance events.
     */
    _bindEvents() {
        this.cm.on('cursorActivity', this._linkCursors.bind(this));
        this.cm.on('beforeChange', this._handleBeforeChange.bind(this));
        this.cm.on('changes', this._handleChanges.bind(this));
    }

    /**
     * Gets the cursors
     * @return {CodeMirrorCursorModel[]}
     */
    getCursors() {
        this._linkCursors();
        return this._cursors.slice(0, this.cm.listSelections().length);
    }
    
    /**
     * Sets the cursors
     * @param {CodeMirrorCursorModel[]} cursors
     */
    setCursors(cursors) {
        let states = cursors.map(x => x.state);
        this._cursors = cursors.splice(0);
        this._linkCursors();
        
        for (let i = 0; i < this.cm.listSelections().length; i++) {
            this._cursors[i].state = states[i];
        }
        
        if (this.cm.listSelections().length < cursors.length) {
            for (let i = this.cm.listSelections().length; i < cursors.length; i++) {
                this.cm.addSelection(cursors[i].anchorPos, cursors[i].headPos);
            }
        }
        this._linkCursors();
    }
    
    /**
     * Links the CodeMirrorCursorModels to CodeMirror Range classes.  Also
     * connects to the change signals of the CodeMirrorCursorModels.
     */
    _linkCursors() {
        let ranges = this.cm.listSelections();
        for (let i = 0; i < ranges.length; i++) {
            let cursor;
            if (i >= this._cursors.length) {
                cursor = new CodeMirrorCursorModel(undefined, ranges[i]);
                this._cursors.push(cursor);
            } else {
                cursor = this._cursors[i];
                cursor.cmRange = ranges[i];
            }
            
            // Connect - this handles both when the signal is already 
            // connected and when it hasn't been connected yet.  If it has
            // already been connected, the connect call will return false.
            cursor.change.connect(this._handleCursor, this);
        }
    }
    
    /**
     * Handles when a CodeMirrorCursorModel changes
     * @param  {CodeMirrorCursorModel} sender
     * @param  {object} data
     * @param  {string} data.key key that has changed
     * @param  {any} data.value new value
     */
    _handleCursor(sender, data) {
        // The CodeMirror API is limited, changing the Range objects or Pos 
        // objects alone doesn't properly update the instance.  Instead, we have
        // to reset everything using the setSelections API.
        this.cm.setSelections(this._cursors.slice(0, this.cm.listSelections().length).map(x => x.cmRange));
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
        if (this._oldText) {
            let segments = diff(this._oldText, this.text);
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
        }
    }
}
