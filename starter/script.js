'use strict';

// ===========================================
// Section 1: DOM Element Selection & Caching
// ===========================================

// Select the modal element
const modalEl = document.querySelector('.modal');

// Select the overlay element
const overlayEl = document.querySelector('.overlay');

// Select the close button
const btnCloseModalEl = document.querySelector('.close-modal');

// Select ALL the open buttons
const btnsOpenModalEl = document.querySelectorAll('.show-modal');

// Verify in console
console.log('Open buttons:', btnsOpenModalEl.length);

// ==================================================
// Section 2: Open/Close Helpers with Class Toggling
// ==================================================

const openModal = function () {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
};

const closeModal = function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
};

// ======================================================
// Section 3: Connecting Everything with Event Listeners
// ======================================================

// Open modal on each button click
btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));

// Close modal when clicking X
btnCloseModalEl.addEventListener('click', closeModal);

// Close modal when clicking overlay
overlayEl.addEventListener('click', closeModal);
