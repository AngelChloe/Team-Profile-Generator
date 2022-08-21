// TODO: Write code to define and export the TeamLeadnoder class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class TeamLead extends Employee {
  constructor(name, id, email, officeNumber) {
    // super() is called to avoid duplicating the constructor parts' that are common between Employee and TeamLead
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "TeamLead";
  }
}

module.exports = TeamLead;