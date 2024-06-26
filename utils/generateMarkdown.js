// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license==="APACHE 2.0") {
  return `![Static Badge](https://img.shields.io/badge/license-apache2.0-brightgreen)
  `  
  }
  else if (license==="MIT") {
    return `![Static Badge](https://img.shields.io/badge/license-mit-brightgreen)
    `
  }
  else if (license==="None") {
    return ``
  }
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license==="APACHE 2.0") {
  return `[${license}](http://www.apache.org/licenses/)`  
  }
  else if (license==="MIT") {
    return `[${license}](https://choosealicense.com/licenses/mit/)`
  }
  else if (license==="None") {
    return ``
  }
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license==="APACHE 2.0") {
  return `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`  
  }
  else if (license==="MIT") {
    return `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  }
  else if (license==="None") {
    return ``
  }
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
## Installation

${data.installation}

## Usage

${data.usage}

  ## License

  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Contributing
  
  ${data.contribution}

  ## Tests
  
  ${data.test}

  ## Questions

  If you have any questions about the repo, open an issue or contact ${data.github} directly at ${data.email}.
  
`;
}

module.exports = generateMarkdown;
