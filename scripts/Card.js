export class Card {
  constructor(obj, tmp) {
    this._obj = obj;
    this._tmp = tmp;
  }

  _handLik = () => this._clonLik.classList.toggle('card__like_active');

  _handRem = () => this._clon.remove();

  _handImg = () => window.openImgPop(this._clonImg, this._clonTit);

  _setEvtList = () => {
    this._clonLik.addEventListener('click', this._handLik);
    this._clonRem.addEventListener('click', this._handRem);
    this._clonImg.addEventListener('click', this._handImg);
  };

  _fillClonElms = () => {
    this._clonImg.src = this._obj.link;
    this._clonTit.textContent = this._clonImg.alt = this._obj.name;
  };

  _findClonElms = () => {
    this._clonImg = this._clon.querySelector('.card__image');
    this._clonTit = this._clon.querySelector('.card__title');
    this._clonRem = this._clon.querySelector('.card__remove');
    this._clonLik = this._clon.querySelector('.card__like');
  };

  _clonTmp = () => (this._clon = this._tmp.cloneNode(true));

  makeCard = () => {
    this._clonTmp();
    this._findClonElms();
    this._fillClonElms();
    this._setEvtList();
    return this._clon;
  };
}
