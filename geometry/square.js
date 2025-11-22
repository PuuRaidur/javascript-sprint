const rectModule = require('./rectangle.js');
const Rectangle = (rectModule && (rectModule.Rectangle || rectModule.default)) || rectModule;

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this.side = side;
  }
}

module.exports = { Square };
