# Logo_Generator

## Description

The application will generate a Scalable Vector Graphics file to generate simple logos for projects.
The Inquirer package is used to gather Logo text, up to three charcters long, the logo color, the shape, either circle, triangle, or square, and the shape color. Four classes are imported into the application Shape, Circle, Triangle, and Square. Shape is the parent class, and Circle, Triangle, and Square use inheritance to set the color of selected shape. The classes will return XML markup,with the paths and color to generate the given shape. The main application in index.js will pass the shape markup to the class to the class RenderShape, which will append XML for the logo text and logo color. The file system library is then used, to create and SVG file from the generated XML markup. Finally, Jest is used to Unit Test circle, triangle, and square to make sure the XML element with the path and color pass the render() method test.

## Installation

N/A

## Usage

From the command-line, the user is prompted for the logo text, up to three characters. Next, the user is prompted for the text color. From a list of shapes, the user either selects circle, triangle, or square. Finally, the user selects the shapes color. After the users input, an SVG file is created named logo.svg. When the logo.svg file is opened a 300x200 pixel image will be displayed in the web browser.

Screencastify link:
https://drive.google.com/file/d/1vWoZW0LDzv41iZp_WFGuwk8XHRP3lFaU/view

The link to the GitHub repository is:
https://github.com/rethomas67/Logo_Generator

## Credits

N/A

## License

N/A
