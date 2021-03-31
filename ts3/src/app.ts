interface Named {
  name: string;
}

interface Greetable extends Named{
  greet(phrase: string):void;
};


class Person implements Greetable{
  name: string;
  age: number;
  constructor (n: string, a: number){
    this.name = n;
    this.age = a;
  }

  greet(phrase: string){
    console.log(phrase);
  }
}

let user1: Greetable;
let user2: Greetable;

user1 = {
  name: "vic",
  greet(phrase){
    console.log(phrase);
  }
};

user2 = new Person("vic", 4);

user1.greet("Hellooo");
user2.greet("greetings from user 2");
let personArr: Greetable[] = [];

personArr.push(user1);
personArr.push(user2);
