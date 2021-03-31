/*
function add(n1: number, n2: number) {
  return n1 + n2;
}
*/
function printResult(num: number) {
  console.log("result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
//  const caca = 'caca';
  const result = n1 + n2;
  cb(result);
}

let combineValues: (a: number, b: number) => number;

//combineValues = add;
// combineValues = printResult;

//console.log(combineValues(5, 7));

addAndHandle(10, 20, (result) => {
  console.log(result);
});