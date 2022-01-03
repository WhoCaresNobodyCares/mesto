export default class Popup {
  constructor(popupId, popupCloseButtonClass, popupOpenedClass) {
    this._popup = document.querySelector(`#${popupId}`);
    this._popupCloseButton = this._popup.querySelector(`.${popupCloseButtonClass}`);
    this._popupOpenedClass = popupOpenedClass;
  }

  _closeOnOverlayClick = event => {
    event.target.classList.contains(this._popupOpenedClass) && this.close();
  };

  _closeOnEscapePress = event => {
    event.key === 'Escape' && this.close();
  };

  setEventListeners() {
    this._popup.addEventListener('click', this._closeOnOverlayClick);
    this._popupCloseButton.addEventListener('click', () => this.close());
  }

  open() {
    document.addEventListener('keydown', this._closeOnEscapePress);
    this._popup.classList.add(this._popupOpenedClass);
  }

  close() {
    document.removeEventListener('keydown', this._closeOnEscapePress);
    this._popup.classList.remove(this._popupOpenedClass);
  }
}
