import {Pos} from 'CodeMirror';

import {Model} from '../model';
import {CursorModel, CoordinateModel} from '../cursor-model';

/**
 * CodeMirror coordinate model
 * Maps onto a CodeMirror Pos
 */
export class CodeMirrorCoordinateModel extends CursorModel {
    constructor(id, cmPos) {
        super(id);
        Model.registerModelType(CodeMirrorCoordinateModel);
        
        this.declare('x', () => this.cmPos.ch, x => { this.cmPos.ch = x; });
        this.declare('y', () => this.cmPos.line, y => { this.cmPos.line = y; });
        this.cmPos = cmPos;
    }
    
    get cmPos() {
        if (!this._cmPos) this._cmPos = new Pos(0, 0);
        return this._cmPos;
    }
    
    set cmPos(value) {
        this.watch(this.keys, () => {
            this._cmPos = value;            
        });
    }
}

/**
 * CodeMirror cursor model
 * Maps onto a CodeMirror Range
 *
 * This class is made complicated by the fact that CodeMirror doesn't expose
 * its Range class directly!
 */
export class CodeMirrorCursorModel extends CursorModel {
    constructor(id, cmRange) {
        super(id);
        Model.registerModelType(CodeMirrorCursorModel);
        
        this.declare('headPos', () => {
            if (!this._headPos) this._headPos = new CodeMirrorCoordinateModel();
            return this._headPos;
        }, x => {
            this._headPos = x;
            this.cmRange.head = x.cmPos;
        });
        
        this.declare('anchorPos', () => {
            if (!this._anchorPos) this._anchorPos = new CodeMirrorCoordinateModel();
            return this._anchorPos;
        }, x => {
            this._anchorPos = x;
            this.cmRange.anchor = x.cmPos;
        });
        
        this.cmRange = cmRange;
    }
    
    get cmRange() {
        if (!this._cmRange) {
            this._cmRange = {
                anchor: this.anchorPos.cmPos, 
                head: this.headPos.cmPos
            };
        }
        return this._cmRange;
    }
    
    set cmRange(value) {
        if (value) {
            this.watch(this.keys, () => {
                this.anchorPos.cmPos = value.anchor;
                this.headPos.cmPos = value.head;
                this._cmRange = value;
            });
        }
    }
}
