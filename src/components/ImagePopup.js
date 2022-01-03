import Popup from './Popup.js';
export default class ImagePopup extends Popup {
  constructor(popupId, popupCloseButtonClass, popupOpenedClass, imageClass, captionClass) {
    super(popupId, popupCloseButtonClass, popupOpenedClass);
    this._image = this._popup.querySelector(`.${imageClass}`);
    this._caption = this._popup.querySelector(`.${captionClass}`);
  }

  _preparePopup(image, title) {
    this._image.src = image.src;
    this._caption.textContent = this._image.alt = title.textContent;
  }

  open(image, title) {
    this._preparePopup(image, title);
    super.open();
  }
}
