'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);

  function printAge() {
    const output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1901 && birthYear <= 1996) {
      var millenial = true;
      // create new variable with the same name as outer scope
      const firstName = 'Steven';
      const str = `Oh, and you' re a millenial, ${firstName}.`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      // reassigning
    }
    console.log(firstName);
    console.log(millenial);
  }
  printAge();
  return age;
}

const firstName = 'Minwoo';
calcAge(1995);

// hoisting and TDZ
// Variables
console.log(a);

var a = 1;
const b = 2;
let c = 3;

// Functions
console.log(typeof add);
// console.log(add(1, 2)); // add is 'undefined'

var add = (a, b) => a + b;

console.log(add2(1, 2));
function add2(a, b) {
  return a + b;
}

// Pitfall Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('Delete all!!!');
}

function zzztest() {
  var zztest = 1;
}
var zztest = 1;

// Practice this keyword
console.log(this); // global window object

function inner() {
  console.log(this); // undefined
}

inner();

const innerArrow = () => {
  console.log(this); // global window object (this keyword of parent scope)
};

innerArrow();

const minwoo = {
  year: 1995,
  location: 'Seoul',
  printThis: function () {
    console.log(this); // the minwoo object
  },
  printThisArrow: () => {
    console.log(this); // global window object
  },
  printThisToo() {
    console.log(this); // the minwoo object
  },
};

minwoo.printThis();
minwoo.printThisArrow();
minwoo.printThisToo();

const other = {
  year: 1991,
  printMinwooThis: minwoo.printThis,
};

other.printMinwooThis(); // the other object

const f = minwoo.printThis;
f(); // undefined (no owner object)
