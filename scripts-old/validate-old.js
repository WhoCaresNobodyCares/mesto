const resetPopup = (node, { ...conf }) => {
  const inputs = node.querySelectorAll(conf.inputClass);
  inputs.forEach(input => {
    input.classList.remove(conf.inputErrorClass);
  });
  const errs = node.querySelectorAll(conf.popupErrorClass);
  errs.forEach(err => {
    err.textContent = '';
  });
  const button = node.querySelector(conf.submitClass);
  button.classList.add(conf.submitDisabledClass);
  button.disabled = true;
  return node;
};

const hideErr = (form, input, conf) => {
  const err = form.querySelector(`#${input.id}-err`);
  err.textContent = '';
  err.classList.remove(conf.errorVisibleClass);
  input.classList.remove(conf.inputErrorClass);
};

const showErr = (form, input, conf) => {
  const err = form.querySelector(`#${input.id}-err`);
  err.textContent = input.validationMessage;
  err.classList.add(conf.errorVisibleClass);
  input.classList.add(conf.inputErrorClass);
};

const checkInputValidity = (form, input, conf) => {
  if (input.validity.valid) {
    hideErr(form, input, conf);
  } else {
    showErr(form, input, conf);
  }
};

const toggleButton = (form, conf) => {
  const isValid = form.checkValidity();
  const button = form.querySelector(conf.submitClass);
  button.disabled = !isValid;
  button.classList.toggle(conf.submitDisabledClass, !isValid);
};

const setEvtListeners = (form, conf) => {
  const inputs = Array.from(
    form.querySelectorAll(conf.inputClass)
  );
  toggleButton(form, conf);
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      checkInputValidity(form, input, conf);
      toggleButton(form, conf);
    });
  });
};

const enableValidation = ({ ...conf }) => {
  const forms = document.querySelectorAll(conf.formClass);
  forms.forEach(form => {
    setEvtListeners(form, conf);
  });
};
