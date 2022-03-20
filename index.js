import { name } from './variables.js'

console.log('hi');
console.log(name);

//ES5 (JS 2009)
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
console.log(a);

//ES6 (JS 2015)
const formula = (x, y) => x * y;
console.log(formula(2, 2))

//JS 2016
const fruits_two = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits_two.includes("Mango"))