// ARRAYS

const initialArray = [{
    name: "Первый город",
    link: "https://images.unsplash.com/photo-1542902093-d55926049754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Второй город",
    link: "https://images.unsplash.com/photo-1586165877141-3dbcfc059283?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Третий город",
    link: "https://images.unsplash.com/photo-1611416457332-946853cc75d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1571&q=80",
  },
  {
    name: "Четвертый город",
    link: "https://images.unsplash.com/photo-1548850174-70a1cf2c5f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Пятый город",
    link: "https://images.unsplash.com/photo-1514439827219-9137a0b99245?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Шестой город",
    link: "https://images.unsplash.com/photo-1542642839-83adadcbe645?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1622&q=80",
  },
];

// VARIABLES

const cardTemplate = document.querySelector("#cardTemplate");
const card = cardTemplate.content.querySelector(".card");

const elements = document.querySelector("#elements");

const profile = document.querySelector("#profile");
const profileName = profile.querySelector(".profile__username");
const profileDescription = profile.querySelector(".profile__description");

const profileEdit = profile.querySelector(".profile__edit");
const profileAdd = profile.querySelector(".profile__add");

// !!! added popups list
const popups = document.querySelectorAll(".popup");

const edit = document.querySelector("#profileEditPopup");
const editClose = edit.querySelector(".popup__close");

const editForm = document.forms.editForm; // !!! form
const nameInput = edit.querySelector("#nameInput"); // !!! input
const descriptionInput = edit.querySelector("#descriptionInput"); // !!! input

const add = document.querySelector("#cardAddPopup");
const addClose = add.querySelector(".popup__close");

const addForm = document.forms.addForm; // !!! form
const placeInput = add.querySelector("#placeInput"); // !!! input
const linkInput = add.querySelector("#linkInput"); // !!! input

const image = document.querySelector("#imageModalPopup");
const imageClose = image.querySelector(".popup__close");
const imageImage = image.querySelector(".popup__image");
const imageCaption = image.querySelector(".popup__caption");

// FUNCTIONS

const openPopup = popup => {
  popup.classList.add("popup_opened");
};

const closePopup = popup => {
  popup.classList.remove("popup_opened");
};

const openEdit = () => {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  openPopup(edit);
};

const openAdd = () => {
  addForm.reset();
  openPopup(add);
};

const handleCardLike = element => {
  element.classList.toggle("card__like_active");
};

const handleCardRemove = node => {
  node.remove();
};

const handleCardImageOpen = (cardImage, cardTitle) => {
  imageImage.src = cardImage.src;
  imageCaption.textContent = imageImage.alt = cardTitle.textContent;
  openPopup(image);
};

const createCard = object => {
  const clone = card.cloneNode(true);
  const cloneImage = clone.querySelector(".card__image");
  const cloneTitle = clone.querySelector(".card__title");
  const cloneRemove = clone.querySelector(".card__remove");
  const cloneLike = clone.querySelector(".card__like");
  cloneImage.src = cloneImage.alt = object.link;
  cloneTitle.textContent = object.name;
  cloneLike.addEventListener("click", () => {
    handleCardLike(cloneLike);
  });
  cloneRemove.addEventListener("click", () => {
    handleCardRemove(clone);
  });
  cloneImage.addEventListener("click", () => {
    handleCardImageOpen(cloneImage, cloneTitle);
  });
  return clone;
};

const insertCard = (node, meth) => {
  elements[meth](node);
};

// edit submit
const handleEditSubmit = e => {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closePopup(edit);
};

// add submit
const handleAddSubmit = e => {
  e.preventDefault();
  const object = {
    name: "",
    link: "",
  };
  object.name = placeInput.value;
  object.link = linkInput.value;
  insertCard(createCard(object), "prepend");
  closePopup(add);
};

// !!! close popups on escape press
const closePopupEsc = node => {
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      closePopup(node);
    }
  });
};

// !!! close popups on overlay click
const closePopupOverlay = node => {
  node.addEventListener("click", e => {
    closePopup(e.target);
  });
};

// CALLS

initialArray.forEach(object => {
  insertCard(createCard(object), "append");
});

// !!! iterate nodelist
popups.forEach(node => {
  closePopupEsc(node);
  closePopupOverlay(node);
});

// LISTENERS

profileEdit.addEventListener("click", openEdit);

profileAdd.addEventListener("click", openAdd);

editClose.addEventListener("click", () => {
  closePopup(edit);
});

addClose.addEventListener("click", () => {
  closePopup(add);
});

imageClose.addEventListener("click", () => {
  closePopup(image);
});

editForm.addEventListener("submit", e => {
  handleEditSubmit(e);
});

addForm.addEventListener("submit", e => {
  handleAddSubmit(e);
});
