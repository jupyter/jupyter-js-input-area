import {Model} from '../model';
import {InputModel} from '../input-model';
import {CodeMirrorCursorModel} from './cursor-model';

export class CodeMirrorInputModel extends InputModel {
    constructor(id, cm) {
        super(id);
        Model.registerModelType(CodeMirrorInputModel);
        
        this.cm = cm;
        this.declare('text', this.cm.getvalue, this.cm.setValue);
        this.declare('language', () => this.cm.getOption('mode'), x => this.cm.setOption('mode', x));
        this.declare('cursors', this.getCursors, this.setCursors);
        
        // TODO: Implement readonly cursors
        this.declare('readonlyCursors');
        
        this._cursors = [];
    }
    
    getCursors() {
        this._updateCursors();
        return this._cursors.slice(0, ranges.length);
    }
    
    setCursors(cursors) {
        let states = cursors.map(x => x.state);
        this._cursors = cursors.splice(0);
        this._updateCursors();
        
        for (let i = 0; i < this.cm.listSelections().length; i++) {
            this._cursors[i].state = states[i];
        }
        
        if (this.cm.listSelections().length < cursors.length) {
            for (let i = this.cm.listSelections().length; i < cursors.length; i++) {
                this.cm.addSelection(cursors[i].anchorPos, cursors[i].headPos);
            }
        }
        this._updateCursors();
    }
    
    _updateCursors() {
        let ranges = this.cm.listSelections();
        for (let i = 0; i < ranges.length; i++) {
            if (i >= this._cursors.length) {
                this._cursors.push(new CodeMirrorCursorModel(undefined, this.cm, ranges[i]));
            } else {
                this._cursors[i].cmRange = ranges[i];
            }
        }
    }
}
