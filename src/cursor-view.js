import {Model} from './model';

export class CursorView extends Model {
    constructor(id, headPos, anchorPos) {
        super(id);
        this.declare('owner');
        this.declare('headPos');
        this.declare('anchorPos');
        this.headPos = headPos;
        this.anchorPos = anchorPos;
    }
}
