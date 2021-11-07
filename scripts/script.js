/* variables */
let profileEdit = document.querySelector(".profile__edit");
let profileUserName = document.querySelector(".profile__username");
let profileDescription = document.querySelector(".profile__description");
let popup = document.querySelector(".popup");
let popupClose = popup.querySelector(".popup__close");
let popupForm = popup.querySelector(".popup__form");
let popupUserNameInput = popup.querySelector("#usernameInput");
let popupDescriptionInput = popup.querySelector("#descriptionInput");

/* functions */
function openPopup() {
  popupUserNameInput.value = profileUserName.textContent;
  popupDescriptionInput.value = profileDescription.textContent;
  popup.classList.add("popup_opened");
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileUserName.textContent = popupUserNameInput.value;
  profileDescription.textContent = popupDescriptionInput.value;
  closePopup();
}

/* event listeners */
profileEdit.addEventListener("click", openPopup);
popupClose.addEventListener("click", closePopup);
popupForm.addEventListener("submit", formSubmitHandler);
