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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_calcScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/calcScroll */ \"./src/js/modules/calcScroll.js\");\n/* harmony import */ var _modules_scrollUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scrollUp */ \"./src/js/modules/scrollUp.js\");\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n'use stricti';\r\n\r\n(0,_modules_scrollUp__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_calcScroll__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n});\n\n//# sourceURL=webpack://gulp-start/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/calcScroll.js":
/*!**************************************!*\
  !*** ./src/js/modules/calcScroll.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst calcScroll = () => {\r\n    let div = document.createElement('div');\r\n    div.style.width = '50px';\r\n    div.style.height = '50px';\r\n    div.style.overflowY = 'scroll';\r\n    div.style.visibility = 'hidden';\r\n    document.body.append(div);\r\n\r\n    let scrollWidth = div.offsetWidth - div.clientWidth;\r\n    div.remove();\r\n    return scrollWidth;\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (calcScroll);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/calcScroll.js?");

/***/ }),

/***/ "./src/js/modules/scrollUp.js":
/*!************************************!*\
  !*** ./src/js/modules/scrollUp.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst scrollUp = () => {\r\n    const up = document.querySelector('.up');\r\n\r\n    up.addEventListener('click', function(e) {\r\n        e.preventDefault();\r\n        \r\n        window.scrollTo({\r\n            left: 0,\r\n            top: 0,\r\n            behavior: \"smooth\"\r\n        });\r\n    })\r\n\r\n    window.addEventListener('scroll', () => {\r\n        if (document.documentElement.scrollTop > 1000) {\r\n            up.style.cssText = `opacity: 1;\r\n                                cursor: pointer;`\r\n        } else {\r\n            up.style.cssText = `opacity: 0;\r\n                                cursor: none;`\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (scrollUp);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/scrollUp.js?");

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