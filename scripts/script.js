/* variables */
let profileEdit = document.querySelector(".profile__edit");
let popup = document.querySelector(".popup");
let profileUsername = document.querySelector(".profile__username");
let profileDescription = document.querySelector(".profile__description");
let popupUsernameInput = popup.querySelector("#usernameInput");
let popupDescriptionInput = popup.querySelector("#descriptionInput");
let popupClose = popup.querySelector(".popup__close");
let popupSubmit = popup.querySelector(".popup__submit");

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
  popup.classList.remove("popup_opened");
}

/* event listeners */
profileEdit.addEventListener("click", openPopup);
popupClose.addEventListener("click", closePopup);
popupSubmit.addEventListener("click", formSubmitHandler);
