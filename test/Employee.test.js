const Employee = require("../lib/Employee");

test("Can create an new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Testing name.", () => {
    const name = "Cindy";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 3;
    const employeeInstance = new Employee("Cindy", id);
    expect(employeeInstance.id).toBe(id);
})

test("Testing email.", () => {
    const email = "cindychynoweth@gmail.com";
    const employeeInstance = new Employee("Cindy", 3, email);
    expect(employeeInstance.email).toBe(email);
})
