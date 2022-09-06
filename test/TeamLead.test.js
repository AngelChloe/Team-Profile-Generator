const Teamlead = require("../lib/Teamlead");

test("Can create an office number.", () => {
    const testOfficeNumber = 1;
    const employeeInstance = new Teamlead("Gracie", 1, "cindychynoweth@gmail.com@gmail.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("Testing officeNumber will return office number.", () => {
    const testOfficeNumber = 1;
    const employeeInstance = new Teamlead("Gracie", 1, "gracie@work", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing role.", () => {
    const returnValue = "Teamlead";
    const employeeInstance = new Teamlead("Gracie", 1, "gracie@work.com", 2);
    expect(employeeInstance.getRole()).toBe(returnValue);
});

