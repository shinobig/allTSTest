const names = ['vic', 'son'];


const arr: Array<string> = [];

/*
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('this is done');
  }, 2000)
});
*/


function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

console.log(merge({name:'vic'}, {age: 10}));

const mergeObj = merge({name:'vic'}, {age: 10});


interface Lenghty {
  length: number
}


function countAndPrint<T extends Lenghty>(element: T){
  let descriptionText = 'Got no value.';
  if(element.length > 0){
    descriptionText = 'Got ' + element.length;
  }
  return [element, descriptionText];
}

console.log(countAndPrint('hi there'))


function extractAndConvert <T extends object, U extends keyof T> (obj: T, key: U){
  return obj[key];
}

console.log(extractAndConvert({name: 'max'}, 'name'));