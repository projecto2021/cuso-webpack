/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/HelloWorld.js":
/*!**************************************!*\
  !*** ./src/components/HelloWorld.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HelloWorld\": () => /* binding */ HelloWorld\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar HelloWorld = /*#__PURE__*/function () {\n  function HelloWorld(name) {\n    _classCallCheck(this, HelloWorld);\n\n    this.name = name;\n  }\n\n  _createClass(HelloWorld, [{\n    key: \"greet\",\n    value: function greet() {\n      return \"\\xA1Hola Mundo, Webpack con \".concat(this.name, \"!\");\n    }\n  }]);\n\n  return HelloWorld;\n}();\n\n//# sourceURL=webpack://youtube-webpack/./src/components/HelloWorld.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_webpack_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/webpack.svg */ \"./src/assets/webpack.svg\");\n/* harmony import */ var _assets_saga_kanon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/saga-kanon.png */ \"./src/assets/saga-kanon.png\");\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.json */ \"./src/data.json\");\n/* harmony import */ var _components_HelloWorld_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/HelloWorld.js */ \"./src/components/HelloWorld.js\");\n\n\n\n\n\n\nvar arr = [1, 2, 3],\n    codeESNext = function codeESNext() {\n  var _console;\n\n  return (_console = console).log.apply(_console, arr);\n};\n\nconsole.log(\"Hola mundo sin configuración con Webpack 😱\");\ncodeESNext(); //document.getElementById(\"app\").innerHTML = `<img src=\"${logo}\" alt=\"Webpack\">`;\n\nvar d = document,\n    $app = d.getElementById(\"app\"),\n    $h1 = d.createElement(\"h1\"),\n    $logo = d.createElement(\"img\"),\n    $img = d.createElement(\"img\"),\n    $nav = d.createElement(\"nav\");\nvar menu = \"\",\n    hello = new _components_HelloWorld_js__WEBPACK_IMPORTED_MODULE_4__.HelloWorld(\"Vanilla JS\");\n_data_json__WEBPACK_IMPORTED_MODULE_3__.links.forEach(function (el) {\n  return menu += \"<a href=\\\"\".concat(el[1], \"\\\">\").concat(el[0], \"</a>\");\n});\n$h1.textContent = hello.greet();\n$logo.src = _assets_webpack_svg__WEBPACK_IMPORTED_MODULE_1__.default;\n$logo.classList.add(\"icon\");\n$img.src = _assets_saga_kanon_png__WEBPACK_IMPORTED_MODULE_2__.default;\n$nav.innerHTML = menu;\n$nav.classList.add(\"menu\");\n$app.appendChild($h1);\n$app.appendChild($logo);\n$app.appendChild($nav); //$app.appendChild($img);\n\n//# sourceURL=webpack://youtube-webpack/./src/index.js?");

/***/ }),

/***/ "./src/assets/saga-kanon.png":
/*!***********************************!*\
  !*** ./src/assets/saga-kanon.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/saga-kanon.png\");\n\n//# sourceURL=webpack://youtube-webpack/./src/assets/saga-kanon.png?");

/***/ }),

/***/ "./src/assets/webpack.svg":
/*!********************************!*\
  !*** ./src/assets/webpack.svg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/webpack.svg\");\n\n//# sourceURL=webpack://youtube-webpack/./src/assets/webpack.svg?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://youtube-webpack/./src/style.css?");

/***/ }),

/***/ "./src/data.json":
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = JSON.parse(\"{\\\"links\\\":[[\\\"Vanilla JS\\\",\\\"index.html\\\"],[\\\"React\\\",\\\"react.html\\\"],[\\\"TypeScript\\\",\\\"ts.html\\\"]]}\");\n\n//# sourceURL=webpack://youtube-webpack/./src/data.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;