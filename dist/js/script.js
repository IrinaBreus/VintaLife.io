/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger */ \"./src/js/modules/burger.js\");\n/* harmony import */ var _modules_changeTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/changeTheme */ \"./src/js/modules/changeTheme.js\");\n/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modals */ \"./src/js/modules/modals.js\");\n/* harmony import */ var _modules_scrollSmooth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scrollSmooth */ \"./src/js/modules/scrollSmooth.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./src/js/modules/slider.js\");\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n'use stricti';\r\n\r\n(0,_modules_burger__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_scrollSmooth__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_changeTheme__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modals__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n});\n\n//# sourceURL=webpack://gulp-start/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst burger = () => {\r\n    const trigger = document.querySelector('.nav-panel__menu-btn'),\r\n          burger = document.querySelector('.burger'),\r\n          lists = burger.querySelectorAll('.burger__menu li');\r\n\r\n    trigger.addEventListener('click', () => {\r\n        burger.classList.add('burger-active');\r\n    });\r\n\r\n    lists.forEach(list => {\r\n        list.addEventListener('click', () => {\r\n            burger.classList.remove('burger-active');\r\n        })\r\n    })\r\n\r\n    burger.addEventListener('click', (e) => {\r\n        if (e.target === burger && e.target !== document.querySelector('.burger__wrapper')) {\r\n            burger.classList.remove('burger-active');\r\n        }\r\n    })\r\n    document.addEventListener('keydown', (e) => {\r\n        if (e.code === 'Escape' && burger.classList.contains('burger-active')) {\r\n            burger.classList.remove('burger-active');\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (burger);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/burger.js?");

/***/ }),

/***/ "./src/js/modules/calcScroll.js":
/*!**************************************!*\
  !*** ./src/js/modules/calcScroll.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n const calcScroll = () => {\r\n    let div = document.createElement('div');\r\n    div.style.width = '50px';\r\n    div.style.height = '50px';\r\n    div.style.overflowY = 'scroll';\r\n    div.style.visibility = 'hidden';\r\n    document.body.append(div);\r\n\r\n    let scrollWidth = div.offsetWidth - div.clientWidth;\r\n    div.remove();\r\n    return scrollWidth;\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (calcScroll);\r\n\r\n// Применение:\r\n// const scroll = calcScroll();\r\n// при открытии модалки добавить\r\n// document.body.style.marginRight = `${scroll}px`;\r\n// при закрытии модалки добавить\r\n// document.body.style.marginRight = '0px';\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/calcScroll.js?");

/***/ }),

/***/ "./src/js/modules/changeTheme.js":
/*!***************************************!*\
  !*** ./src/js/modules/changeTheme.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst changeTheme = () => {\r\n    const trigger = document.querySelector('.nav-panel__theme-btn'),\r\n          body = document.querySelector('body');\r\n\r\n    trigger.addEventListener('click', () => {\r\n        body.classList.toggle('theme');\r\n    })\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (changeTheme);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/changeTheme.js?");

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _calcScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcScroll */ \"./src/js/modules/calcScroll.js\");\n\r\n\r\nconst modals = () => {\r\n    const triggers = document.querySelectorAll('[data-modal]'),\r\n          modal = document.querySelector('.popup'),\r\n          close = modal.querySelector('.popup__close');\r\n    \r\n    const scroll = (0,_calcScroll__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n    triggers.forEach(btn => {\r\n        btn.addEventListener('click', () => {        \r\n            modal.style.display = 'flex';\r\n            document.body.style.overflow = 'hidden';\r\n            document.body.style.marginRight = `${scroll}px`;\r\n        })\r\n    });\r\n    \r\n    close.addEventListener('click', () => {\r\n        closeModal();\r\n    });\r\n\r\n    modal.addEventListener('click', (e) => {\r\n        if (e.target === modal) closeModal();\r\n    });\r\n\r\n    document.addEventListener('keydown', (e) => {\r\n        if (e.code ==='Escape' && modal.style.display == 'flex') {\r\n            closeModal();\r\n        }\r\n    })\r\n\r\n    function closeModal() {\r\n        close.parentElement.parentElement.style.display = 'none';\r\n        document.body.style.overflow = '';\r\n        document.body.style.marginRight = `0px`;\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (modals);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/modals.js?");

/***/ }),

/***/ "./src/js/modules/scrollSmooth.js":
/*!****************************************!*\
  !*** ./src/js/modules/scrollSmooth.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst scrollSmooth = () => {\r\n    const links = document.querySelectorAll('[href^=\"#\"]');\r\n    // const up = document.querySelector('.up');\r\n\r\n    links.forEach(link => {\r\n        link.addEventListener('click', function(e) {\r\n            e.preventDefault();\r\n            if (this.hash) {\r\n                const el = document.querySelector(this.hash);\r\n                const rect = el.getBoundingClientRect();\r\n                window.scrollTo({\r\n                    top: window.scrollY + rect.top,\r\n                    behavior: \"smooth\"\r\n                });\r\n            } else {\r\n                window.scrollTo({\r\n                    left: 0,\r\n                    top: 0,\r\n                    behavior: \"smooth\"\r\n                });\r\n            }\r\n        })\r\n    });\r\n\r\n    // window.addEventListener('scroll', () => {\r\n    //     if (document.documentElement.scrollTop > 1000) {\r\n    //         up.style.cssText = `opacity: 1;\r\n    //                             cursor: pointer;`\r\n    //     } else {\r\n    //         up.style.cssText = `opacity: 0;\r\n    //                             cursor: none;`\r\n    //     }\r\n    // })\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (scrollSmooth);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/scrollSmooth.js?");

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst slider = () => {\r\n    const carousel = document.querySelector('.slider__field'),\r\n          btnPrev = document.querySelector('.slider__btn_prev'),\r\n          btnNext = document.querySelector('.slider__btn_next'),\r\n          btnMore = document.querySelector('.slider__btn_more'),\r\n          width = carousel.querySelector('.slider__item').offsetWidth,\r\n          slides = [...carousel.children];\r\n\r\n    let isDragging = false, startX, startScrollLeft;\r\n    let offset = 0,\r\n        count = 2;\r\n\r\n    showBtn();\r\n    btnPrev.addEventListener('click', () => {\r\n        carousel.scrollLeft -= width;\r\n        offset -= width;\r\n        showBtn();\r\n    });\r\n    \r\n    btnNext.addEventListener('click', () => {\r\n        carousel.scrollLeft += width;\r\n        offset += width;\r\n        if (window.innerWidth > 1200) {\r\n            showBtn(3);\r\n        } else if (window.innerWidth <= 1200 && window.innerWidth > 768) {\r\n            showBtn(2);\r\n        }\r\n        else if (window.innerWidth <= 768 && window.innerWidth > 576) {\r\n            showBtn(1);\r\n        }\r\n    });\r\n\r\n    if (window.screen.availWidth <= 768) {\r\n        slides.forEach(slide => {\r\n            slide.addEventListener('click', () => {\r\n                slide.classList.toggle('item_active');\r\n            })\r\n        })\r\n    }\r\n    if (window.screen.availWidth <= 576) {\r\n        hiddeSlide();\r\n        showSlide();\r\n        btnMore.addEventListener('click', () => {\r\n            hiddeSlide();\r\n            count += 2;\r\n            showSlide();\r\n            if (count == slides.length) {\r\n                btnMore.style.display = 'none';\r\n            }\r\n        })\r\n    }\r\n\r\n    function hiddeSlide() {\r\n        slides.forEach(slide => {\r\n            slide.style.display = 'none';\r\n        });\r\n    }\r\n    function showSlide() {\r\n        slides.forEach((slide, i) => {\r\n            if (i < count) {\r\n                slide.style.display = '';\r\n            }\r\n        });\r\n    }\r\n    function showBtn(num = 0) {\r\n        if (offset === 0) {\r\n            btnPrev.style.display = 'none'\r\n        } else {\r\n            btnPrev.style.display = '';\r\n\r\n        }\r\n\r\n        if (offset == width * (carousel.children.length - num)) {\r\n            btnNext.style.display = 'none';\r\n        } else {\r\n            btnNext.style.display = '';\r\n        }\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (slider);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;