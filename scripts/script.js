/* arrays */
const initialArray = [
  {
    name: "Шестой город",
    link: "./images/city1.jpg",
  },
  {
    name: "Пятый город",
    link: "./images/city2.jpg",
  },
  {
    name: "Четвертый город",
    link: "./images/city3.jpg",
  },
  {
    name: "Третий город",
    link: "./images/city4.jpg",
  },
  {
    name: "Второй город",
    link: "./images/city5.jpg",
  },
  {
    name: "Первый город",
    link: "./images/city6.jpg",
  },
];

/* variables */

const cardTemplate = document.querySelector("#card-template");
const card = cardTemplate.content.querySelector(".card");
const elements = document.querySelector(".elements");
const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile__username");
const profileDesc = profile.querySelector(".profile__description");
const editPopup = document.querySelector("#profileEditPopup");
const profileEdit = profile.querySelector(".profile__edit");
const addPopup = document.querySelector("#cardAddPopup");
const profileAdd = profile.querySelector(".profile__add");
const editPopupClose = editPopup.querySelector(".popup__close");
const addPopupClose = addPopup.querySelector(".popup__close");
const editPopupForm = editPopup.querySelector(".popup__form");
const addPopupForm = addPopup.querySelector(".popup__form");
const modal = document.querySelector("#modal");
const modalImage = modal.querySelector(".modal__image");
const modalCaption = modal.querySelector(".modal__caption");
const modalClose = modal.querySelector(".modal__close");

/* variables with functions */

const renderCards = (item) => {
  const clone = card.cloneNode(true);
  clone.querySelector(".card__title").textContent = item.name;
  clone.querySelector(".card__image").src = item.link;
  insertCard(clone);
};

const mapArray = initialArray.map((item) => {
  return renderCards(item);
});

/* functions */

function insertCard(item) {
  const cardRemove = item.querySelector(".card__remove");
  cardRemove.addEventListener("click", function () {
    item.remove();
  });
  const cardLike = item.querySelector(".card__like");
  cardLike.addEventListener("click", function () {
    cardLike.classList.toggle("card__like_active");
  });
  const cardImage = item.querySelector(".card__image");
  cardImage.addEventListener("click", function () {
    appearModal(item);
  });
  elements.prepend(item);
}

function openPopup(item) {
  if (item.id === "profileEditPopup") {
    item.querySelector("#usernameInput").value = profileName.textContent;
    item.querySelector("#descriptionInput").value = profileDesc.textContent;
    item.classList.add("popup_opened");
  } else {
    item.querySelector("#placenameInput").value = "";
    item.querySelector("#linkInput").value = "";
    item.classList.add("popup_opened");
  }
}

function closePopup(item) {
  item.classList.remove("popup_opened");
}

function formSubmitHandler(item) {
  if (item.id === "profileEditPopup") {
    profileName.textContent = item.querySelector("#usernameInput").value;
    profileDesc.textContent = item.querySelector("#descriptionInput").value;
  } else {
    let cardName = item.querySelector("#placenameInput").value;
    let cardImage = item.querySelector("#linkInput").value;
    const clone = card.cloneNode(true);

    clone.querySelector(".card__title").textContent = cardName;
    clone.querySelector(".card__image").src = cardImage;
    insertCard(clone);
  }
}

function appearModal(item) {
  modalImage.src = item.querySelector(".card__image").src;
  modalCaption.textContent = item.querySelector(".card__title").textContent;
  modal.classList.add("modal_opened");
}

/* event listeners */

profileEdit.addEventListener("click", function () {
  openPopup(editPopup);
});

editPopupClose.addEventListener("click", function () {
  closePopup(editPopup);
});

profileAdd.addEventListener("click", function () {
  openPopup(addPopup);
});

addPopupClose.addEventListener("click", function () {
  closePopup(addPopup);
});

editPopupForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  formSubmitHandler(editPopup);
  closePopup(editPopup);
});

addPopupForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  formSubmitHandler(addPopup);
  closePopup(addPopup);
});

modalClose.addEventListener("click", function () {
  modal.classList.remove("modal_opened");
});
