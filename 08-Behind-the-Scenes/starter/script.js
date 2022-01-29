'use strict';

/*
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

var firstName = 'Hailey';

const minwoo = {
  firstName: 'Minwoo',
  year: 1995,
  printThis: function () {
    console.log(this); // the object that call this method
    console.log(this.firstName);

    //solution 1
    // self = this; // self or that...?
    // const isMillenial = function () {
    //   console.log(this); // undefined
    //   console.log(self); // the object
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // solution 2
    const isMillenial = () => {
      console.log(this); // the object (because the function is an arrow function)
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  printThisArrow: () => {
    console.log(this); // the window object
    console.log(this.firstName); // Hailey
  },
};

minwoo.printThis();
minwoo.printThisArrow();

// the arguments keyword
const addExpr = function (a, b) {
  console.log(arguments); // arguments array
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 17, 12); // legal

function add(a, b) {
  console.log(arguments); // arguments array
  return a + b;
}

add(2, 5);
add(2, 5, 17, 12); // legal

const addArrow = (a, b) => {
  console.log(arguments); // not defined
  a + b;
};
addArrow(2, 5);

*/

// primitive types
let age = 30;
let oldAge = age;
age = 31;
console.log(age); // 30
console.log(oldAge); // 31

// reference type

const me = {
  name: 'Minwoo',
  age: 31,
};

const friend = me;
friend.age = 27;

console.log(me); // changed!!
console.log(friend);

let lastName = 'Minwoo';
let oldLastName = lastName;
lastName = 'Hailey';
console.log(lastName, oldLastName);

const minwoo = {
  name: 'Minwoo',
  age: 27,
};

const other = minwoo;

other.age += 1;

console.log(minwoo);

// minwoo = {}; // does not work

// copying objects
const minwoo2 = {
  name: 'Minwoo',
  age: 27,
  family: ['1', '2'],
};

const other2 = Object.assign({}, minwoo2); // copy the object (shallow copy; first name)
other2.age += 1;
other2.family.push('a');
console.log(minwoo2.age); // not changed
console.log(other2.age);
console.log(minwoo2.family); // changed
