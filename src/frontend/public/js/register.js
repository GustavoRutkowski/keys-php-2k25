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

/***/ "./src/frontend/dev/ts/components/toggle-view-btn.ts":
/*!***********************************************************!*\
  !*** ./src/frontend/dev/ts/components/toggle-view-btn.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_html_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/html-parser */ \"./src/frontend/dev/ts/utils/html-parser.ts\");\n\n// <toggle-view-button for=\"id-of-element\">\nclass ToggleViewButton extends HTMLElement {\n    static visibleFAIcon = 'fa-eye-slash';\n    static invisibleFAIcon = 'fa-eye';\n    static observedAttributes = ['for'];\n    isVisible;\n    target;\n    toggleCallbackFn;\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n        this.isVisible = false;\n        this.target = this.syncTarget;\n        this.toggleCallbackFn = this.toggleVisibility;\n    }\n    // Inherited Methods:\n    connectedCallback() {\n        this.initAttributes();\n        this.shadowRoot?.appendChild(this.css);\n        this.shadowRoot?.appendChild(this.html);\n        this.addEventListener('click', this.toggleCallbackFn);\n    }\n    disconnectedCallback() {\n        this.removeEventListener('click', this.toggleCallbackFn);\n    }\n    attributeChangedCallback(name) {\n        if (name !== 'for')\n            return;\n        this.target = this.syncTarget;\n    }\n    // Building:\n    initAttributes() {\n        this.role = 'button';\n        this.setAttribute('role', 'button');\n        this.title = 'Visualizar Senha';\n        this.setAttribute('title', 'Visualizar Senha');\n    }\n    get html() {\n        const faIcon = this.isVisible\n            ? ToggleViewButton.visibleFAIcon\n            : ToggleViewButton.invisibleFAIcon;\n        return _utils_html_parser__WEBPACK_IMPORTED_MODULE_0__[\"default\"].parse(`<i class=\"fa-solid ${faIcon}\"></i>`);\n    }\n    get css() {\n        const cssRaw = `\n            @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css');\n\n            :host {\n                min-width: fit-content;\n                min-height: fit-content;\n                color: rgba(255, 255, 255, .4);\n                cursor: pointer;\n                transition-duration: .3s;\n            }\n            :host i {\n                display: inline-block;\n                min-width: 20px;\n                min-height: 20px;\n                color: rgba(255, 255, 255, .4);\n            }\n            :host:hover { color: white }\n        `;\n        return _utils_html_parser__WEBPACK_IMPORTED_MODULE_0__[\"default\"].parse(`<style>${cssRaw}</style>`);\n    }\n    // Methods:\n    get visibility() {\n        return this.isVisible;\n    }\n    get syncTarget() {\n        const targetSelector = this.getAttribute('for') || '';\n        const target = document.getElementById(targetSelector);\n        return (target instanceof HTMLInputElement) ? target : null;\n    }\n    toggleVisibility() {\n        this.isVisible = !this.isVisible;\n        this.renderVisibilityInfos();\n    }\n    renderVisibilityInfos() {\n        const targetElement = this.target;\n        targetElement.type = this.isVisible ? 'text' : 'password';\n        const buttonFaIcon = this.isVisible\n            ? ToggleViewButton.visibleFAIcon\n            : ToggleViewButton.invisibleFAIcon;\n        const buttonIconElement = this.shadowRoot?.querySelector('i') || null;\n        buttonIconElement?.setAttribute('class', `fa-solid ${buttonFaIcon}`);\n    }\n}\ncustomElements.define('toggle-view-button', ToggleViewButton);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleViewButton);\n\n\n//# sourceURL=webpack://keys/./src/frontend/dev/ts/components/toggle-view-btn.ts?\n}");

/***/ }),

/***/ "./src/frontend/dev/ts/register.ts":
/*!*****************************************!*\
  !*** ./src/frontend/dev/ts/register.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_toggle_view_btn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/toggle-view-btn */ \"./src/frontend/dev/ts/components/toggle-view-btn.ts\");\n\n// Utils\n// register.js\nconst registerForm = document.querySelector('form#register-form');\nconst messageParagraph = registerForm.querySelector('p.form-message');\nregisterForm.addEventListener('submit', async (e) => {\n    e.preventDefault();\n    const form = new FormData(registerForm);\n    const data = await fetch('http://localhost/backend/users', {\n        method: 'POST',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify({\n            name: form.get('name'),\n            email: form.get('email'),\n            main_pass: form.get('main_pass')\n        })\n    });\n    const userCreated = await data.json();\n    if (userCreated.success) {\n        location.href = '/login';\n        return;\n    }\n    for (const key of form.keys())\n        form.delete(key);\n    messageParagraph.textContent = userCreated.message;\n});\n\n\n//# sourceURL=webpack://keys/./src/frontend/dev/ts/register.ts?\n}");

/***/ }),

/***/ "./src/frontend/dev/ts/utils/html-parser.ts":
/*!**************************************************!*\
  !*** ./src/frontend/dev/ts/utils/html-parser.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*\n    HTMLParser class: Able to parse a string in HTML format, whether the string has one or several tags together\n\n\n    METHODS:\n\n    parse() method: Returns the first tag in the string as an HTML element\n    * @param {string} HTMLString - String in HTML tag format\n    * @returns {HTMLElement | null} The parsed DOM element\n    * @static\n\n    parseAll() method: Returns all tags in the string as a NodeList of DOM elements\n    * @param {string} HTMLString - String in HTML tag format\n    * @returns {NodeListOf<ChildNode>} The parsed DOM elements\n    * @static\n*/\n/*\n    EXAMPLES:\n\n    // Ex. 1:\n\n    const rawContent = '<span>Internal Content...</span>';\n    const raw = `<div class=\"c1 c2 c3\">${rawContent}</div>`;\n    const parsedElement = HTMLParser.parse(raw);\n\n\n    // Ex. 2:\n\n    const raw1 = '<div class=\"tag1\">Tag 1</div>';\n    const raw2 = '<div class=\"tag2\">Tag 1</div>';\n    const raw3 = '<div class=\"tag3\">Tag 1</div>';\n\n    // The line below will generate a NodeList with 3 DOM elements\n    const parsedElementsList = HTMLParser.parseAll(raw1 + raw2 + raw3);\n*/\nclass HTMLParser {\n    static parseAll(HTMLString) {\n        const parser = new DOMParser();\n        const parsedDoc = parser.parseFromString(HTMLString, 'text/html');\n        const parseError = parsedDoc.querySelector('parsererror');\n        if (parseError) {\n            console.error('HTMLString is invalid');\n            throw new Error('HTMLString is invalid');\n        }\n        const parseFragment = document.createDocumentFragment();\n        const appendChildCallback = (node) => parseFragment.appendChild(node);\n        // Insert all childs in fragment\n        Array.from(parsedDoc.body.childNodes)\n            .forEach(appendChildCallback);\n        Array.from(parsedDoc.head.childNodes)\n            .forEach(appendChildCallback);\n        const tempDiv = document.createElement('div');\n        tempDiv.appendChild(parseFragment);\n        return tempDiv.childNodes;\n    }\n    static parse(HTMLString) {\n        return this.parseAll(HTMLString)[0] || null;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HTMLParser);\n\n\n//# sourceURL=webpack://keys/./src/frontend/dev/ts/utils/html-parser.ts?\n}");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/frontend/dev/ts/register.ts");
/******/ 	
/******/ })()
;