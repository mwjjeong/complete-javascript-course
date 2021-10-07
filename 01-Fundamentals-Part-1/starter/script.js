/* Lecture 1
alert("Hello world!");
console.log("Hi");

let firstName = "Jeong";
console.log(firstName);

let javascriptIsEasy = true;
console.log(javascriptIsEasy);
console.log(typeof javascriptIsEasy);
console.log(typeof 23.0);
console.log(typeof 1);
console.log(typeof "Minwoo");
console.log(typeof 'Jeong');

javascriptIsEasy = 'Wow!!';
console.log(typeof javascriptIsEasy);

let empty;  // Hold the value of undefined.
console.log(empty);
console.log(typeof empty);

empty = 'empty';
console.log(empty);
console.log(typeof empty);

console.log(typeof null);

let age = 30;
age += 1;  // Mutable
console.log('age', age);

const firstName = 'Jeong';
//firstName = 'Kim'; // Immutable
console.log('firstName', firstName);


const firstName = 'Minwoo';
const lastName = 'Jeong';
console.log(lastName + ' ' + firstName);
let x = y = 5;
console.log(x, y); 

*/

// Challenge 1
//const markMass = 78;
//const markHeight = 1.69;
//
//const joneMass = 92;
//const joneHeight = 1.95;
const markMass = 95;
const markHeight = 1.88;

const joneMass = 85;
const joneHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const joneBMI = joneMass / joneHeight ** 2;

const markHigherBMI = markBMI > joneBMI;
console.log('Challenge 1 answers: ', markBMI, joneBMI, markHigherBMI)


