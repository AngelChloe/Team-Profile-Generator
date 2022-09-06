const Intern = require("../lib/Intern");

test("Can create school.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("Emily", 5, "emilya@work.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("Emily", 5, "emily@work.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Emily", 5, "emily@work.com", "University of Hawx");
    expect(employeeInstance.getRole()).toBe(returnValue);
});
