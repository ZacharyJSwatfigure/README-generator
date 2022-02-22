const fs = require("fs");

// / TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else {
    return `[![${license} license](https://img.shields.io/badge/license-${license}-blue.svg)](${renderLicenseLink(license)})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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