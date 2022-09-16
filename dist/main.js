/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/modules/todo.js");


const Project = (() => {
    const newProject = (title, description, dueDate, priority) => {
        const prototype = _todo_js__WEBPACK_IMPORTED_MODULE_0__.ToDo.newToDo(title, description, due, priority);
        const ToDos = [];
        return Object.assign({}, {ToDos}, prototype);
    };
    
    const defaultProject = {
        ToDos: [],
        Projects: []
    };

    const findToDo = (index) => {
        return defaultProject.ToDos[index];
    }

    const updateToDo = (index) => {
        const todo = defaultProject.ToDos[index];
        console.log(todo);
        const form = document.querySelector('.todo-form');
        todo.title = form.elements['title'].value;
        todo.details = form.elements['details'].value;
        todo.due = form.elements['due-date'].value;
        todo.priority = form.elements['priority'].value;
        return todo;
    }
    
    const addToDefault = () => {
        const todo = _todo_js__WEBPACK_IMPORTED_MODULE_0__.ToDo.addToDo();
        defaultProject.ToDos.push(todo);
        console.log(defaultProject.ToDos);
        return todo;
    };

    const addProject = () => {
        const form = document.querySelector('form.project');
        const title = form.elements['title'].value;
        const details = form.elements['details'].value;
        const due = form.elements['due-date'].value;
        const priority = form.elements['priority'].value;
        const todo = newToDo(title, details, due, priority);
        return todo;
    }

    const removeFromDefault = (index) => {
        defaultProject.ToDos.splice(index, 1);
        console.log(defaultProject.ToDos);
    }

    return {newProject, addToDefault, addProject, removeFromDefault, findToDo, updateToDo};
})();




/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToDo": () => (/* binding */ ToDo)
/* harmony export */ });
const ToDo = (() => {
    const newToDo = (title, details, due, priority) => {
        return {
            title: title,
            details: details,
            due: due,
            priority: priority,
        }
    };
    
    const addToDo = () => {
        const form = document.querySelector('form.todo-form');
        console.log(form.elements['title'].value);
        const title = form.elements['title'].value;
        const details = form.elements['details'].value;
        const due = form.elements['due-date'].value;
        const priority = form.elements['priority'].value;
        const todo = newToDo(title, details, due, priority);
        return todo;
    }; 

    return {newToDo, addToDo};
})();



/***/ }),

/***/ "./src/modules/todoDOM.js":
/*!********************************!*\
  !*** ./src/modules/todoDOM.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDoDOM": () => (/* binding */ toDoDOM)
/* harmony export */ });
/* harmony import */ var _checkbox_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../checkbox.svg */ "./src/checkbox.svg");
/* harmony import */ var _pencil_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pencil-outline.svg */ "./src/pencil-outline.svg");
/* harmony import */ var _close_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../close.svg */ "./src/close.svg");




const toDoDOM = (() => {
    const add = document.querySelector('.todo-add');
    const form = document.querySelector('.todo-form');

    const ToDos = [];

    const hideToDos = () => {
        ToDos.forEach(ToDo => ToDo.setAttribute('hidden', ''));
    }

    const showToDos = () => {
        ToDos.forEach(ToDo => ToDo.removeAttribute('hidden'));
    }

    const showForm = () => {
        add.addEventListener('click', () => {
            add.textContent = '';
            form.removeAttribute('hidden');
            hideToDos();
        }
    )};

    const hideForm = () => {
        add.textContent = '+';
        form.setAttribute('hidden', '');
        form.reset();
        showToDos();
    };

    const priorityColor = (todo, item) => {
        if (todo.priority == 1) {
            item.style.backgroundColor = '#ffcccc';
        }
        else if (todo.priority == 2) {
            item.style.backgroundColor = '#ffffcc';
        }
        else if (todo.priority == 3) {
            item.style.backgroundColor = '#ccffcc';
        }
        else item.style.backgroundColor = 'white';
    }

    const addNew = (todo) => {
        const todoList = document.querySelector('.todo-list');
        const item = document.createElement('div');
        item.classList.add('todo');
        const check = document.createElement('img');
        check.setAttribute('src', _checkbox_svg__WEBPACK_IMPORTED_MODULE_0__);
        check.setAttribute('alt', 'checkbox');
        check.classList.add('check');
        check.classList.add('remove');
        const title = document.createElement('h5');
        const titleContent = todo.title;
        title.textContent = titleContent;
        priorityColor(todo, item);
        todoList.append(item);
        item.append(check, title);
        ToDos.push(item);
        addDetails(item, todo);
        return item;
    }

    const addDetails = (item, toDo) => {
        const container = document.createElement('div');
        const details = document.createElement('p');
        const due = document.createElement('p');
        const priority = document.createElement('p');
        const edit = document.createElement('img');
        const remove = document.createElement('img');
        edit.setAttribute('src', _pencil_outline_svg__WEBPACK_IMPORTED_MODULE_1__);
        edit.setAttribute('alt', 'edit');
        edit.classList.add('edit');
        remove.setAttribute('src', _close_svg__WEBPACK_IMPORTED_MODULE_2__);
        remove.setAttribute('alt', 'remove');
        remove.classList.add('remove');
        details.textContent = `details: ${toDo.details}`;
        due.textContent = `due: ${toDo.due}`;
        priority.textContent = `priority: ${toDo.priority}`;
        item.append(container);
        container.append(details, due, priority, edit, remove);
        container.classList.add('details-container');
        container.setAttribute('hidden', '');
    }

    const displayDetails = (item) => {
        const container = item.querySelector('.details-container');
        if (container.getAttribute('hidden') == '') {
            container.removeAttribute('hidden');
        }
        else if (container.getAttribute('hidden') == null) {
            container.setAttribute('hidden', '');
        }
    }

    const findIndex = (toDo) => {
       let index = ToDos.findIndex((element) => element.innerText == toDo.innerText);
       console.log(index);
       return index;
    }

    const complete = (remove) => {
        let index = '';
        if (remove.getAttribute('alt') == 'remove') {
            index = ToDos.findIndex((element) => element.innerText == remove.parentElement.parentElement.innerText);
            remove.parentElement.parentElement.remove();
        }
        else if (remove.getAttribute('alt') == 'checkbox') {
            index = ToDos.findIndex((element) => element.innerText == remove.parentElement.innerText);
            remove.parentElement.remove();
        }

        else {
            index = ToDos.findIndex((element) => element.innerText == remove.innerText);
            remove.remove();
        }
        ToDos.splice(index, 1);
        return index;
    }

    const updateToDo = (toDo, toDoBox) => {
        const fields = toDoBox.querySelectorAll('h5, p');
        const keys = Object.keys(toDo);
        const values = Object.values(toDo);
        for (let i = 0; i < fields.length; i++) {
            if (i == 0) {
                fields[i].textContent = values[i];
            }
            else fields[i].textContent = `${keys[i]}: ${values[i]}`;
        }
        priorityColor(toDo, toDoBox);
    }

    const populateForm = (toDo) => {
        form.removeAttribute('hidden');
        const fields = form.querySelectorAll('input');
        const values = Object.values(toDo);
        for (let i = 0; i < fields.length; i++) {
            fields[i].value = values[i];
        }
    }

    return {showForm, hideForm, addNew, complete, displayDetails, populateForm, findIndex, showToDos, hideToDos, updateToDo, ToDos};
})();



/***/ }),

/***/ "./src/checkbox.svg":
/*!**************************!*\
  !*** ./src/checkbox.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bcc9a49980346cbbe75f.svg";

/***/ }),

/***/ "./src/close.svg":
/*!***********************!*\
  !*** ./src/close.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97d4c0a10ac97607dc65.svg";

/***/ }),

/***/ "./src/pencil-outline.svg":
/*!********************************!*\
  !*** ./src/pencil-outline.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c11ca64583db9195885d.svg";

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/project.js */ "./src/modules/project.js");
/* harmony import */ var _modules_todoDOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/todoDOM.js */ "./src/modules/todoDOM.js");



_modules_todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.showForm();

const form = document.querySelector('.todo-form');
const add = document.querySelector('.todo-add');

const formButtons = document.querySelectorAll('button.button');
formButtons.forEach(button => button.addEventListener('click', () => {
    if (button.textContent == 'Submit') {
        console.log('pop');
        const toDo = _modules_project_js__WEBPACK_IMPORTED_MODULE_0__.Project.addToDefault();
        const toDoBox = _modules_todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.addNew(toDo);
        const container = toDoBox.querySelector('.details-container');
        toDoBox.addEventListener('mouseover', () => {
            container.removeAttribute('hidden');
        });
        toDoBox.addEventListener('mouseout', () => {
            container.setAttribute('hidden', '');
        });
        const removals = toDoBox.querySelectorAll('.remove');
        removals.forEach(remove => remove.addEventListener('click', () => {
            _modules_project_js__WEBPACK_IMPORTED_MODULE_0__.Project.removeFromDefault(_modules_todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.complete(remove));
        }));
        const edit = toDoBox.querySelector('.edit');
        edit.addEventListener('click', () => {
            const index = _modules_todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.findIndex(toDoBox);
            const toDo = _modules_project_js__WEBPACK_IMPORTED_MODULE_0__.Project.findToDo(index);
            add.setAttribute('hidden', '');
            const save = document.querySelector('button[hidden]')
            save.removeAttribute('hidden')
            formButtons[0].setAttribute('hidden', '');
            form.removeAttribute('hidden');
            toDoBox.setAttribute('hidden', '')
            _modules_todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.hideToDos();
            _modules_todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.populateForm(toDo);
            save.addEventListener('click', () => {
                _modules_project_js__WEBPACK_IMPORTED_MODULE_0__.Project.updateToDo(index);
                _modules_todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.updateToDo(toDo, toDoBox);
                _modules_todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.hideForm();
                add.removeAttribute('hidden');
                save.setAttribute('hidden', '');
                formButtons[0].removeAttribute('hidden');
                }, {once : true});
            }
        )}
    _modules_todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.hideForm();
    console.log('ok');
    add.removeAttribute('hidden');
    }));

// function saveToDo(Project, index, toDo, toDoBox, save) {
//     Project.updateToDo(index);
//     toDoDOM.updateToDo(toDo, toDoBox);
//     toDoDOM.hideForm();
//     add.removeAttribute('hidden');
//     save.setAttribute('hidden', '');
//     formButtons[0].removeAttribute('hidden');
//     save.removeEventListener('click', saveToDo())
// }





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUVBQW9CO0FBQ3pDLHdCQUF3QiwrREFBYztBQUN0QztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsWUFBWSwwRUFBeUIsQ0FBQyxpRUFBZ0I7QUFDdEQsU0FBUztBQUNUO0FBQ0E7QUFDQSwwQkFBMEIsa0VBQWlCO0FBQzNDLHlCQUF5QixpRUFBZ0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxrRUFBaUI7QUFDN0IsWUFBWSxxRUFBb0I7QUFDaEM7QUFDQSxnQkFBZ0IsbUVBQWtCO0FBQ2xDLGdCQUFnQixtRUFBa0I7QUFDbEMsZ0JBQWdCLGlFQUFnQjtBQUNoQztBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsR0FBRyxZQUFZO0FBQ2hDO0FBQ0E7QUFDQSxJQUFJLGlFQUFnQjtBQUNwQjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvdG9kb0RPTS5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUb0RvfSBmcm9tICcuL3RvZG8uanMnO1xuXG5jb25zdCBQcm9qZWN0ID0gKCgpID0+IHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICAgICAgY29uc3QgcHJvdG90eXBlID0gVG9Eby5uZXdUb0RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlLCBwcmlvcml0eSk7XG4gICAgICAgIGNvbnN0IFRvRG9zID0gW107XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB7VG9Eb3N9LCBwcm90b3R5cGUpO1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSB7XG4gICAgICAgIFRvRG9zOiBbXSxcbiAgICAgICAgUHJvamVjdHM6IFtdXG4gICAgfTtcblxuICAgIGNvbnN0IGZpbmRUb0RvID0gKGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0UHJvamVjdC5Ub0Rvc1tpbmRleF07XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlVG9EbyA9IChpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCB0b2RvID0gZGVmYXVsdFByb2plY3QuVG9Eb3NbaW5kZXhdO1xuICAgICAgICBjb25zb2xlLmxvZyh0b2RvKTtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0nKTtcbiAgICAgICAgdG9kby50aXRsZSA9IGZvcm0uZWxlbWVudHNbJ3RpdGxlJ10udmFsdWU7XG4gICAgICAgIHRvZG8uZGV0YWlscyA9IGZvcm0uZWxlbWVudHNbJ2RldGFpbHMnXS52YWx1ZTtcbiAgICAgICAgdG9kby5kdWUgPSBmb3JtLmVsZW1lbnRzWydkdWUtZGF0ZSddLnZhbHVlO1xuICAgICAgICB0b2RvLnByaW9yaXR5ID0gZm9ybS5lbGVtZW50c1sncHJpb3JpdHknXS52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGFkZFRvRGVmYXVsdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9kbyA9IFRvRG8uYWRkVG9EbygpO1xuICAgICAgICBkZWZhdWx0UHJvamVjdC5Ub0Rvcy5wdXNoKHRvZG8pO1xuICAgICAgICBjb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdC5Ub0Rvcyk7XG4gICAgICAgIHJldHVybiB0b2RvO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybS5wcm9qZWN0Jyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZm9ybS5lbGVtZW50c1sndGl0bGUnXS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGV0YWlscyA9IGZvcm0uZWxlbWVudHNbJ2RldGFpbHMnXS52YWx1ZTtcbiAgICAgICAgY29uc3QgZHVlID0gZm9ybS5lbGVtZW50c1snZHVlLWRhdGUnXS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBmb3JtLmVsZW1lbnRzWydwcmlvcml0eSddLnZhbHVlO1xuICAgICAgICBjb25zdCB0b2RvID0gbmV3VG9Ebyh0aXRsZSwgZGV0YWlscywgZHVlLCBwcmlvcml0eSk7XG4gICAgICAgIHJldHVybiB0b2RvO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUZyb21EZWZhdWx0ID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGRlZmF1bHRQcm9qZWN0LlRvRG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0LlRvRG9zKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge25ld1Byb2plY3QsIGFkZFRvRGVmYXVsdCwgYWRkUHJvamVjdCwgcmVtb3ZlRnJvbURlZmF1bHQsIGZpbmRUb0RvLCB1cGRhdGVUb0RvfTtcbn0pKCk7XG5cblxuZXhwb3J0IHtQcm9qZWN0fTsiLCJjb25zdCBUb0RvID0gKCgpID0+IHtcbiAgICBjb25zdCBuZXdUb0RvID0gKHRpdGxlLCBkZXRhaWxzLCBkdWUsIHByaW9yaXR5KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICBkZXRhaWxzOiBkZXRhaWxzLFxuICAgICAgICAgICAgZHVlOiBkdWUsXG4gICAgICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGFkZFRvRG8gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtLnRvZG8tZm9ybScpO1xuICAgICAgICBjb25zb2xlLmxvZyhmb3JtLmVsZW1lbnRzWyd0aXRsZSddLnZhbHVlKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBmb3JtLmVsZW1lbnRzWyd0aXRsZSddLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXRhaWxzID0gZm9ybS5lbGVtZW50c1snZGV0YWlscyddLnZhbHVlO1xuICAgICAgICBjb25zdCBkdWUgPSBmb3JtLmVsZW1lbnRzWydkdWUtZGF0ZSddLnZhbHVlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGZvcm0uZWxlbWVudHNbJ3ByaW9yaXR5J10udmFsdWU7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBuZXdUb0RvKHRpdGxlLCBkZXRhaWxzLCBkdWUsIHByaW9yaXR5KTtcbiAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgfTsgXG5cbiAgICByZXR1cm4ge25ld1RvRG8sIGFkZFRvRG99O1xufSkoKTtcblxuZXhwb3J0IHtUb0RvfTsiLCJpbXBvcnQgY2hlY2tib3ggZnJvbSAnLi4vY2hlY2tib3guc3ZnJztcbmltcG9ydCBwZW5jaWwgZnJvbSAnLi4vcGVuY2lsLW91dGxpbmUuc3ZnJztcbmltcG9ydCB4IGZyb20gJy4uL2Nsb3NlLnN2Zyc7XG5cbmNvbnN0IHRvRG9ET00gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWFkZCcpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtJyk7XG5cbiAgICBjb25zdCBUb0RvcyA9IFtdO1xuXG4gICAgY29uc3QgaGlkZVRvRG9zID0gKCkgPT4ge1xuICAgICAgICBUb0Rvcy5mb3JFYWNoKFRvRG8gPT4gVG9Eby5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd1RvRG9zID0gKCkgPT4ge1xuICAgICAgICBUb0Rvcy5mb3JFYWNoKFRvRG8gPT4gVG9Eby5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpKTtcbiAgICB9XG5cbiAgICBjb25zdCBzaG93Rm9ybSA9ICgpID0+IHtcbiAgICAgICAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgYWRkLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICBmb3JtLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICBoaWRlVG9Eb3MoKTtcbiAgICAgICAgfVxuICAgICl9O1xuXG4gICAgY29uc3QgaGlkZUZvcm0gPSAoKSA9PiB7XG4gICAgICAgIGFkZC50ZXh0Q29udGVudCA9ICcrJztcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICBzaG93VG9Eb3MoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcHJpb3JpdHlDb2xvciA9ICh0b2RvLCBpdGVtKSA9PiB7XG4gICAgICAgIGlmICh0b2RvLnByaW9yaXR5ID09IDEpIHtcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmNjY2MnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRvZG8ucHJpb3JpdHkgPT0gMikge1xuICAgICAgICAgICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZmZjYyc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodG9kby5wcmlvcml0eSA9PSAzKSB7XG4gICAgICAgICAgICBpdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjY2NmZmNjJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGl0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICB9XG5cbiAgICBjb25zdCBhZGROZXcgPSAodG9kbykgPT4ge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKTtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY2hlY2suc2V0QXR0cmlidXRlKCdzcmMnLCBjaGVja2JveCk7XG4gICAgICAgIGNoZWNrLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2NoZWNrYm94Jyk7XG4gICAgICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoJ2NoZWNrJyk7XG4gICAgICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZScpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgICAgIGNvbnN0IHRpdGxlQ29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGl0bGVDb250ZW50O1xuICAgICAgICBwcmlvcml0eUNvbG9yKHRvZG8sIGl0ZW0pO1xuICAgICAgICB0b2RvTGlzdC5hcHBlbmQoaXRlbSk7XG4gICAgICAgIGl0ZW0uYXBwZW5kKGNoZWNrLCB0aXRsZSk7XG4gICAgICAgIFRvRG9zLnB1c2goaXRlbSk7XG4gICAgICAgIGFkZERldGFpbHMoaXRlbSwgdG9kbyk7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZERldGFpbHMgPSAoaXRlbSwgdG9EbykgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZWRpdC5zZXRBdHRyaWJ1dGUoJ3NyYycsIHBlbmNpbCk7XG4gICAgICAgIGVkaXQuc2V0QXR0cmlidXRlKCdhbHQnLCAnZWRpdCcpO1xuICAgICAgICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgICAgICAgcmVtb3ZlLnNldEF0dHJpYnV0ZSgnc3JjJywgeCk7XG4gICAgICAgIHJlbW92ZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdyZW1vdmUnKTtcbiAgICAgICAgcmVtb3ZlLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZScpO1xuICAgICAgICBkZXRhaWxzLnRleHRDb250ZW50ID0gYGRldGFpbHM6ICR7dG9Eby5kZXRhaWxzfWA7XG4gICAgICAgIGR1ZS50ZXh0Q29udGVudCA9IGBkdWU6ICR7dG9Eby5kdWV9YDtcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBgcHJpb3JpdHk6ICR7dG9Eby5wcmlvcml0eX1gO1xuICAgICAgICBpdGVtLmFwcGVuZChjb250YWluZXIpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKGRldGFpbHMsIGR1ZSwgcHJpb3JpdHksIGVkaXQsIHJlbW92ZSk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzLWNvbnRhaW5lcicpO1xuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheURldGFpbHMgPSAoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzLWNvbnRhaW5lcicpO1xuICAgICAgICBpZiAoY29udGFpbmVyLmdldEF0dHJpYnV0ZSgnaGlkZGVuJykgPT0gJycpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2hpZGRlbicpID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGZpbmRJbmRleCA9ICh0b0RvKSA9PiB7XG4gICAgICAgbGV0IGluZGV4ID0gVG9Eb3MuZmluZEluZGV4KChlbGVtZW50KSA9PiBlbGVtZW50LmlubmVyVGV4dCA9PSB0b0RvLmlubmVyVGV4dCk7XG4gICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xuICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZSA9IChyZW1vdmUpID0+IHtcbiAgICAgICAgbGV0IGluZGV4ID0gJyc7XG4gICAgICAgIGlmIChyZW1vdmUuZ2V0QXR0cmlidXRlKCdhbHQnKSA9PSAncmVtb3ZlJykge1xuICAgICAgICAgICAgaW5kZXggPSBUb0Rvcy5maW5kSW5kZXgoKGVsZW1lbnQpID0+IGVsZW1lbnQuaW5uZXJUZXh0ID09IHJlbW92ZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaW5uZXJUZXh0KTtcbiAgICAgICAgICAgIHJlbW92ZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmVtb3ZlLmdldEF0dHJpYnV0ZSgnYWx0JykgPT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgaW5kZXggPSBUb0Rvcy5maW5kSW5kZXgoKGVsZW1lbnQpID0+IGVsZW1lbnQuaW5uZXJUZXh0ID09IHJlbW92ZS5wYXJlbnRFbGVtZW50LmlubmVyVGV4dCk7XG4gICAgICAgICAgICByZW1vdmUucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaW5kZXggPSBUb0Rvcy5maW5kSW5kZXgoKGVsZW1lbnQpID0+IGVsZW1lbnQuaW5uZXJUZXh0ID09IHJlbW92ZS5pbm5lclRleHQpO1xuICAgICAgICAgICAgcmVtb3ZlLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIFRvRG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVUb0RvID0gKHRvRG8sIHRvRG9Cb3gpID0+IHtcbiAgICAgICAgY29uc3QgZmllbGRzID0gdG9Eb0JveC5xdWVyeVNlbGVjdG9yQWxsKCdoNSwgcCcpO1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModG9Ebyk7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXModG9Ebyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgZmllbGRzW2ldLnRleHRDb250ZW50ID0gdmFsdWVzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBmaWVsZHNbaV0udGV4dENvbnRlbnQgPSBgJHtrZXlzW2ldfTogJHt2YWx1ZXNbaV19YDtcbiAgICAgICAgfVxuICAgICAgICBwcmlvcml0eUNvbG9yKHRvRG8sIHRvRG9Cb3gpO1xuICAgIH1cblxuICAgIGNvbnN0IHBvcHVsYXRlRm9ybSA9ICh0b0RvKSA9PiB7XG4gICAgICAgIGZvcm0ucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgICAgY29uc3QgZmllbGRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKHRvRG8pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZmllbGRzW2ldLnZhbHVlID0gdmFsdWVzW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtzaG93Rm9ybSwgaGlkZUZvcm0sIGFkZE5ldywgY29tcGxldGUsIGRpc3BsYXlEZXRhaWxzLCBwb3B1bGF0ZUZvcm0sIGZpbmRJbmRleCwgc2hvd1RvRG9zLCBoaWRlVG9Eb3MsIHVwZGF0ZVRvRG8sIFRvRG9zfTtcbn0pKCk7XG5cbmV4cG9ydCB7dG9Eb0RPTX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHtQcm9qZWN0fSBmcm9tICcuL21vZHVsZXMvcHJvamVjdC5qcyc7XG5pbXBvcnQge3RvRG9ET019IGZyb20gJy4vbW9kdWxlcy90b2RvRE9NLmpzJztcblxudG9Eb0RPTS5zaG93Rm9ybSgpO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybScpO1xuY29uc3QgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tYWRkJyk7XG5cbmNvbnN0IGZvcm1CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uLmJ1dHRvbicpO1xuZm9ybUJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChidXR0b24udGV4dENvbnRlbnQgPT0gJ1N1Ym1pdCcpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3BvcCcpO1xuICAgICAgICBjb25zdCB0b0RvID0gUHJvamVjdC5hZGRUb0RlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgdG9Eb0JveCA9IHRvRG9ET00uYWRkTmV3KHRvRG8pO1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0b0RvQm94LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzLWNvbnRhaW5lcicpO1xuICAgICAgICB0b0RvQm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICB9KTtcbiAgICAgICAgdG9Eb0JveC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHJlbW92YWxzID0gdG9Eb0JveC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlJyk7XG4gICAgICAgIHJlbW92YWxzLmZvckVhY2gocmVtb3ZlID0+IHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIFByb2plY3QucmVtb3ZlRnJvbURlZmF1bHQodG9Eb0RPTS5jb21wbGV0ZShyZW1vdmUpKTtcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCBlZGl0ID0gdG9Eb0JveC5xdWVyeVNlbGVjdG9yKCcuZWRpdCcpO1xuICAgICAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0b0RvRE9NLmZpbmRJbmRleCh0b0RvQm94KTtcbiAgICAgICAgICAgIGNvbnN0IHRvRG8gPSBQcm9qZWN0LmZpbmRUb0RvKGluZGV4KTtcbiAgICAgICAgICAgIGFkZC5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcbiAgICAgICAgICAgIGNvbnN0IHNhdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25baGlkZGVuXScpXG4gICAgICAgICAgICBzYXZlLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJylcbiAgICAgICAgICAgIGZvcm1CdXR0b25zWzBdLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuICAgICAgICAgICAgZm9ybS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgdG9Eb0JveC5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKVxuICAgICAgICAgICAgdG9Eb0RPTS5oaWRlVG9Eb3MoKTtcbiAgICAgICAgICAgIHRvRG9ET00ucG9wdWxhdGVGb3JtKHRvRG8pO1xuICAgICAgICAgICAgc2F2ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBQcm9qZWN0LnVwZGF0ZVRvRG8oaW5kZXgpO1xuICAgICAgICAgICAgICAgIHRvRG9ET00udXBkYXRlVG9Ebyh0b0RvLCB0b0RvQm94KTtcbiAgICAgICAgICAgICAgICB0b0RvRE9NLmhpZGVGb3JtKCk7XG4gICAgICAgICAgICAgICAgYWRkLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgc2F2ZS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcbiAgICAgICAgICAgICAgICBmb3JtQnV0dG9uc1swXS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIH0sIHtvbmNlIDogdHJ1ZX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICApfVxuICAgIHRvRG9ET00uaGlkZUZvcm0oKTtcbiAgICBjb25zb2xlLmxvZygnb2snKTtcbiAgICBhZGQucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICB9KSk7XG5cbi8vIGZ1bmN0aW9uIHNhdmVUb0RvKFByb2plY3QsIGluZGV4LCB0b0RvLCB0b0RvQm94LCBzYXZlKSB7XG4vLyAgICAgUHJvamVjdC51cGRhdGVUb0RvKGluZGV4KTtcbi8vICAgICB0b0RvRE9NLnVwZGF0ZVRvRG8odG9EbywgdG9Eb0JveCk7XG4vLyAgICAgdG9Eb0RPTS5oaWRlRm9ybSgpO1xuLy8gICAgIGFkZC5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuLy8gICAgIHNhdmUuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG4vLyAgICAgZm9ybUJ1dHRvbnNbMF0ucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbi8vICAgICBzYXZlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2F2ZVRvRG8oKSlcbi8vIH1cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9