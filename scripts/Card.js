export class Card {
  constructor(object, template) {
    this._object = object;
    this._template = template;
  }

  _handleLike = () => this._cloneLike.classList.toggle('card__like_active');

  _handleRemoveButton = () => this._clone.remove();

  _handleImage = () => window.openImagePopup(this._cloneImage, this._cloneTitle);

  _setEventListeners = () => {
    this._cloneLike.addEventListener('click', this._handleLike);
    this._cloneRemoveButton.addEventListener('click', this._handleRemoveButton);
    this._cloneImage.addEventListener('click', this._handleImage);
  };

  _fillCloneElements = () => {
    this._cloneImage.src = this._object.link;
    this._cloneTitle.textContent = this._cloneImage.alt = this._object.name;
  };

  _findCloneElements = () => {
    this._cloneImage = this._clone.querySelector('.card__image');
    this._cloneTitle = this._clone.querySelector('.card__title');
    this._cloneRemoveButton = this._clone.querySelector('.card__remove');
    this._cloneLike = this._clone.querySelector('.card__like');
  };

  _cloneTemplate = () => (this._clone = this._template.cloneNode(true));

  createCard = () => {
    this._cloneTemplate();
    this._findCloneElements();
    this._fillCloneElements();
    this._setEventListeners();
    return this._clone;
  };
}
