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
    const newProject = (title, description, due, priority) => {
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
    add.removeAttribute('hidden');
    }));





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW9CO0FBQ3pDLHdCQUF3QiwrREFBYztBQUN0QztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsWUFBWSwwRUFBeUIsQ0FBQyxpRUFBZ0I7QUFDdEQsU0FBUztBQUNUO0FBQ0E7QUFDQSwwQkFBMEIsa0VBQWlCO0FBQzNDLHlCQUF5QixpRUFBZ0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxrRUFBaUI7QUFDN0IsWUFBWSxxRUFBb0I7QUFDaEM7QUFDQSxnQkFBZ0IsbUVBQWtCO0FBQ2xDLGdCQUFnQixtRUFBa0I7QUFDbEMsZ0JBQWdCLGlFQUFnQjtBQUNoQztBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsR0FBRyxZQUFZO0FBQ2hDO0FBQ0E7QUFDQSxJQUFJLGlFQUFnQjtBQUNwQjtBQUNBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvdG9kb0RPTS5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUb0RvfSBmcm9tICcuL3RvZG8uanMnO1xuXG5jb25zdCBQcm9qZWN0ID0gKCgpID0+IHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlLCBwcmlvcml0eSkgPT4ge1xuICAgICAgICBjb25zdCBwcm90b3R5cGUgPSBUb0RvLm5ld1RvRG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWUsIHByaW9yaXR5KTtcbiAgICAgICAgY29uc3QgVG9Eb3MgPSBbXTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHtUb0Rvc30sIHByb3RvdHlwZSk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IHtcbiAgICAgICAgVG9Eb3M6IFtdLFxuICAgICAgICBQcm9qZWN0czogW11cbiAgICB9O1xuXG4gICAgY29uc3QgZmluZFRvRG8gPSAoaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRQcm9qZWN0LlRvRG9zW2luZGV4XTtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVUb0RvID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBkZWZhdWx0UHJvamVjdC5Ub0Rvc1tpbmRleF07XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtJyk7XG4gICAgICAgIHRvZG8udGl0bGUgPSBmb3JtLmVsZW1lbnRzWyd0aXRsZSddLnZhbHVlO1xuICAgICAgICB0b2RvLmRldGFpbHMgPSBmb3JtLmVsZW1lbnRzWydkZXRhaWxzJ10udmFsdWU7XG4gICAgICAgIHRvZG8uZHVlID0gZm9ybS5lbGVtZW50c1snZHVlLWRhdGUnXS52YWx1ZTtcbiAgICAgICAgdG9kby5wcmlvcml0eSA9IGZvcm0uZWxlbWVudHNbJ3ByaW9yaXR5J10udmFsdWU7XG4gICAgICAgIHJldHVybiB0b2RvO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBhZGRUb0RlZmF1bHQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBUb0RvLmFkZFRvRG8oKTtcbiAgICAgICAgZGVmYXVsdFByb2plY3QuVG9Eb3MucHVzaCh0b2RvKTtcbiAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtLnByb2plY3QnKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBmb3JtLmVsZW1lbnRzWyd0aXRsZSddLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXRhaWxzID0gZm9ybS5lbGVtZW50c1snZGV0YWlscyddLnZhbHVlO1xuICAgICAgICBjb25zdCBkdWUgPSBmb3JtLmVsZW1lbnRzWydkdWUtZGF0ZSddLnZhbHVlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGZvcm0uZWxlbWVudHNbJ3ByaW9yaXR5J10udmFsdWU7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBuZXdUb0RvKHRpdGxlLCBkZXRhaWxzLCBkdWUsIHByaW9yaXR5KTtcbiAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlRnJvbURlZmF1bHQgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgZGVmYXVsdFByb2plY3QuVG9Eb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge25ld1Byb2plY3QsIGFkZFRvRGVmYXVsdCwgYWRkUHJvamVjdCwgcmVtb3ZlRnJvbURlZmF1bHQsIGZpbmRUb0RvLCB1cGRhdGVUb0RvfTtcbn0pKCk7XG5cblxuZXhwb3J0IHtQcm9qZWN0fTsiLCJjb25zdCBUb0RvID0gKCgpID0+IHtcbiAgICBjb25zdCBuZXdUb0RvID0gKHRpdGxlLCBkZXRhaWxzLCBkdWUsIHByaW9yaXR5KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICBkZXRhaWxzOiBkZXRhaWxzLFxuICAgICAgICAgICAgZHVlOiBkdWUsXG4gICAgICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGFkZFRvRG8gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtLnRvZG8tZm9ybScpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGZvcm0uZWxlbWVudHNbJ3RpdGxlJ10udmFsdWU7XG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBmb3JtLmVsZW1lbnRzWydkZXRhaWxzJ10udmFsdWU7XG4gICAgICAgIGNvbnN0IGR1ZSA9IGZvcm0uZWxlbWVudHNbJ2R1ZS1kYXRlJ10udmFsdWU7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZm9ybS5lbGVtZW50c1sncHJpb3JpdHknXS52YWx1ZTtcbiAgICAgICAgY29uc3QgdG9kbyA9IG5ld1RvRG8odGl0bGUsIGRldGFpbHMsIGR1ZSwgcHJpb3JpdHkpO1xuICAgICAgICByZXR1cm4gdG9kbztcbiAgICB9OyBcblxuICAgIHJldHVybiB7bmV3VG9EbywgYWRkVG9Eb307XG59KSgpO1xuXG5leHBvcnQge1RvRG99OyIsImltcG9ydCBjaGVja2JveCBmcm9tICcuLi9jaGVja2JveC5zdmcnO1xuaW1wb3J0IHBlbmNpbCBmcm9tICcuLi9wZW5jaWwtb3V0bGluZS5zdmcnO1xuaW1wb3J0IHggZnJvbSAnLi4vY2xvc2Uuc3ZnJztcblxuY29uc3QgdG9Eb0RPTSA9ICgoKSA9PiB7XG4gICAgY29uc3QgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tYWRkJyk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0nKTtcblxuICAgIGNvbnN0IFRvRG9zID0gW107XG5cbiAgICBjb25zdCBoaWRlVG9Eb3MgPSAoKSA9PiB7XG4gICAgICAgIFRvRG9zLmZvckVhY2goVG9EbyA9PiBUb0RvLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpKTtcbiAgICB9XG5cbiAgICBjb25zdCBzaG93VG9Eb3MgPSAoKSA9PiB7XG4gICAgICAgIFRvRG9zLmZvckVhY2goVG9EbyA9PiBUb0RvLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJykpO1xuICAgIH1cblxuICAgIGNvbnN0IHNob3dGb3JtID0gKCkgPT4ge1xuICAgICAgICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBhZGQudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIGZvcm0ucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIGhpZGVUb0RvcygpO1xuICAgICAgICB9XG4gICAgKX07XG5cbiAgICBjb25zdCBoaWRlRm9ybSA9ICgpID0+IHtcbiAgICAgICAgYWRkLnRleHRDb250ZW50ID0gJysnO1xuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICAgIHNob3dUb0RvcygpO1xuICAgIH07XG5cbiAgICBjb25zdCBwcmlvcml0eUNvbG9yID0gKHRvZG8sIGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKHRvZG8ucHJpb3JpdHkgPT0gMSkge1xuICAgICAgICAgICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmY2NjYyc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodG9kby5wcmlvcml0eSA9PSAyKSB7XG4gICAgICAgICAgICBpdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmZmNjJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0b2RvLnByaW9yaXR5ID09IDMpIHtcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNjY2ZmY2MnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZE5ldyA9ICh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCcpO1xuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgndG9kbycpO1xuICAgICAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjaGVjay5zZXRBdHRyaWJ1dGUoJ3NyYycsIGNoZWNrYm94KTtcbiAgICAgICAgY2hlY2suc2V0QXR0cmlidXRlKCdhbHQnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgY2hlY2suY2xhc3NMaXN0LmFkZCgnY2hlY2snKTtcbiAgICAgICAgY2hlY2suY2xhc3NMaXN0LmFkZCgncmVtb3ZlJyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICAgICAgY29uc3QgdGl0bGVDb250ZW50ID0gdG9kby50aXRsZTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZUNvbnRlbnQ7XG4gICAgICAgIHByaW9yaXR5Q29sb3IodG9kbywgaXRlbSk7XG4gICAgICAgIHRvZG9MaXN0LmFwcGVuZChpdGVtKTtcbiAgICAgICAgaXRlbS5hcHBlbmQoY2hlY2ssIHRpdGxlKTtcbiAgICAgICAgVG9Eb3MucHVzaChpdGVtKTtcbiAgICAgICAgYWRkRGV0YWlscyhpdGVtLCB0b2RvKTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuXG4gICAgY29uc3QgYWRkRGV0YWlscyA9IChpdGVtLCB0b0RvKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBlZGl0LnNldEF0dHJpYnV0ZSgnc3JjJywgcGVuY2lsKTtcbiAgICAgICAgZWRpdC5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdlZGl0Jyk7XG4gICAgICAgIGVkaXQuY2xhc3NMaXN0LmFkZCgnZWRpdCcpO1xuICAgICAgICByZW1vdmUuc2V0QXR0cmlidXRlKCdzcmMnLCB4KTtcbiAgICAgICAgcmVtb3ZlLnNldEF0dHJpYnV0ZSgnYWx0JywgJ3JlbW92ZScpO1xuICAgICAgICByZW1vdmUuY2xhc3NMaXN0LmFkZCgncmVtb3ZlJyk7XG4gICAgICAgIGRldGFpbHMudGV4dENvbnRlbnQgPSBgZGV0YWlsczogJHt0b0RvLmRldGFpbHN9YDtcbiAgICAgICAgZHVlLnRleHRDb250ZW50ID0gYGR1ZTogJHt0b0RvLmR1ZX1gO1xuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IGBwcmlvcml0eTogJHt0b0RvLnByaW9yaXR5fWA7XG4gICAgICAgIGl0ZW0uYXBwZW5kKGNvbnRhaW5lcik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoZGV0YWlscywgZHVlLCBwcmlvcml0eSwgZWRpdCwgcmVtb3ZlKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5RGV0YWlscyA9IChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmRldGFpbHMtY29udGFpbmVyJyk7XG4gICAgICAgIGlmIChjb250YWluZXIuZ2V0QXR0cmlidXRlKCdoaWRkZW4nKSA9PSAnJykge1xuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29udGFpbmVyLmdldEF0dHJpYnV0ZSgnaGlkZGVuJykgPT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZmluZEluZGV4ID0gKHRvRG8pID0+IHtcbiAgICAgICBsZXQgaW5kZXggPSBUb0Rvcy5maW5kSW5kZXgoKGVsZW1lbnQpID0+IGVsZW1lbnQuaW5uZXJUZXh0ID09IHRvRG8uaW5uZXJUZXh0KTtcbiAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAocmVtb3ZlKSA9PiB7XG4gICAgICAgIGxldCBpbmRleCA9ICcnO1xuICAgICAgICBpZiAocmVtb3ZlLmdldEF0dHJpYnV0ZSgnYWx0JykgPT0gJ3JlbW92ZScpIHtcbiAgICAgICAgICAgIGluZGV4ID0gVG9Eb3MuZmluZEluZGV4KChlbGVtZW50KSA9PiBlbGVtZW50LmlubmVyVGV4dCA9PSByZW1vdmUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlubmVyVGV4dCk7XG4gICAgICAgICAgICByZW1vdmUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJlbW92ZS5nZXRBdHRyaWJ1dGUoJ2FsdCcpID09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgIGluZGV4ID0gVG9Eb3MuZmluZEluZGV4KChlbGVtZW50KSA9PiBlbGVtZW50LmlubmVyVGV4dCA9PSByZW1vdmUucGFyZW50RWxlbWVudC5pbm5lclRleHQpO1xuICAgICAgICAgICAgcmVtb3ZlLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gVG9Eb3MuZmluZEluZGV4KChlbGVtZW50KSA9PiBlbGVtZW50LmlubmVyVGV4dCA9PSByZW1vdmUuaW5uZXJUZXh0KTtcbiAgICAgICAgICAgIHJlbW92ZS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBUb0Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlVG9EbyA9ICh0b0RvLCB0b0RvQm94KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IHRvRG9Cb3gucXVlcnlTZWxlY3RvckFsbCgnaDUsIHAnKTtcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRvRG8pO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKHRvRG8pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgIGZpZWxkc1tpXS50ZXh0Q29udGVudCA9IHZhbHVlc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgZmllbGRzW2ldLnRleHRDb250ZW50ID0gYCR7a2V5c1tpXX06ICR7dmFsdWVzW2ldfWA7XG4gICAgICAgIH1cbiAgICAgICAgcHJpb3JpdHlDb2xvcih0b0RvLCB0b0RvQm94KTtcbiAgICB9XG5cbiAgICBjb25zdCBwb3B1bGF0ZUZvcm0gPSAodG9EbykgPT4ge1xuICAgICAgICBmb3JtLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyh0b0RvKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZpZWxkc1tpXS52YWx1ZSA9IHZhbHVlc1tpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7c2hvd0Zvcm0sIGhpZGVGb3JtLCBhZGROZXcsIGNvbXBsZXRlLCBkaXNwbGF5RGV0YWlscywgcG9wdWxhdGVGb3JtLCBmaW5kSW5kZXgsIHNob3dUb0RvcywgaGlkZVRvRG9zLCB1cGRhdGVUb0RvLCBUb0Rvc307XG59KSgpO1xuXG5leHBvcnQge3RvRG9ET019OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7UHJvamVjdH0gZnJvbSAnLi9tb2R1bGVzL3Byb2plY3QuanMnO1xuaW1wb3J0IHt0b0RvRE9NfSBmcm9tICcuL21vZHVsZXMvdG9kb0RPTS5qcyc7XG5cbnRvRG9ET00uc2hvd0Zvcm0oKTtcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0nKTtcbmNvbnN0IGFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWFkZCcpO1xuXG5jb25zdCBmb3JtQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbi5idXR0b24nKTtcbmZvcm1CdXR0b25zLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoYnV0dG9uLnRleHRDb250ZW50ID09ICdTdWJtaXQnKSB7XG4gICAgICAgIGNvbnN0IHRvRG8gPSBQcm9qZWN0LmFkZFRvRGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB0b0RvQm94ID0gdG9Eb0RPTS5hZGROZXcodG9Ebyk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRvRG9Cb3gucXVlcnlTZWxlY3RvcignLmRldGFpbHMtY29udGFpbmVyJyk7XG4gICAgICAgIHRvRG9Cb3guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0b0RvQm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcmVtb3ZhbHMgPSB0b0RvQm94LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmUnKTtcbiAgICAgICAgcmVtb3ZhbHMuZm9yRWFjaChyZW1vdmUgPT4gcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgUHJvamVjdC5yZW1vdmVGcm9tRGVmYXVsdCh0b0RvRE9NLmNvbXBsZXRlKHJlbW92ZSkpO1xuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IGVkaXQgPSB0b0RvQm94LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Jyk7XG4gICAgICAgIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRvRG9ET00uZmluZEluZGV4KHRvRG9Cb3gpO1xuICAgICAgICAgICAgY29uc3QgdG9EbyA9IFByb2plY3QuZmluZFRvRG8oaW5kZXgpO1xuICAgICAgICAgICAgYWRkLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuICAgICAgICAgICAgY29uc3Qgc2F2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbltoaWRkZW5dJylcbiAgICAgICAgICAgIHNhdmUucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKVxuICAgICAgICAgICAgZm9ybUJ1dHRvbnNbMF0uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG4gICAgICAgICAgICBmb3JtLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICB0b0RvQm94LnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpXG4gICAgICAgICAgICB0b0RvRE9NLmhpZGVUb0RvcygpO1xuICAgICAgICAgICAgdG9Eb0RPTS5wb3B1bGF0ZUZvcm0odG9Ebyk7XG4gICAgICAgICAgICBzYXZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIFByb2plY3QudXBkYXRlVG9EbyhpbmRleCk7XG4gICAgICAgICAgICAgICAgdG9Eb0RPTS51cGRhdGVUb0RvKHRvRG8sIHRvRG9Cb3gpO1xuICAgICAgICAgICAgICAgIHRvRG9ET00uaGlkZUZvcm0oKTtcbiAgICAgICAgICAgICAgICBhZGQucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBzYXZlLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuICAgICAgICAgICAgICAgIGZvcm1CdXR0b25zWzBdLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgfSwge29uY2UgOiB0cnVlfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICl9XG4gICAgdG9Eb0RPTS5oaWRlRm9ybSgpO1xuICAgIGFkZC5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgIH0pKTtcblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9