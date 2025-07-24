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

/***/ "./src/frontend/dev/ts/index.ts":
/*!**************************************!*\
  !*** ./src/frontend/dev/ts/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_LocalData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/LocalData */ \"./src/frontend/dev/ts/utils/LocalData.ts\");\n/* harmony import */ var _utils_setupHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/setupHeader */ \"./src/frontend/dev/ts/utils/setupHeader.ts\");\n\n\n(0,_utils_setupHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_utils_LocalData__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('token'), document.querySelector('ul.header-navigator__links-list'));\n\n\n//# sourceURL=webpack://keys/./src/frontend/dev/ts/index.ts?\n}");

/***/ }),

/***/ "./src/frontend/dev/ts/utils/LocalData.ts":
/*!************************************************!*\
  !*** ./src/frontend/dev/ts/utils/LocalData.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass LocalData {\n    static get(key) {\n        if (typeof key === 'string')\n            return localStorage.getItem(key);\n        return JSON.parse(localStorage.getItem(key));\n    }\n    static set(key, value) {\n        localStorage.setItem(key, JSON.stringify(value));\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocalData);\n\n\n//# sourceURL=webpack://keys/./src/frontend/dev/ts/utils/LocalData.ts?\n}");

/***/ }),

/***/ "./src/frontend/dev/ts/utils/setupHeader.ts":
/*!**************************************************!*\
  !*** ./src/frontend/dev/ts/utils/setupHeader.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst unloggedLinks = [\n    { link: 'index.html', label: 'Início' },\n    { link: 'faq.html', label: 'Suporte' },\n    { link: 'login.html', label: 'Login' },\n    { link: 'register.html', label: 'Cadastre-se' }\n];\nconst loggedLinks = [\n    { link: '', label: 'Início' },\n    { link: 'dashboard.html', label: 'Meu Cofrinho' },\n    { link: 'faq.html', label: 'Suporte' },\n    { link: 'login.html', label: 'Login' },\n    { link: 'register.html', label: 'Cadastre-se' }\n];\nfunction setupHeader(token, linksList) {\n    linksList.innerHTML = '';\n    const createLinkCallback = (link) => {\n        const li = document.createElement('li');\n        li.classList.add('links-list__item');\n        const url = link.link.split('.').length >= 2 ? link.link.split('.')[0] : '';\n        li.innerHTML = `<a href=\"/${url}\">${link.label}</a>`;\n        linksList.appendChild(li);\n    };\n    if (!token) {\n        unloggedLinks.forEach(createLinkCallback);\n        return;\n    }\n    loggedLinks.forEach(createLinkCallback);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setupHeader);\n\n\n//# sourceURL=webpack://keys/./src/frontend/dev/ts/utils/setupHeader.ts?\n}");

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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/frontend/dev/ts/index.ts");
/******/ 	
/******/ })()
;