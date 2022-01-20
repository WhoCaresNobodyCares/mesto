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
  profileOverlay,
} from '../utils/variables.js';

// ---

import Card from '../components/Card.js';
import ImagePopup from '../components/ImagePopup.js';
import FormPopup from '../components/FormPopup.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';

// !!! TOKEN ID
// Токен: 7a0a101a-b2ca-4848-ae3c-3b79f13c4cae
// Идентификатор группы: cohort-34

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

// *** new submit handlers

function handleUpdatePopupSubmit(submitValues) {
  console.log('update');
}

function handleConfirmPopupSubmit(submitValues) {
  console.log('confirm');
}

// *** remove button click handler

function removeButtonClickHandler() {
  confirmPopup.open();
}

// *** new popups

const updatePopup = new FormPopup(
  popupConfig.updatePopupId,
  popupConfig.popupCloseButtonClass,
  popupConfig.popupOpenedClass,
  formPopupConfig.updatePopupFormId,
  formPopupConfig.formInputClass,
  handleUpdatePopupSubmit
);

const confirmPopup = new FormPopup(
  popupConfig.confirmPopupId,
  popupConfig.popupCloseButtonClass,
  popupConfig.popupOpenedClass,
  formPopupConfig.confirmPopupFormId,
  formPopupConfig.formInputClass,
  handleConfirmPopupSubmit
);

imagePopup.setEventListeners();
editorPopup.setEventListeners();
additionPopup.setEventListeners();

// *** new popups event listeners

updatePopup.setEventListeners();
confirmPopup.setEventListeners();

// ---

function openPopupImage(image, title) {
  imagePopup.open(image, title);
}

function createNewCard(element) {
  return new Card(element, openPopupImage, cardConfig, removeButtonClickHandler).makeCard();
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

// *** new form validators

const updateFormValidator = new FormValidator(
  formValidatorConfig.updateFormId,
  formValidatorConfig
);
const confirmFormValidator = new FormValidator(
  formValidatorConfig.confirmFormId,
  formValidatorConfig
);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

// *** new form validators enabled
updateFormValidator.enableValidation();
confirmFormValidator.enableValidation();

// ---

profileEditButton.addEventListener('click', () => {
  editFormValidator.resetValidation();
  editorPopup.setInputValues({
    nameInput: profileName.textContent,
    descriptionInput: profileDescription.textContent,
  });
  editorPopup.open();
});

profileAddButton.addEventListener('click', () => {
  addFormValidator.resetValidation();
  additionPopup.open();
});

// *** profile overlay event listener

profileOverlay.addEventListener('click', () => {
  updateFormValidator.resetValidation();
  updatePopup.open();
});
