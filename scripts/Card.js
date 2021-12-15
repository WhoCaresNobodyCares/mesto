class Card {
  constructor(object, template) {
    this._object = object;
    this._template = template;
  }

  _handleLikeButton = () => {
    this._cloneLikeButton.classList.toggle('card__like_active');
  };

  _handleRemoveButton = () => {
    this._clone.remove();
  };

  _handleImage = () => {};

  _setCardEventListeners = () => {
    this._cloneLikeButton.addEventListener('click', this._handleLikeButton);
    this._cloneRemoveButton.addEventListener('click', this._handleRemoveButton);
    // this._cloneImage.addEventListener('click', this._handleImage);
  };

  _fillCard = () => {
    this._cloneImage.src = this._object.link;
    this._cloneTitle.textContent = this._cloneImage.alt = this._object.name;
    this._setCardEventListeners();
  };

  _findVariables() {
    this._clone = this._template.cloneNode(true);
    this._cloneImage = this._clone.querySelector('.card__image');
    this._cloneTitle = this._clone.querySelector('.card__title');
    this._cloneRemoveButton = this._clone.querySelector('.card__remove');
    this._cloneLikeButton = this._clone.querySelector('.card__like');
    this._fillCard();
  }

  createCard = (place, method) => {
    this._findVariables();
    place[method](this._clone);
  };
}

export { Card };
