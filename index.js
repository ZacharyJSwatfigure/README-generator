const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./professionalMarkdownGen.js");
const userQuestions = [
  {
    type: "input",
    name: "name",
    message: "Starting application! Write your full name:",
  },
  {
    type: "input",
    name: "gitHub",
    message: "Include your GitHub username:",
  },
  {
    type: "input",
    name: "title",
    message: "Project title:",
  },
  {
    type: "input",
    name: "description",
    message: "Decscribe what your project does:",
  },
  {
    type: "input",
    name: "installation",
    message: "Steps to install your project:",
  },
  {
    type: "confirm",
    name: "confirmLicenses",
    message: "License your project?:",
    default: false
  },
  {
    type: "list",
    name: "license",
    message: "Which kind of license would you like to include for your project?:",
    choices: [
      "MIT",
      "Mozilla",
      "Apache"
    ]
  },
  {
    type: "input",
    name: "projectIssues",
    message: "Where do you want poeple to email questions about the application?",
  },
];
const writeToFile = data => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./README.md", data, err => {
      if (err) {
        reject (err);
        return;
      }
      resolve({
        ok: true,
        message: console.log("Navigate to the utils folder to see your generated README!")
      });
    })
  })
}
const init = () => {
  return inquirer.prompt(userQuestions);
}
init ()
.then(userInput => {
  return generateMarkdown(userInput);
})
.then(readmeInfo => {
  return writeToFile(readmeInfo);
})
.catch (err => {
  console.log(err);
})