const Engineer = require("../lib/Taskenforcer");

test("Can create a github.", () => {
    const testGithub = "Cinderbeast";
    const employeeInstance = new Engineer("Cindy", 3, "cindychynoweth@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "Cinderbeast";
    const employeeInstance = new Taskenforcer("Cindy", 3, "cindychynoweth@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Taskenforcer";
    const employeeInstance = new Taskenforcer("Cindy", 3, "cindychynoweth@gmail.com", "Cinderbeast");
    expect(employeeInstance.getRole()).toBe(returnValue);
});
