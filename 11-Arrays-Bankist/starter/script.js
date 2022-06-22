'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const user = 'Steven Thomas Williams'; // stw
const createUsernames = function (accounts) {
  accounts.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};
createUsernames(accounts);

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ''; // Clear the previous text content
  // .textContent = 0

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const movIndex = i + 1;
    const movType = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${movType}">${movIndex} ${movType}</div>
      <div class="movements__value">${mov}€</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance}€`;
};

const calcDisplaySummary = function (account) {
  const income = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  const outcome = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  const interest = account.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * account.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, mov) => acc + mov);
  labelSumIn.textContent = `${income}€`;
  labelSumOut.textContent = `${Math.abs(outcome)}€`;
  labelSumInterest.textContent = `${interest}€`;
};

const updateUI = function (account) {
  displayMovements(account.movements);
  calcDisplayBalance(account);
  calcDisplaySummary(account);
};

const hideUI = function () {
  containerApp.style.opacity = 0;
  labelWelcome.textContent = 'Log in to get started';
};

// Event Handler
let currentAccount;
let sort = false;

const login = function (e) {
  // Prevent form from submitting
  e.preventDefault();
  const username = inputLoginUsername.value;
  const pin = Number(inputLoginPin.value);
  const account = accounts.find(account => account.username === username);
  console.log(account);

  if (account?.pin === pin) {
    currentAccount = account;
    // Display UI and welcome message
    containerApp.style.opacity = 100;
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    // Clear the input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur(); // remove the focusing

    updateUI(currentAccount);
    console.log('Success to login');
  } else console.log('Correct the pin number');
};

const transfer = function (e) {
  e.preventDefault();
  const transferTo = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  const amount = Number(inputTransferAmount.value);
  const balance = currentAccount.balance;

  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur();

  if (
    !transferTo ||
    transferTo.username === currentAccount.username ||
    amount <= 0 ||
    balance < amount
  ) {
    console.log('Invalid Transfer');
    return;
  }

  currentAccount.movements.push(-amount);
  transferTo.movements.push(amount);
  updateUI(currentAccount);
};

const requestLoan = function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  inputLoanAmount.value = '';
  inputLoanAmount.blur();

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
};

const closeAccount = function (e) {
  e.preventDefault();
  const username = inputCloseUsername.value;
  const pin = Number(inputClosePin.value);

  inputCloseUsername.value = inputClosePin.value = '';
  inputClosePin.blur(); // remove the focusing

  if (currentAccount.pin === pin && currentAccount.username === username) {
    const accountIdx = accounts.findIndex(
      account => account.username === username
    );
    accounts.splice(accountIdx, 1);
    hideUI();
  } else console.log('Check the credentials');
};

const sortMovement = function (e) {
  e.preventDefault();
  sort = ~sort;
  displayMovements(currentAccount.movements, sort);
};

btnLogin.addEventListener('click', login);
btnTransfer.addEventListener('click', transfer);
btnLoan.addEventListener('click', requestLoan);
btnClose.addEventListener('click', closeAccount);
btnSort.addEventListener('click', sortMovement);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// Slice method returns a new array
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

// Shallow copy
console.log(arr.slice());
console.log([...arr]);

// Splice => Mutate the original array
// first argument: start index, second argument: # elements that will be deleted
// Use to simply remove elements from the array
//console.log(arr.splice(2)); // ['c', 'd', 'e']
console.log(arr.splice(-1)); // Remove the last element and return the removed element
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// Reverse => Mutate the original array
arr = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
console.log(arr2.reverse());
console.log(arr2);

// Concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// Join
console.log(letters.join(' - '));

// At method (ES2022)
const arr = [23, 11, 54];
console.log(arr[0]);
console.log(arr.at(0));

// when we want to get the last element...
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
// console.log(arr[-1]); // undefined
console.log(arr.at(-1)); // More modern way

console.log('Minwoo'.at(0));
console.log('Minwoo'.at(-1));

*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  const text =
    movement > 0
      ? `You deposited ${movement}`
      : `You withdrew ${Math.abs(movement)}`;
  console.log(`Movement ${i + 1}: ${text}`);
}

// Callback function
// forEach passes in: the current element, index, the entire array
// The order is important
console.log('---- FOREACH ----');
movements.forEach(function (mov, i, arr) {
  const text =
    mov > 0 ? `You deposited ${mov}` : `You withdrew ${Math.abs(mov)}`;
  console.log(`Movement ${i + 1}: ${text}`);
});

// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

// for loop vs for each
// break, continue statements do not works in forEach

// forEach for Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// forEach for Set
const currenciesUnique = new Set(currencies.keys());
console.log(currenciesUnique);

// 'key' is redundant
currenciesUnique.forEach(function (value, key, set) {
  console.log(`${key}: ${value}`); // key === value
});
*/

///////////////////////////////////////
// Coding Challenge #1

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*
function checkDogs(dogsJulia, dogsKate) {
  const copyDogsJulia = dogsJulia.slice();
  copyDogsJulia.splice(0, 1);
  copyDogsJulia.splice(-2);

  const dogs = copyDogsJulia.concat(dogsKate);

  dogs.forEach(function (dogAge, i) {
    dogAge >= 3
      ? console.log(
          `Dog number ${i + 1} is an adult, and is ${dogAge} years old`
        )
      : console.log(`Dog number ${i + 1} is still a puppy 🐶`);
  });
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

/*
// data transformation
// a new array or a single value from the other array
const arr = [3, 1, 4, 3, 2];
console.log(arr.map(v => v * 2));
console.log(arr.filter(v => v > 2)); // remain 'true' element
console.log(arr.reduce((acc, v) => acc + v, 0)); // array => single value (reduced value)

// map method
// create a new array which element has gotten from the corresponding element of the old array
const eurToUsd = 1.1;
// more modern way
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
const movementsUSDArrow = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);
console.log(movementsUSDArrow);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd);
}
console.log(movementsUSDfor);

// map method with array indexes
const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);

// forEach vs Map
// Map -> return value to build a new array vs forEach -> printValue (side effect)
// to show elements
*/

/*
// filter method
// filters elements that satisfy the condition
// remains elements that satisfy the condition
const deposits = movements.filter(mov => mov > 0);
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) depositsFor.push(mov);
}
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

// multiple arguments (mov, i, arr) is also possible
*/

/*
// Reduce method
// array - > one single value
console.log(movements);
// first argument of the callback fn: accumulator (snowball)
// second argument of the reduce method: initial value of the accumulator
const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 0);
console.log(balance);

const balance2 = movements.reduce((acc, cur, i, arr) => {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance2);

// manual for loop
let balance3 = 0;
for (const mov of movements) balance3 += mov;
console.log(balance3);

// Maximum value
const maxValue = movements.reduce(
  (acc, mov) => Math.max(acc, mov),
  movements[0]
);
console.log(maxValue);
*/

///////////////////////////////////////
// Coding Challenge #2

/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*
const calcAverageHumanAge = function (ages) {
  // 1.
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));

  // 2.
  const adults = humanAges.filter(age => age >= 18);

  // 3.
  return adults.reduce((acc, age, _, arr) => acc + age / arr.length, 0);
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
*/

/*
const eurToUsd = 1.1;
// PIPELINE
// hard to debug if it is too long
// use the third parameter of the callback function (current array) to debug
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  //.map(mov => mov * eurToUsd)
  .map((mov, _, arr) => {
    // mov * eurToUsd;
    console.log(arr);
  })
  .reduce((acc, mov) => acc + mov);
console.log(totalDepositsUSD);
*/

///////////////////////////////////////
// Coding Challenge #3

/*
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*
const calcAverageHumanAge = function (ages) {
  return ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, _, arr) => acc + age / arr.length, 0);
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
*/

// find method
// retrieve an element based on the condition
// retrieve the first value that satisfies the condition
// .vs filter 1. filter returns a new array 2. find returns a single value

/*
console.log(movements.find(mov => mov < 0));
console.log(accounts);

// Usage
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// goal: find only one element that satisfies the condition

// challenge
let accountFor;
for (const account of accounts) {
  if (account.owner === 'Jessica Davis') {
    accountFor = account;
    break;
  }
}
console.log(accountFor);
*/

// findIndex
// returns index of the found element

/*
console.log(movements);

// EQUALITY
console.log(movements.includes(-130)); // true

// Condition
console.log(movements.some(mov => mov === -130));

// return true if there is any value that satisfies such condition
const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);
*/

/*
// Every method
// return true if all of the elements satisfy the condition
console.log(movements.every(mov => mov > 0)); // false
console.log(movements.every(mov => mov !== 0)); // true

// Seperate callback (DRY principle)
const checkDeposit = mov => mov > 0;
console.log(movements.some(checkDeposit));
console.log(movements.every(checkDeposit));
console.log(movements.filter(checkDeposit));
*/

/*
// flat
// remove the nested arrays and flattened
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); // [1, 2, 3, 4, 5, 6, 7, 8]

// flat method only goes one level deep when flattening the array
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat()); // [Array(2), 3, 4, Array(2), 7, 8]

// two levels deep
console.log(arrDeep.flat(2)); // [Array(2), 3, 4, Array(2), 7, 8]

// more practical example
// map -> flat is pretty common
const overallBalance = accounts
  .map(account => account.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// flatMap (map + flat)
// only goes one level deep
const overallBalance2 = accounts
  .flatMap(account => account.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);
*/

/*
// sorting arrays
// Strings
const owners = ['Minwoo', 'Jonas', 'Adam', 'Zck'];
console.log(owners.sort()); // Mutate the original array
console.log(owners); // the elements were sorted

// Number
// sort() method sorts the array based on the string...
// convert everything to string and sort based on the strings
console.log(movements);
// console.log(movements.sort()); // not expected

// with callback function
// return < 0, a, b (keep order)
// return > 0, b, a (switch order)
// ascending
movements.sort((a, b) => a - b); // a, b as two consecutive numbers in the array
console.log(movements);

// descending order
movements.sort((a, b) => b - a);
console.log(movements);
*/

/*
// Programmatically create and fill an array

// array with data that already defined
const arr = [1, 2, 3, 4, 5];
console.log([1, 2, 3, 4, 5]);
console.log(new Array([1, 2, 3, 4, 5]));

// empty method
const x = new Array(7); // the argument is the array length
console.log(x); // [empty * 7]
console.log(x[0]); // undefined
console.log(x.map(() => 5)); // [empty * 7] (does not work)

// fill method (only one usage to use the empty array)
// x.fill(1);  // mutate the array
x.fill(1, 3, 6); // value, start, end (excluded)
console.log(x);

arr.fill(23, 2, 4); // 23 from 2 to 3
console.log(arr);

// array.from
const arr2 = Array.from({ length: 7 }, () => 1);
console.log(arr2); // [1, 1, 1, 1, 1,1, 1]

// the callback function is like the map method
const arr3 = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(arr3);

// Array.from => convert iterables (strings, maps, sets) to arrays

// Practical Example
// NodeList => Array
labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value')
  );
  console.log(document.querySelectorAll('.movements__value'));
  console.log(movementsUI.map(el => Number(el.textContent.replace('€', ''))));

  // Other method: use spread operator
  const movements2 = [...document.querySelectorAll('.movements__value')].map(
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movements2);
});
*/

/*
// Array methods practice

// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
console.log(bankDepositSum);

// 2.
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, curr) => count + (curr >= 1000 ? 1 : 0), 0);
console.log(numDeposits1000);

// 3. reduce method with the composite type (object)
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, curr) => {
      //   curr > 0 ? (sums.deposits += curr) : (sums.withdrawals += curr);
      sums[curr > 0 ? 'deposits' : 'withdrawals'] += curr;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

// 4. convert any string to title case
// this is a nice title => This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => str.replace(str[0], str[0].toUpperCase());
  const words = title.toLowerCase().split(' ');
  const exceptions = [
    'a',
    'an',
    'the',
    'and',
    'but',
    'or',
    'on',
    ' in',
    'with',
  ];
  return capitalize(
    words
      .map(word => (exceptions.includes(word) ? word : capitalize(word)))
      .join(' ')
  );
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
*/

///////////////////////////////////////
// Coding Challenge #4

/*
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
console.log(dogs);

// 2.
const isEatingTooMuch = dog => dog.curFood >= dog.recommendedFood * 1.1;
const isEatingTooLittle = dog => dog.curFood <= dog.recommendedFood * 0.9;
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
if (isEatingTooLittle(sarahDog)) console.log("It's eating too little.");
else if (isEatingTooMuch(sarahDog)) console.log("It's eating too much.");

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => isEatingTooMuch(dog))
  .flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs
  .filter(dog => isEatingTooLittle(dog))
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch, ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6.
const isEatingOkay = dog => !isEatingTooLittle(dog) && !isEatingTooMuch(dog);
console.log(dogs.some(dog => isEatingOkay(dog)));

// 7.
console.log(dogs.filter(dog => isEatingOkay(dog)));

// 8.
const sortedDogs = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(sortedDogs);
