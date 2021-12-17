import { initArr } from './initArr.js';
import { Card } from './Card.js';
import { FormVal } from './FormVal.js';

const tmp = document.querySelector('#cardTemplate').content.querySelector('.card');
const elm = document.querySelector('#elements');

const prf = document.querySelector('#profile');
const prfNam = prf.querySelector('.profile__username');
const prfDsc = prf.querySelector('.profile__description');
const prfEdt = prf.querySelector('.profile__edit');
const prfAdd = prf.querySelector('.profile__add');

const edtPop = document.querySelector('#profileEditPopup');
const edtPopCls = edtPop.querySelector('.popup__close');
const edtPopFrm = document.forms.editForm;
const namInp = edtPopFrm.querySelector('#nameInput');
const dscInp = edtPopFrm.querySelector('#descriptionInput');

const addPop = document.querySelector('#cardAddPopup');
const addPopCls = addPop.querySelector('.popup__close');
const addPopFrm = document.forms.addForm;
const plcInp = addPopFrm.querySelector('#placeInput');
const lnkInp = addPopFrm.querySelector('#linkInput');

const imgPop = document.querySelector('#imageModalPopup');
const imgPopCls = imgPop.querySelector('.popup__close');
const imgPopImg = imgPop.querySelector('.popup__image');
const imgPopCpt = imgPop.querySelector('.popup__caption');

const conf = {
  inp: '.popup__input',
  sub: '.popup__submit',
  subDis: 'popup__submit_disabled',
  errVis: 'popup__error_visible',
  inpErr: 'popup__input_error',
};

const prepCard = obj => new Card(obj, tmp).makeCard();
const setCard = (nod, meth) => elm[meth](nod);

const closeEsc = e => (e.key == 'Escape' ? closePop(document.querySelector('.popup_opened')) : false);
const closeOvr = e => (e.target.classList.contains('popup_opened') == true ? closePop(e.target) : false);

const addPopEvtList = nod => {
  nod.addEventListener('click', closeOvr);
  document.addEventListener('keydown', closeEsc);
  return nod;
};

const remPopEvtList = nod => {
  nod.removeEventListener('click', closeOvr);
  document.removeEventListener('keydown', closeEsc);
  return nod;
};

const openPop = nod => addPopEvtList(nod).classList.add('popup_opened');
const closePop = nod => remPopEvtList(nod).classList.remove('popup_opened');

const makeObj = () => ({ name: `${plcInp.value}`, link: `${lnkInp.value}` });

initArr.forEach(obj => setCard(prepCard(obj), 'append'));

const edtPopFrmVal = new FormVal(edtPopFrm, conf);
edtPopFrmVal.enableVal();

const addPopFrmVal = new FormVal(addPopFrm, conf);
addPopFrmVal.enableVal();

const prepEdtPop = () => {
  namInp.value = prfNam.textContent;
  dscInp.value = prfDsc.textContent;
};

const prepImgPop = (clonImg, clonTit) => {
  imgPopImg.src = clonImg.src;
  imgPopCpt.textContent = imgPopImg.alt = clonTit.textContent;
};

const openEdtPop = nod => {
  edtPopFrmVal.resetVal();
  prepEdtPop();
  openPop(nod);
};

const openAddPop = nod => {
  addPopFrmVal.resetVal();
  openPop(nod);
};

window.openImgPop = (clonImg, clonTit) => {
  prepImgPop(clonImg, clonTit);
  openPop(imgPop);
};

const setProfInfo = () => {
  prfNam.textContent = namInp.value;
  prfDsc.textContent = dscInp.value;
};

const handEdtPopSub = e => {
  e.preventDefault();
  setProfInfo();
  closePop(edtPop);
};

const handAddPopSub = e => {
  e.preventDefault();
  setCard(prepCard(makeObj()), 'prepend');
  closePop(addPop);
};

prfEdt.addEventListener('click', openEdtPop.bind(this, edtPop));
prfAdd.addEventListener('click', openAddPop.bind(this, addPop));
edtPopCls.addEventListener('click', closePop.bind(this, edtPop));
addPopCls.addEventListener('click', closePop.bind(this, addPop));
imgPopCls.addEventListener('click', closePop.bind(this, imgPop));
edtPopFrm.addEventListener('submit', handEdtPopSub);
addPopFrm.addEventListener('submit', handAddPopSub);
