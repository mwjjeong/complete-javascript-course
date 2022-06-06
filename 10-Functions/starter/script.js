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

 */

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
