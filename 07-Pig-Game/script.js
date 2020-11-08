'use strict';

//
// **** Select HTML Elements to Create Hooks ****
const player0El = document.querySelector('.player--0'); // player "1" section
const player1El = document.querySelector('.player--1'); // player "2" section
const score0El = document.querySelector('#score--0'); // top-line score
const score1El = document.querySelector('#score--1');
let current0El = document.getElementById('current--0'); // current roll score
let current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice'); // dice image
const btnHold = document.querySelector('.btn--hold'); // Hold btn
const btnRoll = document.querySelector('.btn--roll'); // Roll btn
const btnNew = document.querySelector('.btn--new'); // New/Refresh Btn

//set init vars
let scores, activePlayer, currentScore, playing;

/**
 * Function to init or reset game
 */
const init = function () {
  scores = [0, 0]; // Top-line score array
  activePlayer = 0; // current active player
  currentScore = 0; // current running dice score
  playing = true; // is game active

  score0El.textContent = 0; // scores to zero
  score1El.textContent = 0;
  diceEl.classList.add('hidden'); // hide dice
  activePlayer = 0; // current active player
  currentScore = 0; // current running dice score
  playing = true; // is game active

  current0El.textContent = 0;
  current1El.textContent = 0;
  //   scores.length = 0;
  //   scores.push(0, 0);
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
};

// call init
init();

/**
 * Switching between the players
 * @param  activePlayer // which player is playing
 * NOTE: activePlayer = 0 is first player (player 1)
 * @param  currentScore  // running "dice score"
 */
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

/**
 * Function roll the dice
 * @param  {boolean} playing // is the game over or playable
 * @param  {function} switchPlayer() // call to switch to other player
 */
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1; // generate random dice roll
    diceEl.classList.remove('hidden'); // show dice class
    diceEl.src = `dice-${dice}.png`; //display number dice

    if (dice !== 1) {
      currentScore += dice; // add to current score
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      //switch player
      switchPlayer();
    }
  }
});

/**
 * Function to allow player to 'capture' their score
 * @param  {boolean} playing // is the game over or playable
 * @param  {function} switchPlayer() // call to switch to other player
 */
btnHold.addEventListener('click', function () {
  if (playing) {
    // add score to current player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // **** Winning Condition ****
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document.getElementById(`name--${activePlayer}`).textContent = 'Winner';
    } else {
      switchPlayer();
    }
  }
});

/**
 * Function to reset game
 */
btnNew.addEventListener('click', init);
