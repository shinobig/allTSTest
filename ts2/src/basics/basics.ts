function add(n1: number, n2: number, printResult: boolean, phrase: string) {

  if (printResult) {
    console.log(phrase + (n1 + n2));
  } else {
    return n1 + n2;
  }
}

let number1;
number1 = 5;
let number2 = 2.8;
//const printResult = true;
const phrase = 'hola ';

//const result = add(number1, number2, printResult, phrase);
