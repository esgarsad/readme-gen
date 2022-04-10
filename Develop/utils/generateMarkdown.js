// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }
const generateReadme = (nameInput, projectInput) => {
  return `
    Name: ${nameInput}
    Project: ${projectInput}
  `;
};
fs.writeFile('./utils/Readme.md', generateReadme(nameInput, projectInput), err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out ./utils/Readme.md to see the output!');
});

module.exports = generateMarkdown;
