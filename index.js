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
    const ManSalary = 50 + salaryIncrease;
    return ManSalary;
  }

  getWorkingYears(yearJoined) {
    let workigYears = 2023 - yearJoined;
    return workigYears;
  }

  logManagerInfo(workigYears) {
    console.log(
      `${this.name} since ${workigYears} , bonus ${this.bonusPercentage} `
    );
  }
}

const employee = new Employees("hsjs", "modeer", 2019, 5000);
const manager = new Manager(500, "bashayer", "modeer", 2019, 5000);
console.log(employee, manager);

employeesJSON.push(this.employee);
managersJSON.push(this.Manager);

Employees.forEach((em) => idBadge(em));

const superhero = employeesJSON.filter((x) => x.position == "Developers");
return superhero;

const increaseAmount = managersJSON.map((x) => x.salary + 5000);
return increaseAmount;
