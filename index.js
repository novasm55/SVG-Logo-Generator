// Import required modules

const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Prompt the user for input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo text:',
      validate: input => input.length <= 3
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hexadecimal number):'
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Triangle', 'Circle', 'Square']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hexadecimal number):'
    }
  ])
 
  .then(answers => {
    let shape;

    switch (answers.shape) {
      case 'Triangle':
        shape = new Triangle();
        break;
      case 'Circle':
        shape = new Circle();
        break;
      case 'Square':
        shape = new Square();
        break;
    }
// Set the shape's color
    shape.setColor(answers.shapeColor);

// Generate the SVG content using the user input
    const svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200">
        ${shape.render()}
        <text x="50%" y="50%" text-anchor="middle" fill="${answers.textColor}" font-family="sans-serif" font-size="50">${answers.text}</text>
      </svg>
    `;

    fs.writeFile('examples/logo.svg', svgContent, err => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('Generated logo.svg');
      }
    });
  });