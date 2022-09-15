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
        const prototype = _todo_js__WEBPACK_IMPORTED_MODULE_0__.ToDo.newToDo(title, description, dueDate, priority);
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
        const dueDate = form.elements['due-date'].value;
        const priority = form.elements['priority'].value;
        const todo = newToDo(title, details, dueDate, priority);
        return todo;
    }

    const removeFromDefault = (index) => {
        defaultProject.ToDos.splice(index, 1);
        console.log(defaultProject.ToDos);
    }

    return {newProject, addToDefault, addProject, removeFromDefault, findToDo};
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
    const newToDo = (title, details, dueDate, priority) => {
        return {
            title: title,
            details: details,
            dueDate: dueDate,
            priority: priority,
        }
    };
    
    const addToDo = () => {
        const form = document.querySelector('form.todo-form');
        const title = form.elements['title'].value;
        const details = form.elements['details'].value;
        const dueDate = form.elements['due-date'].value;
        const priority = form.elements['priority'].value;
        const todo = newToDo(title, details, dueDate, priority);
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
        const dueDate = document.createElement('div');
        const priority = document.createElement('div');
        const edit = document.createElement('img');
        const remove = document.createElement('img');
        edit.setAttribute('src', _pencil_outline_svg__WEBPACK_IMPORTED_MODULE_1__);
        edit.setAttribute('alt', 'edit');
        edit.classList.add('edit');
        remove.setAttribute('src', _close_svg__WEBPACK_IMPORTED_MODULE_2__);
        remove.setAttribute('alt', 'remove');
        remove.classList.add('remove');
        details.textContent = `Details: ${toDo.details}`;
        dueDate.textContent = `Due Date: ${toDo.dueDate}`;
        priority.textContent = `Priority: ${toDo.priority}`;
        item.append(container);
        container.append(details, dueDate, priority, edit, remove);
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

    const populateForm = (toDo) => {
        form.removeAttribute('hidden');
        const fields = form.querySelectorAll('input');
        const values = Object.values(toDo);
        for (let i = 0; i < fields.length; i++) {
            fields[i].value = values[i];
        }
    }

    return {showForm, hideForm, addNew, complete, displayDetails, populateForm, findIndex, showToDos, hideToDos, ToDos};
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

const formButtons = document.querySelectorAll('button');
formButtons.forEach(button => button.addEventListener('click', () => {
    if (button.textContent == 'Save') {
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
            form.removeAttribute('hidden');
            formButtons[3].setAttribute('hidden', '');
            toDoBox.setAttribute('hidden', '')
            _modules_todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.hideToDos();
            _modules_todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.populateForm(toDo);
            _modules_project_js__WEBPACK_IMPORTED_MODULE_0__.Project.removeFromDefault(_modules_todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.complete(toDoBox));
            formButtons[2].addEventListener('click', () => {
                _modules_todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.showToDos();
                console.log('ok');
            }
        )});
    }
    _modules_todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.hideForm();
    formButtons[1].removeAttribute('hidden');
    add.removeAttribute('hidden');
}));





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLDBCQUEwQixrRUFBaUI7QUFDM0MseUJBQXlCLGlFQUFnQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0VBQWlCO0FBQzdCLFlBQVkscUVBQW9CO0FBQ2hDLFlBQVksMEVBQXlCLENBQUMsaUVBQWdCO0FBQ3REO0FBQ0EsZ0JBQWdCLGtFQUFpQjtBQUNqQztBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsSUFBSSxpRUFBZ0I7QUFDcEI7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvdG9kb0RPTS5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUb0RvfSBmcm9tICcuL3RvZG8uanMnO1xuXG5jb25zdCBQcm9qZWN0ID0gKCgpID0+IHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICAgICAgY29uc3QgcHJvdG90eXBlID0gVG9Eby5uZXdUb0RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgICBjb25zdCBUb0RvcyA9IFtdO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwge1RvRG9zfSwgcHJvdG90eXBlKTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0ge1xuICAgICAgICBUb0RvczogW10sXG4gICAgICAgIFByb2plY3RzOiBbXVxuICAgIH07XG5cbiAgICBjb25zdCBmaW5kVG9EbyA9IChpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gZGVmYXVsdFByb2plY3QuVG9Eb3NbaW5kZXhdO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBhZGRUb0RlZmF1bHQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBUb0RvLmFkZFRvRG8oKTtcbiAgICAgICAgZGVmYXVsdFByb2plY3QuVG9Eb3MucHVzaCh0b2RvKTtcbiAgICAgICAgY29uc29sZS5sb2coZGVmYXVsdFByb2plY3QuVG9Eb3MpO1xuICAgICAgICByZXR1cm4gdG9kbztcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0ucHJvamVjdCcpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGZvcm0uZWxlbWVudHNbJ3RpdGxlJ10udmFsdWU7XG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBmb3JtLmVsZW1lbnRzWydkZXRhaWxzJ10udmFsdWU7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBmb3JtLmVsZW1lbnRzWydkdWUtZGF0ZSddLnZhbHVlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGZvcm0uZWxlbWVudHNbJ3ByaW9yaXR5J10udmFsdWU7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBuZXdUb0RvKHRpdGxlLCBkZXRhaWxzLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgICAgIHJldHVybiB0b2RvO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUZyb21EZWZhdWx0ID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGRlZmF1bHRQcm9qZWN0LlRvRG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0LlRvRG9zKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge25ld1Byb2plY3QsIGFkZFRvRGVmYXVsdCwgYWRkUHJvamVjdCwgcmVtb3ZlRnJvbURlZmF1bHQsIGZpbmRUb0RvfTtcbn0pKCk7XG5cblxuZXhwb3J0IHtQcm9qZWN0fTsiLCJjb25zdCBUb0RvID0gKCgpID0+IHtcbiAgICBjb25zdCBuZXdUb0RvID0gKHRpdGxlLCBkZXRhaWxzLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgZGV0YWlsczogZGV0YWlscyxcbiAgICAgICAgICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4gICAgICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGFkZFRvRG8gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtLnRvZG8tZm9ybScpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGZvcm0uZWxlbWVudHNbJ3RpdGxlJ10udmFsdWU7XG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBmb3JtLmVsZW1lbnRzWydkZXRhaWxzJ10udmFsdWU7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBmb3JtLmVsZW1lbnRzWydkdWUtZGF0ZSddLnZhbHVlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGZvcm0uZWxlbWVudHNbJ3ByaW9yaXR5J10udmFsdWU7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBuZXdUb0RvKHRpdGxlLCBkZXRhaWxzLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgICAgIHJldHVybiB0b2RvO1xuICAgIH07IFxuXG4gICAgcmV0dXJuIHtuZXdUb0RvLCBhZGRUb0RvfTtcbn0pKCk7XG5cbmV4cG9ydCB7VG9Eb307IiwiaW1wb3J0IGNoZWNrYm94IGZyb20gJy4uL2NoZWNrYm94LnN2Zyc7XG5pbXBvcnQgcGVuY2lsIGZyb20gJy4uL3BlbmNpbC1vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgeCBmcm9tICcuLi9jbG9zZS5zdmcnO1xuXG5jb25zdCB0b0RvRE9NID0gKCgpID0+IHtcbiAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1hZGQnKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybScpO1xuXG4gICAgY29uc3QgVG9Eb3MgPSBbXTtcblxuICAgIGNvbnN0IGhpZGVUb0RvcyA9ICgpID0+IHtcbiAgICAgICAgVG9Eb3MuZm9yRWFjaChUb0RvID0+IFRvRG8uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJykpO1xuICAgIH1cblxuICAgIGNvbnN0IHNob3dUb0RvcyA9ICgpID0+IHtcbiAgICAgICAgVG9Eb3MuZm9yRWFjaChUb0RvID0+IFRvRG8ucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0Zvcm0gPSAoKSA9PiB7XG4gICAgICAgIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGFkZC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgZm9ybS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgaGlkZVRvRG9zKCk7XG4gICAgICAgIH1cbiAgICApfTtcblxuICAgIGNvbnN0IGhpZGVGb3JtID0gKCkgPT4ge1xuICAgICAgICBhZGQudGV4dENvbnRlbnQgPSAnKyc7XG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG4gICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgICAgc2hvd1RvRG9zKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHByaW9yaXR5Q29sb3IgPSAodG9kbywgaXRlbSkgPT4ge1xuICAgICAgICBpZiAodG9kby5wcmlvcml0eSA9PSAxKSB7XG4gICAgICAgICAgICBpdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZjY2NjJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0b2RvLnByaW9yaXR5ID09IDIpIHtcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmZmY2MnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRvZG8ucHJpb3JpdHkgPT0gMykge1xuICAgICAgICAgICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2NjZmZjYyc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkTmV3ID0gKHRvZG8pID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0Jyk7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XG4gICAgICAgIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNoZWNrLnNldEF0dHJpYnV0ZSgnc3JjJywgY2hlY2tib3gpO1xuICAgICAgICBjaGVjay5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdjaGVja2JveCcpO1xuICAgICAgICBjaGVjay5jbGFzc0xpc3QuYWRkKCdjaGVjaycpO1xuICAgICAgICBjaGVjay5jbGFzc0xpc3QuYWRkKCdyZW1vdmUnKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICAgICAgICBjb25zdCB0aXRsZUNvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRpdGxlQ29udGVudDtcbiAgICAgICAgcHJpb3JpdHlDb2xvcih0b2RvLCBpdGVtKTtcbiAgICAgICAgdG9kb0xpc3QuYXBwZW5kKGl0ZW0pO1xuICAgICAgICBpdGVtLmFwcGVuZChjaGVjaywgdGl0bGUpO1xuICAgICAgICBUb0Rvcy5wdXNoKGl0ZW0pO1xuICAgICAgICBhZGREZXRhaWxzKGl0ZW0sIHRvZG8pO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGREZXRhaWxzID0gKGl0ZW0sIHRvRG8pID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZWRpdC5zZXRBdHRyaWJ1dGUoJ3NyYycsIHBlbmNpbCk7XG4gICAgICAgIGVkaXQuc2V0QXR0cmlidXRlKCdhbHQnLCAnZWRpdCcpO1xuICAgICAgICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgICAgICAgcmVtb3ZlLnNldEF0dHJpYnV0ZSgnc3JjJywgeCk7XG4gICAgICAgIHJlbW92ZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdyZW1vdmUnKTtcbiAgICAgICAgcmVtb3ZlLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZScpO1xuICAgICAgICBkZXRhaWxzLnRleHRDb250ZW50ID0gYERldGFpbHM6ICR7dG9Eby5kZXRhaWxzfWA7XG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBgRHVlIERhdGU6ICR7dG9Eby5kdWVEYXRlfWA7XG4gICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3RvRG8ucHJpb3JpdHl9YDtcbiAgICAgICAgaXRlbS5hcHBlbmQoY29udGFpbmVyKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChkZXRhaWxzLCBkdWVEYXRlLCBwcmlvcml0eSwgZWRpdCwgcmVtb3ZlKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5RGV0YWlscyA9IChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmRldGFpbHMtY29udGFpbmVyJyk7XG4gICAgICAgIGlmIChjb250YWluZXIuZ2V0QXR0cmlidXRlKCdoaWRkZW4nKSA9PSAnJykge1xuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29udGFpbmVyLmdldEF0dHJpYnV0ZSgnaGlkZGVuJykgPT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZmluZEluZGV4ID0gKHRvRG8pID0+IHtcbiAgICAgICBsZXQgaW5kZXggPSBUb0Rvcy5maW5kSW5kZXgoKGVsZW1lbnQpID0+IGVsZW1lbnQuaW5uZXJUZXh0ID09IHRvRG8uaW5uZXJUZXh0KTtcbiAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKHJlbW92ZSkgPT4ge1xuICAgICAgICBsZXQgaW5kZXggPSAnJztcbiAgICAgICAgaWYgKHJlbW92ZS5nZXRBdHRyaWJ1dGUoJ2FsdCcpID09ICdyZW1vdmUnKSB7XG4gICAgICAgICAgICBpbmRleCA9IFRvRG9zLmZpbmRJbmRleCgoZWxlbWVudCkgPT4gZWxlbWVudC5pbm5lclRleHQgPT0gcmVtb3ZlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pbm5lclRleHQpO1xuICAgICAgICAgICAgcmVtb3ZlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyZW1vdmUuZ2V0QXR0cmlidXRlKCdhbHQnKSA9PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICBpbmRleCA9IFRvRG9zLmZpbmRJbmRleCgoZWxlbWVudCkgPT4gZWxlbWVudC5pbm5lclRleHQgPT0gcmVtb3ZlLnBhcmVudEVsZW1lbnQuaW5uZXJUZXh0KTtcbiAgICAgICAgICAgIHJlbW92ZS5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpbmRleCA9IFRvRG9zLmZpbmRJbmRleCgoZWxlbWVudCkgPT4gZWxlbWVudC5pbm5lclRleHQgPT0gcmVtb3ZlLmlubmVyVGV4dCk7XG4gICAgICAgICAgICByZW1vdmUucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgVG9Eb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cblxuICAgIGNvbnN0IHBvcHVsYXRlRm9ybSA9ICh0b0RvKSA9PiB7XG4gICAgICAgIGZvcm0ucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgICAgY29uc3QgZmllbGRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKHRvRG8pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZmllbGRzW2ldLnZhbHVlID0gdmFsdWVzW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtzaG93Rm9ybSwgaGlkZUZvcm0sIGFkZE5ldywgY29tcGxldGUsIGRpc3BsYXlEZXRhaWxzLCBwb3B1bGF0ZUZvcm0sIGZpbmRJbmRleCwgc2hvd1RvRG9zLCBoaWRlVG9Eb3MsIFRvRG9zfTtcbn0pKCk7XG5cbmV4cG9ydCB7dG9Eb0RPTX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHtQcm9qZWN0fSBmcm9tICcuL21vZHVsZXMvcHJvamVjdC5qcyc7XG5pbXBvcnQge3RvRG9ET019IGZyb20gJy4vbW9kdWxlcy90b2RvRE9NLmpzJztcblxudG9Eb0RPTS5zaG93Rm9ybSgpO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybScpO1xuY29uc3QgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tYWRkJyk7XG5cbmNvbnN0IGZvcm1CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG5mb3JtQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGJ1dHRvbi50ZXh0Q29udGVudCA9PSAnU2F2ZScpIHtcbiAgICAgICAgY29uc3QgdG9EbyA9IFByb2plY3QuYWRkVG9EZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHRvRG9Cb3ggPSB0b0RvRE9NLmFkZE5ldyh0b0RvKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdG9Eb0JveC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlscy1jb250YWluZXInKTtcbiAgICAgICAgdG9Eb0JveC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRvRG9Cb3guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByZW1vdmFscyA9IHRvRG9Cb3gucXVlcnlTZWxlY3RvckFsbCgnLnJlbW92ZScpO1xuICAgICAgICByZW1vdmFscy5mb3JFYWNoKHJlbW92ZSA9PiByZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBQcm9qZWN0LnJlbW92ZUZyb21EZWZhdWx0KHRvRG9ET00uY29tcGxldGUocmVtb3ZlKSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgY29uc3QgZWRpdCA9IHRvRG9Cb3gucXVlcnlTZWxlY3RvcignLmVkaXQnKTtcbiAgICAgICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdG9Eb0RPTS5maW5kSW5kZXgodG9Eb0JveCk7XG4gICAgICAgICAgICBjb25zdCB0b0RvID0gUHJvamVjdC5maW5kVG9EbyhpbmRleCk7XG4gICAgICAgICAgICBhZGQuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG4gICAgICAgICAgICBmb3JtLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICBmb3JtQnV0dG9uc1szXS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcbiAgICAgICAgICAgIHRvRG9Cb3guc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJylcbiAgICAgICAgICAgIHRvRG9ET00uaGlkZVRvRG9zKCk7XG4gICAgICAgICAgICB0b0RvRE9NLnBvcHVsYXRlRm9ybSh0b0RvKTtcbiAgICAgICAgICAgIFByb2plY3QucmVtb3ZlRnJvbURlZmF1bHQodG9Eb0RPTS5jb21wbGV0ZSh0b0RvQm94KSk7XG4gICAgICAgICAgICBmb3JtQnV0dG9uc1syXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0b0RvRE9NLnNob3dUb0RvcygpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICApfSk7XG4gICAgfVxuICAgIHRvRG9ET00uaGlkZUZvcm0oKTtcbiAgICBmb3JtQnV0dG9uc1sxXS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgIGFkZC5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xufSkpO1xuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=