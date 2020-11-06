'use strict';

// ****** Generate the secret number ******
let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

// ****** Game Score -  High Score - Answer ******
let gameScore = 20;
document.querySelector('.score').textContent = gameScore;
let highScore = 0;
document.querySelector('.highscore').textContent = 0;

// ****** Hide Answer Function ******
const hideValue = function (hide) {
  document.querySelector('.number').textContent =
    hide === 'hide' ? '?' : secretNumber;
};

// ****** Function to pass styles ******
const adjustStyles = function (background, width, color) {
  document.querySelector('body').style.backgroundColor = background;
  document.querySelector('.number').style.width = width;
  document.querySelector('.number').style.color = color;
};

/**
 * @desc Main game function acting on click of "Check" button
 * @desc Checks and returns state for win, lose, or steady state
 * @param string $textContent - the message to be displayed
 * @param number $guess - current number guessed
 * @param number $gameScore - current game score
 * @param number $highScore - current highest score
 */
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // --- change from string to a number

  // ****** IF NO NUMBER ******
  if (!guess) {
    document.querySelector('.message').textContent = '😡 No Number Selected';

    // ****** IF WINNING MATCH ******
  } else if (guess === secretNumber && gameScore > 0) {
    document.querySelector('.message').textContent = '🐥 Winner Chicken Dinner';
    hideValue('show');
    adjustStyles('#60b347', '45rem', '#60b347');

    if (highScore < gameScore) {
      highScore = gameScore; // --- Set High Score on Win
      document.querySelector('.highscore').textContent = highScore;
    }
    // ****** IF WRONG GUESS ******
  } else if (guess !== secretNumber && gameScore > 0) {
    gameScore--; // --- decrease score by 1
    document.querySelector('.score').textContent = gameScore;
    document.querySelector('.message').textContent =
      guess > secretNumber ? '🤦‍♀️ Too High' : '👻 Too Low'; // --- too high or low
  }
  // ****** YOU LOSE - Score goes to Zero ******
  if (gameScore === 0) {
    document.querySelector('.message').textContent = '😥 You Lose';
    hideValue('show');
    adjustStyles('red', '45rem', 'red');
  }
});

/**
 * @desc Resets game to play again without losing info
 */
document.querySelector('.again').addEventListener('click', function () {
  gameScore = 20;
  document.querySelector('.score').textContent = gameScore;
  hideValue('hide');
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start Guessing ...'; // --- reset strings
  adjustStyles('#111111', '15rem', '#333333');
  document.querySelector('.guess').value = '';
  console.clear();
  console.log(secretNumber);
});
