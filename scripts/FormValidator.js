export class FormValidator {
  constructor(form, config) {
    this._form = form;
    this._popupInput = config.popupInput;
    this._popupSubmit = config.popupSubmit;
    this._popupSubmitDisabled = config.popupSubmitDisabled;
    this._popupErrorVisible = config.popupErrorVisible;
    this._popupInputError = config.popupInputError;
  }

  _toggleSubmitButton = () => {
    [this._validationState, this._submitButton] = [this._form.checkValidity(), this._form.querySelector(this._popupSubmit)];
    this._submitButton.disabled = !this._validationState;
    this._submitButton.classList.toggle(this._popupSubmitDisabled, !this._validationState);
  };

  _findError = input => this._form.querySelector(`#${input.id}-err`);

  _hideError = input => {
    this._error = this._findError(input);
    this._error.textContent = '';
    this._error.classList.remove(this._popupErrorVisible);
    input.classList.remove(this._popupInputError);
  };

  _showError = input => {
    this._error = this._findError(input);
    this._error.textContent = input.validationMessage;
    this._error.classList.add(this._popupErrorVisible);
    input.classList.add(this._popupInputError);
  };

  _checkInputValidation = input => (input.validity.valid == true ? this._hideError(input) : this._showError(input));

  enableValidation = () => {
    this._formInputs = this._form.querySelectorAll(this._popupInput);
    this._formInputs.forEach(input => {
      input.addEventListener('input', () => {
        this._checkInputValidation(input);
        this._toggleSubmitButton();
      });
    });
  };

  _resetInputs = () => this._formInputs.forEach(input => this._hideError(input));

  resetValidation = () => {
    this._form.reset();
    this._toggleSubmitButton();
    this._resetInputs();
  };
}
