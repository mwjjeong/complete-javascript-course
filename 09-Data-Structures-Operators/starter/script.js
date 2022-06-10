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


// Logical Assignment Operators (ES2021)
const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Pizza',
  owner: 'Giovanni Rossi',
};

// short circuiting
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// new way!
// OR assignment operator (same behavior with OR short circuiting)
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// AND assignment operator
rest1.owner &&= '<ANONYMOUS>'; // nothing happened because the variable does not exist
rest2.owner &&= '<ANONYMOUS>';
console.log(rest1);
console.log(rest2);
*/

///////////////////////////////////////
// Coding Challenge #1

/*
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
const [players1, players2] = game.players;
console.log(players1, players2);

// 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// 6
function printGoals(...players) {
  const goalCount = {};
  game.scored.forEach(function (player) {
    goalCount[player] ||= 0;
    goalCount[player] += 1;
  });
  players.forEach(function (player) {
    console.log(player, goalCount[player] || 0);
  });
}
console.log(printGoals(...['Davies', 'Muller', 'Lewandowski', 'Kimmich']));

// 7
console.log((team1 < team2 || 'team1') && 'team2');
*/

/*
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // 1. ES6 enhanced object literals
  openingHours,

  // 2. New method syntax
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Looping Objects

// Property names
const properties = Object.keys(openingHours); // Array of the keys
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
  console.log(day);
}
console.log(openStr);

// Property values
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}.`);
}

*/
/*
// console.log(restaurant.openingHours.mon.open);  // Error
// Without optional chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
if (restaurant.openingHours && restaurant.openingHours.fri)
  console.log(restaurant.openingHours.fri.open);

// With optional chaining
console.log(restaurant.openingHours.mon?.open); // undefined
console.log(restaurant.openingHours.fri?.open); // 11

// Multiple optional chaining
console.log(restaurant.openingHours?.mon?.open); // No Error

// Real world example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed'; // with dynamic property key
  console.log(`On ${day}, we open at ${open}.`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.otherOrder?.(0, 1) ?? 'Method does not exist'); // Method does not exist

// Array
const users = [{ name: 'Minwoo', email: 'Hello@World.com' }];


if (users.length > 0) console.log(users[0].name);
else console.log('User array empty');


console.log(users[0]?.name ?? 'User array empty');
console.log(users[1]?.name ?? 'User array empty');
*/
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Looping Arrays: for-of loop
// for (const item of menu) console.log(item);

// // when we need indexes
// for (const [i, item] of menu.entries()) {
//   console.log(`${i + 1}: ${item}`);
// }

// console.log([...menu.entries()]); // [index, element]

///////////////////////////////////////
// Coding Challenge #2

/*
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
for (const [n, player] of game.scored.entries()) {
  console.log(`Goal ${n + 1}: ${player}`);
}

// 2.
const oddAvg =
  Object.values(game.odds).reduce((a, b) => a + b, 0) /
  Object.values(game.odds).length;
console.log(oddAvg);

// 3.
for (const [teamKey, odd] of Object.entries(game.odds)) {
  const gameResult = game[teamKey] ? `victory ${game[teamKey]}` : 'draw';
  console.log(`Odd of ${gameResult}: ${odd}`);
}

// BONUS.
const scorers = {};

for (const player of game.scored) {
  scorers[player] = (scorers[player] ?? 0) + 1;
  // It is also possible
  // scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);
*/

/*
// Sets (ES6)
// A collection of unique values
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta']);
console.log(ordersSet); // {'Pasta', 'Pizza', 'Risotto'}
console.log(new Set('Minwoo'));
console.log(new Set());

// Methods of Set
console.log(ordersSet.size);
console.log(ordersSet.has('Bread'));
console.log(ordersSet.has('Pizza'));

// Only one element is added
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);

ordersSet.delete('Risotto');
ordersSet.delete('Risotto'); // Nothing happened
console.log(ordersSet);

// How to extract values? No way
console.log(ordersSet[0]); // undefined

//ordersSet.clear();
//console.log(ordersSet); // Empty

// Looping is also possible
for (const order of ordersSet) console.log(order);

// Usage Example: Remove duplicates
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(staffUnique.size);

// How many types of letters
console.log(new Set('Minwoo Jeong').size);
*/

// Map (ES6)
const rest = new Map();
// set => update the map
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal')); // Returns a map

// Chaining is also possible
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

// get method
console.log(rest.get('name'));
console.log(rest.get('true')); // undefined
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// other methods
console.log(rest.has('categories'));
rest.delete(2);
rest.set([1, 2], 'Test'); // set the address of the array as a key
console.log(rest.size);
// rest.clear();

console.log(rest.get([1, 2])); // undefined

const arr = [1, 2, 3];
rest.set(arr, 'Test2');
console.log(rest.get(arr)); // work!

rest.set(document.querySelector('h1'), 'heading');
console.log(rest.get(document.querySelector('h1')));
console.log(rest);

// Define a map with the new way
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Go'],
  [4, 'Javascript'],
  ['Correct', 4],
  [true, 'Correct :)'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert object to map
const openingHours = {
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
};
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Iteration
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 4;
console.log(question.get(question.get('Correct') === answer));

// convert map to array
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
