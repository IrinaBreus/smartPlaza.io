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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scrollUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scrollUp */ \"./src/js/modules/scrollUp.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ \"./src/js/modules/timer.js\");\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n'use stricti';\r\n\r\n// scrollUp();\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n});\n\n//# sourceURL=webpack://gulp-start/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/scrollUp.js":
/*!************************************!*\
  !*** ./src/js/modules/scrollUp.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst scrollUp = () => {\r\n    const up = document.querySelector('.up');\r\n\r\n    up.addEventListener('click', function(e) {\r\n        e.preventDefault();\r\n        \r\n        window.scrollTo({\r\n            left: 0,\r\n            top: 0,\r\n            behavior: \"smooth\"\r\n        });\r\n    })\r\n\r\n    window.addEventListener('scroll', () => {\r\n        if (document.documentElement.scrollTop > 1000) {\r\n            up.style.cssText = `opacity: 1;\r\n                                cursor: pointer;`\r\n        } else {\r\n            up.style.cssText = `opacity: 0;\r\n                                cursor: none;`\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (scrollUp);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/scrollUp.js?");

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst timer = () => {\r\n    const startDate = document.querySelector('.start-date'),\r\n          endDate = document.querySelector('.end-date');\r\n\r\n    const date = new Date(),\r\n          prewDate = new Date(date.getFullYear() - 1, 9, 5),\r\n          nextDate = new Date(date.getFullYear() + 1, 9, 5);\r\n\r\n    startDate.innerHTML = `${new Intl.DateTimeFormat('ru-Ru').format(prewDate)}`;\r\n    endDate.innerHTML = `${new Intl.DateTimeFormat('ru-Ru').format(nextDate)}`;\r\n    \r\n    function getDate() {\r\n        let times = new Date(nextDate) - new Date(),\r\n            month = Math.floor(times / (1000 * 60 * 60 * 24 * 30)),\r\n            days = Math.floor((times / (1000 * 60 * 60 * 24)) % 30.4 ),\r\n            hours = Math.floor((times / (1000 * 60 * 60)) % 24 ),\r\n            minutes = Math.floor((times / (1000 * 60 )) % 60 ),\r\n            seconds = Math.floor((times / 1000) % 60 );\r\n\r\n        return {times, month, days, hours, minutes, seconds}\r\n    }\r\n\r\n    setClock();\r\n\r\n    function setZero (num) {\r\n        num < 10 ? num = '0' + num : num = num;\r\n        return num;\r\n    }\r\n    function setClock() {\r\n        const months = document.querySelector('.months'),\r\n              days = document.querySelector('.days'),\r\n              hours = document.querySelector('.hours'),\r\n              minutes = document.querySelector('.minutes'),\r\n              seconds = document.querySelector('.seconds');\r\n        \r\n        timeInterval = setInterval(updateClock, 1000);\r\n\r\n        updateClock();\r\n\r\n        function updateClock() {\r\n            const t = getDate();\r\n\r\n            months.textContent = setZero(t.month);\r\n            days.textContent = setZero(t.days);\r\n            hours.textContent = setZero(t.hours);\r\n            minutes.textContent = setZero(t.minutes);\r\n            seconds.textContent = setZero(t.seconds);\r\n        }\r\n    }\r\n\r\n    getDate();\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (timer);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/timer.js?");

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