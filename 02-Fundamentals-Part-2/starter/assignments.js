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
