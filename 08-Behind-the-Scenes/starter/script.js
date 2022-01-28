'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);

  function printAge() {
    const output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1901 && birthYear <= 1996) {
      var millenial = true;
      // create new variable with the same name as outer scope
      const firstName = 'Steven';
      const str = `Oh, and you' re a millenial, ${firstName}.`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      // reassigning
      output = 'New output';
    }
    console.log(firstName);
    console.log(millenial);
  }
  printAge();
  return age;
}

const firstName = 'Minwoo';
calcAge(1995);
