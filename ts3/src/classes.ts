abstract class Department {
  // private name: string;
  private employees: string[] = [];

  constructor(private name: string, private readonly id: string, protected testName: string) { }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

};

//const accounting = new Department("accounting", "d1", "hola soy un test");

//accounting.describe = () => {console.log("hola")};
/*
accounting.addEmployee("vic");
accounting.addEmployee("sam");

console.log(accounting.getName());
console.log(accounting.getId());
*/
class Extention extends Department {
  private anotherTest: string;
  private static instance: Extention;

  private constructor(name: string, id: string, inheritedTest: string, anotherTest: string) {
    super(name, id, inheritedTest);
    this.anotherTest = anotherTest;
  }

  static getInstance() {
    if (this.instance){
      return this.instance;
    } 
    this.instance = new Extention("Name", "id", "I am an inherited test string", "I am just another regular property");
    return this.instance;
  }

  get tests() {
    return `${this.testName}  and  ${this.anotherTest}`
  }

  set setAnotherTest(anotherTest: string) {
    this.anotherTest = anotherTest;
  }

  describe() {
    console.log("Describe from inheritance: " + this.testName);
  }
}

//const testInherit = new Extention("Name", "id", "I am an inherited test string", "I am just another regular property");
const testInherit = Extention.getInstance();


console.log(testInherit.tests);
console.log(testInherit.getName());

testInherit.describe();
testInherit.setAnotherTest = "I am changing anotherTest";
console.log(testInherit.tests);

const employee = Department.createEmployee("Viczon");

console.log(employee);