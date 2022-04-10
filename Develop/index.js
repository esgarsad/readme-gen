// Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown =  require('./utils/generateMarkdown.js');
const fs = require('fs');

// array of questions for user input
const questions = [
  {
      type: 'input',
      name: 'projectName',
      message: 'What is the name of your project? (Required)',
      validate: titleInput => {
          if (titleInput) {
              return true;
          } else {
              console.log('Please enter your project name!');
              return false;
          }
      }
  },
  {
      type: 'input',
      name: 'githubUsername',
      message: 'What is your GitHub Username? (Required)',
      validate: githubInput => {
          if (githubInput) {
              return true;
          } else {
              console.log('Please enter your GitHub username!');
              return false;
          }
      }
  },
  {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
  },
  {
      type: 'input',
      name: 'what',
      message: 'What is your project about?, please enter a description (Required)',
      validate: whatInput => {
          if (whatInput) {
              return true;
          } else {
              console.log('Please enter what your project is about!');
              return false;
          }
      }
  },
  {
      type: 'input',
      name: 'why',
      message: 'Why did you create this project? (Required)',
      validate: whyInput => {
          if (whyInput) {
              return true;
          } else {
              console.log('Please enter why you created this project!');
              return false;
          }
      }
  },
  {
      type: 'input',
      name: 'how',
      message: 'How will someone use this? (Required)',
      validate: howInput => {
          if (howInput) {
              return true;
          } else {
              console.log('Please enter what your project is!');
              return false;
          }
      }
  },
  {
      type: 'input',
      name: 'installation',
      message: 'Please provide step-by-step installation instructions for your project. (Required)',
      validate: installInput => {
          if (installInput) {
              return true;
          } else {
              console.log('Please enter your installation instructions!');
              return false;
          }
      }
  },
  {
      type: 'input',
      name: 'usage',
      message: 'Please provide instructions and examples for use. (Required)',
      validate: usageInput => {
          if (usageInput) {
              return true;
          } else {
              console.log('Please enter your use instructions!');
              return false;
          }
      }
  },
  {
      type: 'list',
      name: 'license',
      message: 'Which license will you use for your project?',
      choices: ['agpl', 'apache', 'mit', 'no license']
  },
  {
      type: 'input',
      name: 'test',
      message: 'Please provide instructions on how to test the app.',
  }
];

// function to write README file
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
      fs.writeFile('./dist/README.md', fileContent, err => {
          if (err) {
              reject(err);
              return;
          }

          resolve({
              ok: true,
              message: 'File created!'
          });
      });
  });
};

// function to prompt questions and store user inputs
const init = () => {

  return inquirer.prompt(questions)
  .then(readmeData => {
      return readmeData;
  })
}

// Function call to initialize app
init()
.then(readmeData => {
  console.log(readmeData);
  return generateMarkdown(readmeData);
})
.then(pageMD => {
  return writeFile(pageMD);
})
.then(writeFileResponse => {
  console.log(writeFileResponse.message);
})
.catch(err => {
  console.log(err);
})


