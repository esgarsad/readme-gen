// TODO: Include packages needed for this application
const inquirer = require('inquirer');
//const generateMarkdown =  require('/utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
 const questions = () => {
     return inquirer
       .prompt([
         {
           type: 'input',
           name: 'projectname',
           message: 'What is the name of your project? (Required)',
           validate: nameInput => {
             if (nameInput) {
               return true;
             } else {
               console.log('Please enter your project name!');
               return false;
             }
           }
         },
         {
           type: 'input',
           name: 'projectdesc',
           message: 'Enter your project description (Required)',
           validate: projectInput => {
             if (projectInput) {
               return true;
             } else {
               console.log('Please enter your project description!');
               return false;
             }
           }
        },
        // {
        //   type: 'confirm',
        //   name: 'confirmAbout',
        //   message: 'Would you like to enter some information about yourself for an "About" section?',
        //   default: true
        // },
        // {
        //   type: 'input',
        //   name: 'about',
        //   message: 'Provide some information about yourself:',
        //   when: ({ confirmAbout }) => {
        //     if (confirmAbout) {
        //       return true;
        //     } else {
        //       return false;
        //     }
        //   }    }
       ]);
     };
    
// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
nameInput = questions.projectname;
projectInput= questions.projectdesc;

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
questions()
then(nameInput,projectInput)
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
//generateMarkdown(nameInput,projectInput)


