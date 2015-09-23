import {Model} from '../model';
import {CursorModel, CoordinateModel} from '../cursor-model';
import {Pos} from 'codemirror';

export class CodeMirrorCursorModel extends CursorModel {
    constructor(id, cm, cmRange) {
        super(id);
        Model.registerModelType(CodeMirrorCursorModel);
        
        this.cm = cm;
        this.cmRange = cmRange;
        
        this.declare('owner');
        // this.placeholder('headPos');
        // this.placeholder('anchorPos');
    }
}
