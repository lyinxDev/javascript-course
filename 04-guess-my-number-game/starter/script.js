'use strict';

// DOM Element Selection
const messageEl = document.querySelector('.message');
console.log(messageEl);
console.log(messageEl.textContent);
// messageEl.textContent = 'Hello from Javascript';

const scoreEl = document.querySelector('.score');
console.log('Score element:', scoreEl);
// scoreEl.textContent = '50 ';

const numberEl = document.querySelector('.number');
// numberEl.textContent = 15;

const highschoreEl = document.querySelector('.highscore');
// highschoreEl.textContent = 100;

const guessEl = document.querySelector('.guess');
// guessEl.value = 12;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Secret number:', secretNumber);

// track the current score // this is your current score
let score = 20;

let highscore = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

console.log('Game State Initialized!');

// Section 3

// Basic Game Logic

document.querySelector('.check').addEventListener('click', function () {
  console.log('Check button clicked!');
  const guess = Number(document.querySelector('.guess').value);
  console.log('Player guessed:', guess);

  // check if our guess input value is empty
  if (!guess) {
    document.querySelector('.message').textContent =
      '🙄 Please input a number!';
    return;
  }

  if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent =
      '😤 Number must be between 1 and 20 !!';
    return;
  }

  if (guess == secretNumber) {
    console.log('Your Guess is Corect!');
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.message').textContent = '🌟 You have Won !!';
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;
    document.body.style.backgroundColor = '#a7c957';
  } else if (guess > secretNumber) {
    console.log('Too High!');
    document.querySelector('.message').textContent = '🤪 Too High !!!';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      document.querySelector('.message').textContent =
        '🫵😂 You lost! Press AGAIN to Restart';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
      document.body.style.backgroundColor = '#9e2a2b';
      document.querySelector('.message').textContent = '😅 Game Over!';
      document.querySelector('.guess').value = '';
    }
  } else if (guess < secretNumber) {
    console.log('Too Low!');
    document.querySelector('.message').textContent = '😫 Too Low !!!';
    score--;
    document.querySelector('.score').textContent = score;
  }
  if (score < 1) {
    document.querySelector('.message').textContent =
      '🫵😂 You lost! Press AGAIN to Restart';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;
    document.body.style.backgroundColor = '#9e2a2b';
    document.querySelector('.message').textContent = '😅 Game Over!';
    document.querySelector('.guess').value = '';
  }
});

////////////////////////////////////
// Game restart - reset everything for new game

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log('NEW Secret number is:', secretNumber);

  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;
  document.body.style.backgroundColor = '';
});
