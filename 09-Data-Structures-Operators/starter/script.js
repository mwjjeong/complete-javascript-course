'use strict';
/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [first, , second] = restaurant.categories;
console.log(first, second); // italian, vegetarian

// swap using destructuring array
[first, second] = [second, first];
console.log(first, second); // vegetarian, italian

let [xx, yy] = restaurant.order(2, 0);
console.log(xx, yy);

// destructuring nested array
const nested = [1, 2, [3, 4]];
const [aa, bb, [cc, dd]] = nested;
console.log(aa, bb, cc, dd);

// default values of array items
const [p = 1, q = 2, r = 3] = [4, 5];
console.log(p, q, r); // 4, 5 ,3
*/

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ startIndex = 0, mainIndex = 1, address, time }) {
    console.log(
      `Order delivered! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  startIndex: 1,
  mainIndex: 2,
  time: '13:00',
  address: 'Seoul',
});
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Give another variablre name
const {
  name: restaurantName,
  openingHours: hours,
  categories: categoryNames,
} = restaurant;
console.log(restaurantName, hours, categoryNames);

// default value
const { menu = [], categories: categoryNames2 } = restaurant;
console.log(menu, categoryNames2);

// mutating variables
let a = 1;
let b = 2;
const obj = { a: 11, b: 22, c: 12 };
// {a, b} = obj // Not possible!
({ a, b } = obj);
console.log(a, b);

// nested object
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
