export default class FrmVal {
  constructor(frm, cnf) {
    this._frm = frm;
    this._popInp = cnf.popInp;
    this._popSub = cnf.popSub;
    this._popSubDis = cnf.popSubDis;
    this._popErrVis = cnf.popErrVis;
    this._popInpErr = cnf.popInpErr;
  }

  _toggleSub = () => {
    this._valState = this._frm.checkValidity();
    this._subBtn = this._frm.querySelector(this._popSub);
    this._subBtn.disabled = !this._valState;
    this._subBtn.classList.toggle(
      this._popSubDis,
      !this._valState
    );
  };

  _findErr = (inp) =>
    this._frm.querySelector(`#${inp.id}-err`);

  _hideErr = (inp) => {
    this._err = this._findErr(inp);
    this._err.textContent = '';
    this._err.classList.remove(this._popErrVis);
    inp.classList.remove(this._popInpErr);
  };

  _showErr = (inp) => {
    this._err = this._findErr(inp);
    this._err.textContent = inp.validationMessage;
    this._err.classList.add(this._popErrVis);
    inp.classList.add(this._popInpErr);
  };

  _checkInpVal = (inp) =>
    inp.validity.valid === true
      ? this._hideErr(inp)
      : this._showErr(inp);

  enableVal = () => {
    this._frmInps = this._frm.querySelectorAll(
      this._popInp
    );
    this._frmInps.forEach((inp) => {
      inp.addEventListener('input', () => {
        this._checkInpVal(inp);
        this._toggleSub();
      });
    });
  };

  _resInps = () =>
    this._frmInps.forEach((inp) => this._hideErr(inp));

  resVal = () => {
    this._frm.reset();
    this._toggleSub();
    this._resInps();
  };
}
