// const template = document.querySelector('#cardTemplate').content.querySelector('.card');
// const elements = document.querySelector('#elements');

// const prof = document.querySelector('#profile');
// const profName = prof.querySelector('.profile__username');
// const profDesc = prof.querySelector('.profile__description');
// const profEdit = prof.querySelector('.profile__edit');
// const profAdd = prof.querySelector('.profile__add');

// const edit = document.querySelector('#profileEditPopup');
// const editClose = edit.querySelector('.popup__close');
// const editForm = document.forms.editForm;
// const nameInput = editForm.querySelector('#nameInput');
// const descInput = editForm.querySelector('#descriptionInput');

// const add = document.querySelector('#cardAddPopup');
// const addClose = add.querySelector('.popup__close');
// const addForm = document.forms.addForm;
// const placeInput = addForm.querySelector('#placeInput');
// const linkInput = addForm.querySelector('#linkInput');

// const img = document.querySelector('#imageModalPopup');
// const imgClose = img.querySelector('.popup__close');
// const imgImage = img.querySelector('.popup__image');
// const imgCapt = img.querySelector('.popup__caption');

// const conf = {
//   formClass: '.popup__form',
//   inputClass: '.popup__input',
//   submitClass: '.popup__submit',
//   submitDisabledClass: 'popup__submit_disabled',
//   errorVisibleClass: 'popup__error_visible',
//   inputErrorClass: 'popup__input_error',
//   popupErrorClass: '.popup__error',
// };

// const closeOverlay = e => {
//   closePopup(e.target);
// };

// const closeEsc = e => {
//   if (e.key === 'Escape') {
//     closePopup(document.querySelector('.popup_opened'));
//   }
// };

// const openPopup = node => {
// node.addEventListener('click', closeOverlay);
// document.addEventListener('keydown', closeEsc);
// node.classList.add('popup_opened');
// };

// const closePopup = node => {
// node.removeEventListener('click', closeOverlay);
// document.removeEventListener('keydown', closeEsc);
// node.classList.remove('popup_opened');
// };

// const openEdit = (node, conf) => {
// nameInput.value = profName.textContent;
// descInput.value = profDesc.textContent;
// openPopup(resetPopup(node, conf));
// };

// const openAdd = (node, conf) => {
// addForm.reset();
// openPopup(resetPopup(node, conf));
// };

// const handleLike = element => {
//   element.classList.toggle('card__like_active');
// };

// const handleRemove = node => {
//   node.remove();
// };

// const openImg = (cardImage, cardTitle) => {
//   imgImage.src = cardImage.src;
//   imgCapt.textContent = imgImage.alt = cardTitle.textContent;
//   openPopup(img);
// };

// const setCardEvtListeners = ({ ...rest }) => {
//   rest.cloneLike.addEventListener('click', handleLike.bind(this, rest.cloneLike));
//   rest.cloneRemove.addEventListener('click', handleRemove.bind(this, rest.clone));
//   rest.cloneImage.addEventListener('click', openImg.bind(this, rest.cloneImage, rest.cloneTitle));
// };

// const createCard = object => {
// const clone = template.cloneNode(true);
// const cloneImage = clone.querySelector('.card__image');
// const cloneTitle = clone.querySelector('.card__title');
// const cloneRemove = clone.querySelector('.card__remove');
// const cloneLike = clone.querySelector('.card__like');
// cloneImage.src = object.link;
// cloneTitle.textContent = cloneImage.alt = object.name;
// setCardEvtListeners({
//   cloneLike,
//   clone,
//   cloneImage,
//   cloneTitle,
//   cloneRemove,
// });
// return clone;
// };

// const insertCard = (node, meth) => {
//   elements[meth](node);
// };

// const handleEditSubmit = e => {
//   e.preventDefault();
//   profName.textContent = nameInput.value;
//   profDesc.textContent = descInput.value;
//   closePopup(edit);
// };

// const handleAddSubmit = e => {
//   e.preventDefault();
//   const obj = {
//     name: '',
//     link: '',
//   };
//   obj.name = placeInput.value;
//   obj.link = linkInput.value;
//   insertCard(createCard(obj), 'prepend');
//   closePopup(add);
// };

// enableValidation(conf);

// initArr.forEach(object => {
//   insertCard(createCard(object), 'append');
// });

// profEdit.addEventListener('click', openEdit.bind(this, edit, conf));
// profAdd.addEventListener('click', openAdd.bind(this, add, conf));
// editClose.addEventListener('click', closePopup.bind(this, edit));
// addClose.addEventListener('click', closePopup.bind(this, add));
// imgClose.addEventListener('click', closePopup.bind(this, img));
// editForm.addEventListener('submit', handleEditSubmit);
// addForm.addEventListener('submit', handleAddSubmit);
