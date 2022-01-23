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

const api = new Api(apiConfig.url, apiConfig.token);

function handleApiErrors(error) {
  console.log(`Something went wrong - ${error}`);
}

api
  .getUserInformation()
  .then(data => userInfo.setInfo(data.name, data.about))
  .catch(error => handleApiErrors(error));

api
  .getInitialCardsArray()
  .then(data => elementsSection.renderArray(data))
  .catch(error => handleApiErrors(error));

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
  api
    .setUserInformation(submitValues.nameInput, submitValues.descriptionInput)
    .then(data => userInfo.setInfo(data.name, data.about))
    .catch(error => handleApiErrors(error));
}

function handleAdditionPopupSubmit(submitValues) {
  api
    .addNewCard(submitValues.placeInput, submitValues.linkInput)
    .then(data => elementsSection.renderCard(data))
    .catch(error => handleApiErrors(error));
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

// !!!

function handleConfirmationPopupSubmit() {}

const confirmPopup = new FormPopup(
  popupConfig.confirmPopupId,
  popupConfig.popupCloseButtonClass,
  popupConfig.popupOpenedClass,
  formPopupConfig.confirmPopupFormId,
  formPopupConfig.formInputClass,
  handleConfirmationPopupSubmit
);

confirmPopup.setEventListeners();

// ---

function openPopupImage(image, title) {
  imagePopup.open(image, title);
}

function createNewCard(element) {
  return new Card(element, openPopupImage, cardConfig, api).makeCard();
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
