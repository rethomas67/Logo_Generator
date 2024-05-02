//parent class with a constructor and the setColor class to be inherited by Circle, Triangle, or Square
class Shape {
  constructor() {
    this.fillColor = "";
  }
  setColor(fillColor) {
    this.fillColor = fillColor;
  }
}

//Generates the XML markup for the circle path and inherits setColor and the variable fillColor
class Circle extends Shape {
  render() {
    let circleElement = `<circle xmlns="http://www.w3.org/2000/svg" cx="150" cy="100" r="80" fill="${this.fillColor}"/>`;

    return circleElement;
  }
}
//Generates the XML markup for the triangle path and inherits setColor and the variable fillColor
class Triangle extends Shape {
  render() {
    let triangleElement = `<polygon points="150, 18 244, 182 56, 182" fill="${this.fillColor}" />`;

    return triangleElement;
  }
}
//Generates the XML markup for the square path and inherits setColor and the variable fillColor
class Square extends Shape {
  render() {
    let squareElement = `<rect xmlns="http://www.w3.org/2000/svg" width="175" height="175" x="60" y="15" fill="${this.fillColor}"/>`;

    return squareElement;
  }
}

module.exports = { Circle, Triangle, Square };
