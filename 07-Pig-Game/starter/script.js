'use strict';

const btnNewGame = document.querySelector('.btn--new');

function resetPlayerScore(player) {
  player.querySelector('.score').textContent = 0;
  player.querySelector('.current-score').textContent = 0;
}

function resetGame() {
  resetPlayerScore(document.querySelector('.player--0'));
  resetPlayerScore(document.querySelector('.player--1'));
}

btnNewGame.addEventListener('click', resetGame);
