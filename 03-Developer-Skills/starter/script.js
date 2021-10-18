// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
// Problem 1
const temperatures = [3, 2, 6, 1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problems
// - What is temp amplitude?: Diff between highest and lowest
// How to compute min and max?
// What is a sensor error and how to handle it?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - How to get a max value
// - How to get a min value

const getMinTemperature = temperatures => {
  //let minTemperature = temperatures[0];
  let minTemperature = 0;
  for (let i = 0; i < temperatures.length; i++) {
    const temperature = temperatures[i];
    if (temperature === 'error') continue;
    if (temperature < minTemperature) {
      minTemperature = temperature;
    }
  }
  return minTemperature;
};

const getMaxTemperature = temperatures => {
  //let maxTemperature = temperatures[0];
  let maxTemperature = 0;
  for (let i = 0; i < temperatures.length; i++) {
    const temperature = temperatures[i];
    if (temperature === 'error') continue;
    if (temperature > maxTemperature) {
      maxTemperature = temperature;
    }
  }
  return maxTemperature;
};

const calcTempAmplitude = temperatures => {
  const minTemp = getMinTemperature(temperatures);
  const maxTemp = getMaxTemperature(temperatures);
  return maxTemp - minTemp;
};

console.log(calcTempAmplitude(temperatures));

// Problem 2
// Calculate amplitude with 2 arrays

// 1) Understanding the problem
// - Just merge 2 arrays
// - Calculate!

// 2) Subproblems
// - How to merge 2 arrays?

const temperatures1 = [-10, 1, 2, 5, 15, 23];
const temperatures2 = [-17, 3, 2, 45, 17, 24];
console.log(calcTempAmplitude(temperatures1.concat(temperatures2)));

const measureKelvin = () => {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // C) FIX IT!
    //value: Number(prompt(`Degrees celsius:`)),
    value: 25,
  };
  // B) Find the problem
  console.table(measurement);
  console.log(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) Identify the bug
console.log(measureKelvin());

const printForecast = arr => {
  let log = '';
  for (let i = 0; i < arr.length; i++) {
    log += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log(log);
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
*/
