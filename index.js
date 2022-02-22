const fs = require("fs"); //fs
const inquirer = require("inquirer"); //npm i inquirer

// TODO: Create an array of questions for user input
const userQuestions = [
  {
    type: "input",
    name: "name",
    message: "Starting application! Write your full name:",
  },
  
  {
    type: "input",
    name: "gitHub",
    message: "Write your GitHub username:",
  },

  {
    type: "input",
    name: "title",
    message: "Write your projects title:",
  },

  {
    type: "input",
    name: "description",
    message: "Decscribe what your project does:",
  },
    
  {
    type: "input",
    name: "installation",
    message: "How do you install your project?",
  },

  {
    type: "input",
    name: "usage",
    message: "What are the instructions for usage?:",
  },
  
  {
    type: "input",
    name: "contributing",
    message: "How can other people contribute to your project?",
  },

  {
    type: "confirm",
    name: "confirmLicenses",
    message: "Would you like to include a license for your project?:",
    default: false
  },

  {
    type: "list",
    name: "license",
    message: "Which license would you like to include for your project?:",
    choices: [
      "MIT",
      "Mozilla",
      "Apache"
    ]
  },

  {
    type: "input",
    name: "projectIssues",
    message: "Where can people email questions about your project?",
  },
];

// TODO: Create a function to write README file


// TODO: Create a function to initialize app


// Function call to initialize app
