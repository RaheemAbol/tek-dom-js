class Person {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  getInfo() {
    return `My name is ${this.#name} and my age is ${this.#age}`;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }

  get age() {
    return this.#age;
  }

  set age(newAge) {
    this.#age = newAge;
  }
}

const emp1 = new Person("Jim", 30);

emp1.name = "John";

emp1.age = 40;

console.log(emp1.name);
console.log(emp1.age);

class Employee extends Person {
  #jobTitle;
  #employeeID;

  constructor(name, age, jobTitle, employeeID) {
    super(name, age);
    this.#jobTitle = jobTitle;
    this.#employeeID = employeeID;
  }

  get jobTitle() {
    return this.#jobTitle;
  }

  set jobTitle(newTitle) {
    this.#jobTitle = newTitle;
  }

  get employeeID() {
    return this.#employeeID;
  }

  set employeeID(newID) {
    this.#employeeID = newID;
  }

  getInfo() {
    return `my name ${this.name}, my age is ${this.age}, job title : ${
      this.#jobTitle
    }, employee id: ${this.#employeeID}`;
  }
}

const emp2 = new Employee("Sam", 25, "Developer", "12345");

console.log(emp2.getInfo());

class Manager extends Employee {
  #teamMembers;

  constructor(name, age, jobTitle, employeeID, teamMembers) {
    super(name, age, jobTitle, employeeID);
    this.#teamMembers = teamMembers;
  }

  get teamMembers() {
    return this.#teamMembers;
  }

  set teamMembers(newTeam) {
    this.#teamMembers = newTeam;
  }

  addTeamMember(member) {
    this.#teamMembers.push(member);
  }

  removeTeamMember(member) {
    this.#teamMembers = this.#teamMembers.filter((m) => m !== member);
  }
}

const manager1 = new Manager("Alice", 40, "Manager", 12, ["Bob", "Lisa"]);

let manager2 = manager1.removeTeamMember("Lisa");

manager1.addTeamMember();
console.log(manager1.teamMembers);
