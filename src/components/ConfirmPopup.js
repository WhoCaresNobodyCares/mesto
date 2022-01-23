import Popup from './Popup.js';
export default class ConfirmPopup extends Popup {
  constructor(popupId, popupCloseButtonClass, popupOpenedClass, formId, formInputClass, handlePopupSubmit) {
    super(popupId, popupCloseButtonClass, popupOpenedClass);
    this._form = this._popup.querySelector(`#${formId}`);
    this._inputList = this._form.querySelectorAll(`.${formInputClass}`);
    this._handlePopupSubmit = handlePopupSubmit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', event => {
      event.preventDefault();
      this._handlePopupSubmit(this._card, this._id);
      this.close();
    });
  }

  open(card, id) {
    this._card = card;
    this._id = id;
    super.open();
  }
}
