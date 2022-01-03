import Popup from './Popup.js';
export default class FormPopup extends Popup {
  constructor(popupId, popupCloseButtonClass, popupOpenedClass, formId, formInputClass, submitter) {
    super(popupId, popupCloseButtonClass, popupOpenedClass);
    this._form = this._popup.querySelector(`#${formId}`);
    this._inputList = this._form.querySelectorAll(`.${formInputClass}`);
    this._submitter = submitter;
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => (this._formValues[input.name] = input.value));
    return this._formValues;
  }

  setInputValues(data) {
    this._inputList.forEach(input => {
      data.hasOwnProperty(input.name) && (input.value = data[input.name]);
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', event => {
      this._submitter(event, this._getInputValues());
      this.close();
    });
  }
}
