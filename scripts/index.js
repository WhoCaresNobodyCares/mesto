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

const imagePopup = document.querySelector('#imageModalPopup');
const imagePopupCloseButton = imagePopup.querySelector('.popup__close');
const imagePopupImage = imagePopup.querySelector('.popup__image');
const imagePopupCaption = imagePopup.querySelector('.popup__caption');

const configuration = {
  formClass: '.popup__form',
  inputClass: '.popup__input',
  submitClass: '.popup__submit',
  submitDisabledClass: 'popup__submit_disabled',
  errorVisibleClass: 'popup__error_visible',
  inputErrorClass: 'popup__input_error',
  popupErrorClass: '.popup__error',
};

initialArray.forEach(obj => {
  const card = new Card(obj, template);
  card.createCard(elements, 'append');
});

const editPopupFormValidator = new FormValidator(editPopupForm, configuration);
editPopupFormValidator.enableValidation();

const addPopupFormValidator = new FormValidator(addPopupForm, configuration);
addPopupFormValidator.enableValidation();

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

const resetPopup = (node, configuration) => {
  const popupInputs = node.querySelectorAll(configuration.inputClass);
  popupInputs.forEach(input => {
    input.classList.remove(configuration.inputErrorClass);
  });
  const popupErrors = node.querySelectorAll(configuration.popupErrorClass);
  popupErrors.forEach(error => {
    error.textContent = '';
  });
  const popupButton = node.querySelector(configuration.submitClass);
  popupButton.classList.add(configuration.submitDisabledClass);
  popupButton.disabled = true;
  return node;
};

const openEditPopup = node => {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  openPopup(resetPopup(node, configuration));
};

const openAddPopup = node => {
  addForm.reset();
  openPopup(resetPopup(node, configuration));
};

window.openImagePopup = (cloneImage, cloneTitle) => {
  imagePopupImage.src = cloneImage.src;
  imagePopupCaption.textContent = imagePopupImage.alt = cloneTitle.textContent;
  openPopup(imagePopup);
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

profileEditButton.addEventListener('click', openEditPopup.bind(this, editPopup));
profileAddButton.addEventListener('click', openAddPopup.bind(this, addPopup));
editPopupCloseButton.addEventListener('click', closePopup.bind(this, editPopup));
addPopupCloseButton.addEventListener('click', closePopup.bind(this, addPopup));
imagePopupCloseButton.addEventListener('click', closePopup.bind(this, imagePopup));
editPopupForm.addEventListener('submit', handleEditPopupSubmit);
addPopupForm.addEventListener('submit', handleAddPopupSubmit);
