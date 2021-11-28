// ARRAYS

const initArr = [
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

// VARIABLES

// template
const template = document.querySelector('#cardTemplate').content.querySelector('.card');
// elements
const elements = document.querySelector('#elements');
// profile
const prof = document.querySelector('#profile');
const profName = prof.querySelector('.profile__username');
const profDesc = prof.querySelector('.profile__description');
const profEdit = prof.querySelector('.profile__edit');
const profAdd = prof.querySelector('.profile__add');
// edit popup
const edit = document.querySelector('#profileEditPopup');
const editClose = edit.querySelector('.popup__close');
const editForm = document.forms.editForm;
const nameInput = editForm.querySelector('#nameInput');
const descInput = editForm.querySelector('#descriptionInput');
// add popup
const add = document.querySelector('#cardAddPopup');
const addClose = add.querySelector('.popup__close');
const addForm = document.forms.addForm;
const placeInput = addForm.querySelector('#placeInput');
const linkInput = addForm.querySelector('#linkInput');
// image popup
const img = document.querySelector('#imageModalPopup');
const imgClose = img.querySelector('.popup__close');
const imgImage = img.querySelector('.popup__image');
const imgCapt = img.querySelector('.popup__caption');
// conf
const conf = {
  formClass: '.popup__form',
  inputClass: '.popup__input',
  submitClass: '.popup__submit',
  submitDisabledClass: 'popup__submit_disabled',
  errorVisibleClass: 'popup__error_visible',
  inputErrorClass: 'popup__input_error',
};

// FUNCTIONS

const closeOverlay = e => {
  closePopup(e.target);
};

const closeEsc = e => {
  if (e.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
};

const openPopup = node => {
  node.addEventListener('click', closeOverlay);
  document.addEventListener('keydown', closeEsc);
  node.classList.add('popup_opened');
};

const closePopup = node => {
  node.removeEventListener('click', closeOverlay);
  document.removeEventListener('keydown', closeEsc);
  node.classList.remove('popup_opened');
};

const resetPopup = node => {
  const inputs = node.querySelectorAll('.popup__input');
  inputs.forEach(input => {
    input.classList.remove('popup__input_error');
  });
  const errs = node.querySelectorAll('.popup__error');
  errs.forEach(err => {
    err.textContent = '';
  });
  const button = node.querySelector('.popup__submit');
  button.classList.add('popup__submit_disabled');
  button.disabled = true;
  return node;
};

const openEdit = node => {
  nameInput.value = profName.textContent;
  descInput.value = profDesc.textContent;
  openPopup(resetPopup(node));
};

const openAdd = node => {
  addForm.reset();
  openPopup(resetPopup(node));
};

const handleLike = element => {
  element.classList.toggle('card__like_active');
};

const handleRemove = node => {
  node.remove();
};

const openImg = (cardImage, cardTitle) => {
  imgImage.src = cardImage.src;
  imgCapt.textContent = imgImage.alt = cardTitle.textContent;
  openPopup(img);
};

const setCardEvtListeners = (cloneLike, clone, cloneImage, cloneTitle, cloneRemove) => {
  cloneLike.addEventListener('click', handleLike.bind(this, cloneLike));
  cloneRemove.addEventListener('click', handleRemove.bind(this, clone));
  cloneImage.addEventListener('click', openImg.bind(this, cloneImage, cloneTitle));
};

const createCard = object => {
  const clone = template.cloneNode(true);
  const cloneImage = clone.querySelector('.card__image');
  const cloneTitle = clone.querySelector('.card__title');
  const cloneRemove = clone.querySelector('.card__remove');
  const cloneLike = clone.querySelector('.card__like');
  cloneImage.src = object.link;
  cloneTitle.textContent = cloneImage.alt = object.name;
  setCardEvtListeners(cloneLike, clone, cloneImage, cloneTitle, cloneRemove);
  return clone;
};

const insertCard = (node, meth) => {
  elements[meth](node);
};

const handleEditSubmit = e => {
  e.preventDefault();
  profName.textContent = nameInput.value;
  profDesc.textContent = descInput.value;
  closePopup(edit);
};

const handleAddSubmit = e => {
  e.preventDefault();
  const obj = {
    name: '',
    link: '',
  };
  obj.name = placeInput.value;
  obj.link = linkInput.value;
  insertCard(createCard(obj), 'prepend');
  closePopup(add);
};

// CALLS

enableValidation(conf);

initArr.forEach(object => {
  insertCard(createCard(object), 'append');
});

// LISTENERS

profEdit.addEventListener('click', openEdit.bind(this, edit));
profAdd.addEventListener('click', openAdd.bind(this, add));
editClose.addEventListener('click', closePopup.bind(this, edit));
addClose.addEventListener('click', closePopup.bind(this, add));
imgClose.addEventListener('click', closePopup.bind(this, img));
editForm.addEventListener('submit', handleEditSubmit);
addForm.addEventListener('submit', handleAddSubmit);
