import './index.css';

// ---

import {
  initialCardsArray,
  cardConfig,
  popupConfig,
  imagePopupConfig,
  formPopupConfig,
  userInfoConfig,
  sectionConfig,
  formValidatorConfig,
  profileName,
  profileDescription,
  profileEditButton,
  profileAddButton,
} from '../utils/variables.js';

// ---

import Card from '../components/Card.js';
import ImagePopup from '../components/ImagePopup.js';
import FormPopup from '../components/FormPopup.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
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

// ---

function handleEditorPopupSubmit(submitValues) {
  userInfo.setInfo(submitValues.nameInput, submitValues.descriptionInput);
}

function handleAdditionPopupSubmit(submitValues) {
  elementsSection.renderCard({ name: submitValues.placeInput, link: submitValues.linkInput });
}

const editorPopup = new FormPopup(
  popupConfig.editPopupId,
  popupConfig.popupCloseButtonClass,
  popupConfig.popupOpenedClass,
  formPopupConfig.editPopupFormId,
  formPopupConfig.formInputClass,
  handleEditorPopupSubmit
);

const additionPopup = new FormPopup(
  popupConfig.addPopupId,
  popupConfig.popupCloseButtonClass,
  popupConfig.popupOpenedClass,
  formPopupConfig.addPopupFormId,
  formPopupConfig.formInputClass,
  handleAdditionPopupSubmit
);

imagePopup.setEventListeners();
editorPopup.setEventListeners();
additionPopup.setEventListeners();

// ---

function openPopupImage(image, title) {
  imagePopup.open(image, title);
}

function createNewCard(element) {
  return new Card(element, openPopupImage, cardConfig).makeCard();
}

function renderInitial(element) {
  elementsSection.appendCard(createNewCard(element));
}

function renderNew(element) {
  elementsSection.prependCard(createNewCard(element));
}

const elementsSection = new Section(renderInitial, renderNew, sectionConfig.containerSelectorId);

elementsSection.renderArray(initialCardsArray);

// ---

const editFormValidator = new FormValidator(formValidatorConfig.editFormId, formValidatorConfig);
const addFormValidator = new FormValidator(formValidatorConfig.addFormId, formValidatorConfig);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

// ---

profileEditButton.addEventListener('click', () => {
  editFormValidator.resetValidation();
  editorPopup.setInputValues({ nameInput: profileName.textContent, descriptionInput: profileDescription.textContent });
  editorPopup.open();
});

profileAddButton.addEventListener('click', () => {
  addFormValidator.resetValidation();
  additionPopup.open();
});
