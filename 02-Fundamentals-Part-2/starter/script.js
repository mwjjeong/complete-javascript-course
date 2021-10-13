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

*/
