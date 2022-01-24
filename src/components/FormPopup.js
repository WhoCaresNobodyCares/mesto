import Popup from './Popup.js';
export default class FormPopup extends Popup {
  constructor(popupId, popupCloseButtonClass, popupOpenedClass, formId, formInputClass, handlePopupSubmit) {
    super(popupId, popupCloseButtonClass, popupOpenedClass);
    this._form = this._popup.querySelector(`#${formId}`);
    this._inputList = this._form.querySelectorAll(`.${formInputClass}`);
    this._handlePopupSubmit = handlePopupSubmit;
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(inputField => (this._formValues[inputField.name] = inputField.value));
    return this._formValues;
  }

  setInputValues(data) {
    this._inputList.forEach(inputField => {
      data.hasOwnProperty(inputField.name) && (inputField.value = data[inputField.name]);
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', event => {
      event.preventDefault();
      this._handlePopupSubmit(this._getInputValues(), this._popup)
        .then(() => {
          this.close();
        })
        .catch(error => console.log(error));
    });
  }

  close() {
    this._form.reset();
    super.close();
  }
}
