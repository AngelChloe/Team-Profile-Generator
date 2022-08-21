const TeamLead = require("../lib/TeamLead");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new TeamLead("Emily", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "TeamLead"', () => {
  const testValue = "TeamLead";
  const e = new Manager("Emily", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new TeamLead("Emily", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
