/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/library/components/accordion.js":
/*!************************************************!*\
  !*** ./src/js/library/components/accordion.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/library/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.accordion = function () {
  let headActive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "accordion-head--active";
  let contentActive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "accordion-content--active";
  let paddings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 40;
  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).toggleClass(headActive);
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].nextElementSibling).toggleClass(contentActive);

      // console.log(this[i].nextElementSibling.scrollHeight);
      if (this[i].classList.contains(headActive)) {
        this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + paddings + "px";
      } else this[i].nextElementSibling.style.maxHeight = 0;
    });
  }
};
Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(".accordion-head").accordion();

/***/ }),

/***/ "./src/js/library/components/carousel.js":
/*!***********************************************!*\
  !*** ./src/js/library/components/carousel.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/library/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.carousel = function () {
  let {
    autoplay
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  for (let i = 0; i < this.length; i++) {
    const width = window.getComputedStyle(this[i].querySelector(".carousel-inner")).width;
    const slides = this[i].querySelectorAll(".carousel-item");
    const slidesField = this[i].querySelector(".carousel-slides");
    const dots = this[i].querySelectorAll(".carousel-indicators li");
    slidesField.style.width = 100 * slides.length + "%";
    slides.forEach(slide => slide.style.width = width);
    let offset = 0;
    let slideIndex = 0;

    // console.log(autoplay);

    if (autoplay) {
      let interval = setInterval(() => this[i].querySelector("[data-slide='next']").click(), autoplay);
      this[i].addEventListener("mouseover", () => clearInterval(interval));
      this[i].addEventListener("mouseout", () => interval = setInterval(() => this[i].querySelector("[data-slide='next']").click(), autoplay));
    }
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].querySelector("[data-slide='next']")).click(e => {
      e.preventDefault();
      if (offset == +width.replace(/\D/g, "") * (slides.length - 1)) offset = 0;else offset += +width.replace(/\D/g, "");
      slidesField.style.transform = `translateX(-${offset}px)`;
      if (slideIndex == slides.length - 1) slideIndex = 0;else slideIndex++;
      dots.forEach(dot => dot.classList.remove("active"));
      dots[slideIndex].classList.add("active");
    });
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].querySelector("[data-slide='prev']")).click(e => {
      e.preventDefault();
      if (offset == 0) offset = +width.replace(/\D/g, "") * (slides.length - 1);else offset -= +width.replace(/\D/g, "");
      slidesField.style.transform = `translateX(-${offset}px)`;
      if (slideIndex == 0) slideIndex = slides.length - 1;else slideIndex--;
      dots.forEach(dot => dot.classList.remove("active"));
      dots[slideIndex].classList.add("active");
    });
    const sliderId = this[i].getAttribute("id");
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`#${sliderId} .carousel-indicators li`).click(e => {
      const slideTo = e.target.getAttribute("data-slide-to");
      slideIndex = slideTo;
      offset = +width.replace(/\D/g, "") * slideTo;
      slidesField.style.transform = `translateX(-${offset}px)`;
      dots.forEach(dot => dot.classList.remove("active"));
      dots[slideIndex].classList.add("active");
    });
  }
};
Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(".carousel").carousel({
  autoplay: 5000
});

/***/ }),

/***/ "./src/js/library/components/dropdown.js":
/*!***********************************************!*\
  !*** ./src/js/library/components/dropdown.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/library/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    const id = this[i].getAttribute("id");
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-toggle-id="${id}"]`).fadeToggle(300));
  }
};
Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(".dropdown-toggle").dropdown();

/***/ }),

/***/ "./src/js/library/components/modal.js":
/*!********************************************!*\
  !*** ./src/js/library/components/modal.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/library/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.modal = function (created) {
  for (let i = 0; i < this.length; i++) {
    const target = this[i].getAttribute("data-target");
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(e => {
      e.preventDefault();
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeIn(500);
      document.body.style.overflow = "hidden";
    });

    // closing with a button
    const closeElements = document.querySelectorAll(`${target} [data-close]`);
    closeElements.forEach(elem => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(elem).click(() => {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(500);
        document.body.style.overflow = "";
        if (created) document.querySelector(target).remove();
      });
    });
    // $(`${target} [data-close]`).click(() => {
    //     $(target).fadeOut(500);
    //     document.body.style.overflow = "";
    // if (created) document.querySelector(target).remove();
    // });

    // closing by clicking outside the modal 
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).click(e => {
      if (e.target.classList.contains("modal")) {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(500);
        document.body.style.overflow = "";
        if (created) document.querySelector(target).remove();
      }
    });
  }
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.createModal = function () {
  let {
    text,
    btns
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  for (let i = 0; i < this.length; i++) {
    let modal = document.createElement("div");
    modal.classList.add("modal");
    modal.setAttribute("id", this[i].getAttribute("data-target").slice(1));

    // btns === {count: num, settings: [[text, className = [], close, cb]]}
    const buttons = [];
    for (let j = 0; j < btns.count; j++) {
      let btn = document.createElement("button");
      btn.classList.add("btn", ...btns.settings[j][1]);
      btn.textContent = btns.settings[j][0];
      if (btns.settings[j][2]) btn.setAttribute("data-close", "");
      if (btns.settings[j][3] && typeof btns.settings[j][3] === "function") {
        btn.addEventListener("click", btns.settings[j][3]);
      }
      buttons.push(btn);
    }
    modal.innerHTML = `
    <div class="modal-dialog">
        <div class="modal-content">
            <button class="close" data-close>
                <span>&times;</span>
            </button>
            <div class="modal-header">
                <div class="modal-title">
                    ${text.title}
                </div>
            </div>
            <div class="modal-body">
                ${text.body}
            </div>
            <div class="modal-footer">
                
            </div>
        </div>
    </div>`;
    modal.querySelector(".modal-footer").append(...buttons);
    document.body.append(modal);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).modal(true);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].getAttribute("data-target")).fadeIn(500);
  }
};
Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-toggle="modal"]').modal();

/***/ }),

/***/ "./src/js/library/components/tab.js":
/*!******************************************!*\
  !*** ./src/js/library/components/tab.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/library/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.tab = function () {
  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).on("click", () => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).addClass("tab-item--active").siblings().removeClass("tab-item--active").closEst(".tab").find(".tab-content").removeClass("tab-content--active").eq(Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).index()).addClass('tab-content--active');
    });
  }
};
Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])("[data-tabpanel] .tab-item").tab();

/***/ }),

/***/ "./src/js/library/core.js":
/*!********************************!*\
  !*** ./src/js/library/core.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// (() => {
//     const $ = function (selector) {
//         const elements = document.querySelectorAll(selector);
//         const obj = {};

//         obj.hide = () => {
//             elements.forEach(elem => elem.style.display = "none");
//             return obj;
//         };
//         obj.show = () => {
//             elements.forEach(elem => elem.style.display = "");
//             return obj;
//         };

//         return obj;
//     }

//     window.$ = $;
// })();

const $ = function (selector) {
  return new $.prototype.init(selector);
};
$.prototype.init = function (selector) {
  if (!selector) return this; // this is {}
  // console.log(selector);
  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  }
  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;
  return this;
};
$.prototype.init.prototype = $.prototype;
window.$ = $;
/* harmony default export */ __webpack_exports__["default"] = ($);

/***/ }),

/***/ "./src/js/library/lib.js":
/*!*******************************!*\
  !*** ./src/js/library/lib.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/library/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/library/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/library/modules/classes.js");
/* harmony import */ var _modules_attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/attributes */ "./src/js/library/modules/attributes.js");
/* harmony import */ var _modules_handlers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/handlers */ "./src/js/library/modules/handlers.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/actions */ "./src/js/library/modules/actions.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/effects */ "./src/js/library/modules/effects.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/library/components/dropdown.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modal */ "./src/js/library/components/modal.js");
/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tab */ "./src/js/library/components/tab.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/accordion */ "./src/js/library/components/accordion.js");
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/carousel */ "./src/js/library/components/carousel.js");
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/requests */ "./src/js/library/services/requests.js");













_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.check = function () {
  return "es";
};
/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);
// console.log();

/***/ }),

/***/ "./src/js/library/modules/actions.js":
/*!*******************************************!*\
  !*** ./src/js/library/modules/actions.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/library/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) this[i].innerHTML = content;else return this[i].innerHTML;
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function (ind) {
  const swap = this[ind];
  const objLength = Object.keys(this).length; //  count all property at this object

  for (let i = 0; i < objLength; i++) {
    delete this[i];
  }
  this[0] = swap;
  this.length = 1;
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function () {
  const parent = this[0].parentNode;
  const childs = [...parent.children];
  const findMyIndex = item => item == this[0];
  return childs.findIndex(findMyIndex);
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function (selector) {
  let numberOfItems = 0;
  let counter = 0;
  const copyObj = Object.assign({}, this);
  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].querySelectorAll(selector);
    if (arr.length == 0) continue;
    for (let j = 0; j < arr.length; j++) {
      this[counter] = arr[j];
      counter++;
    }
    numberOfItems += arr.length;
  }
  this.length = numberOfItems;
  const objLength = Object.keys(this).length;
  for (; numberOfItems < objLength.length; numberOfItems++) {
    delete this[numberOfItems];
  }
  return this;
};
// {
//     0: node,// 
//     1: node, //
//     2: node, //
//     3: node, 
//     4: node 
// }

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closEst = function (selector) {
  let counter = 0;
  for (let i = this.length - 1; i >= 0; i--) {
    if (!this[i].closest(selector)) {
      this.length--;
      delete this[i];
    } else this[i] = this[i].closest(selector);
    counter++;
  }
  const objLength = Object.keys(this).length;
  if (this.length > 0) {
    for (; counter < objLength.length; counter++) {
      delete this[counter];
    }
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.siblings = function () {
  let numberOfItems = 0;
  let counter = 0;
  const copyObj = Object.assign({}, this);
  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].parentNode.children;
    for (let j = 0; j < arr.length; j++) {
      if (copyObj[i] === arr[j]) continue;
      this[counter] = arr[j];
      counter++;
    }
    numberOfItems += arr.length - 1;
  }
  this.length = numberOfItems;
  const objLength = Object.keys(this).length;
  for (; numberOfItems < objLength.length; numberOfItems++) {
    delete this[numberOfItems];
  }
  return this;
};

/***/ }),

/***/ "./src/js/library/modules/attributes.js":
/*!**********************************************!*\
  !*** ./src/js/library/modules/attributes.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/library/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addAttr = function (AttrName, AttrValue) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].attributes) continue;
    this[i].setAttribute(AttrName, AttrValue);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeAttr = function (AttrName) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].attributes) continue;
    this[i].removeAttribute(AttrName);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.getAttr = function (AttrName) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (!this[i].attributes) continue;
    arr.push(this[i].getAttribute(AttrName));
  }
  return arr;
};

/***/ }),

/***/ "./src/js/library/modules/classes.js":
/*!*******************************************!*\
  !*** ./src/js/library/modules/classes.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/library/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) continue;
    this[i].classList.add(...arguments);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) continue;
    this[i].classList.remove(...arguments);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function (className) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) continue;
    this[i].classList.toggle(className);
  }
  return this;
};

/***/ }),

/***/ "./src/js/library/modules/display.js":
/*!*******************************************!*\
  !*** ./src/js/library/modules/display.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/library/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function () {
  console.log(this);
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) continue;
    this[i].style.display = "";
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function () {
  console.log(this);
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) continue;
    this[i].style.display = "none";
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggle = function () {
  console.log(this);
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) continue;
    if (this[i].style.display === "none") this[i].style.display = "";else this[i].style.display = "none";
  }
  return this;
};

/***/ }),

/***/ "./src/js/library/modules/effects.js":
/*!*******************************************!*\
  !*** ./src/js/library/modules/effects.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/library/core.js");

// dur === duration
// cb === callback
// fin === final function 
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function (dur, cb, fin) {
  let timeStart;
  function _animateOverTime(time) {
    // time changing by the browser
    if (!timeStart) timeStart = time;
    let timeElapsed = time - timeStart;
    let complection = Math.min(timeElapsed / dur, 1); // assign opacity 

    cb(complection);
    if (timeElapsed < dur) requestAnimationFrame(_animateOverTime);else {
      if (typeof fin === "function") fin();
    }
  }
  return _animateOverTime;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (dur, display, fin) {
  for (let i = 0; i < this.length; i++) {
    this[i].style.display = display || "block";
    const _fadeIn = complection => this[i].style.opacity = complection;
    const ani = this.animateOverTime(dur, _fadeIn, fin);
    requestAnimationFrame(ani);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (dur, fin) {
  for (let i = 0; i < this.length; i++) {
    const _fadeOut = complection => {
      this[i].style.opacity = 1 - complection;
      if (complection === 1) this[i].style.display = "none";
    };
    const ani = this.animateOverTime(dur, _fadeOut, fin);
    requestAnimationFrame(ani);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeToggle = function (dur, display, fin) {
  for (let i = 0; i < this.length; i++) {
    if (window.getComputedStyle(this[i]).display === "none") {
      this[i].style.display = display || "block";
      const _fadeIn = complection => this[i].style.opacity = complection;
      const ani = this.animateOverTime(dur, _fadeIn, fin);
      requestAnimationFrame(ani);
    } else {
      const _fadeOut = complection => {
        this[i].style.opacity = 1 - complection;
        if (complection === 1) this[i].style.display = "none";
      };
      const ani = this.animateOverTime(dur, _fadeOut, fin);
      requestAnimationFrame(ani);
    }
  }
  return this;
};

/***/ }),

/***/ "./src/js/library/modules/handlers.js":
/*!********************************************!*\
  !*** ./src/js/library/modules/handlers.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/library/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function (eventName, callback) {
  if (!eventName || !callback) return this;
  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function (eventName, callback) {
  if (!eventName || !callback) return this;
  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(eventName, callback);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function (handler) {
  if (handler) {
    for (let i = 0; i < this.length; i++) {
      this[i].addEventListener("click", handler);
    }
  } else this.click();
  return this;
};

/***/ }),

/***/ "./src/js/library/services/requests.js":
/*!*********************************************!*\
  !*** ./src/js/library/services/requests.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/library/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.get = async function (url) {
  let dataTypeAnswer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "json";
  let res = await fetch(url);
  if (!res.ok) throw new Error(`Coild not fetch ${url}, status: ${res.status}`);

  // return await res[dataTypeAnswer]();
  switch (dataTypeAnswer) {
    case "json":
      return await res.json();
    case "text":
      return await res.text();
    case "blob":
      return await res.blob();
  }
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.post = async function (url, data) {
  let dataTypeAnswer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "text";
  let res = await fetch(url, {
    method: "POST",
    body: data
  });
  switch (dataTypeAnswer) {
    case "json":
      return await res.json();
    case "text":
      return await res.text();
    case "blob":
      return await res.blob();
  }
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _library_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library/lib */ "./src/js/library/lib.js");
// import from "./library/lib";

// method index is: finding index of elem among adjacents elems in common parent 
// method find is: finding elems by selector inside of already found
// method siblings is: to get arrey adjacents elems exclude this elem 

Object(_library_lib__WEBPACK_IMPORTED_MODULE_0__["default"])("button").addAttr("check", true);
// $("button").removeAttr("class");
// console.log($("button").getAttr("pr"));
// $("div").on("click", sayHello);
// $("div").off("click", sayHello);
// $("div").click(sayHello);
// $("button").on("click", function () {
//     // $(this).toggleClass("active");
//     $("div").eq(2).toggleClass("active");
// });

// $("div").click(function () {
//     console.log($(this).index());
// })

Object(_library_lib__WEBPACK_IMPORTED_MODULE_0__["default"])("h2").fadeOut(1800);
// console.log($().check());
// $("#first").fadeOut(8000);
// $(".container #first").on("click", () => $(".container div").eq(0).fadeToggle(800));
// $(".container [data-count='second']").on("click", () => $(".container div").eq(1).fadeToggle(800));
// $(".container button").eq(2).on("click", () => $(".container .w-500").fadeToggle(800));

// $(".wrap").html(`<div class="dropdown">
// <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton2">Dropdown button</button>
// <div class="dropdown-menu" data-toggle-id="dropdownMenuButton2">
//     <a href="#" class="dropdown-item">Action 1</a>
//     <a href="#" class="dropdown-item">Action 2</a>
//     <a href="#" class="dropdown-item">Action 3</a>
// </div>
// </div>`);
// $(".dropdown-toggle").dropdown();
// $('[data-toggle="modal"]').modal();
// $("#trigger").click(() => $("#trigger").createModal({
//     text: {
//         title: "Modal title",
//         body: "Lorem Lorem Lorem Lorem Lorem"
//     },
//     btns: {
//         count: 3,
//         settings: [
//             ["Close", ["btn-danger", "mr-10"], true],
//             ["Save changes", ["btn-success"], false, () => alert("Данные сохранены")],
//             ["Another btn", ["btn-warning", "ml-10"], false, () => alert("Hey World")]
//         ]
//     }
// }));
// $("[data-tabpanel] .tab-item").tab();
// $(".carousel").carousel({autoplay: 1000});
// $().get('https://jsonplaceholder.typicode.com/todos/1').then(res => console.log(res));

// ====================
// console.log($("hr"), $(this));
// console.log($("button").html("hey"));
// console.log($("div").eq(2).find(".more"));
// console.log($(".some").closEst(".findme").addClass("es"));
// console.log($(".more").eq(0).siblings());
// console.log($("buttond").addClass("es"));

// console.log(document.querySelector(".more").closest('.findme'));

// let animal = {
//     name: "anim",
//     cal() {
//         return this.name;
//     }
//   };

//   let rabbit = {
//     name: "White Rabbit",
//     __proto__: animal
//   };
//   console.log(rabbit.cal())

/***/ })

/******/ });
//# sourceMappingURL=script.js.map