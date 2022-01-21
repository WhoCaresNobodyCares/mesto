import './index.css';

// ---

import {
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
  apiConfig,
} from '../utils/variables.js';

// ---

import Card from '../components/Card.js';
import ImagePopup from '../components/ImagePopup.js';
import FormPopup from '../components/FormPopup.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import Api from '../components/Api.js';

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
  api.setUserInformation(submitValues.nameInput, submitValues.descriptionInput);
  userInfo.setInfo(submitValues.nameInput, submitValues.descriptionInput);
}

function handleAdditionPopupSubmit(submitValues) {
  api.addNewCard(submitValues.placeInput, submitValues.linkInput);
  elementsSection.renderCard({ name: submitValues.placeInput, link: submitValues.linkInput });
}

function handleUpdatePopupSubmit(submitValues) {
  console.log('update');
}

function handleConfirmationPopupSubmit(submitValues) {
  console.log('confirm');
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

const updatePopup = new FormPopup(
  popupConfig.updatePopupId,
  popupConfig.popupCloseButtonClass,
  popupConfig.popupOpenedClass,
  formPopupConfig.updatePopupFormId,
  formPopupConfig.formInputClass,
  handleUpdatePopupSubmit
);

const confirmationPopup = new FormPopup(
  popupConfig.confirmPopupId,
  popupConfig.popupCloseButtonClass,
  popupConfig.popupOpenedClass,
  formPopupConfig.confirmPopupFormId,
  formPopupConfig.formInputClass,
  handleConfirmationPopupSubmit
);

imagePopup.setEventListeners();
editorPopup.setEventListeners();
additionPopup.setEventListeners();
updatePopup.setEventListeners();
confirmationPopup.setEventListeners();

// ---

function removeButtonClickHandler() {
  confirmationPopup.open();
}

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

// ---

const editFormValidator = new FormValidator(formValidatorConfig.editFormId, formValidatorConfig);
const addFormValidator = new FormValidator(formValidatorConfig.addFormId, formValidatorConfig);

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
updateFormValidator.enableValidation();
confirmFormValidator.enableValidation();

// ---

const api = new Api(apiConfig.url, apiConfig.token);

api.getInitialCardsArray().then(initialCardsArray => {
  elementsSection.renderArray(initialCardsArray);
});

api.getUserInformation().then(userInfoObject => {
  userInfo.setInfo(userInfoObject.name, userInfoObject.about);
});
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

profileOverlay.addEventListener('click', () => {
  updateFormValidator.resetValidation();
  updatePopup.open();
});
