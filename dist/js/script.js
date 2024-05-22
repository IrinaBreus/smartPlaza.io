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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_animationScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/animationScroll */ \"./src/js/modules/animationScroll.js\");\n/* harmony import */ var _modules_readMore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/readMore */ \"./src/js/modules/readMore.js\");\n/* harmony import */ var _modules_sliderAccordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sliderAccordion */ \"./src/js/modules/sliderAccordion.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./src/js/modules/tabs.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/timer */ \"./src/js/modules/timer.js\");\n\r\n\r\n\r\n\r\n// import scrollUp from './modules/scrollUp';\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n'use stricti';\r\n\r\n// scrollUp();\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_readMore__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n(0,_modules_animationScroll__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.construction');\r\n(0,_modules_animationScroll__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.offices');\r\nif (window.screen.availWidth > 992) {\r\n    (0,_modules_animationScroll__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.about');\r\n}\r\n(0,_modules_animationScroll__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.founder');\r\n(0,_modules_animationScroll__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.haracteristics');\r\n(0,_modules_animationScroll__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.conference-hall');\r\n(0,_modules_animationScroll__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.located');\r\n\r\n(0,_modules_sliderAccordion__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\n});\n\n//# sourceURL=webpack://gulp-start/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/animationScroll.js":
/*!*******************************************!*\
  !*** ./src/js/modules/animationScroll.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction animationScroll (className) {\r\n    const parent = document.querySelector(className),\r\n          parentPos = parent.offsetTop,\r\n          parentHeight = parent.getBoundingClientRect().height;\r\n\r\n\r\n    window.addEventListener('resize', animationToScroll);\r\n    document.addEventListener('scroll', animationToScroll);\r\n\r\n\r\n    function moveAnimation(elemClass, addClass, removeClass) {\r\n        try {\r\n            let elem = parent.querySelector(elemClass);\r\n            elem.classList.add(addClass);\r\n            elem.classList.remove(removeClass);\r\n        } catch (error) {}\r\n    }\r\n\r\n    function animationToScroll() {\r\n        if (document.documentElement.scrollTop >= parentPos - parentHeight / 2 && \r\n        document.documentElement.scrollTop <= parentPos + parentHeight / 2) {\r\n\r\n            moveAnimation('.animation-center', 'center-up', 'center-up-rev');\r\n            moveAnimation('.animation-up', 'bottom-top', 'bottom-top-rev');\r\n            moveAnimation('.animation-right', 'right-left', 'right-left-rev');\r\n            moveAnimation('.animation-left', 'left-right', 'left-right-rev');\r\n        } else  {\r\n\r\n            moveAnimation('.animation-center', 'center-up-rev', 'center-up');\r\n            moveAnimation('.animation-up', 'bottom-top-rev', 'bottom-top');\r\n            moveAnimation('.animation-right', 'right-left-rev', 'right-left');\r\n            moveAnimation('.animation-left', 'left-right-rev', 'left-right');\r\n\r\n        } \r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (animationScroll);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/animationScroll.js?");

/***/ }),

/***/ "./src/js/modules/readMore.js":
/*!************************************!*\
  !*** ./src/js/modules/readMore.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction readMore() {\r\n    const btnOpen = document.querySelector('.btn-open'),\r\n          btnClose = document.querySelector('.btn-close'),\r\n          text = document.querySelector('.about__more-txt'),\r\n          dots = document.querySelector('.about__more-dots');\r\n\r\n    btnOpen.addEventListener('click', () => {\r\n        text.style.display = 'block';\r\n        dots.style.display = 'none';\r\n        btnOpen.style.display = 'none';\r\n    })\r\n    btnClose.addEventListener('click', () => {\r\n        text.style.display = 'none';\r\n        dots.style.display = '';\r\n        btnOpen.style.display = '';\r\n    })\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (readMore);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/readMore.js?");

/***/ }),

/***/ "./src/js/modules/sliderAccordion.js":
/*!*******************************************!*\
  !*** ./src/js/modules/sliderAccordion.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst sliderAccordion = () => {\r\n    if (window.screen.availWidth >= 768) {\r\n        const sliders = document.querySelectorAll('.services__slider'),\r\n              slide = document.querySelectorAll('.services__slide');\r\n    \r\n        sliders.forEach(slider => {\r\n            slider.addEventListener('click', (e) => {\r\n                let target = e.target.closest('.services__slide');\r\n                if (!target) return;\r\n                clearWidth();\r\n                target.style.width = '100%';\r\n            });\r\n            \r\n        })\r\n        \r\n        sliders.forEach(slider => {\r\n            slider.addEventListener('mouseleave', () => {\r\n                clearWidth();\r\n            });\r\n        })\r\n        function clearWidth() {\r\n            slide.forEach(elem => {\r\n                if (window.screen.availWidth >= 768 && window.screen.availWidth < 576) {\r\n                    elem.style.width = 'calc(100% / 6)';\r\n                }\r\n                if (window.screen.availWidth <= 576) {\r\n                    elem.style.width = 'calc(100% / 3)';\r\n                }\r\n            })\r\n        }\r\n    }\r\n    \r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (sliderAccordion);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/sliderAccordion.js?");

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst tabs = () => {\r\n    const tabLists = document.querySelectorAll('.offices__tab-list'),\r\n          tabContents = document.querySelectorAll('.offices__tab-content');\r\n\r\n    tabLists.forEach((btn, i) => {\r\n        btn.addEventListener('click', () => {\r\n            clearList();\r\n            btn.classList.add('list-active');\r\n            tabContents[i].classList.add('tab-content_active');\r\n        })\r\n    })\r\n\r\n    function clearList() {\r\n        tabLists.forEach(elem => elem.classList.remove('list-active'));\r\n        tabContents.forEach(elem => elem.classList.remove('tab-content_active'))\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (tabs);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/tabs.js?");

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst timer = () => {\r\n    const startDate = document.querySelector('.start-date'),\r\n          endDate = document.querySelector('.end-date');\r\n\r\n    const date = new Date(),\r\n          prewDate = new Date(date.getFullYear() - 1, 9, 5),\r\n          nextDate = new Date(date.getFullYear() + 1, 9, 5);\r\n\r\n    startDate.innerHTML = `${new Intl.DateTimeFormat('ru-Ru').format(prewDate)}`;\r\n    endDate.innerHTML = `${new Intl.DateTimeFormat('ru-Ru').format(nextDate)}`;\r\n    \r\n    function getDate() {\r\n        let times = new Date(nextDate) - new Date(),\r\n            month = Math.floor(times / (1000 * 60 * 60 * 24 * 30)),\r\n            days = Math.floor((times / (1000 * 60 * 60 * 24)) % 30.4 ),\r\n            hours = Math.floor((times / (1000 * 60 * 60)) % 24 ),\r\n            minutes = Math.floor((times / (1000 * 60 )) % 60 ),\r\n            seconds = Math.floor((times / 1000) % 60 );\r\n\r\n        return {times, month, days, hours, minutes, seconds}\r\n    }\r\n\r\n    setClock();\r\n\r\n    function setZero (num) {\r\n        num < 10 ? num = '0' + num : num = num;\r\n        return num;\r\n    }\r\n    function setClock() {\r\n        const months = document.querySelector('.months'),\r\n              days = document.querySelector('.days'),\r\n              hours = document.querySelector('.hours'),\r\n              minutes = document.querySelector('.minutes'),\r\n              seconds = document.querySelector('.seconds');\r\n        \r\n        setInterval(updateClock, 1000);\r\n\r\n        updateClock();\r\n\r\n        function updateClock() {\r\n            const t = getDate();\r\n\r\n            months.textContent = setZero(t.month);\r\n            days.textContent = setZero(t.days);\r\n            hours.textContent = setZero(t.hours);\r\n            minutes.textContent = setZero(t.minutes);\r\n            seconds.textContent = setZero(t.seconds);\r\n        }\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (timer);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/timer.js?");

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