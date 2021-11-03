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
/* hearts on click */
let elementsIcons = document.querySelectorAll(".elements__icon");
console.log(elementsIcons);

let a = elementsIcons.item(0);
a.addEventListener("click", aChange);
function aChange() {
  if (a.getAttribute("src") === "./images/elements__icon.svg") {
    a.setAttribute("src", "./images/elements__icon-black.svg");
  } else {
    a.setAttribute("src", "./images/elements__icon.svg");
  }
}

let b = elementsIcons.item(1);
b.addEventListener("click", bChange);
function bChange() {
  if (b.getAttribute("src") === "./images/elements__icon.svg") {
    b.setAttribute("src", "./images/elements__icon-black.svg");
  } else {
    b.setAttribute("src", "./images/elements__icon.svg");
  }
}

let c = elementsIcons.item(2);
c.addEventListener("click", cChange);
function cChange() {
  if (c.getAttribute("src") === "./images/elements__icon.svg") {
    c.setAttribute("src", "./images/elements__icon-black.svg");
  } else {
    c.setAttribute("src", "./images/elements__icon.svg");
  }
}

let d = elementsIcons.item(3);
d.addEventListener("click", dChange);
function dChange() {
  if (d.getAttribute("src") === "./images/elements__icon.svg") {
    d.setAttribute("src", "./images/elements__icon-black.svg");
  } else {
    d.setAttribute("src", "./images/elements__icon.svg");
  }
}

let e = elementsIcons.item(4);
e.addEventListener("click", eChange);
function eChange() {
  if (e.getAttribute("src") === "./images/elements__icon.svg") {
    e.setAttribute("src", "./images/elements__icon-black.svg");
  } else {
    e.setAttribute("src", "./images/elements__icon.svg");
  }
}

let f = elementsIcons.item(5);
f.addEventListener("click", fChange);
function fChange() {
  if (f.getAttribute("src") === "./images/elements__icon.svg") {
    f.setAttribute("src", "./images/elements__icon-black.svg");
  } else {
    f.setAttribute("src", "./images/elements__icon.svg");
  }
}
