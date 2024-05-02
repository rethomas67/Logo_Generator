const { Circle, Triangle, Square } = require("./shapes");

// A testing suite for SVG shapes is created.
describe("Circle", () => {
  // A test is created to check that a string is returned for the render function.
  describe("render", () => {
    it("should return a string with the color in the element", () => {
      const shape = new Circle();
      shape.setColor("red");
      expect(shape.render()).toEqual(
        '<circle xmlns="http://www.w3.org/2000/svg" cx="150" cy="100" r="80" fill="red"/>'
      );
    });
  });
});

describe("Triangle", () => {
  // A test is created to check that a string is returned for the render function.
  describe("render", () => {
    it("should return a string with the color in the element", () => {
      const shape = new Triangle();
      shape.setColor("green");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="green" />'
      );
    });
  });
});

describe("Square", () => {
  // A test is created to check that a string is returned for the render function.
  describe("render", () => {
    it("should return a string with the color in the element", () => {
      const shape = new Square();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<rect xmlns="http://www.w3.org/2000/svg" width="175" height="175" x="60" y="15" fill="blue"/>'
      );
    });
  });
});
