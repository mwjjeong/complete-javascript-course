'use strict';

/* const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // (ES5 version) assign default values with short circuiting
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 4);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);

const flight = 'LH234';
const minwoo = {
  name: 'Minwoo Jeong',
  passport: 123456789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 123456789) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, minwoo);
// console.log(flight);
// console.log(minwoo); // 'name' has been changed!

// // Is the same as doing...
// const flightNum = flight; // Simply copying
// const passenger = minwoo; // Just copying the reference to that object

const newPassport = function (person) {
  person.passport = Math.random() * 10000000000;
};

newPassport(minwoo);
checkIn(flight, minwoo);


const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('Hi!');
};
document.body.addEventListener('click', high5);

['Jonas', 'Minwoo', 'Jin'].forEach(high5);


const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeter = greet('Hey');
greeter('Minwoo');
greeter('Jin');

greet('Hello')('Minwoo');

// when it is useful

// one arrow function returning another arrow function
const greet2 = greeting => name => {
  console.log(`${greeting} ${name}`);
};

greet2('Hello')('Minwoo');


const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function(flightNum, name) {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Minwoo Jeong');
lufthansa.book(635, 'Minwoo Jeong');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book; // now it's a function
// Does not work
// book(23, 'Sarah'); // this => undefined

// call methods
book.call(eurowings, 23, 'Sarah'); // first argument: `this`
console.log(eurowings);
book.call(lufthansa, 239, 'Minwoo Jeong');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// apply method (does not use anymore in modern js)
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

//book.call(swiss, ...flightData);

// Bind Method
const bookEW = book.bind(eurowings); // Return a new function
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');

// Partial application
// A part of arguments of the original function are already applied
const bookEW23 = book.bind(eurowings, 23); // the first arg is already set
bookEW23('Minwoo Jeong');
bookEW23('Minwoo Jeong2');

console.log(eurowings);

// With Event Listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// This keyword will point to the lufthansa object
lufthansa.buyPlane();

// This keyword will point to the HTML element
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

// To be correct...
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application => Preset Parameters
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// Use null if we don't need to care about this keyword (standard)
// Order of arguments is important
const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23

console.log(addVAT(1000));

// Challenge
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const myAddVAT = addTaxRate(0.23);
console.log(myAddVAT(1000));




///////////////////////////////////////
// Coding Challenge #1

/*
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)

  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const txt = [this.question, ...this.options, '(Write option number)'].join(
      '\n'
    );
    const option = Number(prompt(txt));
    !Number.isNaN(option) &&
      0 <= option &&
      option <= 3 &&
      this.answers[option]++;
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') console.log(this.answers);
    else if (type === 'string')
      console.log(`Poll results are ${this.answers.join(', ')}`);
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

const displayTestData = function (testData) {
  return poll.displayResults.bind({ answers: testData });
};
console.log(displayTestData([5, 2, 3])('string'));
console.log(displayTestData([1, 5, 3, 9, 6, 1])('string'));
*/

/*
// Immediately Invoked Function Expression (IIFE)
// Only called once
(function () {
  console.log('This will never run again');
})();

(() => console.log('This will also never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}

// console.log(isPrivate)
console.log(notPrivate);

// We don't need to use IIFE to create a scope

// Closures
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();


// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a + 2);
  };
};

const h = function () {
  const b = 888;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000; // Lower priority
boardPassengers(180, 3);

// Example 3
const nested = function () {
  const n = 100;
  return function () {
    return function () {
      console.log(n);
    };
  };
};

const f1 = nested();
const f2 = f1();
f2();

*/
// Coding Challenge #2

/*
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  const body = document.querySelector('body');
  body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
