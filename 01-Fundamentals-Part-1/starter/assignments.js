// LECTURE: Values and Variables
const country = "South Korea";
const continent = "Asia";
let population = 50;

console.log(country, continent, population);

// LECTURE: Data Types
// LECTURE: let, const, and var
const isIsland = false;
const language = 'Korean';
console.log(typeof isIsland, typeof population, typeof country, typeof language);
// language = 'English'; -> TypeError!!

// LECTURE: Basic Operators
console.log('1: ', population / 2);

population++;
console.log('2: ', population);

let finlandPopulation = 6;
console.log('3: ', finlandPopulation < population);

let avgPopulation = 33;
console.log('4: ', population < avgPopulation);

let description = country;
description += ' is in ';
description += continent;
description += ', and its ';
description += population;
description += ' million people speak ';
description += language;
console.log('5: ', description);
