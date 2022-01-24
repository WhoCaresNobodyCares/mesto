(()=>{"use strict";var t={templateId:"cardTemplate",cardClass:"card",templateImageClass:"card__image",templateTitleClass:"card__title",templateRemoveButtonClass:"card__remove",templateRemoveButtonHiddenClass:"card__remove_hidden",templateLikeButtonClass:"card__like",templateLikeButtonActiveClass:"card__like_active",templateLikeCounterClass:"card__number"},e="popup__close",n="popup_opened",o="popup__input",r={editFormId:"editPopupForm",addFormId:"addPopupForm",updateFormId:"updatePopupForm",inputClass:"popup__input",errorVisibleClass:"popup__error_visible",inputErrorClass:"popup__input_error",submitButtonClass:"popup__submit",submitButtonDisabledClass:"popup__submit_disabled"},i=document.querySelector(".profile__username"),a=document.querySelector(".profile__description"),c=document.querySelector(".profile__edit"),u=document.querySelector(".profile__add"),s=document.querySelector(".profile__overlay");function l(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=function(){function t(e,n,o,r,i,a){var c=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,"_handleLikeButtonClick",(function(){c._cloneLikeButton.classList.contains(c._config.templateLikeButtonActiveClass)?c._api.removeLike(c._id).then((function(t){c._cloneLikeButton.classList.remove(c._config.templateLikeButtonActiveClass),c._likesCounter.textContent=t.likes.length})).catch((function(t){return console.log("WASTED - ".concat(t))})):c._api.putLike(c._id).then((function(t){c._cloneLikeButton.classList.add(c._config.templateLikeButtonActiveClass),c._likesCounter.textContent=t.likes.length})).catch((function(t){return console.log("WASTED - ".concat(t))}))})),p(this,"_handleRemoveButtonClick",(function(){c._confirmPopup.open(c._clone,c._id)})),this._element=e,this._openPopupImage=n,this._config=o,this._template=document.querySelector("#".concat(this._config.templateId)),this._templateContent=this._template.content.querySelector(".".concat(this._config.cardClass)),this._userId=r,this._api=i,this._confirmPopup=a}var e,n;return e=t,(n=[{key:"_setEventListeners",value:function(){this._cloneLikeButton.addEventListener("click",this._handleLikeButtonClick),this._cloneRemoveButton.addEventListener("click",this._handleRemoveButtonClick),this._cloneImage.addEventListener("click",this._openPopupImage.bind(this,this._cloneImage,this._cloneTitle))}},{key:"_fillCloneElements",value:function(){this._cloneImage.src=this._element.link,this._cloneTitle.textContent=this._cloneImage.alt=this._element.name,this._likesCounter.textContent=this._likes.length}},{key:"_activateUserLikes",value:function(){var t=this;this._likes.forEach((function(e){e._id===t._userId&&t._cloneLikeButton.classList.add("".concat(t._config.templateLikeButtonActiveClass))}))}},{key:"_unlockRemoveButton",value:function(){this._ownerId===this._userId&&this._cloneRemoveButton.classList.remove(this._config.templateRemoveButtonHiddenClass)}},{key:"_findCloneElements",value:function(){this._cloneImage=this._clone.querySelector(".".concat(this._config.templateImageClass)),this._cloneTitle=this._clone.querySelector(".".concat(this._config.templateTitleClass)),this._cloneRemoveButton=this._clone.querySelector(".".concat(this._config.templateRemoveButtonClass)),this._cloneLikeButton=this._clone.querySelector(".".concat(this._config.templateLikeButtonClass)),this._likesCounter=this._clone.querySelector(".".concat(this._config.templateLikeCounterClass))}},{key:"_cloneTemplate",value:function(){this._clone=this._templateContent.cloneNode(!0)}},{key:"_collectInfo",value:function(){this._id=this._element._id,this._likes=this._element.likes,this._ownerId=this._element.owner._id}},{key:"makeCard",value:function(){return this._collectInfo(),this._cloneTemplate(),this._findCloneElements(),this._unlockRemoveButton(),this._activateUserLikes(),this._fillCloneElements(),this._setEventListeners(),this._clone}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=function(){function t(e,n,o){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),_(this,"_closeOnOverlayClick",(function(t){t.target.classList.contains(r._popupOpenedClass)&&r.close()})),_(this,"_closeOnEscapePress",(function(t){"Escape"===t.key&&r.close()})),this._popup=document.querySelector("#".concat(e)),this._popupCloseButton=this._popup.querySelector(".".concat(n)),this._popupOpenedClass=o}var e,n;return e=t,(n=[{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("click",this._closeOnOverlayClick),this._popupCloseButton.addEventListener("click",(function(){return t.close()}))}},{key:"open",value:function(){document.addEventListener("keydown",this._closeOnEscapePress),this._popup.classList.add(this._popupOpenedClass)}},{key:"close",value:function(){document.removeEventListener("keydown",this._closeOnEscapePress),this._popup.classList.remove(this._popupOpenedClass)}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function v(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=b(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},m.apply(this,arguments)}function b(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}function k(t,e){return k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},k(t,e)}function g(t,e){if(e&&("object"===y(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(t,"prototype",{value:Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),writable:!1}),e&&k(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=C(o);if(r){var n=C(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return g(this,t)});function a(t,e,n,o,r){var c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(c=i.call(this,t,e,n))._image=c._popup.querySelector(".".concat(o)),c._caption=c._popup.querySelector(".".concat(r)),c}return e=a,(n=[{key:"_preparePopup",value:function(t,e){this._image.src=t.src,this._caption.textContent=this._image.alt=e.textContent}},{key:"open",value:function(t,e){this._preparePopup(t,e),m(C(a.prototype),"open",this).call(this)}}])&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(d);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function E(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=P(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},S.apply(this,arguments)}function P(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=I(t)););return t}function L(t,e){return L=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},L(t,e)}function j(t,e){if(e&&("object"===O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(t,"prototype",{value:Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),writable:!1}),e&&L(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=I(o);if(r){var n=I(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return j(this,t)});function a(t,e,n,o,r,c){var u;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(u=i.call(this,t,e,n))._form=u._popup.querySelector("#".concat(o)),u._inputList=u._form.querySelectorAll(".".concat(r)),u._handlePopupSubmit=c,u}return e=a,(n=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){return t._formValues[e.name]=e.value})),this._formValues}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){t.hasOwnProperty(e.name)&&(e.value=t[e.name])}))}},{key:"setEventListeners",value:function(){var t=this;S(I(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handlePopupSubmit(t._getInputValues(),t._popup).then((function(){t.close()})).catch((function(t){return console.log(t)}))}))}},{key:"close",value:function(){this._form.reset(),S(I(a.prototype),"close",this).call(this)}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(d);function B(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var T=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e,this._name=document.querySelector(".".concat(this._config.nameClass)),this._description=document.querySelector(".".concat(this._config.descriptionClass)),this._avatar=document.querySelector(".".concat(this._config.avatarClass))}var e,n;return e=t,(n=[{key:"getInfo",value:function(){return{name:this._name.textContent,description:this._description.textContent}}},{key:"setInfo",value:function(t,e){this._name.textContent=t,this._description.textContent=e}},{key:"setAvatar",value:function(t){this._avatar.style="background-image: url('".concat(t,"');")}}])&&B(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function q(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var A=function(){function t(e,n,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderInitial=e,this._renderNew=n,this._container=document.querySelector("#".concat(o))}var e,n;return e=t,(n=[{key:"appendCard",value:function(t){this._container.append(t)}},{key:"prependCard",value:function(t){this._container.prepend(t)}},{key:"renderArray",value:function(t){var e=this;t.forEach((function(t){e._renderInitial(t)}))}},{key:"renderCard",value:function(t){this._renderNew(t)}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function x(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var V=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._form=document.querySelector("#".concat(e)),this._config=n,this._formInputFields=this._form.querySelectorAll(".".concat(this._config.inputClass)),this._submitButton=this._form.querySelector(".".concat(this._config.submitButtonClass))}var e,n;return e=t,(n=[{key:"_toggleSubmitButton",value:function(){this._validityState=this._form.checkValidity(),this._submitButton.disabled=!this._validityState,this._submitButton.classList.toggle(this._config.submitButtonDisabledClass,!this._validityState)}},{key:"_findError",value:function(t){return this._form.querySelector("#".concat(t.id,"-err"))}},{key:"_hideError",value:function(t){this._error=this._findError(t),this._error.textContent="",this._error.classList.remove(this._config.errorVisibleClass),t.classList.remove(this._config.inputErrorClass)}},{key:"_showError",value:function(t){this._error=this._findError(t),this._error.textContent=t.validationMessage,this._error.classList.add(this._config.errorVisibleClass),t.classList.add(this._config.inputErrorClass)}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideError(t):this._showError(t)}},{key:"enableValidation",value:function(){var t=this;this._formInputFields.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleSubmitButton()}))}))}},{key:"_resetInputFields",value:function(){var t=this;this._formInputFields.forEach((function(e){t._hideError(e)}))}},{key:"resetValidation",value:function(){this._form.reset(),this._toggleSubmitButton(),this._resetInputFields()}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function F(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var D=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e,this._token=n}var e,n;return e=t,(n=[{key:"_handleResponse",value:function(t){return t.ok?t.json():Promise.reject("WASTED - ".concat(t.status))}},{key:"getAllInfo",value:function(){return Promise.all([this.getUserInfo(),this.getArray()])}},{key:"getUserInfo",value:function(){var t=this;return fetch("".concat(this._url,"/users/me"),{headers:{authorization:this._token}}).then((function(e){return t._handleResponse(e)}))}},{key:"getArray",value:function(){var t=this;return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._token}}).then((function(e){return t._handleResponse(e)}))}},{key:"setInfo",value:function(t,e){var n=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,about:e})}).then((function(t){return n._handleResponse(t)}))}},{key:"addCard",value:function(t,e){var n=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,link:e})}).then((function(t){return n._handleResponse(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._token}}).then((function(t){return e._handleResponse(t)}))}},{key:"putLike",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this._token}}).then((function(t){return e._handleResponse(t)}))}},{key:"removeLike",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._token}}).then((function(t){return e._handleResponse(t)}))}},{key:"setAvatar",value:function(t){var e=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then((function(t){return e._handleResponse(t)}))}}])&&F(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function z(t){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(t)}function N(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function U(){return U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=H(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},U.apply(this,arguments)}function H(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=M(t)););return t}function W(t,e){return W=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},W(t,e)}function J(t,e){if(e&&("object"===z(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function M(t){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},M(t)}var $=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(t,"prototype",{value:Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),writable:!1}),e&&W(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=M(o);if(r){var n=M(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return J(this,t)});function a(t,e,n,o,r,c){var u;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(u=i.call(this,t,e,n))._form=u._popup.querySelector("#".concat(o)),u._inputList=u._form.querySelectorAll(".".concat(r)),u._handlePopupSubmit=c,u}return e=a,(n=[{key:"setEventListeners",value:function(){var t=this;U(M(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handlePopupSubmit(t._card,t._id,t._popup).then((function(){return t.close()})).catch((function(t){return console.log(t)}))}))}},{key:"open",value:function(t,e){this._card=t,this._id=e,U(M(a.prototype),"open",this).call(this)}}])&&N(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(d);function G(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var K=new D("https://nomoreparties.co/v1/cohort-34","7a0a101a-b2ca-4848-ae3c-3b79f13c4cae"),Q=null;K.getAllInfo().then((function(t){var e,n,o=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o,r,i=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(i.push(o.value),!e||i.length!==e);a=!0);}catch(t){c=!0,r=t}finally{try{a||null==n.return||n.return()}finally{if(c)throw r}}return i}}(e,n)||function(t,e){if(t){if("string"==typeof t)return G(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],i=o[1];Q=r._id,X.setAvatar(r.avatar),X.setInfo(r.name,r.about),it.renderArray(i)})).catch((function(t){return function(t){console.log("WASTED - ".concat(t))}(t)}));var X=new T({nameClass:"profile__username",descriptionClass:"profile__description",avatarClass:"profile__avatar"}),Y=new w("imageModalPopup",e,n,"popup__image","popup__caption"),Z=new R("profileEditPopup",e,n,"editPopupForm",o,(function(t,e){return e.querySelector(".popup__submit").textContent="Сохраняется...",K.setInfo(t.nameInput,t.descriptionInput).then((function(t){X.setInfo(t.name,t.about),e.querySelector(".popup__submit").textContent="Сохранить"}))})),tt=new R("cardAddPopup",e,n,"addPopupForm",o,(function(t,e){return e.querySelector(".popup__submit").textContent="Создается...",K.addCard(t.placeInput,t.linkInput).then((function(t){it.renderCard(t),e.querySelector(".popup__submit").textContent="Создать"}))}));Y.setEventListeners(),Z.setEventListeners(),tt.setEventListeners();var et=new R("updatePopup",e,n,"updatePopupForm",o,(function(t,e){return e.querySelector(".popup__submit").textContent="Сохраняется...",K.setAvatar(t.pictureInput).then((function(t){console.log(t.avatar),X.setAvatar(t.avatar),e.querySelector(".popup__submit").textContent="Сохранить"}))}));et.setEventListeners();var nt=new $("confirmPopup",e,n,"confirmPopupForm",o,(function(t,e,n){return n.querySelector(".popup__submit").textContent="Удаляется...",K.deleteCard(e).then((function(){t.remove(),t=null,n.querySelector(".popup__submit").textContent="Да"}))}));function ot(t,e){Y.open(t,e)}function rt(e){return new f(e,ot,t,Q,K,nt).makeCard()}nt.setEventListeners();var it=new A((function(t){it.appendCard(rt(t))}),(function(t){it.prependCard(rt(t))}),"elements"),at=new V(r.editFormId,r),ct=new V(r.addFormId,r),ut=new V(r.updateFormId,r);at.enableValidation(),ct.enableValidation(),ut.enableValidation(),c.addEventListener("click",(function(){at.resetValidation(),Z.setInputValues({nameInput:i.textContent,descriptionInput:a.textContent}),Z.open()})),u.addEventListener("click",(function(){ct.resetValidation(),tt.open()})),s.addEventListener("click",(function(){ut.resetValidation(),et.open()}))})();