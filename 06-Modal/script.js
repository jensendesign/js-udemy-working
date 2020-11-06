'use strict';

// ****** Start with hooking into elements on the page ******
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// ****** Function to remove class 'hidden' to show modal ******
// classes acting as "containers" to control the DOM
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// ****** Function to add class 'hidden' to hide modal ******
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// ****** Loop through three buttons and add click event ******
for (let i = 0; i < btnsOpenModal.length; i++)
  // calling function without invoking "()" so only works on click
  btnsOpenModal[i].addEventListener('click', openModal);

// ****** 'Hide' events for click handlers ******
// calling function without invoking "()" so only works on click
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// e is for the event from the browser
document.addEventListener('keydown', function (e) {
  // ".key" read of event and use "!" NOT Modal
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
