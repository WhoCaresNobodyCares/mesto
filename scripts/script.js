/* variables */
let editButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let popupClose = popup.querySelector(".popup__close");
let profileName = document.querySelector(".profile__name");
let popupName = popup.querySelector(".popup__name");
let profileDescription = document.querySelector(".profile__description");
let popupDescription = popup.querySelector(".popup__description");
let popupSubmit = popup.querySelector(".popup__submit");
/* open/close popup */

editButton.onclick = function () {
  // Вот так могу
  popupName.setAttribute("placeholder", profileName.innerHTML);
  popupDescription.setAttribute("placeholder", profileDescription.innerHTML);
  popup.classList.add("popup_opened");
};

popupClose.addEventListener("click", function () {
  // И как надо могу =D
  popup.classList.remove("popup_opened");
});

/* save button */
popupSubmit.addEventListener("click", function () {
  if (popupName.value === "") {
    alert("Введите имя пользователя");
    return;
  }
  if (popupDescription.value === "") {
    alert("Введите описание профиля");
    return;
  }
  profileName.innerHTML = popupName.value;
  profileDescription.innerHTML = popupDescription.value;
  popup.classList.remove("popup_opened");
});
