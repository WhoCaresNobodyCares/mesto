class Card {
  constructor(obj, temp) {
    this._obj = obj;
    this._temp = temp;
  }

  _handLik = () => this._clonLik.classList.toggle('card__like_active');

  _handRem = () => this._clon.remove();

  _handImg = () => window.openImgPop(this._clonImg, this._clonTit); // это костыль (●'◡'●)

  _setEvtList = () => {
    this._clonLik.addEventListener('click', this._handLik);
    this._clonRem.addEventListener('click', this._handRem);
    this._clonImg.addEventListener('click', this._handImg);
  };

  _fillTemp = () => {
    this._clonImg.src = this._obj.link;
    this._clonTit.textContent = this._clonImg.alt = this._obj.name;
    this._setEvtList();
  };

  _cloneTemp = () => {
    this._clon = this._temp.cloneNode(true);
    this._clonImg = this._clon.querySelector('.card__image');
    this._clonTit = this._clon.querySelector('.card__title');
    this._clonRem = this._clon.querySelector('.card__remove');
    this._clonLik = this._clon.querySelector('.card__like');
    this._fillTemp();
  };

  makeCard = (sect, meth) => {
    this._cloneTemp();
    sect[meth](this._clon);
  };
}

export { Card };
