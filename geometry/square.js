const { Rectangle } = require('./rectangle.js');

const rectangle = new Rectangle(5, 3);

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this.side = side;
  }
}

const square = new Square(4);

module.exports = { Square, square, rectangle };
