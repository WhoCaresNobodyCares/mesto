export default class Pop {
  constructor({ popId, clsBtn }) {
    this._pop = document.querySelector(`#${popId}`);
    this._clsBtn = this._pop.querySelector(`.${clsBtn}`);
  }

  // ---

  _clsOnOvr = (e) =>
    e.target.classList.contains('popup_opened') === true &&
    this.cls();

  _clsOnBtn = () => this.cls();

  _clsOnEsc = (e) => e.key === 'Escape' && this.cls();

  // ---

  _addEvtLst = () => {
    this._pop.addEventListener('click', this._clsOnOvr);
    this._clsBtn.addEventListener('click', this._clsOnBtn);
    document.addEventListener('keydown', this._clsOnEsc);
  };

  _remEvtLst = () => {
    this._pop.removeEventListener('click', this._clsOnOvr);
    this._clsBtn.removeEventListener(
      'click',
      this._clsOnBtn
    );
    document.removeEventListener('keydown', this._clsOnEsc);
  };

  // ---

  opn = () => {
    this._addEvtLst();
    this._pop.classList.add('popup_opened');
  };

  cls = () => {
    this._remEvtLst();
    this._pop.classList.remove('popup_opened');
  };
}
