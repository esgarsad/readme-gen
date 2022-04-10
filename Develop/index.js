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
      message: 'What is the purpose of this app? (Required)',
      validate: whyInput => {
          if (whyInput) {
              return true;
          } else {
              console.log('Please enter the purpose of the app!');
              return false;
          }
      }
  },
  {
      type: 'input',
      name: 'how',
      message: 'How is the app used? (Required)',
      validate: howInput => {
          if (howInput) {
              return true;
          } else {
              console.log('Please enter what how to use the app!');
              return false;
          }
      }
  },
  {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions for your app. (Required)',
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
      message: 'Please provide usage terms/examples. (Required)',
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
  .then(retrievedData => {
      return retrievedData;
  })
}

// Function call to initialize app
init()
.then(retrievedData => {
  console.log(retrievedData);
  return generateMarkdown(retrievedData);
})
.then(infoGiven => {
  return writeFile(infoGiven);
})
.then(writeFileResponse => {
  console.log(writeFileResponse.message);
})
.catch(err => {
  console.log(err);
})


