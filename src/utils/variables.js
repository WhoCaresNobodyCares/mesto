export const cardConfig = {
  templateId: 'cardTemplate',
  cardClass: 'card',
  templateImageClass: 'card__image',
  templateTitleClass: 'card__title',
  templateRemoveButtonClass: 'card__remove',
  templateLikeButtonClass: 'card__like',
  templateLikeButtonActiveClass: 'card__like_active',
  templateLikeCounter: 'card__number',
};

export const popupConfig = {
  editPopupId: 'profileEditPopup',
  addPopupId: 'cardAddPopup',
  imagePopupId: 'imageModalPopup',
  confirmPopupId: 'confirmPopup',
  popupCloseButtonClass: 'popup__close',
  popupOpenedClass: 'popup_opened',
};

export const imagePopupConfig = {
  imageClass: 'popup__image',
  captionClass: 'popup__caption',
};

export const formPopupConfig = {
  editPopupFormId: 'editPopupForm',
  addPopupFormId: 'addPopupForm',
  formInputClass: 'popup__input',
  confirmPopupFormId: 'confirmPopupForm',
};

export const userInfoConfig = {
  nameClass: 'profile__username',
  descriptionClass: 'profile__description',
};

export const sectionConfig = {
  containerSelectorId: 'elements',
};

export const formValidatorConfig = {
  editFormId: 'editPopupForm',
  addFormId: 'addPopupForm',
  inputClass: 'popup__input',
  errorVisibleClass: 'popup__error_visible',
  inputErrorClass: 'popup__input_error',
  submitButtonClass: 'popup__submit',
  submitButtonDisabledClass: 'popup__submit_disabled',
};

export const apiConfig = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-34',
  token: '7a0a101a-b2ca-4848-ae3c-3b79f13c4cae',
};

// ---

export const profileName = document.querySelector('.profile__username');
export const profileDescription = document.querySelector('.profile__description');
export const profileEditButton = document.querySelector('.profile__edit');
export const profileAddButton = document.querySelector('.profile__add');
