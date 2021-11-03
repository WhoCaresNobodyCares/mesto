/* variables */
let profileEditButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let popupClose = popup.querySelector(".popup__close");
let popupForm = document.querySelector(".popup__form");
let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");
let popupSubmit = popupForm.querySelector(".popup__submit");

/* popup open */
profileEditButton.addEventListener("click", popupOpenFunction);
function popupOpenFunction() {
  popupForm.querySelector(".popup__name").value = profileName.innerHTML;
  popupForm.querySelector(".popup__description").value =
    profileDescription.innerHTML;
  popup.classList.add("popup_opened");
}

/* popup close */
popupClose.addEventListener("click", popupCloseFunction);
function popupCloseFunction() {
  popup.classList.remove("popup_opened");
}

/* form handling */
popupForm.addEventListener("submit", formSubmitHandler);
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popupForm.querySelector(".popup__name").value;
  profileDescription.textContent = popupForm.querySelector(
    ".popup__description"
  ).value;
  popup.classList.remove("popup_opened");
}
/* сердечки по клику */
