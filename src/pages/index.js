import './index.css';

// ---

import {
  initialCardsArray,
  sectionConfig,
  cardConfig,
  userInfoConfig,
  popupConfig,
  formPopupConfig,
  imagePopupConfig,
  profileEditButton,
  profileAddButton,
  formValidatorConfig,
  profileName,
  profileDescription,
} from '../utils/variables.js';

// ---

import UserInfo from '../components/UserInfo.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import ImagePopup from '../components/ImagePopup.js';
import FormPopup from '../components/FormPopup.js';
import FormValidator from '../components/FormValidator.js';

// ---

const userInfo = new UserInfo(userInfoConfig);

// ---

const imagePopup = new ImagePopup(
  popupConfig.imagePopupId,
  popupConfig.popupCloseButtonClass,
  popupConfig.popupOpenedClass,
  imagePopupConfig.imageClass,
  imagePopupConfig.captionClass
);

imagePopup.setEventListeners();

function imagePopupOpener(image, title) {
  imagePopup.open(image, title);
}

function initialRenderer(section, element) {
  const card = new Card(element, imagePopupOpener, cardConfig).makeCard();
  section.append(card);
}

function newRenderer(section, element) {
  const card = new Card(element, imagePopupOpener, cardConfig).makeCard();
  section.prepend(card);
}

const elementsSection = new Section(initialRenderer, newRenderer, sectionConfig.containerSelectorId);

elementsSection.renderArray(initialCardsArray);

function editPopupFormSubmitHandler(submitValues) {
  userInfo.setInfo(submitValues.nameInput, submitValues.descriptionInput);
}

function addPopupFormSubmitHandler(submitValues) {
  elementsSection.renderCard({ name: submitValues.placeInput, link: submitValues.linkInput });
}

function formPopupSubmitter(event, submitValues) {
  event.preventDefault();
  event.target.id === 'editPopupForm'
    ? editPopupFormSubmitHandler(submitValues)
    : addPopupFormSubmitHandler(submitValues);
}

const editPopup = new FormPopup(
  popupConfig.editPopupId,
  popupConfig.popupCloseButtonClass,
  popupConfig.popupOpenedClass,
  formPopupConfig.editPopupFormId,
  formPopupConfig.formInputClass,
  formPopupSubmitter
);

const addPopup = new FormPopup(
  popupConfig.addPopupId,
  popupConfig.popupCloseButtonClass,
  popupConfig.popupOpenedClass,
  formPopupConfig.addPopupFormId,
  formPopupConfig.formInputClass,
  formPopupSubmitter
);

const editFormValidator = new FormValidator(formValidatorConfig.editFormId, formValidatorConfig);
const addFormValidator = new FormValidator(formValidatorConfig.addFormId, formValidatorConfig);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

editPopup.setEventListeners();
addPopup.setEventListeners();

profileEditButton.addEventListener('click', () => {
  editFormValidator.resetValidation();
  editPopup.setInputValues({ nameInput: profileName.textContent, descriptionInput: profileDescription.textContent });
  editPopup.open();
});

profileAddButton.addEventListener('click', () => {
  addFormValidator.resetValidation();
  addPopup.setInputValues({ placeInput: '', linkInput: '' });
  addPopup.open();
});
