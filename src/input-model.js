import {Model} from './model';
import {Signal} from 'phosphor-signaling';

var textInserted = new Signal();
var textRemoved = new Signal();

class InputModel extends Model {
    constructor(id) {
        super(id);    
        this.placeholder('text');
        this.placeholder('language');
        this.placeholder('cursors');
        this.placeholder('readonlyCursors');
    }
    
    get textInserted() {
        return textInserted.bind(this);
    }
    
    get textRemoved() {
        return textRemoved.bind(this);
    }
}
