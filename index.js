const fs = require("fs");
const inquirer = require("inquirer");
const clc = require('cli-color');
const generateMarkdown = require("./professionalMarkdownGen.js");
 const userColorInput = "";


const selectColor = () => {
  inquirer.prompt([
    {
      type: "list",
      name: "userColorInput",
      message: "What color would you like to run this programme in?:",
      choices: [
        clc.blue("Blue"),
        clc.red("Red"),
        clc.green("Green"),
        clc.magenta("Purple"),
        clc.xterm(167)("Orange"),
        clc.white("White"),
        clc.yellow("Yellow"),
        clc.cyan("cyan"),
      ]
    }
  ])
  return userColorInput
};



const userQuestions = [

  {
    type: "input",
    name: "name",
    message: `$(userColorInput).("Starting application! Write your full name:")`,
  },
  // {
  //   type: "input",
  //   name: "gitHub",
  //   message: userColorInput.("Write your GitHub username:"),
  // },
  // {
  //   type: "input",
  //   name: "title",
  //   message: userColorInput.("Write your projects title:"),
  // },
  // {
  //   type: "input",
  //   name: "description",
  //   message: userColorInput.("Decscribe what your project does:"),
  // },
  
  // {
  //   type: "input",
  //   name: "installation",
  //   message: userColorInput.("How do you install your project?"),
  // },
  // {
  //   type: "input",
  //   name: "usage",
  //   message: userColorInput.("What are the instructions for usage?:"),
  // },
  
  // {
  //   type: "input",
  //   name: "contributing",
  //   message: userColorInput.("How can other people contribute to your project?"),
  // },
  // {
  //   type: "confirm",
  //   name: "confirmLicenses",
  //   message: userColorInput.("Would you like to include a license for your project?:"),
  // },
  // {
  //   type: "list",
  //   name: "license",
  //   message: userColorInput.("Which license would you like to include for your project?:"),
  //   choices: [
  //     "MIT",
  //     "Mozilla",
  //     "Apache"
  //   ]
  // },
  // {
  //   type: "input",
  //   name: "projectIssues",
  //   message: userColorInput.("Where can someone email questions about the application?"),
  // },
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


// start the code
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