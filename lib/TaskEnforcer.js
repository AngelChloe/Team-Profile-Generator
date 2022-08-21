// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class TaskEnforcer extends Employee {
  constructor(name, id, email, github) {
    // super() is called to avoid duplicating the constructor parts' that are common between Employee and TaskEnforcer
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "TaskEnforcer";
  }
}

module.exports = TaskEnforcer;