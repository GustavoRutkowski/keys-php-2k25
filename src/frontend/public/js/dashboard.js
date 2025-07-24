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

/***/ "./src/frontend/dev/ts/components/LoaderMenu.ts":
/*!******************************************************!*\
  !*** ./src/frontend/dev/ts/components/LoaderMenu.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_html_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/html-parser */ \"./src/frontend/dev/ts/utils/html-parser.ts\");\n\nconst stylesRaw = `\n    :root { font-size: 62.5%; }\n\n    * {\n        margin: 0;\n        padding: 0;\n        outline: none;\n        box-sizing: border-box;\n        font-family: 'Poppins', sans-serif;\n        font-weight: 400;\n    }\n\n    ul { list-style: none; }\n\n    :host {\n        padding: 2rem 0 !important;\n        width: 100%;\n        max-width: calc(100dvw / 6);\n        font-size: 1.8rem;\n        background-color: #343746;\n        overflow: hidden;\n    }\n\n    ul.nav__links-list {\n        display: flex;\n        flex-direction: column;\n        gap: 5px;\n    }\n\n    li.links-list__item {\n        padding: 0;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        cursor: pointer;\n        transition: all 0.3s;\n        display: flex;        \n    }\n\n    li.links-list__item:hover,\n    li.links-list__item.links-list__item--active {\n        background-color: rgba(0,0,0,.2);\n    }\n\n    li.links-list__item span {\n        flex: 1 1 auto;\n        min-width: 0;\n        padding: 1rem 2rem;\n        color: white;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        display: block;\n    }\n`;\nclass LoaderMenu extends HTMLElement {\n    static STORAGE_KEY = 'last-panel-selected';\n    setuped;\n    loadedRaws;\n    itemsPaths;\n    itemsActions;\n    displayTarget;\n    defaultItem;\n    items;\n    selectedItem;\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n        this.setuped = false;\n        this.loadedRaws = {};\n        this.itemsPaths = {};\n        this.itemsActions = {};\n        this.displayTarget = null;\n        this.defaultItem = null;\n        this.items = [];\n        this.selectedItem = null;\n    }\n    async connectedCallback() {\n        if (!this.setuped) {\n            console.error('loader-menu is not setuped');\n            throw new Error('loader-menu is not setuped');\n        }\n        this.setRole();\n        if (!this.shadowRoot)\n            return;\n        this.shadowRoot.appendChild(this.styles());\n        this.shadowRoot.appendChild(this.loaderMenu());\n        const eventsTask = async () => this.addItemsEvents();\n        const renderFirstItemTask = async () => {\n            this.updateSelected();\n            await this.loadHTML();\n            await this.executeAction();\n        };\n        await Promise.all([\n            eventsTask(),\n            renderFirstItemTask()\n        ]);\n    }\n    setup({ target, default: defaultItem, items }) {\n        this.setuped = true;\n        this.displayTarget = document.querySelector(target);\n        if (!this.displayTarget) {\n            throw new Error(`Target element \"${target}\" not found`);\n        }\n        this.items = items;\n        this.verifyRepeatedItems();\n        this.defaultItem = defaultItem || this.items[0].id;\n        this.verifyDefaultItem();\n        this.selectedItem = sessionStorage.getItem(LoaderMenu.STORAGE_KEY) || this.defaultItem;\n        this.loadedRaws = this.items.reduce((raws, { id }) => {\n            raws[id] = null;\n            return raws;\n        }, {});\n        this.itemsPaths = this.items.reduce((paths, { id, path }) => {\n            paths[id] = path;\n            return paths;\n        }, {});\n        this.itemsActions = this.items.reduce((actions, { id, action }) => {\n            actions[id] = action;\n            return actions;\n        }, {});\n    }\n    setRole() {\n        this.role = 'navigation';\n        this.setAttribute('role', 'navigation');\n    }\n    addItemsEvents() {\n        const items = this.shadowRoot?.querySelectorAll('.links-list__item');\n        if (!items)\n            return;\n        items.forEach(itemEl => {\n            const item = this.items.find(item => item.id === itemEl.id);\n            if (!item)\n                return;\n            itemEl.addEventListener('click', async () => {\n                this.selectedItem = item.id;\n                this.updateSelected();\n                await this.loadHTML();\n                await this.executeAction();\n            });\n        });\n    }\n    updateSelected() {\n        if (this.selectedItem)\n            sessionStorage.setItem(LoaderMenu.STORAGE_KEY, this.selectedItem);\n        this.updateItemBackground();\n    }\n    async loadHTML(item_id) {\n        const itemKey = item_id || this.selectedItem;\n        if (!itemKey || !this.displayTarget)\n            return;\n        if (this.loadedRaws[itemKey]) {\n            this.displayTarget.innerHTML = this.loadedRaws[itemKey];\n            return;\n        }\n        const path = this.itemsPaths?.[itemKey];\n        if (!path)\n            return;\n        try {\n            const res = await fetch(path);\n            const loadedHTMLRaw = await res.text();\n            this.loadedRaws[itemKey] = loadedHTMLRaw;\n            this.displayTarget.innerHTML = loadedHTMLRaw;\n        }\n        catch (err) {\n            console.error(err);\n            throw err;\n        }\n    }\n    async executeAction(item_id) {\n        const itemKey = item_id || this.selectedItem;\n        if (!itemKey)\n            throw new Error('panel id not found');\n        const action = this.itemsActions[itemKey];\n        if (action)\n            await action();\n    }\n    verifyRepeatedItems() {\n        const ids = new Set();\n        for (const { id } of this.items) {\n            if (ids.has(id)) {\n                console.error(`items cannot contain duplicate ids. Duplicated: ${id}`);\n                throw new ReferenceError(`items cannot contain duplicate ids. Duplicated: ${id}`);\n            }\n            ids.add(id);\n        }\n    }\n    verifyDefaultItem() {\n        const exists = this.items.some(({ id }) => id === this.defaultItem);\n        if (!exists) {\n            console.error(`${this.defaultItem} is not in items`);\n            throw new ReferenceError(`${this.defaultItem} is not in items`);\n        }\n    }\n    updateItemBackground(item) {\n        const items = this.shadowRoot?.querySelectorAll('.links-list__item');\n        const selectedEl = item || this.shadowRoot?.querySelector(`.links-list__item#${this.selectedItem}`);\n        items?.forEach(el => el.classList.remove('links-list__item--active'));\n        selectedEl?.classList.add('links-list__item--active');\n    }\n    getItemRaw({ id, label }) {\n        return `\n            <li id=\"${id}\" class=\"links-list__item\">\n                <span>${label}</span>\n            </li>\n        `;\n    }\n    loaderMenu() {\n        const itemsRaw = this.items.map(this.getItemRaw).join('');\n        return _utils_html_parser__WEBPACK_IMPORTED_MODULE_0__[\"default\"].parse(`<ul class=\"nav__links-list\">${itemsRaw}</ul>`);\n    }\n    styles() {\n        return _utils_html_parser__WEBPACK_IMPORTED_MODULE_0__[\"default\"].parse(`<style>${stylesRaw}</style>`);\n    }\n}\n// customElements.define('loader-menu', LoaderMenu);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoaderMenu);\n\n\n//# sourceURL=webpack://keys/./src/frontend/dev/ts/components/LoaderMenu.ts?\n}");

/***/ }),

/***/ "./src/frontend/dev/ts/dashboard.ts":
/*!******************************************!*\
  !*** ./src/frontend/dev/ts/dashboard.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_LoaderMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/LoaderMenu */ \"./src/frontend/dev/ts/components/LoaderMenu.ts\");\n/* harmony import */ var _utils_LocalData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/LocalData */ \"./src/frontend/dev/ts/utils/LocalData.ts\");\n/* harmony import */ var _utils_setupHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/setupHeader */ \"./src/frontend/dev/ts/utils/setupHeader.ts\");\n\n\n\n(0,_utils_setupHeader__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_utils_LocalData__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get('token'), document.querySelector('ul.header-navigator__links-list'));\ncustomElements.define('loader-menu', _components_LoaderMenu__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nconst loaderMenu = document.createElement('loader-menu');\nloaderMenu.setup({\n    target: 'section#panel-selected',\n    default: 'passwords',\n    items: [\n        {\n            id: 'passwords', label: 'Senhas',\n            path: '../../public/panels/app/_passwords.html', action: () => console.log('a')\n        },\n        {\n            id: 'cards', label: 'Cartões',\n            path: '../../public/panels/app/_cards.html', action: () => console.log('b')\n        },\n        {\n            id: 'documents', label: 'Documentos Digitalizados',\n            path: '../../public/panels/app/_documents.html', action: () => console.log('c')\n        }\n    ]\n});\nconst main = document.querySelector('main');\nconst panelSelected = document.querySelector('section#panel-selected');\nmain.insertBefore(loaderMenu, panelSelected);\n\n\n//# sourceURL=webpack://keys/./src/frontend/dev/ts/dashboard.ts?\n}");

/***/ }),

/***/ "./src/frontend/dev/ts/utils/LocalData.ts":
/*!************************************************!*\
  !*** ./src/frontend/dev/ts/utils/LocalData.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass LocalData {\n    static get(key) {\n        if (typeof key === 'string')\n            return localStorage.getItem(key);\n        return JSON.parse(localStorage.getItem(key));\n    }\n    static set(key, value) {\n        localStorage.setItem(key, JSON.stringify(value));\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocalData);\n\n\n//# sourceURL=webpack://keys/./src/frontend/dev/ts/utils/LocalData.ts?\n}");

/***/ }),

/***/ "./src/frontend/dev/ts/utils/html-parser.ts":
/*!**************************************************!*\
  !*** ./src/frontend/dev/ts/utils/html-parser.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*\n    HTMLParser class: Able to parse a string in HTML format, whether the string has one or several tags together\n\n\n    METHODS:\n\n    parse() method: Returns the first tag in the string as an HTML element\n    * @param {string} HTMLString - String in HTML tag format\n    * @returns {HTMLElement | null} The parsed DOM element\n    * @static\n\n    parseAll() method: Returns all tags in the string as a NodeList of DOM elements\n    * @param {string} HTMLString - String in HTML tag format\n    * @returns {NodeListOf<ChildNode>} The parsed DOM elements\n    * @static\n*/\n/*\n    EXAMPLES:\n\n    // Ex. 1:\n\n    const rawContent = '<span>Internal Content...</span>';\n    const raw = `<div class=\"c1 c2 c3\">${rawContent}</div>`;\n    const parsedElement = HTMLParser.parse(raw);\n\n\n    // Ex. 2:\n\n    const raw1 = '<div class=\"tag1\">Tag 1</div>';\n    const raw2 = '<div class=\"tag2\">Tag 1</div>';\n    const raw3 = '<div class=\"tag3\">Tag 1</div>';\n\n    // The line below will generate a NodeList with 3 DOM elements\n    const parsedElementsList = HTMLParser.parseAll(raw1 + raw2 + raw3);\n*/\nclass HTMLParser {\n    static parseAll(HTMLString) {\n        const parser = new DOMParser();\n        const parsedDoc = parser.parseFromString(HTMLString, 'text/html');\n        const parseError = parsedDoc.querySelector('parsererror');\n        if (parseError) {\n            console.error('HTMLString is invalid');\n            throw new Error('HTMLString is invalid');\n        }\n        const parseFragment = document.createDocumentFragment();\n        const appendChildCallback = (node) => parseFragment.appendChild(node);\n        // Insert all childs in fragment\n        Array.from(parsedDoc.body.childNodes)\n            .forEach(appendChildCallback);\n        Array.from(parsedDoc.head.childNodes)\n            .forEach(appendChildCallback);\n        const tempDiv = document.createElement('div');\n        tempDiv.appendChild(parseFragment);\n        return tempDiv.childNodes;\n    }\n    static parse(HTMLString) {\n        return this.parseAll(HTMLString)[0] || null;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HTMLParser);\n\n\n//# sourceURL=webpack://keys/./src/frontend/dev/ts/utils/html-parser.ts?\n}");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/frontend/dev/ts/dashboard.ts");
/******/ 	
/******/ })()
;