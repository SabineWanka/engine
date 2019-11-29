const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const fs = require("fs");
const inquire = require("inquire");
const e = require("e");


const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of your manager?"
    },

    {
      type: "input",
      name: "id",
      message: "What is your managers ID?"
    },

    {
      type: "input",
      name: "email",
      message: "What is your managers email-adresse?"
    },
    {
      type: "input",
      name: "officenumer",
      message: "What is your managers officenumber?"
    },
    {
      type: "input",
      name: "name",
      message: "What is the name of your team member?"
    },
    {
      type: "input",
      name: "role",
      message: "What is the role of the team member"
    },

    {
      type: "input",
      name: "id",
      message: "What is the id of the team member"
    },
    {
      type: "input",
      name: "email",
      message: "What is the email adresse of the team member?"
    },

    {
      type: "input",
      name: "github",
      message: "What is the engineers Github username?"
    },

    {
      type: "input",
      name: "school",
      message: "What is the name of the interns school?"
    },

  ]);
}



getHtmls();


