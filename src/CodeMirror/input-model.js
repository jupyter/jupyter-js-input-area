import {Model} from '../model';
import {InputModel} from '../input-model';

export class CodeMirrorInputModel extends InputModel {
    constructor(id, cm) {
        super(id);
        Model.registerModelType(CodeMirrorInputModel);
        
        this.cm = cm;
        this.declare('text', this.cm.getvalue, this.cm.setValue);
        this.declare('language', () => this.cm.getOption('mode'), x => this.cm.setOption('mode', x));
        // this.placeholder('cursors');
    }
}
