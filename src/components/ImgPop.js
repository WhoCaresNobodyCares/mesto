import Pop from './Pop.js';
export default class ImgPop extends Pop {
  constructor({ popId, clsBtn }, conf) {
    super({ popId, clsBtn });
    this._img = this._pop.querySelector(
      `.${conf.imgPopCls}`
    );
    this._cpt = this._pop.querySelector(
      `.${conf.cptPopCls}`
    );
  }

  // ---

  _prepPop = (img, tit) => {
    this._img.src = img.src;
    this._cpt.textContent = this._img.alt = tit.textContent;
  };

  // ---

  opn = (img, tit) => {
    this._prepPop(img, tit);
    this._addEvtLst();
    this._pop.classList.add('popup_opened');
  };
}
