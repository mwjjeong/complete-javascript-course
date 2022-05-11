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
 */

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
