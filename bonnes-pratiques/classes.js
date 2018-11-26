// Class definition
class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  translate(x, y) {
    this.x += x;
    this.y += y;
  }
}
const shape = new Shape(10, 20);
shape;
shape.translate(10, 20);
shape;

// Inheritance
class Rectangle extends Shape {
  constructor(x, y, width, height) {
    super(x, y);
    this.width = width;
    this.height = height;
  }
}
new Rectangle(10, 20, 50, 100);

// Static members
class Helpers {
  static foo() {
    return 'bar';
  }
}
Helpers.foo();

// Getter/setter
class Circle extends Shape {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }

  get perimeter() {
    return 2 * Math.PI * this.radius;
  }
}
new Circle(0, 0, 3.5).perimeter;
