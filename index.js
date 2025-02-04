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
    this.salary = this.salary + salaryIncrease;
  }

  getWorkingYears(yearJoined) {
    let workigYears = 2023 - yearJoined;
    return workigYears;
  }

  logManagerInfo(workigYears) {
    managersJSON.forEach(
      console.log(
        `${this.name} since ${workigYears} , bonus ${this.bonusPercentage} `
      )
    );
  }
}

const employees = employeesJSON.map(
  (employe) =>
    new Employees(
      employe.name,
      employe.position,
      employe.salary,
      employe.yearJoined
    )
);

const managers = managersJSON.map(
  (manager) =>
    new Manager(
      manager.name,
      manager.position,
      manager.salary,
      manager.yearJoined
    )
);

// employeesJSON.forEach((em) => console.log(em.idBadge()));

const superhero = employeesJSON.filter((x) => x.position == "Developers");
console.log(superhero);

const increaseAmount = managersJSON.map((x) => x.salary + 5000);
console.log(increaseAmount);

const seniorExecutives = managers
  .filter((manager) => manager.yearJoined < 2012)
  .map((manager) => manager.name);
console.log(seniorExecutives);

const lowestBonus = managers.find((manager) => manager.bonusPercentage === 0.1);
console.log(lowestBonus);

const promotionCandidate = employees.find((employee) => employee.salary > 8000);
console.log(promotionCandidate);

function PaidEmployee(employeesJSON) {
  const mostPaidEmployee = employeesJSON.reduce(
    (high, salary) => (high > salary ? high : salary),
    0
  );
  return mostPaidEmployee;
}

function totalSalaries(employeesJSON) {
  const total = employeesJSON.reduce(
    (totalSalary, salary) => totalSalary + salary.salary,
    0
  );
  return total;
}
console.log(totalSalaries(employeesJSON));
function highest(employeesJSON) {
  const employeesSorted = employeesJSON.sort((a, b) => {
    return a.yearJoined - b.yearJoined;
  });

  return employeesSorted[0];
}
console.log(highest(employeesJSON));
