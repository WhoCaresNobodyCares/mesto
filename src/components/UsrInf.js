export default class UsrInf {
  constructor({ namCls, dscCls }) {
    this._nam = document.querySelector(`.${namCls}`);
    this._dsc = document.querySelector(`.${dscCls}`);
  }

  // ---

  get = () => ({
    name: this._nam.textContent,
    desc: this._dsc.textContent,
  });

  set = (nam, dsc) =>
    ([this._nam.textContent, this._dsc.textContent] = [nam, dsc]);
}
