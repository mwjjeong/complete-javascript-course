'use strict';

const btnNewGame = document.querySelector('.btn--new');
const btnRoleDice = document.querySelector('.btn--roll');
function resetPlayerScore(player) {
  player.querySelector('.score').textContent = 0;
  player.querySelector('.current-score').textContent = 0;
}

function resetGame() {
  resetPlayerScore(document.querySelector('.player--0'));
  resetPlayerScore(document.querySelector('.player--1'));
}

function roleDice() {
  const diceNum = getRandomNum(6);
  document.querySelector('.dice').src = `dice-${diceNum}.png`;
}

function getRandomNum(max) {
  return Math.floor(Math.random() * max) + 1;
}

btnNewGame.addEventListener('click', resetGame);
btnRoleDice.addEventListener('click', roleDice);
