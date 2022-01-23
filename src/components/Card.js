export default class Card {
  constructor(element, openPopupImage, config) {
    this._element = element;
    this._openPopupImage = openPopupImage;
    this._config = config;
    this._template = document.querySelector(`#${this._config.templateId}`);
    this._templateContent = this._template.content.querySelector(`.${this._config.cardClass}`);
  }

  _handleLikeButtonClick = () => {
    this._cloneLikeButton.classList.toggle(`${this._config.templateLikeButtonActiveClass}`);
  };

  _handleRemoveButtonClick = () => {
    this._clone.remove();
    this._clone = null;
  };

  _setEventListeners() {
    this._cloneLikeButton.addEventListener('click', this._handleLikeButtonClick);
    this._cloneRemoveButton.addEventListener('click', this._handleRemoveButtonClick);
    this._cloneImage.addEventListener('click', this._openPopupImage.bind(this, this._cloneImage, this._cloneTitle));
  }

  _fillCloneElements() {
    this._cloneImage.src = this._element.link;
    this._cloneTitle.textContent = this._cloneImage.alt = this._element.name;
  }

  _findCloneElements() {
    this._cloneImage = this._clone.querySelector(`.${this._config.templateImageClass}`);
    this._cloneTitle = this._clone.querySelector(`.${this._config.templateTitleClass}`);
    this._cloneRemoveButton = this._clone.querySelector(`.${this._config.templateRemoveButtonClass}`);
    this._cloneLikeButton = this._clone.querySelector(`.${this._config.templateLikeButtonClass}`);
  }

  _cloneTemplate() {
    this._clone = this._templateContent.cloneNode(true);
  }

  makeCard() {
    this._cloneTemplate();
    this._findCloneElements();
    this._fillCloneElements();
    this._setEventListeners();
    return this._clone;
  }
}
