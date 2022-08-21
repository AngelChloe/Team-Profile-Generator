const TeamLead = require("../lib/TeamLead");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new TeamLead("Foo", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test('getRole() should return "TeamLead"', () => {
  const testValue = "EnTeamLead";
  const e = new TeamLead("Foo", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new TeamLead("Foo", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});

// const TaskEnforcer = require("../lib/TaskEnforcer");

// test("Can create a github.", () => {
//     const testGithub = "Sami";
//     const employeeInstance = new TaskEnforcer("Sami", 2, "sami@work.com", testGithub);
//     expect(employeeInstance.github).toBe(testGithub);
// });

// test("Testing getGithub will return github.", () => {
//     const testGithub = "Cindy";
//     const employeeInstance = new TaskEnforcer("Cindy", 3, "cindychynoweth@gmail.com", testGithub);
//     expect(employeeInstance.getGithub()).toBe(testGithub);
// });

// test("Testing role.", () => {
//     const returnValue = "TaskEnforcer";
//     const employeeInstance = new TaskEnforcer("Rosie", 4, "rosie@work.com", testGithub);
//     expect(employeeInstance.getRole()).toBe(returnValue);
// });
// test("Can create a github.", () => {
//     const testGithub = "Emily";
//     const employeeInstance = new TaskEnforcer("Emily", 5, "emily@work.com", testGithub);
//     expect(employeeInstance.github).toBe(testGithub);
// });
// test("Can create a github.", () => {
//     const testGithub = "Kaylee";
//     const employeeInstance = new TaskEnforcer("Kaylee", 6, "kaylee@work.com", testGithub);
//     expect(employeeInstance.github).toBe(testGithub);
// });
// test("Can create a github.", () => {
//     const testGithub = "Amy";
//     const employeeInstance = new TaskEnforcer("Amy", 7, "amy@work.com", testGithub);
//     expect(employeeInstance.github).toBe(testGithub);
// });