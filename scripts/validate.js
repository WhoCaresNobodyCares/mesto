// FUNCTIONS

const hideErr = (form, input, { errorVisibleClass, inputErrorClass }) => {
  const err = form.querySelector(`#${input.id}-err`);
  err.textContent = '';
  err.classList.remove(errorVisibleClass);
  input.classList.remove(inputErrorClass);
};

const showErr = (form, input, { errorVisibleClass, inputErrorClass }) => {
  const err = form.querySelector(`#${input.id}-err`);
  err.textContent = input.validationMessage;
  err.classList.add(errorVisibleClass);
  input.classList.add(inputErrorClass);
};

const checkValidity = (form, input, { errorVisibleClass, inputErrorClass }) => {
  if (input.validity.valid) {
    hideErr(form, input, {
      errorVisibleClass,
      inputErrorClass,
    });
  } else {
    showErr(form, input, {
      errorVisibleClass,
      inputErrorClass,
    });
  }
};

const toggleButton = (form, button, { submitDisabledClass }) => {
  const isValid = form.checkValidity();
  button.disabled = !isValid;
  button.classList.toggle(submitDisabledClass, !isValid);
};

const setEvtListeners = (form, { inputClass, submitClass, submitDisabledClass, errorVisibleClass, inputErrorClass }) => {
  const inputs = Array.from(form.querySelectorAll(inputClass));
  const button = form.querySelector(submitClass);
  toggleButton(form, button, { submitDisabledClass });
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      checkValidity(form, input, {
        errorVisibleClass,
        inputErrorClass,
      });
      toggleButton(form, button, { submitDisabledClass });
    });
  });
};

const enableValidation = config => {
  const { formClass, inputClass, submitClass, submitDisabledClass, errorVisibleClass, inputErrorClass } = config;
  const forms = document.querySelectorAll(formClass);
  forms.forEach(form => {
    setEvtListeners(form, {
      inputClass,
      submitClass,
      submitDisabledClass,
      errorVisibleClass,
      inputErrorClass,
    });
  });
};
