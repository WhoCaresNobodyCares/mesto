class Card {
  constructor(object, template) {
    this._object = object;
    this._name = this._object.name;
    this._link = this._object.link;
    this._template = template;
    this._popup = document.querySelector('#imageModalPopup');
    this._popupClose = this._popup.querySelector('.popup__close');
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupCaption = this._popup.querySelector('.popup__caption');
  }

  _handleLike = () => {
    this._cloneLike.classList.toggle('card__like_active');
  };

  _handleRemove = () => {
    this._clone.remove();
  };

  _handleImage = () => {
    this._popupImage.src = this._cloneImage.src;
    this._popupCaption.textContent = this._popupImage.alt = this._cloneTitle.textContent;
    window.openPopup(this._popup);
  };

  _setEventListeners = () => {
    this._cloneLike.addEventListener('click', this._handleLike);
    this._cloneRemove.addEventListener('click', this._handleRemove);
    this._cloneImage.addEventListener('click', this._handleImage);
  };

  _fillCard = () => {
    this._cloneImage.src = this._link;
    this._cloneTitle.textContent = this._cloneImage.alt = this._name;
    this._setEventListeners();
  };

  _findVariables = () => {
    this._clone = this._template.cloneNode(true);
    this._cloneImage = this._clone.querySelector('.card__image');
    this._cloneTitle = this._clone.querySelector('.card__title');
    this._cloneRemove = this._clone.querySelector('.card__remove');
    this._cloneLike = this._clone.querySelector('.card__like');
    this._fillCard();
  };

  createCard = (section, method) => {
    this._findVariables();
    section[method](this._clone);
  };
}

export { Card };
