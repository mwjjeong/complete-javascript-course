"use strict";

// LECTURE: Functions
function describeCountry(country, population, capitalCity) {
  const description = `${country} has ${population} million perople and its capital city is ${capitalCity}`;
  return description;
}

const descKorea = describeCountry("Korea", 50, "Seoul");
const descJapan = describeCountry("Japan", 100, "Tokyo");
const descChina = describeCountry("China", 1300, "Beijing");

console.log(descKorea);
console.log(descJapan);
console.log(descChina);

// LECTURE: Function Declarations vs. Expressions
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percKorea = percentageOfWorld1(50);
const percJapan = percentageOfWorld1(100);
const percChina = percentageOfWorld1(1441);

console.log("Korea", percKorea, "%");
console.log("Japan", percJapan, "%");
console.log("China", percChina, "%");

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percKorea2 = percentageOfWorld2(50);
const percJapan2 = percentageOfWorld2(100);
const percChina2 = percentageOfWorld2(1441);

console.log("Korea", percKorea2, "%");
console.log("Japan", percJapan2, "%");
console.log("China", percChina2, "%");

// LECTURE: Arrow Function
const percentageOfWorld3 = (population) => (population / 7900) * 100;

// LECTURE: Functions Calling Other Functions
function describePopulation(country, population) {
  const percentagePopulation = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentagePopulation}% of the world.`;
}

console.log(describePopulation("China", 1441));
console.log(describePopulation("Korea", 51));
console.log(describePopulation("Japan", 100));

// LECTURE: Introduction to Arrays
const populations = [50, 100, 1300, 200];
console.log(populations.length == 4);
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

// LECTURE: Basic Array Operations (Methods)
const neighbours = ["Korea", "Japan", "China"];
neighbours.push("Utopia");
neighbours.pop();

if (!neighbours.includes("Germany"))
  console.log("Probably not a central European country :D");

const koreaIdx = neighbours.indexOf("Korea");
neighbours[koreaIdx] = "South Korea";
console.log(neighbours);

// LECTURE: Introduction to Objects
// LECTURE: Object Methods
const myCountry = {
  country: "Korea",
  capital: "Seoul",
  language: "Korean",
  population: 50,
  neighbours: ["North Korea", "Japan", "China"],
  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
  },
  checkIsland: function () {
    this.isIsland = this.neighbours ? false : true;
  },
};
console.log(myCountry.describe());

// LECTURE: Dot vs. Bracket Notation
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);
myCountry.population += 2;
myCountry["population"] -= 2;

// LECTURE: Iteration: The for Loop
for (let i = 1; i <= 10; i++) {
  console.log(`Voter number ${i} is currently voting.`);
}

// LECTURE: Looping Arrays, Breaking and Continuing
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  const percentage = percentageOfWorld1(populations[i]);
  percentages2.push(percentage);
}

console.log(percentages, percentages2);

// LECTURE: Looping Backwards and Loops in Loops
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  const neighbours = listOfNeighbours[i];
  for (let j = 0; j < neighbours.length; j++) {
    const neighbour = neighbours[j];
    console.log(`Neighbour: ${neighbour}`);
  }
}

// LECTURE: The while Loop
const percentages3 = [];
let idx = 0;

while (idx < populations.length) {
  const percentage = percentageOfWorld1(populations[idx]);
  percentages3.push(percentage);
  idx++;
}

console.log(percentages3);
