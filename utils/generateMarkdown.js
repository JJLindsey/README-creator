// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// const licenseSection = 
// function renderLicenseBadge(license) {
//   let licenseChoices = license.choices.response
//     if (licenseChoices === 0)
//       return 
//   if(!licenseChoices){
//     return '';
//   }
// }
// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if(!license){
//     return '';
//   }
// }
// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if(!license){
//     return '';
//   }
// }

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}

## Description
${data.description}

`;
}

module.exports = generateMarkdown;

