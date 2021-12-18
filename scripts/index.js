import { initialArray } from './initialArray.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

// ---

const template = document.querySelector('#cardTemplate').content.querySelector('.card');
const elements = document.querySelector('#elements');

// ---

const profile = document.querySelector('#profile');
const [profileName, profileDescription] = [profile.querySelector('.profile__username'), profile.querySelector('.profile__description')];

const [profileEditButton, profileAddButton] = [profile.querySelector('.profile__edit'), profile.querySelector('.profile__add')];

// ---

const editPopup = document.querySelector('#profileEditPopup');
const editPopupCloseButton = editPopup.querySelector('.popup__close');

const editPopupForm = document.forms.editForm;
const [nameInput, descriptionInput] = [editPopupForm.querySelector('#nameInput'), editPopupForm.querySelector('#descriptionInput')];

// ---

const addPopup = document.querySelector('#cardAddPopup');
const addPopupCloseButton = addPopup.querySelector('.popup__close');

const addPopupForm = document.forms.addForm;
const [placeInput, linkInput] = [addPopupForm.querySelector('#placeInput'), addPopupForm.querySelector('#linkInput')];

// ---

const imagePopup = document.querySelector('#imageModalPopup');
const imagePopupCloseButton = imagePopup.querySelector('.popup__close');

const [imagePopupImage, imagePopupCaption] = [imagePopup.querySelector('.popup__image'), imagePopup.querySelector('.popup__caption')];

// ---

const config = {
  popupInput: '.popup__input',
  popupSubmit: '.popup__submit',
  popupSubmitDisabled: 'popup__submit_disabled',
  popupErrorVisible: 'popup__error_visible',
  popupInputError: 'popup__input_error',
};

// ---

const prepareCard = object => new Card(object, template).createCard();
const insertCard = (node, method) => elements[method](node);

// ---

const closeOnEscape = event => event.key === 'Escape' && closePopup(document.querySelector('.popup_opened'));
const closeOnOverlay = event => event.target.classList.contains('popup_opened') === true && closePopup(event.target);

// ---

const addPopupEventListeners = node => {
  node.addEventListener('click', closeOnOverlay);
  document.addEventListener('keydown', closeOnEscape);
  return node;
};

const openPopup = node => addPopupEventListeners(node).classList.add('popup_opened');

// ---

const removePopupEventListeners = node => {
  node.removeEventListener('click', closeOnOverlay);
  document.removeEventListener('keydown', closeOnEscape);
  return node;
};

const closePopup = node => removePopupEventListeners(node).classList.remove('popup_opened');

// ---

initialArray.forEach(object => insertCard(prepareCard(object), 'append'));

// ---

const editPopupFormValidator = new FormValidator(editPopupForm, config);
editPopupFormValidator.enableValidation();

const addPopupFormValidator = new FormValidator(addPopupForm, config);
addPopupFormValidator.enableValidation();

// ---

const prepareEditPopup = () => {
  editPopupFormValidator.resetValidation();
  [nameInput.value, descriptionInput.value] = [profileName.textContent, profileDescription.textContent];
};

const openEditPopup = node => {
  prepareEditPopup();
  openPopup(node);
};

// ---

const prepareAddPopup = () => addPopupFormValidator.resetValidation();

const openAddPopup = node => {
  prepareAddPopup();
  openPopup(node);
};

// ---

const prepareImagePopup = (image, title) =>
  ([imagePopupImage.src, imagePopupCaption.textContent, imagePopupImage.alt] = [image.src, title.textContent, title.textContent]);

window.openImagePopup = (image, title) => {
  prepareImagePopup(image, title);
  openPopup(imagePopup);
};

// ---

const insertProfileInformation = () =>
  ([profileName.textContent, profileDescription.textContent] = [nameInput.value, descriptionInput.value]);

const handleEditPopupSubmit = event => {
  event.preventDefault();
  insertProfileInformation();
  closePopup(editPopup);
};

// ---

const prepareObject = () => ({ name: `${placeInput.value}`, link: `${linkInput.value}` });

const handleAddPopupSubmit = event => {
  event.preventDefault();
  insertCard(prepareCard(prepareObject()), 'prepend');
  closePopup(addPopup);
};

profileEditButton.addEventListener('click', openEditPopup.bind(this, editPopup));
profileAddButton.addEventListener('click', openAddPopup.bind(this, addPopup));
editPopupCloseButton.addEventListener('click', closePopup.bind(this, editPopup));
addPopupCloseButton.addEventListener('click', closePopup.bind(this, addPopup));
imagePopupCloseButton.addEventListener('click', closePopup.bind(this, imagePopup));
editPopupForm.addEventListener('submit', handleEditPopupSubmit);
addPopupForm.addEventListener('submit', handleAddPopupSubmit);
