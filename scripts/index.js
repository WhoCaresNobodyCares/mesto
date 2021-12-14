// IMPORTS
import { initialArray } from './initialArray.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

// VARIABLES
const template = document.querySelector('#cardTemplate').content.querySelector('.card');
const elements = document.querySelector('#elements');

// open / close
window.openPopup = node => {
  // !! node.addEventListener('click', closeOverlay);
  // !! document.addEventListener('keydown', closeEsc);
  node.classList.add('popup_opened');
};

// CARD MODULE

initialArray.forEach(object => {
  const card = new Card(object, template);
  card.createCard(elements, 'append');
});

// FORM VALIDATOR MODULE
