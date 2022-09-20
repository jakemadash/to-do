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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/project.js */ \"./src/modules/project.js\");\n/* harmony import */ var _modules_todoDOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/todoDOM.js */ \"./src/modules/todoDOM.js\");\n/* harmony import */ var _modules_project_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/project-index.js */ \"./src/modules/project-index.js\");\n\n\n\n\n_modules_todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.showForm();\n_modules_project_index_js__WEBPACK_IMPORTED_MODULE_2__.projectIndex.projectListeners();\n\nconst add = document.querySelector('.todo-add');\n\nconst formButtons = document.querySelectorAll('button.button');\nformButtons.forEach(button => button.addEventListener('click', () => {\n    if (button.textContent == 'Submit') {\n        const currentProject = _modules_project_js__WEBPACK_IMPORTED_MODULE_0__.Project.findProject();\n        const toDo = _modules_project_js__WEBPACK_IMPORTED_MODULE_0__.Project.addToDo(currentProject);\n        console.log(currentProject.ToDos);\n        _modules_project_index_js__WEBPACK_IMPORTED_MODULE_2__.projectIndex.populateToDos(toDo);\n    }\n    _modules_todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.hideForm();\n    add.removeAttribute('hidden');\n    }));\n\n\n\n\n\n\n//# sourceURL=webpack://to-do/./src/index.js?");

/***/ }),

/***/ "./src/modules/project-index.js":
/*!**************************************!*\
  !*** ./src/modules/project-index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectIndex\": () => (/* binding */ projectIndex)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/modules/project.js\");\n/* harmony import */ var _todoDOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoDOM.js */ \"./src/modules/todoDOM.js\");\n/* harmony import */ var _projectDOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectDOM.js */ \"./src/modules/projectDOM.js\");\n\n\n\n\nconst projectIndex = (() => {\n\n    const populateToDos = (toDo) => {\n        const currentProject = _project_js__WEBPACK_IMPORTED_MODULE_0__.Project.findProject();\n        const add = document.querySelector('.todo-add');\n        const formButtons = document.querySelectorAll('button.button');\n        const form = document.querySelector('.todo-form');\n\n        const toDoBox = _todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.addNew(toDo);\n        const container = toDoBox.querySelector('.details-container');\n        toDoBox.addEventListener('mouseover', () => {\n            container.removeAttribute('hidden');\n        });\n        toDoBox.addEventListener('mouseout', () => {\n            container.setAttribute('hidden', '');\n        });\n        const removals = toDoBox.querySelectorAll('.remove');\n        removals.forEach(remove => remove.addEventListener('click', () => {\n            _project_js__WEBPACK_IMPORTED_MODULE_0__.Project.remove(currentProject, _todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.complete(remove));\n        }));\n        const edit = toDoBox.querySelector('.edit');\n        edit.addEventListener('click', () => {\n            const index = _todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.findIndex(toDoBox);\n            const toDo = _project_js__WEBPACK_IMPORTED_MODULE_0__.Project.findToDo(currentProject, index);\n            console.log(index, currentProject, toDo);\n            add.setAttribute('hidden', '');\n            const save = document.querySelector('button[hidden]')\n            save.removeAttribute('hidden')\n            formButtons[0].setAttribute('hidden', '');\n            form.removeAttribute('hidden');\n            toDoBox.setAttribute('hidden', '')\n            _todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.hideToDos();\n            _todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.populateForm(toDo);\n            save.addEventListener('click', () => {\n                _project_js__WEBPACK_IMPORTED_MODULE_0__.Project.updateToDo(currentProject, index);\n                _todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.updateToDo(toDo, toDoBox);\n                _todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.hideForm();\n                add.removeAttribute('hidden');\n                save.setAttribute('hidden', '');\n                formButtons[0].removeAttribute('hidden');\n                }, {once : true});\n            });\n            }\n\n    const projectListeners = () => {\n        _projectDOM_js__WEBPACK_IMPORTED_MODULE_2__.projectDOM.showForm();\n\n        const header = document.querySelector('.project-header');\n        const defaultProject = document.querySelector('#main');\n\n        defaultProject.addEventListener('click', () => {\n            _todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.hideForm();\n            header.textContent = 'Main';\n            const currentProject = _project_js__WEBPACK_IMPORTED_MODULE_0__.Project.findProject();\n            console.log(currentProject.ToDos);\n            const toDos = document.querySelectorAll('.todo');\n            toDos.forEach((toDo) => {\n                toDo.remove();\n                _todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.complete(toDo);\n            });\n            currentProject.ToDos.forEach(ToDo => populateToDos(ToDo));\n        });\n\n        const add = document.querySelector('.project-add');\n\n        const formButtons = document.querySelectorAll('.project-button');\n        formButtons.forEach(button => button.addEventListener('click', () => {\n            if (button.textContent == 'Submit') {\n                const project = _project_js__WEBPACK_IMPORTED_MODULE_0__.Project.addProject();\n                const projectBox = _projectDOM_js__WEBPACK_IMPORTED_MODULE_2__.projectDOM.addNew(project);\n                projectBox.addEventListener('click', () => {\n                    _todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.hideForm();\n                    header.textContent = project.title;\n                    const toDos = document.querySelectorAll('.todo');\n                    toDos.forEach((toDo) => {\n                        toDo.remove();\n                        _todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.complete(toDo);\n                    });\n                    const currentProject = _project_js__WEBPACK_IMPORTED_MODULE_0__.Project.findProject();\n                    const ToDos = _project_js__WEBPACK_IMPORTED_MODULE_0__.Project.getToDos(currentProject);\n                    console.log(ToDos);\n                    ToDos.forEach(ToDo => populateToDos(ToDo));\n                });\n            }\n            _projectDOM_js__WEBPACK_IMPORTED_MODULE_2__.projectDOM.hideForm();\n            add.removeAttribute('hidden');\n        }));\n        }\n\n    return {projectListeners, populateToDos};\n})();\n\n\n\n//# sourceURL=webpack://to-do/./src/modules/project-index.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/modules/todo.js\");\n\n\nconst Project = (() => {\n    const newProject = (title, due) => {\n        const ToDos = [];\n        return {title, due, ToDos};\n    };\n    \n    const Projects = [{title: 'Main', due: '', ToDos: []}];\n\n    const findToDo = (project, index) => {\n        return project.ToDos[index];\n    }\n\n    const findProject = () => {\n        const header = document.querySelector('.project-header');\n        const index = Projects.findIndex((element) => element.title == header.textContent);\n        return Projects[index];\n    }\n\n    const updateToDo = (project, index) => {\n        const todo = project.ToDos[index];\n        const form = document.querySelector('.todo-form');\n        todo.title = form.elements['title'].value;\n        todo.details = form.elements['details'].value;\n        todo.due = form.elements['due-date'].value;\n        todo.priority = form.elements['priority'].value;\n        return todo;\n    }\n    \n    const addToDo = (project) => {\n        const todo = _todo_js__WEBPACK_IMPORTED_MODULE_0__.ToDo.addToDo();\n        project.ToDos.push(todo);\n        return todo;\n    };\n\n    const getToDos = (project) => {\n        return project.ToDos;\n    }\n\n    const addProject = () => {\n        const form = document.querySelector('.project-form');\n        const title = form.elements['title'].value;\n        const due = form.elements['due-date'].value;\n        const project = newProject(title, due);\n        Projects.push(project);\n        return project;\n    }\n\n    const remove = (project, index) => {\n        project.ToDos.splice(index, 1);\n    }\n\n    return {newProject, addToDo, addProject, remove, findToDo, updateToDo, findProject, getToDos};\n})();\n\n\n\n\n//# sourceURL=webpack://to-do/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/projectDOM.js":
/*!***********************************!*\
  !*** ./src/modules/projectDOM.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectDOM\": () => (/* binding */ projectDOM)\n/* harmony export */ });\nconst projectDOM = (() => {\n\n    const form = document.querySelector('.project-form');\n    const add = document.querySelector('.project-add');\n\n    const Projects = [];\n\n    const showProjects = () => {\n        Projects.forEach(Project => Project.removeAttribute('hidden'));\n    }\n\n    const hideProjects = () => {\n        Projects.forEach(Project => Project.setAttribute('hidden', ''));\n    }\n\n    const showForm = () => {\n        add.addEventListener('click', () => {\n            add.textContent = '';\n            form.removeAttribute('hidden');\n            hideProjects();\n        }\n    )};\n\n    const hideForm = () => {\n        add.textContent = '+';\n        form.setAttribute('hidden', '');\n        form.reset();\n        showProjects();\n    };\n\n    const addNew =(project) => {\n        const projectList = document.querySelector('.project-list');\n        const item = document.createElement('div');\n        item.classList.add('project');\n        const title = document.createElement('h5');\n        const titleContent = project.title;\n        title.textContent = titleContent;\n        projectList.append(item);\n        item.append(title);\n        Projects.push(item);\n        addDetails(item, project);\n        return item;\n    }\n\n    const addDetails = (item, project ) => {\n\n    }\n\n    return {showForm, hideForm, addNew};\n\n})();\n\n\n\n//# sourceURL=webpack://to-do/./src/modules/projectDOM.js?");

/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToDo\": () => (/* binding */ ToDo)\n/* harmony export */ });\nconst ToDo = (() => {\n    const newToDo = (title, details, due, priority) => {\n        return {\n            title: title,\n            details: details,\n            due: due,\n            priority: priority,\n        }\n    };\n    \n    const addToDo = () => {\n        const form = document.querySelector('form.todo-form');\n        const title = form.elements['title'].value;\n        const details = form.elements['details'].value;\n        const due = form.elements['due-date'].value;\n        const priority = form.elements['priority'].value;\n        const todo = newToDo(title, details, due, priority);\n        return todo;\n    }; \n\n    return {newToDo, addToDo};\n})();\n\n\n\n//# sourceURL=webpack://to-do/./src/modules/todo.js?");

/***/ }),

/***/ "./src/modules/todoDOM.js":
/*!********************************!*\
  !*** ./src/modules/todoDOM.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toDoDOM\": () => (/* binding */ toDoDOM)\n/* harmony export */ });\n/* harmony import */ var _checkbox_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../checkbox.svg */ \"./src/checkbox.svg\");\n/* harmony import */ var _pencil_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pencil-outline.svg */ \"./src/pencil-outline.svg\");\n/* harmony import */ var _close_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../close.svg */ \"./src/close.svg\");\n\n\n\n\nconst toDoDOM = (() => {\n    const add = document.querySelector('.todo-add');\n    const form = document.querySelector('.todo-form');\n\n    const ToDos = [];\n\n    const hideToDos = () => {\n        ToDos.forEach(ToDo => ToDo.setAttribute('hidden', ''));\n    }\n\n    const showToDos = () => {\n        ToDos.forEach(ToDo => ToDo.removeAttribute('hidden'));\n    }\n\n    const showForm = () => {\n        add.addEventListener('click', () => {\n            add.textContent = '';\n            form.removeAttribute('hidden');\n            hideToDos();\n        }\n    )};\n\n    const hideForm = () => {\n        add.textContent = '+';\n        form.setAttribute('hidden', '');\n        form.reset();\n        showToDos();\n    };\n\n    const priorityColor = (todo, item) => {\n        if (todo.priority == 1) {\n            item.style.backgroundColor = '#ffcccc';\n        }\n        else if (todo.priority == 2) {\n            item.style.backgroundColor = '#ffffcc';\n        }\n        else if (todo.priority == 3) {\n            item.style.backgroundColor = '#ccffcc';\n        }\n        else item.style.backgroundColor = 'white';\n    }\n\n    const addNew = (todo) => {\n        const todoList = document.querySelector('.todo-list');\n        const item = document.createElement('div');\n        item.classList.add('todo');\n        const check = document.createElement('img');\n        check.setAttribute('src', _checkbox_svg__WEBPACK_IMPORTED_MODULE_0__);\n        check.setAttribute('alt', 'checkbox');\n        check.classList.add('check');\n        check.classList.add('remove');\n        const title = document.createElement('h5');\n        const titleContent = todo.title;\n        title.textContent = titleContent;\n        priorityColor(todo, item);\n        todoList.append(item);\n        item.append(check, title);\n        ToDos.push(item);\n        addDetails(item, todo);\n        return item;\n    }\n\n    const addDetails = (item, toDo) => {\n        const container = document.createElement('div');\n        const details = document.createElement('p');\n        const due = document.createElement('p');\n        const priority = document.createElement('p');\n        const edit = document.createElement('img');\n        const remove = document.createElement('img');\n        edit.setAttribute('src', _pencil_outline_svg__WEBPACK_IMPORTED_MODULE_1__);\n        edit.setAttribute('alt', 'edit');\n        edit.classList.add('edit');\n        remove.setAttribute('src', _close_svg__WEBPACK_IMPORTED_MODULE_2__);\n        remove.setAttribute('alt', 'remove');\n        remove.classList.add('remove');\n        details.textContent = `details: ${toDo.details}`;\n        due.textContent = `due: ${toDo.due}`;\n        priority.textContent = `priority: ${toDo.priority}`;\n        item.append(container);\n        container.append(details, due, priority, edit, remove);\n        container.classList.add('details-container');\n        container.setAttribute('hidden', '');\n    }\n\n    const displayDetails = (item) => {\n        const container = item.querySelector('.details-container');\n        if (container.getAttribute('hidden') == '') {\n            container.removeAttribute('hidden');\n        }\n        else if (container.getAttribute('hidden') == null) {\n            container.setAttribute('hidden', '');\n        }\n    }\n\n    const findIndex = (toDo) => {\n       let index = ToDos.findIndex((element) => element.innerText == toDo.innerText);\n       return index;\n    }\n\n    const complete = (remove) => {\n        let index = '';\n        if (remove.getAttribute('alt') == 'remove') {\n            index = ToDos.findIndex((element) => element.innerText == remove.parentElement.parentElement.innerText);\n            remove.parentElement.parentElement.remove();\n        }\n        else if (remove.getAttribute('alt') == 'checkbox') {\n            index = ToDos.findIndex((element) => element.innerText == remove.parentElement.innerText);\n            remove.parentElement.remove();\n        }\n\n        else {\n            index = ToDos.findIndex((element) => element.innerText == remove.innerText);\n            remove.remove();\n        }\n        ToDos.splice(index, 1);\n        return index;\n    }\n\n    const updateToDo = (toDo, toDoBox) => {\n        const fields = toDoBox.querySelectorAll('h5, p');\n        const keys = Object.keys(toDo);\n        const values = Object.values(toDo);\n        for (let i = 0; i < fields.length; i++) {\n            if (i == 0) {\n                fields[i].textContent = values[i];\n            }\n            else fields[i].textContent = `${keys[i]}: ${values[i]}`;\n        }\n        priorityColor(toDo, toDoBox);\n    }\n\n    const populateForm = (toDo) => {\n        console.log(toDo);\n        form.removeAttribute('hidden');\n        const fields = form.querySelectorAll('input');\n        const values = Object.values(toDo);\n        for (let i = 0; i < fields.length; i++) {\n            fields[i].value = values[i];\n        }\n    }\n\n    const populateToDos = (project) => {\n        project.ToDos.forEach(ToDo => toDoDOM.addNew(ToDo));\n    }\n\n    return {showForm, hideForm, addNew, complete, displayDetails, populateForm, findIndex, showToDos, hideToDos, updateToDo, populateToDos, ToDos};\n})();\n\n\n\n//# sourceURL=webpack://to-do/./src/modules/todoDOM.js?");

/***/ }),

/***/ "./src/checkbox.svg":
/*!**************************!*\
  !*** ./src/checkbox.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bcc9a49980346cbbe75f.svg\";\n\n//# sourceURL=webpack://to-do/./src/checkbox.svg?");

/***/ }),

/***/ "./src/close.svg":
/*!***********************!*\
  !*** ./src/close.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"97d4c0a10ac97607dc65.svg\";\n\n//# sourceURL=webpack://to-do/./src/close.svg?");

/***/ }),

/***/ "./src/pencil-outline.svg":
/*!********************************!*\
  !*** ./src/pencil-outline.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c11ca64583db9195885d.svg\";\n\n//# sourceURL=webpack://to-do/./src/pencil-outline.svg?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;