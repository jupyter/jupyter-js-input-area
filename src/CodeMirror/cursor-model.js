import {Model} from '../model';
import {CursorModel} from '../cursor-model';

export class CodeMirrorCursorModel extends CursorModel {
    constructor(id) {
        super(id);
        Model.registerModelType(CodeMirrorCursorModel);
        
        // this.placeholder('primaryPos');
        // this.placeholder('secondaryPos');
    }
}
