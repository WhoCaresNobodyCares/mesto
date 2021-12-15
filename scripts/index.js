import { initialArray } from './initialArray.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const template = document.querySelector('#cardTemplate').content.querySelector('.card');
const elements = document.querySelector('#elements');

const profile = document.querySelector('#profile');
const profileName = profile.querySelector('.profile__username');
const profileDescription = profile.querySelector('.profile__description');
const profileEditButton = profile.querySelector('.profile__edit');
const profileAddButton = profile.querySelector('.profile__add');

const editPopup = document.querySelector('#profileEditPopup');
const editPopupCloseButton = editPopup.querySelector('.popup__close');
const editPopupForm = document.forms.editForm;
const nameInput = editPopupForm.querySelector('#nameInput');
const descriptionInput = editPopupForm.querySelector('#descriptionInput');

const addPopup = document.querySelector('#cardAddPopup');
const addPopupCloseButton = addPopup.querySelector('.popup__close');
const addPopupForm = document.forms.addForm;
const placeInput = addPopupForm.querySelector('#placeInput');
const linkInput = addPopupForm.querySelector('#linkInput');

const closeOnOverlay = event => {
  closePopup(event.target);
};

const closeOnEscape = event => {
  if (event.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
};

const openPopup = node => {
  node.addEventListener('click', closeOnOverlay);
  document.addEventListener('keydown', closeOnEscape);
  node.classList.add('popup_opened');
};

const closePopup = node => {
  node.removeEventListener('click', closeOnOverlay);
  document.removeEventListener('keydown', closeOnEscape);
  node.classList.remove('popup_opened');
};

const openEditPopup = node => {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  openPopup(node);
};

const openAddPopup = node => {
  addForm.reset();
  openPopup(node);
};

const handleEditPopupSubmit = event => {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closePopup(editPopup);
};

const handleAddPopupSubmit = event => {
  event.preventDefault();
  const object = {
    name: '',
    link: '',
  };
  object.name = placeInput.value;
  object.link = linkInput.value;
  const card = new Card(object, template);
  card.createCard(elements, 'prepend');
  closePopup(addPopup);
};

initialArray.forEach(obj => {
  const card = new Card(obj, template);
  card.createCard(elements, 'append');
});

profileEditButton.addEventListener('click', openEditPopup.bind(this, editPopup));
profileAddButton.addEventListener('click', openAddPopup.bind(this, addPopup));

editPopupCloseButton.addEventListener('click', closePopup.bind(this, editPopup));
addPopupCloseButton.addEventListener('click', closePopup.bind(this, addPopup));

editPopupForm.addEventListener('submit', handleEditPopupSubmit);
addPopupForm.addEventListener('submit', handleAddPopupSubmit);
