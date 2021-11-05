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
const scoreElement = document.querySelector('.score');
const highscoreElement = document.querySelector('.highscore');
const numberElement = document.querySelector('.number');

let score = Number(scoreElement.textContent);
let highscore = Number(highscoreElement.textContent);
const secretNum = Math.trunc(Math.random() * 20) + 1;
numberElement.textContent = secretNum;

const gameLogic = () => {
  if (score === 0) return;
  const guess = Number(guessInput.value);

  if (!guess) {
    messageElement.textContent = 'No number!';
  } else if (guess === secretNum) {
    messageElement.textContent = 'Correct Number!';
    if (highscore < score) highscore = score;
  } else {
    if (guess > secretNum) messageElement.textContent = 'Too High :(';
    else messageElement.textContent = 'Too Low :(';
    score--;
  }
  console.log('Input:', guess);
  scoreElement.textContent = score;
  highscoreElement.textContent = highscore;

  if (score === 0) messageElement.textContent = 'You lost the game!';
};
document.querySelector('.check').addEventListener('click', gameLogic);
