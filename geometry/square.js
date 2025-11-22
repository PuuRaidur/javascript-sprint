import { Rectangle } from './rectangle.js';

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
        this.side = side;
    }
}

const rectangle = new Rectangle(5, 3);
const square = new Square(4);

export { Square, square, rectangle };