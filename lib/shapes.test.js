// Import the Triangle, Circle, and Square classes
const { Triangle, Circle, Square } = require('./shapes');

// Test for the Triangle class
test('Triangle should render an SVG triangle with the given color', () => {
  const triangle = new Triangle();
  triangle.setColor('blue');
  expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

// Test for the Circle class
test('Circle should render an SVG circle with the given color', () => {
  const circle = new Circle();
  circle.setColor('red');
  expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
});

// Test for the Square class
test('Square should render an SVG square with the given color', () => {
  const square = new Square();
  square.setColor('green');
  expect(square.render()).toEqual('<rect x="85" y="35" width="130" height="130" fill="green" />');
});
