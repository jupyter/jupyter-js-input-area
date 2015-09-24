import {Model} from './model';

export class CoordinateModel extends Model {
    constructor(id, x, y) {
        super(id);
        this.declare('x');
        this.declare('y');
        this.x = x || 0;
        this.y = y || 0;
    }
}

export class CursorModel extends Model {
    constructor(id, headPos, anchorPos) {
        super(id);
        this.declare('owner');
        this.declare('headPos');
        this.declare('anchorPos');
        this.headPos = headPos;
        this.anchorPos = anchorPos;
    }
}
