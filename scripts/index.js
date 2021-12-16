import { initArr } from './initArr.js';
import { Card } from './Card.js';
import { FormVal } from './FormVal.js';

const temp = document.querySelector('#cardTemplate').content.querySelector('.card');
const elem = document.querySelector('#elements');

const prof = document.querySelector('#profile');
const profName = prof.querySelector('.profile__username');
const profDesc = prof.querySelector('.profile__description');
const profEdt = prof.querySelector('.profile__edit');
const profAdd = prof.querySelector('.profile__add');

const edtPop = document.querySelector('#profileEditPopup');
const edtPopClos = edtPop.querySelector('.popup__close');
const edtPopForm = document.forms.editForm;
const namInp = edtPopForm.querySelector('#nameInput');
const dscInp = edtPopForm.querySelector('#descriptionInput');

const addPop = document.querySelector('#cardAddPopup');
const addPopClos = addPop.querySelector('.popup__close');
const addPopForm = document.forms.addForm;
const plcInp = addPopForm.querySelector('#placeInput');
const lnkInp = addPopForm.querySelector('#linkInput');

const imgPop = document.querySelector('#imageModalPopup');
const imgPopClos = imgPop.querySelector('.popup__close');
const imgPopImg = imgPop.querySelector('.popup__image');
const imgPopCapt = imgPop.querySelector('.popup__caption');

const conf = {
  inp: '.popup__input',
  sub: '.popup__submit',
  subDis: 'popup__submit_disabled',
  errVis: 'popup__error_visible',
  inpErr: 'popup__input_error',
  popErr: '.popup__error',
};

initArr.forEach(obj => {
  const card = new Card(obj, temp);
  card.makeCard(elem, 'append');
});

const edtPopFormVal = new FormVal(edtPopForm, conf);
edtPopFormVal.enableVal();

const addPopFormVal = new FormVal(addPopForm, conf);
addPopFormVal.enableVal();

const closeOvr = e => closePop(e.target);

const closeEsc = e => {
  if (e.key === 'Escape') {
    closePop(document.querySelector('.popup_opened'));
  }
};

const addPopEvtList = nod => {
  nod.addEventListener('click', closeOvr);
  document.addEventListener('keydown', closeEsc);
  return nod;
};

const openPop = nod => addPopEvtList(nod).classList.add('popup_opened');

const remPopEvtList = nod => {
  nod.removeEventListener('click', closeOvr);
  document.removeEventListener('keydown', closeEsc);
  return nod;
};

const closePop = nod => remPopEvtList(nod).classList.remove('popup_opened');

const resetInp = (nod, conf) => {
  const inps = nod.querySelectorAll(conf.inp);
  inps.forEach(inp => inp.classList.remove(conf.inpErr));
};

const resetErr = (nod, conf) => {
  const errs = nod.querySelectorAll(conf.popErr);
  errs.forEach(err => (err.textContent = ''));
};

const resetSub = (nod, conf) => {
  const sub = nod.querySelector(conf.sub);
  sub.classList.add(conf.subDis);
  sub.disabled = true;
};

const resetPop = (nod, conf) => {
  resetInp(nod, conf);
  resetErr(nod, conf);
  resetSub(nod, conf);
  return nod;
};

const prepEdtPop = () => {
  namInp.value = profName.textContent;
  dscInp.value = profDesc.textContent;
};

const openEdtPop = nod => {
  prepEdtPop();
  openPop(resetPop(nod, conf));
};

const openAddPop = nod => {
  addPopForm.reset();
  openPop(resetPop(nod, conf));
};

const fillImgPop = (clonImg, clonTit) => {
  imgPopImg.src = clonImg.src;
  imgPopCapt.textContent = imgPopImg.alt = clonTit.textContent;
};

// см. Cards.js - 11 стр.
window.openImgPop = (clonImg, clonTit) => {
  fillImgPop(clonImg, clonTit);
  openPop(imgPop);
};

const setProfInfo = () => {
  profName.textContent = namInp.value;
  profDesc.textContent = dscInp.value;
};

const handEdtPopSub = e => {
  e.preventDefault();
  setProfInfo();
  closePop(edtPop);
};

const makeObj = () => {
  const obj = { name: '', link: '' };
  obj.name = plcInp.value;
  obj.link = lnkInp.value;
  return obj;
};

const makeCard = () => {
  const card = new Card(makeObj(), temp);
  card.makeCard(elem, 'prepend');
};

const handAddPopSub = e => {
  e.preventDefault();
  makeCard();
  closePop(addPop);
};

profEdt.addEventListener('click', openEdtPop.bind(this, edtPop));
profAdd.addEventListener('click', openAddPop.bind(this, addPop));
edtPopClos.addEventListener('click', closePop.bind(this, edtPop));
addPopClos.addEventListener('click', closePop.bind(this, addPop));
imgPopClos.addEventListener('click', closePop.bind(this, imgPop));
edtPopForm.addEventListener('submit', handEdtPopSub);
addPopForm.addEventListener('submit', handAddPopSub);
