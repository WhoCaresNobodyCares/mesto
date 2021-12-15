// *** IMPORTS

// import initial array
import { initArr } from './initArr.js';
// import card class
import { Card } from './Card.js';
// import form validation class
// !! import { FormValidator } from './FormValidator.js';

// *** VARIABLES

// find the template for cards
const temp = document.querySelector('#cardTemplate').content.querySelector('.card');

// find elements section
const elem = document.querySelector('#elements');

// find profile section & it's elements
const prof = document.querySelector('#profile');
const profNam = prof.querySelector('.profile__username');
const profDes = prof.querySelector('.profile__description');
const profEdt = prof.querySelector('.profile__edit');
const profAdd = prof.querySelector('.profile__add');

// find edit popup & it's elements
const edit = document.querySelector('#profileEditPopup');
const editCls = edit.querySelector('.popup__close');
const editFrm = document.forms.editForm;
const nameInp = editFrm.querySelector('#nameInput');
const descInp = editFrm.querySelector('#descriptionInput');

// find add popup & it's elements
const add = document.querySelector('#cardAddPopup');
const addCls = add.querySelector('.popup__close');
const addFrm = document.forms.addForm;
const plcInp = addFrm.querySelector('#placeInput');
const lnkInp = addFrm.querySelector('#linkInput');

const conf = {
  formClass: '.popup__form',
  inputClass: '.popup__input',
  submitClass: '.popup__submit',
  submitDisabledClass: 'popup__submit_disabled',
  errorVisibleClass: 'popup__error_visible',
  inputErrorClass: 'popup__input_error',
  popupErrorClass: '.popup__error',
};

// *** FUNCTIONS

const closeOver = e => {
  window.closePopup(e.target);
};

const closeEsc = e => {
  if (e.key === 'Escape') {
    window.closePopup(document.querySelector('.popup_opened'));
  }
};

window.openPopup = node => {
  node.addEventListener('click', closeOver);
  document.addEventListener('keydown', closeEsc);
  node.classList.add('popup_opened');
};

window.closePopup = node => {
  node.removeEventListener('click', closeOver);
  document.removeEventListener('keydown', closeEsc);
  node.classList.remove('popup_opened');
};

const openEdit = (node, conf) => {
  nameInp.value = profNam.textContent;
  descInp.value = profDes.textContent;
  window.openPopup(edit); // !!!
  // openPopup(resetPopup(node, conf));
};

const openAdd = (node, conf) => {
  addFrm.reset();
  window.openPopup(add); // !!!
  // openPopup(resetPopup(node, conf));
};

const handleEditSubmit = e => {
  e.preventDefault();
  profNam.textContent = nameInp.value;
  profDes.textContent = descInp.value;
  window.closePopup(edit);
};

const handleAddSubmit = e => {
  e.preventDefault();
  const obj = {
    name: '',
    link: '',
  };
  obj.name = placeInput.value;
  obj.link = linkInput.value;
  const card = new Card(obj, temp);
  card.create(elem, 'prepend');
  window.closePopup(add);
};

initArr.forEach(obj => {
  const card = new Card(obj, temp);
  card.create(elem, 'append');
});

// !!!
editFrm;
addFrm;

// *** EVENT-LISTENERS

profEdt.addEventListener('click', openEdit.bind(this, edit, conf));
profAdd.addEventListener('click', openAdd.bind(this, add, conf));
editCls.addEventListener('click', window.closePopup.bind(this, edit));
addCls.addEventListener('click', window.closePopup.bind(this, add));
editFrm.addEventListener('click', handleEditSubmit);
addFrm.addEventListener('click', handleAddSubmit);
