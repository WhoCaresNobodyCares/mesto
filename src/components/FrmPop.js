import Pop from './Pop.js';
export default class FrmPop extends Pop {
  constructor(conf, { popId, clsBtn, form, submit, reset, prep }) {
    super({ popId, clsBtn });
    this._frm = form;
    this._namInp = this._frm.querySelector(`#${conf.namInpId}`);
    this._dscInp = this._frm.querySelector(`#${conf.dscInpId}`);
    this._plcInp = this._frm.querySelector(`#${conf.plcInpId}`);
    this._lnkInp = this._frm.querySelector(`#${conf.lnkInpId}`);
    this._submit = submit;
    this._reset = reset;
    this._prep = prep;
  }

  // ---

  _getInpVal = () =>
    this._frm.name === 'editForm'
      ? {
          name: this._namInp.value,
          desc: this._dscInp.value,
        }
      : {
          name: this._plcInp.value,
          link: this._lnkInp.value,
        };

  // ---

  _handSub = e => {
    this._submit(e, this._getInpVal());
    this.cls();
  };

  // ---

  _addEvtLst = () => {
    this._frm.addEventListener('submit', this._handSub);
    this._pop.addEventListener('click', this._clsOnOvr);
    this._clsBtn.addEventListener('click', this._clsOnBtn);
    document.addEventListener('keydown', this._clsOnEsc);
  };

  // ---
  _remEvtLst = () => {
    this._frm.addEventListener('submit', this._handSub);
    this._pop.removeEventListener('click', this._clsOnOvr);
    this._clsBtn.removeEventListener('click', this._clsOnBtn);
    document.removeEventListener('keydown', this._clsOnEsc);
  };

  // ---

  _prepEdtPop = () => {
    this._namInp.value = this._prep().name;
    this._dscInp.value = this._prep().desc;
  };

  // ---

  opn = () => {
    this._reset();
    this._pop.id === 'profileEditPopup' && this._prepEdtPop();
    this._addEvtLst();
    this._pop.classList.add('popup_opened');
  };
}
