// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')

const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const userInput = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project title? (Required)',
            validate: projectInput => {
                if (projectInput){
                    return true;
                } else {
                    console.log('Please enter your project title.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a descritption of your project (Required)',
            validate: descripInput => {
                if (descripInput){
                    return true;
                } else {
                    console.log('Please provide a description of your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Enter any installation instructions.',
            default: true
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information.',
            default: true
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter contribution guidelines.',
            default: true
        },
        {   type: 'input',
            name: 'tests',
            message: 'Enter testing information.',
            default: true
        },
        //license
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
                if (githubInput){
                    return true;
                } else {
                    console.log('Please enter your GitHub username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address',
        }
    ]);
};

// TODO: Create a function to write README file
const writeFile = () => {
    
}

// TODO: Create a function to initialize app
function init() {

    userInput().then((response) => {
        console.log(response)

        const gnereatedString  = generateMarkdown(response);

        console.log(gnereatedString)

        fs.writeFileSync('README.md', gnereatedString)



    })

}

// Function call to initialize app
init();