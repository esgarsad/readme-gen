

// Function that returns the license link
// If there is no license, return an empty string
function licenseLink(license) {
  if (license !== 'no license') {
  return `
  [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return ' ';
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function licenseType(license) {
  if (license !== 'no license') {
  return `
  ## [License](#table-of-contents)
  The application is covered under the following license:
  ${licenseLink(license)}
    `;
  } else {
    return ' ';
  }
 }

 // Function that returns license in table of contents
 // If there is no license, return an empty string

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectName}
  
  ## Table-of-Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## [Description]
  ${data.what}
  ${data.why}
  ${data.how}
  ## [Installation]
  ${data.installation}
  ## [Usage]
  ${data.usage}
  
    
  ${licenseType(data.license)}
 
  ## [Tests]
  ${data.test}
  ## [Questions]
  Please contact me using the links below:
  [GitHub](https://github.com/${data.githubUsername})
  [Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;