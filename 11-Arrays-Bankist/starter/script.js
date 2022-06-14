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

const displayMovements = function (movements) {
  containerMovements.innerHTML = ''; // Clear the previous text content
  // .textContent = 0

  movements.forEach(function (mov, i) {
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
displayMovements(account1.movements);

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
