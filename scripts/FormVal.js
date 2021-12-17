export class FormVal {
  constructor(frm, conf) {
    this._frm = frm;
    this._inp = conf.inp;
    this._sub = conf.sub;
    this._subDis = conf.subDis;
    this._errVis = conf.errVis;
    this._inpErr = conf.inpErr;
  }

  _findErr = inp => this._frm.querySelector(`#${inp.id}-err`);

  _hideErr = inp => {
    this._err = this._findErr(inp);
    this._err.textContent = '';
    this._err.classList.remove(this._errVis);
    inp.classList.remove(this._inpErr);
  };

  _showErr = inp => {
    this._err = this._findErr(inp);
    this._err.textContent = inp.validationMessage;
    this._err.classList.add(this._errVis);
    inp.classList.add(this._inpErr);
  };

  _checkInpVal = inp => (inp.validity.valid == true ? this._hideErr(inp) : this._showErr(inp));

  _toggleSub = () => {
    this._isVal = this._frm.checkValidity();
    this._btn = this._frm.querySelector(this._sub);
    this._btn.disabled = !this._isVal;
    this._btn.classList.toggle(this._subDis, !this._isVal);
  };

  _setFrmEvtList = () => {
    this._frmInps = this._frm.querySelectorAll(this._inp);
    this._frmInps.forEach(inp => {
      inp.addEventListener('input', () => {
        this._checkInpVal(inp);
        this._toggleSub();
      });
    });
  };

  _resetInps = () => this._frmInps.forEach(inp => this._hideErr(inp));

  resetVal = () => {
    this._frm.reset();
    this._toggleSub();
    this._resetInps();
  };

  enableVal = () => this._setFrmEvtList();
}
