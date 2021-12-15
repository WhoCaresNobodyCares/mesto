class Card {
  constructor(obj, temp) {
    this._obj = obj;
    this._name = this._obj.name;
    this._link = this._obj.link;
    this._temp = temp;
  }

  _handleLik = () => {
    this._cloneLik.classList.toggle('card__like_active');
  };

  _handleRem = () => {
    this._clone.remove();
  };

  _closePopup = () => {
    window.closePopup(this._popup);
  };

  _setPopupEvtListener = () => {
    this._popupCls.addEventListener('click', this._closePopup);
  };

  _findPopup = () => {
    this._popup = document.querySelector('#imageModalPopup');
    this._popupCls = this._popup.querySelector('.popup__close');
    this._popupImg = this._popup.querySelector('.popup__image');
    this._popupCap = this._popup.querySelector('.popup__caption');
  };

  _handleImg = () => {
    this._findPopup();
    this._setPopupEvtListener();
    this._popupImg.src = this._cloneImg.src;
    this._popupCap.textContent = this._popupImg.alt = this._cloneTit.textContent;
    window.openPopup(this._popup);
  };

  _setListeners = () => {
    this._cloneLik.addEventListener('click', this._handleLik);
    this._cloneRem.addEventListener('click', this._handleRem);
    this._cloneImg.addEventListener('click', this._handleImg);
  };

  _fill = () => {
    this._cloneImg.src = this._link;
    this._cloneTit.textContent = this._cloneImg.alt = this._name;
    this._setListeners();
  };

  _find = () => {
    this._clone = this._temp.cloneNode(true);
    this._cloneImg = this._clone.querySelector('.card__image');
    this._cloneTit = this._clone.querySelector('.card__title');
    this._cloneRem = this._clone.querySelector('.card__remove');
    this._cloneLik = this._clone.querySelector('.card__like');
    this._fill();
  };

  create = (sect, meth) => {
    this._find();
    sect[meth](this._clone);
  };
}

export { Card };
