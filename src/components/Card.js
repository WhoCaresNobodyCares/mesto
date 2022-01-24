export default class Card {
  constructor(element, openPopupImage, config, confirmPopup, api, userInfo) {
    this._element = element;
    this._openPopupImage = openPopupImage;
    this._config = config;
    this._template = document.querySelector(`#${this._config.templateId}`);
    this._templateContent = this._template.content.querySelector(`.${this._config.cardClass}`);
    this._confirmPopup = confirmPopup;
    this._api = api;
    this._userInfo = userInfo;
  }

  _handleLikeButtonClick = () => {
    if (this._cloneLikeButton.classList.contains(this._config.templateLikeButtonActiveClass)) {
      this._api
        .removeLike(this._id)
        .then(data => {
          this._cloneLikeButton.classList.remove(`${this._config.templateLikeButtonActiveClass}`);
          this._likesCounter.textContent = data.likes.length;
        })
        .catch(error => console.log(`Something went wrong - ${error}`));
    } else {
      this._api
        .putLike(this._id)
        .then(data => {
          this._cloneLikeButton.classList.add(`${this._config.templateLikeButtonActiveClass}`);
          this._likesCounter.textContent = data.likes.length;
        })
        .catch(error => console.log(`Something went wrong - ${error}`));
    }
  };

  _handleRemoveButtonClick = () => {
    this._confirmPopup.open(this._clone, this._id);
  };

  _setEventListeners() {
    this._cloneLikeButton.addEventListener('click', this._handleLikeButtonClick);
    this._cloneRemoveButton.addEventListener('click', this._handleRemoveButtonClick);
    this._cloneImage.addEventListener('click', this._openPopupImage.bind(this, this._cloneImage, this._cloneTitle));
  }

  _fillCloneElements() {
    this._cloneImage.src = this._element.link;
    this._cloneTitle.textContent = this._cloneImage.alt = this._element.name;
    this._likesCounter.textContent = this._likes.length;
  }

  _activateUserLikes() {
    this._likes.forEach(object => {
      if (object.name === this._userInfo.getInfo().name) {
        this._cloneLikeButton.classList.add(`${this._config.templateLikeButtonActiveClass}`);
      }
    });
  }

  _unlockRemoveButton() {
    this._api
      .getUserInfo()
      .then(data => {
        data.name === this._owner && this._cloneRemoveButton.classList.remove(this._config.templateRemoveButtonHiddenClass);
      })
      .catch(error => console.log(`Something went wrong - ${error}`));
  }

  _findCloneElements() {
    this._cloneImage = this._clone.querySelector(`.${this._config.templateImageClass}`);
    this._cloneTitle = this._clone.querySelector(`.${this._config.templateTitleClass}`);
    this._cloneRemoveButton = this._clone.querySelector(`.${this._config.templateRemoveButtonClass}`);
    this._cloneLikeButton = this._clone.querySelector(`.${this._config.templateLikeButtonClass}`);
    this._likesCounter = this._clone.querySelector(`.${this._config.templateLikeCounterClass}`);
  }

  _cloneTemplate() {
    this._clone = this._templateContent.cloneNode(true);
  }

  _collectElementInfo() {
    this._id = this._element._id;
    this._likes = this._element.likes;
    this._owner = this._element.owner.name;
  }

  makeCard() {
    this._collectElementInfo();
    this._cloneTemplate();
    this._findCloneElements();
    this._unlockRemoveButton();
    this._activateUserLikes();
    this._fillCloneElements();
    this._setEventListeners();
    return this._clone;
  }
}
