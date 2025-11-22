const { Rectangle } = require('./rectangle');

// Per the instructions, a new instance of Rectangle is required in this file.
const rectangle = new Rectangle(5, 3);

/**
 * Represents a square, which is a specialized Rectangle.
 */
class Square extends Rectangle {
  /**
   * @param {number} side The length of one side of the square.
   */
  constructor(side) {
    // Call the parent Rectangle constructor with equal width and height.
    super(side, side);
    // Add the 'side' property specific to the Square.
    this.side = side;
  }
}

// Per the instructions, create an instance of the Square class.
const square = new Square(4);

// Export all required variables and classes as specified.
module.exports = {
  Square,
  square,
  rectangle,
};