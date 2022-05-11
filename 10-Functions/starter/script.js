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

 */

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
