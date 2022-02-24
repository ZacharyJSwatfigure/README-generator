const fs = require("fs");
  
  
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else {
    return `[![${license} license](https://img.shields.io/badge/license-${license}-blue.svg)](${renderLicenseLink(license)})`
  }
}


function renderLicenseLink(license) {
    switch (license) {
      case "MIT":
        console.log("You've selected MIT.")
        return "https://lbesson.mit-license.org/";
      case 'Mozilla':
        console.log("You've selected Mozilla.")
        return "https://www.mozilla.org/en-US/MPL/2.0/";
      case 'Apache':
        console.log("You've selected Apache")
        return "https://www.apache.org/licenses/LICENSE-2.0.txt";
      default:
        break;
  }
}
function renderLicenseSection(license) {
  if (!license) {
    return "";
  } else {
    return `## License
    This project is covered by the ${license} license. 
    Click the license button at the top of this file to learn more.`
  }
}
function generatedMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Questions](#questions)
  - [Credits](#credits)
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ${renderLicenseSection(data.license)}
  ## Questions
  Questions about this project? <br/>
  GitHub: https://github.com/${data.gitHub} <br/>
  Email: ${data.email} 
  ## Credits
  ${data.name}`;
}
module.exports = generatedMarkdown;