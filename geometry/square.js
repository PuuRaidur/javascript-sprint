const rectModule = require('./rectangle.js');
const Rectangle = (rectModule && (rectModule.Rectangle || rectModule.default)) || rectModule;

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this.side = side;
  }
}

const square = new Square(4);

// export the class as the module value (default) and also attach named exports
module.exports = Square;
module.exports.Square = Square;
module.exports.square = square;
