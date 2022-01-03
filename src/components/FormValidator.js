export default class FormValidator {
  constructor(formId, config) {
    this._form = document.querySelector(`#${formId}`);
    this._config = config;
    this._formInputFields = this._form.querySelectorAll(`.${this._config.inputClass}`);
    this._submitButton = this._form.querySelector(`.${this._config.submitButtonClass}`);
  }

  _toggleSubmitButton() {
    this._validityState = this._form.checkValidity();
    this._submitButton.disabled = !this._validityState;
    this._submitButton.classList.toggle(this._config.submitButtonDisabledClass, !this._validityState);
  }

  _findError(inputField) {
    return this._form.querySelector(`#${inputField.id}-err`);
  }

  _hideError(inputField) {
    this._error = this._findError(inputField);
    this._error.textContent = '';
    this._error.classList.remove(this._config.errorVisibleClass);
    inputField.classList.remove(this._config.inputErrorClass);
  }

  _showError(inputField) {
    this._error = this._findError(inputField);
    this._error.textContent = inputField.validationMessage;
    this._error.classList.add(this._config.errorVisibleClass);
    inputField.classList.add(this._config.inputErrorClass);
  }

  _checkInputValidity(inputField) {
    inputField.validity.valid ? this._hideError(inputField) : this._showError(inputField);
  }

  enableValidation() {
    this._formInputFields.forEach(inputField => {
      inputField.addEventListener('input', () => {
        this._checkInputValidity(inputField);
        this._toggleSubmitButton();
      });
    });
  }

  _resetInputFields() {
    this._formInputFields.forEach(inputField => {
      this._hideError(inputField);
    });
  }

  resetValidation() {
    this._form.reset();
    this._toggleSubmitButton();
    this._resetInputFields();
  }
}
