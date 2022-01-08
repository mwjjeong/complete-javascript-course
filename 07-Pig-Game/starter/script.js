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
  updatePlayerScore(diceNum);
}

function getRandomNum(max) {
  return Math.floor(Math.random() * max) + 1;
}

function updatePlayerScore(score) {
  const activePlayer = document.querySelector('.player--active');
  const currScoreElement = activePlayer.querySelector('.score');
  currScoreElement.textContent =
    Number(currScoreElement.textContent) + Number(score);
}

function changeActivePlayer() {
  const player1 = document.querySelector('.player--0');
  const player2 = document.querySelector('.player--1');

  if (player1.classList.contains('player--active'))
    handOverActivePlayer(player1, player2);
  else handOverActivePlayer(player2, player1);
}

function handOverActivePlayer(oldActivePlayer, newActivePlayer) {
  oldActivePlayer.classList.remove('player--active');
  newActivePlayer.classList.add('player--active');
}

btnNewGame.addEventListener('click', resetGame);
btnRoleDice.addEventListener('click', roleDice);
