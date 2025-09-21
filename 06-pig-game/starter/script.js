'use strict';

console.log('=== PIG GAME DEVELOPMENT: FOUNDATION & DICE ROLLING ===');

console.log('Pig Game project ready!');

// ====================
// GAME STATE VARIABLES
// ====================
let scores, currentScore, activePlayer, playing;

// ==================
// ELEMENT SELECTIONS
// ==================
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');

// =========================
// ENHANCE THE INIT FUNCTION
// =========================
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

// =======================
// ROLL DICE FUNCTIONALITY
// =======================
btnRoll.addEventListener('click', function () {
  if (playing) {
  }
});

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
  }
});

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
  }
});

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
    }
  }
});

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch player logic (simplified for Hour 1)
      currentScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent = 0;
    }
  }
});

// ==================
// TESTING GAME STATE
// ==================
console.log('Scores:', scores);
console.log('Current Score:', currentScore);
console.log('Active Player:', activePlayer);
console.log('Playing:', playing);

// ======================
// SWITCH PLAYER FUNCTION
// ======================
const switchPlayer = function () {
  // Reset current score for the active player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  // Reset currentScore variable
  currentScore = 0;
  // Switch to the other player
  activePlayer = activePlayer === 0 ? 1 : 0;
  // Toggle the active class on both players
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// ==============================
// UPDATE ROLL DICE FUNCTIONALITY
// ==============================
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// ============================
// IMPLEMENT HOLD FUNCTIONALITY
// ============================
const btnHold = document.querySelector('.btn--hold');

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    switchPlayer();
  }
});

// ==========================
// TEST THE VISUAL INDICATORS
// ==========================
console.log(
  'Player 0 has active class:',
  player0El.classList.contains('player--active')
);
console.log(
  'Player 1 has active class:',
  player1El.classList.contains('player--active')
);

// =========================
// ADD GAME STATE VALIDATION
// =========================
btnHold.addEventListener('click', function () {
  if (playing && currentScore > 0) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    switchPlayer();
  }
});

// ===========================
// TEST CODE !!! ✧｡٩(ˊᗜˋ )و✧*｡
// ===========================
console.log('Scores:', scores);
console.log('Current Score:', currentScore);
console.log('Active Player:', activePlayer);
console.log('Playing:', playing);
console.log('Player 0 active:', player0El.classList.contains('player--active'));
console.log('Player 1 active:', player1El.classList.contains('player--active'));

// to ask ! why is this game called 'Pig Game'? There's no pig anywhere :D

// =============================================
// ADD WIN CONDITION TO CHECK HOLD FUNCTIONALITY
// =============================================

// Enhanced hold functionality with win condition and validation
btnHold.addEventListener('click', function () {
  if (playing && currentScore > 0) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

// ======================
// TEST THE WIN CONDITION
// ======================
console.log('Current scores:', scores);
console.log('Win condition met:', scores[activePlayer] >= 100);
console.log('Game playing:', playing);

// ===================
// ADD NEW GAME BUTTON
// ===================
const btnNew = document.querySelector('.btn--new');
btnNew.addEventListener('click', init);

// ======================
// TEST !!! ✧｡٩(ˊᗜˋ )و✧*｡
// ======================
console.log('Game reset - scores:', scores);
console.log('Game reset - playing:', playing);
console.log('Game reset - active player:', activePlayer);

// Tested the Game ! It works properly ദ്ദി(｡•̀ ,<)~✩‧₊
