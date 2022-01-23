export const initialCardsArray = [
  {
    name: 'Первый город',
    link: 'https://images.unsplash.com/photo-1542902093-d55926049754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Второй город',
    link: 'https://images.unsplash.com/photo-1586165877141-3dbcfc059283?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Третий город',
    link: 'https://images.unsplash.com/photo-1611416457332-946853cc75d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1571&q=80',
  },
  {
    name: 'Четвертый город',
    link: 'https://images.unsplash.com/photo-1548850174-70a1cf2c5f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Пятый город',
    link: 'https://images.unsplash.com/photo-1514439827219-9137a0b99245?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Шестой город',
    link: 'https://images.unsplash.com/photo-1542642839-83adadcbe645?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1622&q=80',
  },
];

// ---

export const cardConfig = {
  templateId: 'cardTemplate',
  cardClass: 'card',
  templateImageClass: 'card__image',
  templateTitleClass: 'card__title',
  templateRemoveButtonClass: 'card__remove',
  templateLikeButtonClass: 'card__like',
  templateLikeButtonActiveClass: 'card__like_active',
};

export const popupConfig = {
  editPopupId: 'profileEditPopup',
  addPopupId: 'cardAddPopup',
  imagePopupId: 'imageModalPopup',
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

// ---

export const profileName = document.querySelector('.profile__username');
export const profileDescription = document.querySelector('.profile__description');
export const profileEditButton = document.querySelector('.profile__edit');
export const profileAddButton = document.querySelector('.profile__add');
