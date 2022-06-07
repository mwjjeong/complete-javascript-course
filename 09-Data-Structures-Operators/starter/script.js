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


// spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]
console.log(...arr2); // 1 2 3 4 5

// shallow copy
const newArr = [...arr1];
newArr.push(6);
console.log(...arr1);
console.log(...newArr);

// merge
const mergeArr = [...arr1, ...arr2];
console.log(...mergeArr);

// iterables: array, string, map, set NOT object
// the spread operator is possible on objects since ES2018
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { d: 4, e: 5, ...obj1 };
console.log(obj2);

// shallow copy the object
const copyObj = { ...obj1 };
copyObj.a = 7;
console.log(copyObj);

// rest syntax
// 1) collect the elements from the destructured array or object
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(others); // [3, 4, 5]

const { x, ...otherObj } = { x: 1, y: 2, z: 3 };
console.log(otherObj);

// 2) function parameters
function useRest(...others) {
  console.log(others);
  console.log(...others);
}

useRest('a', 1, 2, 3);
useRest('apple');
const [h, ...o] = 'apple';
console.log(o);

*/
/*
// Use ANY data type, return ANY data type, short-circuiting
// short circuiting using OR
// If the first value is a truthy value, it will return the first value
// Summary: return the first truthy value or return the last if there is no truthy value
console.log('---- OR ----');
console.log(3 || 'minwoo'); // Return first value
console.log(null || 'minwoo');
console.log('' || 'Jonnas');
console.log(true || 0);
console.log('minwoo' || null);
console.log(undefined || null); // return second value even if the second is falsy
console.log(null || undefined);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);
console.log(undefined || 0 || '' || null || undefined);

// practical example: set default value
const obj = { a: 1, b: 2, c: 3 };
// const d = obj.d ? obj.d : 10;
const d = obj.d || 10;
console.log(d);

console.log('---- AND ----');

// short circuiting using AND (return the first falsy value)
console.log(0 && 'Minwoo');
console.log('Minwoo' && 'Jonas');
console.log(null && 'Minwoo');
console.log(4 && 0);
console.log(true && 1); // return the last element if there are no falsy value
console.log('Hello' && 23 && null && 'Jonas');

// practical example
const obj2 = {
  add: function (a, b) {
    return a + b;
  },
};
/*
if (obj2.add) {
  obj2.add(1, 2)
}
*/
/*
const result = obj2.add && obj2.add(1, 2);
console.log(result);
*/

// Nullish Coalescing Operator

// practical example: set default value
const obj = { a: 1, b: 2, c: 3 };
// const d = obj.d ? obj.d : 10;
obj.d = 0;
const d = obj.d || 10; // 10, which is not what we intended to
console.log(d);

// Nullish Coalescing Operator
// Nullish: null and undefined (not 0 or '')
// Return the first that is not nullish
const correctD = obj.d ?? 10;
console.log(correctD);
