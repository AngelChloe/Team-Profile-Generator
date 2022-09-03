const Teamlead = require("./lib/Teamlead.js");
const Taskenforcer = require("./lib/Taskenforcer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeam = require("./src/template.js")

teamArray = [];



function runApp () {

  function createTeam () {
    inquirer.prompt([{
      type: "list",
      message: "What type of employee would you like to add to your team?",
      name: "addEmployeePrompt",
      choices: ["Teamlead", "Taskenforcer", "Intern", "No more team members are needed."]
    }]).then(function (userInput) {
      switch(userInput.addEmployeePrompt) {
        case "Teamlead":
          addTeamlead();
          break;
        case "Taskenforcer":
          addTaskenforcer();
          break;
        case "Intern":
          addIntern();
          break;

        default:
          htmlBuilder();
      }
    })
  }
// OOP Functions

function addTeamlead() {
  inquirer.prompt ([
    
    {
      type: "input",
      name: "teamleadName",
      message: "What is the Teamlead's name?"
    },

    {
      type: "input",
      name: "teamleadId",
      message: "What is the Teamlead's employee ID number?"
    },

    {
      type: "input",
      name: "teamleadEmail",
      message: "What is the Teamleads's email address?"
    },

    {
      type: "input",
      name: "teamleadOfficeNumber",
      message: "What is the Teamlead's office number?"
    }

  ]).then(answers => {
    const teamlead = new Teamlead(answers.teamleadName, answers.teamleadId, answers.teamleadEmail, answers.teamleadOfficeNumber);
    teamArray.push(teamlead);
    createTeam();
  });

}


function addTaskenforcer() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "taskenforcerName",
        message: "What is the Taskenforcer's name?"
      },

      {
        type: "input",
        name: "taskenforcerId",
        message: "What is the Taskenforcer's employee ID number?" 
      },

      {
        type: "input",
        name: "taskenforcerEmail",
        message: "What is the Taskenforcer's email address?"
      },

      {
        type: "input",
        name: "taskenforcerGithub",
        message: "What is the Taskenforcer's GitHub username?"
      }

    ]).then(answers => {
      const taskenforcer = new Taskenforcer(answers.taskenforcerName, answers.taskenforcerId, answers.taskenforcerEmail, answers.taskenforcerGithub);
      teamArray.push(taskenforcer);
      createTeam();
    });

  }

  function addIntern() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?"
      },

      {
        type: "input",
        name: "internId",
        message: "What is the intern's employee ID number?" 
      },

      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email address?"
      },

      {
        type: "input",
        name: "internSchool",
        message: "What school does the intern attend?"
      }

    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamArray.push(intern);
      createTeam();
    });

  }

  // return to menu with option to add another team member create team

  // Would you like to add a team member?
  // Yes || No
  // If Yes --> Then select an employee role for your new team member: Teamlead, Taskenforcer, Intern
  // If No --> Create Team


function htmlBuilder () {
    console.log("Team created!")

    fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")

}

createTeam();

}

runApp();