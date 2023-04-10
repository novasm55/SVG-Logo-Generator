// Base class for shapes
class Shape {
  constructor() {
    // Initialize the color property
    this.color = '';
  }

  // Method to set the color of the shape
  setColor(color) {
    this.color = color;
  }
}

// Triangle class that extends Shape
class Triangle extends Shape {
  // Method to render the SVG string for a triangle with the given color
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

// Circle class that extends Shape
class Circle extends Shape {
  // Method to render the SVG string for a circle with the given color
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

// Square class that extends Shape
class Square extends Shape {
  // Method to render the SVG string for a square with the given color
  render() {
    return `<rect x="85" y="35" width="130" height="130" fill="${this.color}" />`;
  }
}

// Export the Triangle, Circle, and Square classes
module.exports = { Triangle, Circle, Square };
