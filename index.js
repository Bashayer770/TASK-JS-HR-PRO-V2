const employeesJSON = require("./employees.json");
const managersJSON = require("./managers.json");

// Code Here

class Employees {
  constructor(name, position, yearJoined, salary) {
    this.name = name;
    this.position = position;
    this.yearJoined = yearJoined;
    this.salary = salary;
  }

  idBadge() {
    console.log(` <${this.name}>, < ${this.position}>`);
  }
}

class Manager extends Employees {
  constructor(bonusPercentage, name, position, yearJoined, salary) {
    super(name, position, yearJoined, salary);
    this.bonusPercentage = bonusPercentage;
  }

  salaryIncrease(salaryIncrease) {
    this.salary + salaryIncrease;
  }

  getWorkingYears(yearJoined) {
    let workigYears = 2023 - yearJoined;
    return workigYears;
  }

  logManagerInfo(workigYears) {
    const log = managersJSON.forEach(
      console.log(
        `${this.name} since ${workigYears} , bonus ${this.bonusPercentage} `
      )
    );
  }
}

const employe = new Employees("hsjs", "modeer", 2019, 5000);
const manager = new Manager(500, "bashayer", "modeer", 2019, 5000);
console.log(employee, manager);

const employees = employeesJSON.map(
  (employe) =>
    new Employees(
      employe.name,
      employe.position,
      employe.salary,
      employe.yearJoined
    )
);
return employees;
const managers = managersJSON.map(
  (manager) =>
    new Manager(
      manager.name,
      manager.position,
      manager.salary,
      manager.yearJoined
    )
);
return managers;

employeesJSON.forEach((em) => console.log(em.idBadge()));

const superhero = employeesJSON.filter((x) => x.position == "Developers");
return superhero;

const increaseAmount = managersJSON.map((x) => x.salary + 5000);
return increaseAmount;
