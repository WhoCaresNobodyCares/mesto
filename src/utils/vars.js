export const iniArr = [
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

export const [prfEdtBtn, prfAddBtn] = [
  document.querySelector('.profile__edit'),
  document.querySelector('.profile__add'),
];

export const [edtPopFrm, addPopFrm] = [
  document.forms.editForm,
  document.forms.addForm,
];

// ---

export const conf = {
  Sep: '---',
  prfNamCls: 'profile__username',
  prfDscCls: 'profile__description',
  Sep: '---',
  edtPopId: 'profileEditPopup',
  addPopId: 'cardAddPopup',
  imgPopId: 'imageModalPopup',
  Sep: '---',
  clsBtnCls: 'popup__close',
  imgPopCls: 'popup__image',
  cptPopCls: 'popup__caption',
  Sep: '---',
  elmSctId: 'elements',
  Sep: '---',
  namInpId: 'nameInput',
  dscInpId: 'descriptionInput',
  plcInpId: 'placeInput',
  lnkInpId: 'linkInput',
};

export const cardConf = {
  tmpId: 'cardTemplate',
  crdCls: 'card',
  imgCls: 'card__image',
  titCls: 'card__title',
  remCls: 'card__remove',
  likCls: 'card__like',
  likActCls: 'card__like_active',
};

export const frmValConf = {
  popInp: '.popup__input',
  popSub: '.popup__submit',
  popSubDis: 'popup__submit_disabled',
  popErrVis: 'popup__error_visible',
  popInpErr: 'popup__input_error',
};
