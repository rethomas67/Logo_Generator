// Add the File System Package to create ad README.md file
// Add the Inquirer Package to prompt the user for a Professional ReadMe at the console
// Add my library to create create the shape objects
const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shapes");

//generates the XML markup for the shape and logo text to generate the svg file
class RenderShape {
  render(shapeElement, textInput, textColor) {
    let textElement = `<text x="150" y="125" font-size="40" text-anchor="middle" fill="${textColor}">${textInput}</text>`;
    let svgElements = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
                            ${shapeElement}
                            ${textElement}
                        </svg>`;

    return svgElements;
  }
}

// All of the inquirer prompts use the message attribute to ask the question and use the name attribute to store the result in a variable
// Majority of the prompts are of the type input, where the user types in the information
// The input for GitHub and email will be appended to the Questions Section
// The type list will allow the user to select from a list the license they would like to use for their application
// Inquirer will prompt the array of questions through a promise
const questions = [
  {
    type: "input",
    name: "logoText",
    message: "Please enter up to three characters for the logo text:",
  },
  {
    type: "input",
    name: "textColor",
    message:
      "Please enter the text color with a color keyword (or a hexadecimal number): ",
  },
  {
    type: "list",
    name: "shape",
    message: "Please select a shape from the list: ",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message:
      "Please enter the background color for the shape with a color keyword (or a hexadecimal number): ",
  },
];

// TODO: Create a function to write the SVG file
function writeToFile(fileName, data) {
  //create the file with a callback function if an error occurs
  fs.writeFile(fileName, data, function (err) {
    if (err) throw err;
    // show we are done with the program
    console.log(`Generated ${fileName}!`);
  });
}

// Initialize the program with the questions array
//  use the Inquirer Promise to send the file name and entered data to the writeToFile method
function init(questions) {
  inquirer.prompt(questions).then((data) => {
    let logoText = data.logoText;
    if (logoText.length == 0 || logoText.length > 3) {
      console.log("Logo text must be between 1 and 3 characters");
      return;
    }
    let textColor = data.textColor;

    let shapeSelection = data.shape;
    let oShape;
    if (shapeSelection == "Circle") {
      oShape = new Circle();
    } else if (shapeSelection == "Triangle") {
      oShape = new Triangle();
    } else if (shapeSelection == "Square") {
      oShape = new Square();
    }
    let shapeColor = data.shapeColor.toLowerCase();
    oShape.setColor(data.shapeColor);
    let shapeElement = oShape.render();
    let renderShape = new RenderShape();
    let renderElements = renderShape.render(shapeElement, logoText, textColor);
    writeToFile("logo.svg", renderElements);
  });
}

// Function call to initialize app
init(questions);
