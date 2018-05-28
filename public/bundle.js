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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _person_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./person.js */ \"./src/person.js\");\n// // import '../src/utils.js';\r\n// import subtract, { square, add } from './utils.js'\r\n\r\nconsole.log('app.js is running');\r\n\r\n// console.log(square(10));\r\n// console.log(add(10, 123));\r\n// console.log(subtract(10, 123));\r\n\r\n\r\n\r\nconsole.log(Object(_person_js__WEBPACK_IMPORTED_MODULE_0__[\"isAdult\"])(100));\r\nconsole.log(Object(_person_js__WEBPACK_IMPORTED_MODULE_0__[\"canDrink\"])(21));\r\nconsole.log(Object(_person_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(65));\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/person.js":
/*!***********************!*\
  !*** ./src/person.js ***!
  \***********************/
/*! exports provided: isAdult, canDrink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isAdult\", function() { return isAdult; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canDrink\", function() { return canDrink; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return isSenior; });\nconsole.log('person.js is running!');\r\n\r\nconst isAdult = (age) => age >= 18;\r\nconst canDrink = (age) => age >= 21;\r\nconst isSenior = (age) => age >= 65;\r\n\r\n\r\n\r\n//export default (age) => age >= 65;\n\n//# sourceURL=webpack:///./src/person.js?");

/***/ })

/******/ });