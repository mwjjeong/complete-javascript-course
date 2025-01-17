'use strict';

const btnNewGame = document.querySelector('.btn--new');
const btnRoleDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
let finished = false;

btnNewGame.addEventListener('click', resetGame);
btnRoleDice.addEventListener('click', () => {
  if (!finished) roleDice();
});
btnHold.addEventListener('click', () => {
  if (!finished) hold();
});
resetGame();

function resetGame() {
  hiddenDice();
  resetPlayerScore(document.querySelector('.player--0'));
  resetPlayerScore(document.querySelector('.player--1'));
  resetPlayerCurrentScore(document.querySelector('.player--0'));
  resetPlayerCurrentScore(document.querySelector('.player--1'));
  resetPlayerStatus();
  finished = false;
}

function hiddenDice() {
  if (!dice.classList.contains('hidden')) dice.classList.add('hidden');
}

function showDice() {
  if (dice.classList.contains('hidden')) dice.classList.remove('hidden');
}

function resetPlayerScore(player) {
  player.querySelector('.score').textContent = 0;
}

function resetPlayerCurrentScore(player) {
  player.querySelector('.current-score').textContent = 0;
}

function resetPlayerStatus() {
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
  changeActivePlayer();
}

function roleDice() {
  showDice();
  const diceNum = getRandomNum(6);
  dice.src = `dice-${diceNum}.png`;
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
  const activePlayerId = isActive(document.querySelector('.player--0')) ? 0 : 1;
  const nonActivePlayerId = activePlayerId === 0 ? 1 : 0;
  const activePlayer = document.querySelector(`.player--${activePlayerId}`);
  const nonActivePlayer = document.querySelector(
    `.player--${nonActivePlayerId}`
  );
  handOverActivePlayer(activePlayer, nonActivePlayer);
  resetPlayerCurrentScore(activePlayer);
}

function isActive(player) {
  return player.classList.contains('player--active');
}

function handOverActivePlayer(oldActivePlayer, newActivePlayer) {
  oldActivePlayer.classList.remove('player--active');
  newActivePlayer.classList.add('player--active');
}

function hold() {
  const activePlayer = document.querySelector('.player--active');
  const totalScore = calculateTotalScore(activePlayer);
  updatePlayerScore(activePlayer, totalScore);

  if (totalScore >= 100) finishGame(activePlayer);
  else changeActivePlayer();
}

function calculateTotalScore(player) {
  const currScoreElement = player.querySelector('.current-score');
  const scoreElement = player.querySelector('.score');
  return (
    Number(currScoreElement.textContent) + Number(scoreElement.textContent)
  );
}

function updatePlayerScore(player, score) {
  const scoreElement = player.querySelector('.score');
  scoreElement.textContent = score;
}

function finishGame(player) {
  hiddenDice();
  player.classList.add('player--winner');
  console.log(`Finish! ${player.querySelector('.name').textContent} won!`);
  finished = true;
}
