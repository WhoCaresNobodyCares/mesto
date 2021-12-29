export default class Card {
  constructor(conf, { obj, imgHand }) {
    this._obj = obj;
    this._tmp = document.querySelector(`#${conf.tmpId}`);
    this._tmpCnt = this._tmp.content.querySelector(`.${conf.crdCls}`);
    this._imgCls = conf.imgCls;
    this._titCls = conf.titCls;
    this._remCls = conf.remCls;
    this._likCls = conf.likCls;
    this._likActCls = conf.likActCls;
    this._imgHand = imgHand;
  }

  // ---

  _handLik = () =>
    this._clonLik.classList.toggle(`${this._likActCls}`);

  _handRem = () => this._clon.remove();

  _handImg = () => this._imgHand(this._clonImg, this._clonTit);

  // ---

  _setEvtLst = () => {
    this._clonLik.addEventListener('click', this._handLik);
    this._clonRem.addEventListener('click', this._handRem);
    this._clonImg.addEventListener('click', this._handImg);
  };

  // ---

  _fillClonElm = () => {
    this._clonImg.src = this._obj.link;
    this._clonTit.textContent = this._clonImg.alt = this._obj.name;
  };

  // ---

  _findClonElm = () => {
    this._clonImg = this._clon.querySelector(`.${this._imgCls}`);
    this._clonTit = this._clon.querySelector(`.${this._titCls}`);
    this._clonRem = this._clon.querySelector(`.${this._remCls}`);
    this._clonLik = this._clon.querySelector(`.${this._likCls}`);
  };

  // ---

  _clonTmp = () => (this._clon = this._tmpCnt.cloneNode(true));

  // ---

  makeCard = () => {
    this._clonTmp();
    this._findClonElm();
    this._fillClonElm();
    this._setEvtLst();
    return this._clon;
  };
}
