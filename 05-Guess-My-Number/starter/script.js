'use strict';

/*
// Select a document object
const doc = document.querySelector('.message');
console.log(doc);
console.log(typeof doc);

const text = doc.textContent;
console.log(text);

// Basic object
const obj = {
  a: 1,
  b: 2,
};
console.log(obj);
console.log(typeof obj);
console.log(typeof document);
console.log(document);

// Set the text to the document object
let newText = doc.textContent;
doc.textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

const guess = document.querySelector('.guess');
guess.value = 100;
*/

const guessInput = document.querySelector('.guess');
const messageElement = document.querySelector('.message');
const originalText = messageElement.textContent;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(guessInput.value);

  if (!guess) messageElement.textContent = 'No number!';
  else messageElement.textContent = originalText;
  console.log('Input:', guess);
});
