/* Lecture 1
alert("Hello world!");
console.log("Hi");

let firstName = "Jeong";
console.log(firstName);

let javascriptIsEasy = true;
console.log(javascriptIsEasy);
console.log(typeof javascriptIsEasy);
console.log(typeof 23.0);
console.log(typeof 1);
console.log(typeof "Minwoo");
console.log(typeof 'Jeong');

javascriptIsEasy = 'Wow!!';
console.log(typeof javascriptIsEasy);

let empty;  // Hold the value of undefined.
console.log(empty);
console.log(typeof empty);

empty = 'empty';
console.log(empty);
console.log(typeof empty);

console.log(typeof null);

let age = 30;
age += 1;  // Mutable
console.log('age', age);

const firstName = 'Jeong';
//firstName = 'Kim'; // Immutable
console.log('firstName', firstName);


const firstName = 'Minwoo';
const lastName = 'Jeong';
console.log(lastName + ' ' + firstName);
let x = y = 5;
console.log(x, y); 


// Coding Challenge 1
//const markMass = 78;
//const markHeight = 1.69;
//
//const joneMass = 92;
//const joneHeight = 1.95;
const markMass = 95;
const markHeight = 1.88;

const joneMass = 85;
const joneHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const joneBMI = joneMass / joneHeight ** 2;

const markHigherBMI = markBMI > joneBMI;
console.log('Challenge 1 answers: ', markBMI, joneBMI, markHigherBMI)



const firstName = 'Minwoo';
const job = 'Software Developer';

const introduceMyself = `I'm ${firstName}, a ${job}.`;
console.log(introduceMyself);

console.log('Multiple \n links');
console.log(`Multiple
 links`);


const age = 30;

if (age >= 18) {
  console.log("Hi");
} else {
  console.log("Bye");
}


// Coding Challenge 2
const markMass = 95;
const markHeight = 1.88;

const joneMass = 85;
const joneHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const joneBMI = joneMass / joneHeight ** 2;

const markHigherBMI = markBMI > joneBMI;

if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${joneBMI})!`);
} else {
  console.log(`John's BMI (${joneBMI}) is higher than Mark's (${markBMI})`);
}

// type conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(inputYear + 1);

console.log(Number("Minwoo"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old.");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("17" > "18");

let n = "1" + 1; // '11'
n = n - 1; // 10
console.log(n);


// 5 falsy values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean(null));

console.log(typeof undefined);

// Type coercion
const money = 0;
if (money) {
  console.log("Yeah!");
} else {
  console.log("Oh my god");
}

let height;

if (height) {
  console.log("Defined");
} else {
  console.log("Undefined");
}


const age = 18;
if (age === 18) console.log("Hello age");
console.log(18 == "18"); // loose equal (type coertion: string -> number)
console.log(18 === "18"); // strict equal

// prompt
const realAge = prompt("Enter your age.");
console.log(realAge, typeof realAge);


// LOGICAL OPERATORS
const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision); // AND
console.log(hasDriversLicense || hasGoodVision); // OR
console.log(!hasGoodVision); // NOT

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  console.log("Go to drive~!");
} else {
  console.log("You must not drive");
}


// Coding Challenge 3
//const avgScoreDolphins = (96 + 108 + 89) / 3;
//const avgScoreKoalas = (88 + 91 + 110) / 3;

const avgScoreDolphins = (97 + 112 + 101) / 3;
const avgScoreKoalas = (109 + 95 + 50) / 3;

//const avgScoreDolphins = (97 + 112 + 101) / 3;
//const avgScoreKoalas = (109 + 95 + 106) / 3;
const minScore = 100;

if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= minScore)
  console.log("Dolphins win!");
else if (avgScoreDolphins < avgScoreKoalas && avgScoreKoalas >= minScore)
  console.log("Koalas win!");
else if (avgScoreDolphins === avgScoreKoalas && avgScoreKoalas >= minScore)
  console.log("Draw!");
else console.log("No team wins....");

const day = "mon";

// Switch statement
switch (day) {
  case "mon":
  case "tue":
  case "wed":
  case "thu":
    console.log("Sad!");
    break;
  case "fri":
    console.log("Happy!");
    break;
  case "sat":
  case "sun":
    console.log("Very Happy!");
    break;
  default:
    console.log("Invalid day");
}

// if - else statement
if (day === "mon" || day === "tue" || day === "wed" || day === "thu")
  console.log("Sad!");
else if (day === "fri") console.log("Happy!");
else if (day === "sat" || day === "sun") console.log("Very Happy!");
else console.log("Invalid day");


// Expression
3 + 4;
1991;
true && false;

// Statement (Does not produce values, instead performs some actions)
if (23 > 10) {
  const str = "23 is bigger";
}


// Conditional Operator
const age = 23;
age >= 20 ? console.log("You are too old") : console.log("You are so young!");
const adj = age >= 20 ? "old" : "young";


// Coding Challenge 4
const bill = 430;
const tipRatio = (bill >= 50 && bill <= 300 ? 15 : 20) / 100;
const tip = bill * tipRatio;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`
);

*/
