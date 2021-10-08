// LECTURE: Values and Variables
const country = "South Korea";
const continent = "Asia";
let population = 48;

console.log(country, continent, population);

// LECTURE: Data Types
// LECTURE: let, const, and var
const isIsland = false;
const language = "English";
console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language
);
// language = 'English'; -> TypeError!!

// LECTURE: Basic Operators
console.log("1: ", population / 2);

population++;
console.log("2: ", population);

const finlandPopulation = 6;
console.log("3: ", finlandPopulation < population);

const avgPopulation = 33;
console.log("4: ", population < avgPopulation);

let description = country;
description += " is in ";
description += continent;
description += ", and its ";
description += population;
description += " million people speak ";
description += language;

// LECTURE: Strings and Template Literals
description = `${country} is in ${continent}, \
and its ${population} million people speak ${language}.`;
console.log("5: ", description);

// LECTURE: Taking Decisions: if / else Statements
if (population > avgPopulation) {
  console.log(`${country}'s population is above average.`);
} else {
  const populationDiff = avgPopulation - population;
  console.log(
    `${country}'s population is ${populationDiff} million \
below average.`
  );
}

// LECTURE: Type Conversion and Coercion
console.log("9" - "5"); // expect 4
console.log("19" - "13" + "17"); // expect '617'
console.log("19" - "13" + 17); // expect 23
console.log("123" < 57); // expect false
console.log(5 + 6 + "4" + 9 - 4 - 2); // expect 1143

// LECTURE: Equality Operators: == vs. ===
//const numNeighbours = Number(
//  prompt("How many neighbour countries does your country have?")
//);
//
//if (numNeighbours === 1) console.log("Only 1 border");
//else if (numNeighbours > 1) console.log("More than 1 border");
//else console.log("No borders");
//

// LECTURE: Logical Operators
const speakEnglish = language === "English";
const lessPopulation = population < 50;

if (speakEnglish && lessPopulation && !isIsland)
  console.log(`You shoud live in ${country}:)`);
else console.log(`${country} does not meet your criteria:(`);

// LECTURE: The switch Statement
switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

// LECTURE: The Conditional (Ternary) Operator
const descPopulation = population > 33 ? "above" : "below";
console.log(`${country}'s population is ${descPopulation} average.`);
