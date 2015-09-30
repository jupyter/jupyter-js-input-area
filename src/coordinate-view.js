import {Model} from './model';

export class CoordinateView extends Model {
    constructor(id, x, y) {
        super(id);
        this.declare('x');
        this.declare('y');
        this.x = x || 0;
        this.y = y || 0;
    }
}
