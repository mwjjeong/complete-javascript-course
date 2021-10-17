"use strict";

/*
// Case that only strict mode makes an error.
let hasDriversLicense = false;
let passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// Reserved words in strict mode (possibly used as keywords in the future)
// const interface = "Audio";
// const private = 534;

// Function declaration
function calcAge1(birthYear) {
  return 2021 - birthYear;
}

const myage1 = calcAge1(1995);
console.log(myage1);

// Function expression (use anonymous function)
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};

//console.log(calcAge1, typeof calcAge1);
//console.log(calcAge2, typeof calcAge2);

const myage2 = calcAge1(1995);
console.log(myage2);


// Arrow function
const calcAge3 = (birthYear) => 2021 - birthYear;
const myage3 = calcAge3(1995);
console.log(myage3);

// Arrow function with multiple lines
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge3(birthYear);
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1995, "Minwoo"));


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function makeJuice(applePieces, orangePieces) {
  return `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
}

function fruitProcessor(apples, oranges) {
  // DRY principle
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  return makeJuice(applePieces, orangePieces);
}

console.log(fruitProcessor(2, 3));


const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge3(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    return -1;
  }
};


// Coding Challenge #1
const dolphinScore1 = 85;
const dolphinScore2 = 54;
const dolphinScore3 = 41;

const koalasScore1 = 23;
const koalasScore2 = 34;
const koalasScore3 = 27;

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const dolphinAverage = calcAverage(dolphinScore1, dolphinScore2, dolphinScore3);
const koalasAverage = calcAverage(koalasScore1, koalasScore2, koalasScore3);

const checkWinner = (dolphinAverage, koalasAverage) => {
  let winner, winnerScore, loserScore;
  if (dolphinAverage >= koalasAverage * 2) {
    winner = "Dolphins";
    winnerScore = dolphinAverage;
    loserScore = koalasAverage;
  } else if (koalasAverage >= dolphinAverage * 2) {
    winner = "Koalas";
    winnerScore = koalasAverage;
    loserScore = dolphinAverage;
  }
  if (winner) console.log(`${winner} win (${winnerScore} vs. ${loserScore})`);
  else console.log("No team wins...");
};

checkWinner(dolphinAverage, koalasAverage);

// Test
let testValue = 1;
console.log(testValue);

const f = (testValue) => {
  console.log(testValue);
  testValue = 2;
  console.log(testValue);
};

f(3);
console.log(testValue);


const a = 1;
const b = 2;
const c = 3;

// Array
const nums = [a, b, c]; // we usually use it!
console.log(nums);

//const years = new Array(1, 2, 3, 4); // Array function with new keyword

// indexing
console.log(nums[0]);
console.log(nums[2]);
console.log(nums.length);
console.log(nums[nums.length - 1]); // index via an expression

nums[1] = 20; // Array is mutable
nums[2] = "Hello";
console.log(nums);

// nums = [1, 2, 3, 4, 5]; // Impossible due to this variable is const
// Element can be all of expressions
const newArr = ["Minwoo", "Jeong", 2000 - 1995];

// Exercise
const calcAge = (birthYear) => 2037 - birthYear;
const years = [1990, 1995, 1997];
console.log(calcAge(years));

const age1 = calcAge(years[1]);
console.log(age1);

// Add elements
const nums = [1, 2, 3];
const length = nums.push(4);
console.log(nums, length);

nums.unshift(0);
console.log(nums);

// Remove elements
const last = nums.pop();
console.log(nums, last);

const first = nums.shift();
console.log(nums, first);

// Search
console.log(nums.indexOf(0)); // Return the index or -1
console.log(nums.indexOf(1));
console.log(nums.includes(0)); // Return boolean
console.log(nums.includes(1));


// Coding Challenge 2
const calcTip = (bill) => {
  if (50 <= bill && bill <= 300) return bill * 0.15;
  return bill * 0.2;
};
console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips);
console.log(total);


// Object
const minwoo = {
  firstName: "Minwoo",
  lastName: "Jeong",
  age: 2021 - 1995,
  job: "Developer",
  friends: ["A", "B", "C"],
};
console.log(minwoo);

// getting a property from an object
console.log(minwoo.firstName); // 1. dot notation
console.log(minwoo["lastName"]); // 2. brackets notation
console.log(minwoo["first" + "Name"]);
const hello = 1;
console.log(minwoo.hello); // If the object does not have such property

minwoo.location = "Bundang";
// const inputKey = prompt("What do you wnat ot know about me?");
//console.log(inputKey, typeof inputKey);
//console.log(minwoo.inputKey);
//console.log(minwoo[inputKey]); // The 'inputKey' will be evaluated
//
//if (minwoo[inputKey]) console.log(minwoo[inputKey]);
//else console.log("There is no information for this.");
//
// Challenge
console.log(
  `${minwoo.firstName} has ${minwoo.friends.length} friends, and his best friened is called ${minwoo.friends[0]}`
);


// Object
const minwoo = {
  firstName: "Minwoo",
  lastName: "Jeong",
  birthYear: 1995,
  job: "developer",
  friends: ["A", "B", "C"],
  hasDriversLicense: false,
  // calcAge: (birthYear) => 2021 - birthYear,
  calcAge: function () {
    //console.log(this);
    //return 2021 - this.birthYear;
    if (!this.age) this.age = 2021 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(minwoo.calcAge()); // dot notation
console.log(minwoo.calcAge()); // dot notation
console.log(minwoo.calcAge()); // dot notation
console.log(minwoo.calcAge()); // dot notation
console.log(minwoo.calcAge()); // dot notation
console.log(minwoo.getSummary());


// Coding Challenge 3
const mark = {
  name: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    if (!this.bmi) this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  name: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    if (!this.bmi) this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

if (mark.calcBMI() > john.calcBMI())
  console.log(
    `Mark's BMI (${mark.calcBMI()}) is higher than John's ${john.calcBMI()}`
  );
else if (john.calcBMI() > mark.calcBMI())
  console.log(
    `John's BMI (${mark.calcBMI()}) is higher than Mark's ${john.calcBMI()}`
  );
else console.log("Both are the same!");


// loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}


// Array Looping
const chars = ["a", "b", "c", "d", "e", "f"];
const types = [];

for (let i = 0; i < chars.length; i++) {
  const type = typeof chars[i];
  console.log(chars[i], type);
  types.push(type);
}

console.log(types);

// continue and break
for (let i = 0; i < chars.length; i++) {
  const char = chars[i];
  if (char === "c") continue;
  else if (char === "e") break;
  console.log(i, char);
}

const chars = ["a", "b", "c", "d", "e", "f"];

// Loop backward
for (let i = chars.length - 1; i >= 0; i--) console.log(i, chars[i]);

for (let exercise = 1; exercise <= 3; exercise++) {
  for (let rep = 1; rep < 5; rep++) {
    console.log(`Exercise: ${exercise}, Repeats: ${rep}`);
  }
}

// while loop
let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice != 6) {
  console.log(dice);
  dice = Math.trunc(Math.random() * 6) + 1;
}

// Coding Challenge 4
const bills = [100, 2000, 400, 302, 278, 780, 500, 777, 250, 450];
const tips = [];
const totals = [];

const calcTip = (bill) => {
  if (50 <= bill && bill <= 300) return bill * 0.15;
  return bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const bill = bills[i];
  const tip = calcTip(bill);
  const total = tip + bill;
  tips.push(tip);
  totals.push(total);
}

console.log(tips, totals);

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];
  return sum / arr.length;
};

console.log(calcAverage(totals));

*/
console.log("From scripts.js");
