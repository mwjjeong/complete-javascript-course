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
const scoreElement = document.querySelector('.score');
const highscoreElement = document.querySelector('.highscore');
const numberElement = document.querySelector('.number');
const bodyElement = document.querySelector('body');

const initMessage = messageElement.textContent;
const initScore = Number(scoreElement.textContent);
const initHighscore = Number(highscoreElement.textContent);
const initBodyColor = bodyElement.style.backgroundColor;
const initNumberText = numberElement.textContent;

let score = initScore;
let highscore = initHighscore;
let secretNum = Math.trunc(Math.random() * 20) + 1;

const guessNumber = () => {
  if (score > 0) {
    const guess = Number(guessInput.value);
    let message;

    if (!guess) {
      message = 'No number!';
    } else if (guess === secretNum) {
      message = 'Correct Number!';
      bodyElement.style.backgroundColor = '#60b347';
      numberElement.textContent = secretNum;
      if (highscore < score) highscore = score;
    } else {
      score--;
      if (score === 0) message = 'You lost the game!';
      else message = guess > secretNum ? 'Too High :(' : 'Too Low :(';
    }

    scoreElement.textContent = score;
    highscoreElement.textContent = highscore;
    messageElement.textContent = message;
  }
};

const reset = () => {
  messageElement.textContent = initMessage;
  bodyElement.style.backgroundColor = initBodyColor;
  scoreElement.textContent = initScore;
  numberElement.textContent = initNumberText;
  guessInput.value = '';

  score = initScore;
  secretNum = Math.trunc(Math.random() * 20) + 1;
};

document.querySelector('.check').addEventListener('click', guessNumber);
document.querySelector('.again').addEventListener('click', reset);
