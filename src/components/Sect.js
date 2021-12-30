export default class Sect {
  constructor(cont, { itms, rndr }) {
    this._cont = document.querySelector(`#${cont}`);
    this._itms = itms;
    this._rndr = rndr;
  }

  // ---

  rndrIni = () =>
    this._itms.forEach((obj) =>
      this._rndr(this._cont, 'append', obj)
    );

  rndrNew = (obj) => this._rndr(this._cont, 'prepend', obj);
}
