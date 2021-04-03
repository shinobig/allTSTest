type Admin = {
  name: string;
  privilage: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;


const e1: ElevatedEmployee = {
  name: 'vic',
  privilage: ["jeje"],
  startDate: new Date(),
};

type Combinable = string | number;

type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  return a.toString() + b.toString();
}

const result = add('vic', ' son');

result.split(' ');

const fetchedUserData = {
  id: 'u1',
  name: 'vic',
  job: {  title: 'ceo',  description: 'My own company' }
};

console.log(fetchedUserData?.job?.title);

const userIpunt = null;

const storedData = userIpunt ?? 'DEFAULT';

/*
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("name: " + emp.name);

  if ('privilage' in emp) {
    console.log("Privilage: " + emp.privilage);
  }

  if ('startDate' in emp) {
    console.log("Date: " + emp.startDate);
  }
}

printEmployeeInformation(e1);


interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }

  console.log("moving at speed: " + speed);
}


moveAnimal({ type: 'bird', flyingSpeed: 1000 });

//let paragraph = <HTMLInputElement> document.getElementById('message-output')!;
let paragraph = document.getElementById('message-output')! as HTMLInputElement;

paragraph.value = "hello";


// index types
interface ErrorContainer {
  [prop: string]: string;
  id: string;
}

const errorBag: ErrorContainer = {
  email: 'not a valid email',
  id: 'testing',
};

*/
