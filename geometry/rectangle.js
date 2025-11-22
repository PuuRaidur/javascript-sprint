class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}

const rectangle = new Rectangle(5, 3);

// export the class as the module value (default) and also attach named exports
module.exports = Rectangle;
module.exports.Rectangle = Rectangle;
module.exports.rectangle = rectangle;
