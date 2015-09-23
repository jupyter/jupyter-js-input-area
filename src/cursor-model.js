import {Model} from './model';

export class CoordinateModel extends Model {
    constructor(id) {
        super(id);
        this.declare('x');
        this.declare('y');
    }
}

export class CursorModel extends Model {
    constructor(id) {
        super(id);
        this.declare('owner');
        this.placeholder('headPos');
        this.placeholder('anchorPos');
    }
}
