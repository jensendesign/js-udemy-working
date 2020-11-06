'use strict';

/*
console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.number').textContent);
console.log(document.querySelector('.score').textContent);
console.log(document.querySelector('.guess').value);

document.querySelector('.message').textContent = '🎉 Correct Answer!';
document.querySelector('.number').textContent = 14;
document.querySelector('.score').textContent = 39;
document.querySelector('.guess').value = 11;

console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.number').textContent);
console.log(document.querySelector('.score').textContent);
console.log(document.querySelector('.guess').value);
*/

// --- Generate the secret number ---
let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

// --- Set Score to 20
let gameScore = 20;
document.querySelector('.score').textContent = gameScore;

// --- Set High Score to 0
let highScore = 0;
document.querySelector('.highscore').textContent = 0;

// --- Display in the interface
document.querySelector('.number').textContent = '?';

// --- Listen for click on button - function
document.querySelector('.check').addEventListener('click', function () {
  // --- get input and change from string to a number ---
  const guess = Number(document.querySelector('.guess').value);

  // --- First handle if no number ---
  if (!guess) {
    document.querySelector('.message').textContent = '😡 No Number Selected';
    // --- Handle if winning match ---
  } else if (guess === secretNumber && gameScore > 0) {
    document.querySelector('.message').textContent = '🐥 Winner Chicken Dinner';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '45rem';
    document.querySelector('.number').style.color = '#60b347';
    // --- Set High Score on Win ---
    if (highScore < gameScore) {
      highScore = gameScore;
      document.querySelector('.highscore').textContent = highScore;
    }
    // --- Handle high guess ---
  } else if (guess > secretNumber && gameScore > 0) {
    // --- decrease score by 1 ---
    gameScore--;
    document.querySelector('.score').textContent = gameScore;
    document.querySelector('.message').textContent = '🤦‍♀️ Too High';
    // --- Handle all others - lower ---
  } else if (guess < secretNumber && gameScore > 0) {
    // --- decrease score by 1 ---
    gameScore--;
    document.querySelector('.score').textContent = gameScore;
    document.querySelector('.message').textContent = '👻 Too Low';
  }
  // --- You lose -------------
  if (gameScore === 0) {
    document.querySelector('.message').textContent = '😥 You Lose';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.number').style.width = '45rem';
    document.querySelector('.number').style.color = 'red';
  }
});
// --- RESET button - function
document.querySelector('.again').addEventListener('click', function () {
  gameScore = 20;
  document.querySelector('.score').textContent = gameScore;
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.clear();
  console.log(secretNumber);
  document.querySelector('body').style.backgroundColor = '#111111';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.color = '#333333';
  document.querySelector('.message').textContent = 'Start Guessing ...';
  document.querySelector('.guess').value = '';
});
