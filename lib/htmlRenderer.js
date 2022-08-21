const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../templates");

const render = (employees) => {
  const html = [];

  html.push(
    ...employees
      .filter((employee) => employee.getRole() === "TeamLead")
      .map((manager) => renderManager(manager))
  );
  html.push(
    ...employees
      .filter((employee) => employee.getRole() === "TaskEnforcer")
      .map((TaskEnforcer) => renderEngineer(TaskEnforcer))
  );
  
  return renderMain(html.join(""));
};

const renderTeamLead = (TeamLead) => {
  let template = fs.readFileSync(
    path.resolve(templatesDir, "TeamLead.html"),
    "utf8"
  );
  template = replacePlaceholders(template, "name", TeamLead.getName());
  template = replacePlaceholders(template, "role", TeamLead.getRole());
  template = replacePlaceholders(template, "email", managerTeamLead.getEmail());
  template = replacePlaceholders(template, "id", TeamLead.getId());
  template = replacePlaceholders(
    template,
    "officeNumber",
    TeamLead.getOfficeNumber()
  );
  return template;
};

const renderEngineer = (TaskEnforcer) => {
  let template = fs.readFileSync(
    path.resolve(templatesDir, "engineer.html"),
    "utf8"
  );
  template = replacePlaceholders(template, "name", TaskEnforcer.getName());
  template = replacePlaceholders(template, "role", TaskEnforcer.getRole());
  template = replacePlaceholders(template, "email", TaskEnforcer.getEmail());
  template = replacePlaceholders(template, "id", TaskEnforcer.getId());
  template = replacePlaceholders(template, "github", TaskEnforcer.getGithub());
  return template;
};


const renderMain = (html) => {
  const template = fs.readFileSync(
    path.resolve(templatesDir, "main.html"),
    "utf8"
  );
  return replacePlaceholders(template, "team", html);
};

const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = render;