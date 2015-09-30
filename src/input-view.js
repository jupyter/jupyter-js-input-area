import {Model} from './model';
import {Signal} from 'phosphor-signaling';

var textInserted = new Signal();
var textRemoved = new Signal();

export class InputView extends Model {
    constructor(id) {
        super(id);    
        this.placeholder('text');
        this.placeholder('language');
        this.placeholder('cursors');
        this.placeholder('readonlyCursors');
    }
    
    /**
     * Signal fired when text is inserted
     * data = {index: number, text: string}
     */
    get textInserted() {
        return textInserted.bind(this);
    }
    
    /**
     * Signal fired when text is removed
     * data = {index: number, legnth: number}
     */
    get textRemoved() {
        return textRemoved.bind(this);
    }
}
