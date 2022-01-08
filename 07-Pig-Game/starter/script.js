'use strict';

const btnNewGame = document.querySelector('.btn--new');
const btnRoleDice = document.querySelector('.btn--roll');

function resetGame() {
  resetPlayerScore(document.querySelector('.player--0'));
  resetPlayerScore(document.querySelector('.player--1'));
  resetPlayerCurrentScore(document.querySelector('.player--0'));
  resetPlayerCurrentScore(document.querySelector('.player--1'));
}

function resetPlayerScore(player) {
  player.querySelector('.score').textContent = 0;
}

function resetPlayerCurrentScore(player) {
  player.querySelector('.current-score').textContent = 0;
}

function roleDice() {
  const diceNum = getRandomNum(6);
  document.querySelector('.dice').src = `dice-${diceNum}.png`;
  if (diceNum > 1) updatePlayerCurrentScore(diceNum);
  else changeActivePlayer();
}

function getRandomNum(max) {
  return Math.floor(Math.random() * max) + 1;
}

function updatePlayerCurrentScore(score) {
  const activePlayer = document.querySelector('.player--active');
  const currScoreElement = activePlayer.querySelector('.current-score');
  currScoreElement.textContent =
    Number(currScoreElement.textContent) + Number(score);
}

function changeActivePlayer() {
  const player1 = document.querySelector('.player--0');
  const player2 = document.querySelector('.player--1');

  if (player1.classList.contains('player--active')) {
    handOverActivePlayer(player1, player2);
    resetPlayerCurrentScore(player1);
  } else {
    handOverActivePlayer(player2, player1);
    resetPlayerCurrentScore(player2);
  }
}

function handOverActivePlayer(oldActivePlayer, newActivePlayer) {
  oldActivePlayer.classList.remove('player--active');
  newActivePlayer.classList.add('player--active');
}

btnNewGame.addEventListener('click', resetGame);
btnRoleDice.addEventListener('click', roleDice);
