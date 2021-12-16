class FormValidator {
  constructor(form, configuration) {
    this._form = form;
    this._formClass = configuration.formClass;
    this._inputClass = configuration.inputClass;
    this._submitClass = configuration.submitClass;
    this._submitDisabledClass = configuration.submitDisabledClass;
    this._errorVisibleClass = configuration.errorVisibleClass;
    this._inputErrorClass = configuration.inputErrorClass;
  }

  _hideError = formInput => {
    this._error = this._form.querySelector(`#${formInput.id}-err`);
    this._error.textContent = '';
    this._error.classList.remove(this._errorVisibleClass);
    formInput.classList.remove(this._inputErrorClass);
  };

  _showError = formInput => {
    this._error = this._form.querySelector(`#${formInput.id}-err`);
    this._error.textContent = formInput.validationMessage;
    this._error.classList.add(this._errorVisibleClass);
    formInput.classList.add(this._inputErrorClass);
  };

  _checkInputValidity = formInput => {
    if (formInput.validity.valid) {
      this._hideError(formInput);
    } else {
      this._showError(formInput);
    }
  };

  _toggleButtonStatus = () => {
    this._isValid = this._form.checkValidity();
    this._button = this._form.querySelector(this._submitClass);
    this._button.disabled = !this._isValid;
    this._button.classList.toggle(this._submitDisabledClass, !this._isValid);
  };

  _setFormEventListeners = () => {
    this._formInputs = Array.from(this._form.querySelectorAll(this._inputClass));
    this._toggleButtonStatus();
    this._formInputs.forEach(formInput => {
      formInput.addEventListener('input', () => {
        this._checkInputValidity(formInput);
        this._toggleButtonStatus();
      });
    });
  };

  enableValidation = () => {
    this._setFormEventListeners();
  };
}
export { FormValidator };
