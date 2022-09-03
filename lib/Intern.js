const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    // super() is called to avoid duplicating the constructor parts' that are common between Employee and Intern
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}
module.exports = Intern;