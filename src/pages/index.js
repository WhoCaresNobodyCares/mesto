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
  apiConfig,
  profileOverlay,
} from '../utils/variables.js';

// ---

import Card from '../components/Card.js';
import ImagePopup from '../components/ImagePopup.js';
import FormPopup from '../components/FormPopup.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import Api from '../components/Api.js';
import ConfirmPopup from '../components/ConfirmPopup.js';

// ---

function handleApiErrors(error) {
  console.log(`WASTED - ${error}`);
}

const api = new Api(apiConfig.url, apiConfig.token);

let userId = null;

api
  .getAllInfo()
  .then(([userData, array]) => {
    userId = userData._id;
    userInfo.setAvatar(userData.avatar);
    userInfo.setInfo(userData.name, userData.about);
    elementsSection.renderArray(array);
  })
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

function handleEditorPopupSubmit(submitValues, popup) {
  popup.querySelector('.popup__submit').textContent = 'Сохраняется...';
  return api.setInfo(submitValues.nameInput, submitValues.descriptionInput).then(data => {
    userInfo.setInfo(data.name, data.about);
    popup.querySelector('.popup__submit').textContent = 'Сохранить';
  });
}

function handleAdditionPopupSubmit(submitValues, popup) {
  popup.querySelector('.popup__submit').textContent = 'Создается...';
  return api.addCard(submitValues.placeInput, submitValues.linkInput).then(data => {
    elementsSection.renderCard(data);
    popup.querySelector('.popup__submit').textContent = 'Создать';
  });
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

function handleUpdatePopupSubmit(submitValues, popup) {
  popup.querySelector('.popup__submit').textContent = 'Сохраняется...';
  return api
    .setAvatar(submitValues.pictureInput)
    .then(data => {
      console.log(data.avatar);
      userInfo.setAvatar(data.avatar);
    })
    .catch(error => handleApiErrors(error))
    .finally(() => (popup.querySelector('.popup__submit').textContent = 'Сохранить'));
}

const updatePopup = new FormPopup(
  popupConfig.updatePopupId,
  popupConfig.popupCloseButtonClass,
  popupConfig.popupOpenedClass,
  formPopupConfig.updatePopupFormId,
  formPopupConfig.formInputClass,
  handleUpdatePopupSubmit
);

updatePopup.setEventListeners();

// ---

function handleConfirmPopupSubmit(card, id, popup) {
  popup.querySelector('.popup__submit').textContent = 'Удаляется...';
  return api
    .deleteCard(id)
    .then(() => {
      card.remove();
      card = null;
    })
    .catch(error => handleApiErrors(error))
    .finally(() => (popup.querySelector('.popup__submit').textContent = 'Да'));
}

const confirmPopup = new ConfirmPopup(
  popupConfig.confirmPopupId,
  popupConfig.popupCloseButtonClass,
  popupConfig.popupOpenedClass,
  formPopupConfig.confirmPopupFormId,
  formPopupConfig.formInputClass,
  handleConfirmPopupSubmit
);

confirmPopup.setEventListeners();

// ---

function openPopupImage(image, title) {
  imagePopup.open(image, title);
}

function createNewCard(element) {
  return new Card(element, openPopupImage, cardConfig, userId, api, confirmPopup).makeCard();
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
const updateFormValidator = new FormValidator(formValidatorConfig.updateFormId, formValidatorConfig);

editFormValidator.enableValidation();
addFormValidator.enableValidation();
updateFormValidator.enableValidation();

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

profileOverlay.addEventListener('click', () => {
  updateFormValidator.resetValidation();
  updatePopup.open();
});
