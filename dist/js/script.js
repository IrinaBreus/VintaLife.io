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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger */ \"./src/js/modules/burger.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./src/js/modules/slider.js\");\n\r\n\r\n// import calcScroll from './modules/calcScroll';\r\n// import scrollUp from './modules/scrollUp';\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n'use stricti';\r\n\r\n(0,_modules_burger__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n// scrollUp();\r\n// calcScroll();\r\n});\n\n//# sourceURL=webpack://gulp-start/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst burger = () => {\r\n    const trigger = document.querySelector('.nav-panel__menu-btns'),\r\n          burger = document.querySelector('.burger'),\r\n          lists = burger.querySelectorAll('.burger__menu li');\r\n\r\n    trigger.addEventListener('click', () => {\r\n        burger.classList.add('burger-active');\r\n    });\r\n\r\n    lists.forEach(list => {\r\n        list.addEventListener('click', () => {\r\n            burger.classList.remove('burger-active');\r\n        })\r\n    })\r\n\r\n    burger.addEventListener('click', (e) => {\r\n        if (e.target === burger && e.target !== document.querySelector('.burger__wrapper')) {\r\n            burger.classList.remove('burger-active');\r\n        }\r\n    })\r\n    document.addEventListener('keydown', (e) => {\r\n        if (e.code === 'Escape' && burger.classList.contains('burger-active')) {\r\n            burger.classList.remove('burger-active');\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (burger);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/burger.js?");

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