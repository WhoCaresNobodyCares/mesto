import {
  iniArr,
  conf,
  prfAddBtn,
  prfEdtBtn,
  cardConf,
  frmValConf,
  edtPopFrm,
  addPopFrm,
} from '../utils/vars.js';

// ---

import UsrInf from '../components/UsrInf.js';
import ImgPop from '../components/ImgPop.js';
import FrmPop from '../components/FrmPop.js';
import FrmVal from '../components/FrmVal.js';
import Sect from '../components/Sect.js';
import Card from '../components/Card.js';

// ---

const [usrInf, imgPop] = [
  new UsrInf({ namCls: conf.prfNamCls, dscCls: conf.prfDscCls }),
  new ImgPop({ popId: conf.imgPopId, clsBtn: conf.clsBtnCls }, conf),
];

const [edtPopVal, addPopVal] = [
  new FrmVal(edtPopFrm, frmValConf),
  new FrmVal(addPopFrm, frmValConf),
];

const elem = new Sect(conf.elmSctId, {
  itms: iniArr,
  rndr: (cont, mth, obj) => {
    cont[mth](
      new Card(cardConf, {
        obj: obj,
        imgHand: (img, tit) => imgPop.opn(img, tit),
      }).makeCard()
    );
  },
});

const [edtPop, addPop] = [
  new FrmPop(conf, {
    popId: conf.edtPopId,
    clsBtn: conf.clsBtnCls,
    form: edtPopFrm,
    submit: (e, obj) => {
      e.preventDefault();
      usrInf.set(obj.name, obj.desc);
    },
    reset: () => edtPopVal.resVal(),
    prep: () => usrInf.get(),
  }),
  new FrmPop(conf, {
    popId: conf.addPopId,
    clsBtn: conf.clsBtnCls,
    form: addPopFrm,
    submit: (e, obj) => {
      e.preventDefault();
      elem.rndrNew(obj);
    },
    reset: () => addPopVal.resVal(),
    prep: () => {},
  }),
];

// ---

edtPopVal.enableVal();
addPopVal.enableVal();
elem.rndrIni();

// ---

prfEdtBtn.addEventListener('click', () => edtPop.opn());
prfAddBtn.addEventListener('click', () => addPop.opn());
