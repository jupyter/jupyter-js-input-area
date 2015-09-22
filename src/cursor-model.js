import {Model} from '/model';

export class CoordinateModel extends Model {
    constructor(id) {
        super(id);
        this.placeholder('x');
        this.placeholder('y');
    }
}

export class CursorModel extends Model {
    constructor(id, parent, creatorId) {
        super(id);
        this.placeholder('primaryPos');
        this.placeholder('secondaryPos');
        
        this.parent = parent;
        this.creatorId = creatorId || parent.id;
    }
    
    get local() {
        return this.parent && this.parent.id === this.creatorId;
    }
}
