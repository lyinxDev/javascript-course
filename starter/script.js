// 'use strict';

// // ===========================================
// // Section 1: DOM Element Selection & Caching
// // ===========================================

// // Select the modal element
// const modalEl = document.querySelector('.modal');

// // Select the overlay element
// const overlayEl = document.querySelector('.overlay');

// // Select the close button
// const btnCloseModalEl = document.querySelector('.close-modal');

// // Select ALL the open buttons
// const btnsOpenModalEl = document.querySelectorAll('.show-modal');

// // Verify in console
// console.log('Open buttons:', btnsOpenModalEl.length);

// // ==================================================
// // Section 2: Open/Close Helpers with Class Toggling
// // ==================================================

// const openModal = function () {
//   modalEl.classList.remove('hidden');
//   overlayEl.classList.remove('hidden');
// };

// const closeModal = function () {
//   modalEl.classList.add('hidden');
//   overlayEl.classList.add('hidden');
// };

// // ======================================================
// // Section 3: Connecting Everything with Event Listeners
// // ======================================================

// // Open modal on each button click
// btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));

// // Close modal when clicking X
// btnCloseModalEl.addEventListener('click', closeModal);

// // Close modal when clicking overlay
// overlayEl.addEventListener('click', closeModal);

'use strict';

// ==============
// DOM Selections
// ==============
const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const btnCloseModalEl = document.querySelector('.close-modal');
const btnsOpenModalEl = document.querySelectorAll('.show-modal');

// ================
// Focus Management
// ================
let lastFocusedButton = null;

// ================
// Helper Functions
// ================
const openModal = function () {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');

  // Move focus to modal
  modalEl.focus();

  // Store last focused element (the button that opened modal)
  lastFocusedButton = document.activeElement;
};

const closeModal = function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');

  // Restore focus to last focused button
  if (lastFocusedButton) {
    lastFocusedButton.focus();
  }
};

// ===============
// Event Listeners
// ===============

// Open modal on button click
btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));

// Close modal on "X" click
btnCloseModalEl.addEventListener('click', closeModal);

// Close modal on overlay click
overlayEl.addEventListener('click', closeModal);

// Keyboard: ESC closes modal only if it's visible
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    closeModal();
  }
});

// ========================
// Accessibility Attributes
// ========================
modalEl.setAttribute('role', 'dialog');
modalEl.setAttribute('aria-modal', 'true');
btnCloseModalEl.setAttribute('aria-label', 'Close modal');
