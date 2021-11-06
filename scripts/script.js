/* variables */
let profileEdit = document.querySelector(".profile__edit");
let popup = document.querySelector(".popup");
let profileUsername = document.querySelector(".profile__username");
let profileDescription = document.querySelector(".profile__description");
let popupUsernameInput = popup.querySelector("#usernameInput");
let popupDescriptionInput = popup.querySelector("#descriptionInput");
let popupClose = popup.querySelector(".popup__close");
let popupSubmit = popup.querySelector(".popup__submit");
let cardLike = document.querySelectorAll(".card__like");

/* functions */
function openPopup() {
  popupUsernameInput.value = profileUsername.textContent;
  popupDescriptionInput.value = profileDescription.textContent;
  popup.classList.add("popup_opened");
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileUsername.textContent = popupUsernameInput.value;
  profileDescription.textContent = popupDescriptionInput.value;
  closePopup();
}

/* event listeners */
profileEdit.addEventListener("click", openPopup);
popupClose.addEventListener("click", closePopup);
popupSubmit.addEventListener("click", formSubmitHandler);

/* card like functions */
cardLike.item(0).addEventListener("click", function () {
  if (cardLike.item(0).getAttribute("class") === "card__like") {
    cardLike.item(0).setAttribute("class", "card__like_active");
  } else {
    cardLike.item(0).setAttribute("class", "card__like");
  }
});
cardLike.item(1).addEventListener("click", function () {
  if (cardLike.item(1).getAttribute("class") === "card__like") {
    cardLike.item(1).setAttribute("class", "card__like_active");
  } else {
    cardLike.item(1).setAttribute("class", "card__like");
  }
});
cardLike.item(2).addEventListener("click", function () {
  if (cardLike.item(2).getAttribute("class") === "card__like") {
    cardLike.item(2).setAttribute("class", "card__like_active");
  } else {
    cardLike.item(2).setAttribute("class", "card__like");
  }
});
cardLike.item(3).addEventListener("click", function () {
  if (cardLike.item(3).getAttribute("class") === "card__like") {
    cardLike.item(3).setAttribute("class", "card__like_active");
  } else {
    cardLike.item(3).setAttribute("class", "card__like");
  }
});
cardLike.item(4).addEventListener("click", function () {
  if (cardLike.item(4).getAttribute("class") === "card__like") {
    cardLike.item(4).setAttribute("class", "card__like_active");
  } else {
    cardLike.item(4).setAttribute("class", "card__like");
  }
});
cardLike.item(5).addEventListener("click", function () {
  if (cardLike.item(5).getAttribute("class") === "card__like") {
    cardLike.item(5).setAttribute("class", "card__like_active");
  } else {
    cardLike.item(5).setAttribute("class", "card__like");
  }
});
