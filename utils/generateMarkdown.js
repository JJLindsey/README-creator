//TODO: Create a function that returns a license badge based on which license is passed in
//If there is no license, return an empty string
const licenseSection = 
function renderLicenseBadge(license) {
  `https://img.shields.io/badge/mybadge-license-blue`
    if (licenseChoices === 0)
      return 
  if(!licenseChoices){
    return '';
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return '';
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return '';
  }
}

//TODO: Create a function to generate markdown for README

const generateMarkdown = (data) => {
  return `# ${data.title}

## Description
${data.description}

### Table of Contents
[Installation](#installation)
[Usage](#usage)
[Contributions](#contributions)
[Testing](#testing)
[Licenses](#licenses)
[Questions](#questions)

### Installation
${data.install}

### Usage
${data.usage}

### Contributions
${data.contribution}

### Testing
${data.tests}

### Licenses
${data.license}

### Questions
If you have any questions, reach out to me on Git Hub ${data.github}, or send me a message ${data.email}.

`;
}

module.exports = generateMarkdown;

