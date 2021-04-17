//import _ from 'lodash';
import { Product } from './product.module';
import "reflect-metadata";
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
// declare var GLOBAL: string;
//console.log(GLOBAL)

//console.log(_.shuffle([1,2,3]));
const products = [
  { title: 'Carpet', price: 29.99 },
  { title: 'Car', price: 99.99 },
];

const newProd = new Product('', -4);
validate(newProd).then(error => {
  if (error.length > 0) {
    console.log("ERROR")
    console.log(error)
  }

  console.log(newProd.getInformation())
});


const loadedProducts = plainToClass(Product, products);

console.log(loadedProducts);

console.log(loadedProducts[0].getInformation())

const p1 = new Product("book", 12.99)

console.log(p1.getInformation())