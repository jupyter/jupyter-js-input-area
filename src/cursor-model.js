import {Model} from './model';

export class CoordinateModel extends Model {
    constructor(id) {
        super(id);
        this.placeholder('x');
        this.placeholder('y');
    }
}

export class CursorModel extends Model {
    constructor(id) {
        super(id);
        this.placeholder('owner');
        this.placeholder('headPos');
        this.placeholder('anchorPos');
    }
}
