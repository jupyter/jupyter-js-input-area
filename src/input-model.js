import {Model} from './model';

class InputModel extends Model {
    constructor(id) {
        super(id);    
        this.placeholder('text');
        this.placeholder('language');
        this.placeholder('cursors');
    }
}
