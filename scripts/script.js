// ** ARRAYS

const initialArray = [
  {
    name: "Шестой город",
    link: "https://images.unsplash.com/photo-1542902093-d55926049754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Пятый город",
    link: "https://images.unsplash.com/photo-1586165877141-3dbcfc059283?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Четвертый город",
    link: "https://images.unsplash.com/photo-1611416457332-946853cc75d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1571&q=80",
  },
  {
    name: "Третий город",
    link: "https://images.unsplash.com/photo-1548850174-70a1cf2c5f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Второй город",
    link: "https://images.unsplash.com/photo-1514439827219-9137a0b99245?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Первый город",
    link: "https://images.unsplash.com/photo-1542642839-83adadcbe645?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1622&q=80",
  },
];

// ** VARIABLES

// template
const cardTemplate = document.querySelector("#cardTemplate");
const card = cardTemplate.content.querySelector(".card");
// elements
const elements = document.querySelector("#elements");
// profile
const profile = document.querySelector("#profile");
const profileName = profile.querySelector(".profile__username");
const profileDescription = profile.querySelector(".profile__description");
const profileEdit = profile.querySelector(".profile__edit");
const profileAdd = profile.querySelector(".profile__add");
// edit popup
const editPopup = document.querySelector("#profileEditPopup");
const editPopupClose = editPopup.querySelector(".popup__close");
const editPopupForm = editPopup.querySelector(".popup__form");
const editPopupNameInput = editPopup.querySelector("#usernameInput");
const editPopupDescriptionInput = editPopup.querySelector("#descriptionInput");
// add popup
const addPopup = document.querySelector("#cardAddPopup");
const addPopupClose = addPopup.querySelector(".popup__close");
const addPopupForm = addPopup.querySelector(".popup__form");
const addPopupPlaceInput = addPopup.querySelector("#placeNameInput");
const addPopupLinkInput = addPopup.querySelector("#linkInput");
// image popup
const imagePopup = document.querySelector("#imageModalPopup");
const imagePopupClose = imagePopup.querySelector(".popup__close");
const imagePopupImage = imagePopup.querySelector(".popup__image");
const imagePopupCapt = imagePopup.querySelector(".popup__caption");

// ** FUNCTIONS

function openPopup(item) {
  item.classList.add("popup_opened");
}

function closePopup(item) {
  item.classList.remove("popup_opened");
}

function renderCard(item) {
  const cardClone = card.cloneNode(true);
  const cardCloneImage = cardClone.querySelector(".card__image");
  const cardCloneTitle = cardClone.querySelector(".card__title");
  const cardCloneRemove = cardClone.querySelector(".card__remove");
  const cardCloneLike = cardClone.querySelector(".card__like");
  cardCloneImage.src = item.link;
  cardCloneImage.alt = item.name;
  cardCloneTitle.textContent = item.name;
  cardCloneLike.addEventListener("click", function () {
    cardCloneLike.classList.toggle("card__like_active");
  });
  cardCloneRemove.addEventListener("click", function () {
    cardClone.remove();
  });
  cardCloneImage.addEventListener("click", function () {
    imagePopupImage.src = cardCloneImage.src;
    imagePopupCapt.textContent = cardCloneTitle.textContent;
    openPopup(imagePopup);
  });
  return cardClone;
}

function insertCard(item) {
  elements.prepend(item);
}

const iteratedArray = initialArray.map((item) => {
  return renderCard(item);
});

iteratedArray.forEach((item) => {
  insertCard(item);
});

function profileEditSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = editPopupNameInput.value;
  profileDescription.textContent = editPopupDescriptionInput.value;
  closePopup(editPopup);
}

function cardAddSubmitHandler(evt) {
  evt.preventDefault();
  const cardObject = {
    name: "",
    link: "",
  };
  cardObject.name = addPopupPlaceInput.value;
  cardObject.link = addPopupLinkInput.value;
  const userCard = renderCard(cardObject);
  insertCard(userCard);
  closePopup(addPopup);
}

// ** EVENT LISTENERS

profileEdit.addEventListener("click", function () {
  editPopupNameInput.value = profileName.textContent;
  editPopupDescriptionInput.value = profileDescription.textContent;
  openPopup(editPopup);
});

editPopupClose.addEventListener("click", function () {
  closePopup(editPopup);
});

profileAdd.addEventListener("click", function () {
  addPopupPlaceInput.value = "";
  addPopupLinkInput.value = "";
  openPopup(addPopup);
});

addPopupClose.addEventListener("click", function () {
  closePopup(addPopup);
});

imagePopupClose.addEventListener("click", function () {
  closePopup(imagePopup);
});

editPopupForm.addEventListener("submit", function (evt) {
  profileEditSubmitHandler(evt);
});

addPopupForm.addEventListener("submit", function (evt) {
  cardAddSubmitHandler(evt);
});
