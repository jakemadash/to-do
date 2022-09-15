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
        console.log(defaultProject.ToDos[1]);
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

    const showForm = () => {
        add.addEventListener('click', () => {
            add.textContent = '';
            form.removeAttribute('hidden');
        }
    )};

    const hideForm = () => {
        add.textContent = '+';
        form.setAttribute('hidden', '');
        form.reset();
    };

    const ToDos = [];

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
        console.log(container);
        if (container.getAttribute('hidden') == '') {
            container.removeAttribute('hidden');
        }
        else if (container.getAttribute('hidden') == null) {
            container.setAttribute('hidden', '');
        }
    }

    const complete = (remove) => {
        console.log(remove);
        let index = '';
        if (remove.getAttribute('alt') == 'remove') {
            index = ToDos.findIndex((element) => element.innerText == remove.parentElement.parentElement.innerText);
            remove.parentElement.parentElement.remove();
        }
        else {
            index = ToDos.findIndex((element) => element.innerText == remove.parentElement.innerText);
            remove.parentElement.remove();
        }
        return index;
    }

    return {showForm, hideForm, addNew, complete, displayDetails, ToDos};
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

const formButtons = document.querySelectorAll('button');
formButtons.forEach(button => button.addEventListener('click', () => {
    if (button.textContent == 'Submit') {
        const toDo = _modules_project_js__WEBPACK_IMPORTED_MODULE_0__.Project.addToDefault();
        const toDoBox = _modules_todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.addNew(toDo);
        toDoBox.addEventListener('click', () => {
            _modules_todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.displayDetails(toDoBox);
        });
        const removals = toDoBox.querySelectorAll('.remove');
        removals.forEach(remove => remove.addEventListener('click', () => {
            _modules_project_js__WEBPACK_IMPORTED_MODULE_0__.Project.removeFromDefault(_modules_todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.complete(remove));
        }));
    }
    _modules_todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.hideForm();
}));





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7O0FBRS9CO0FBQ0E7QUFDQSwwQkFBMEIsa0RBQVk7QUFDdEM7QUFDQSwrQkFBK0IsR0FBRyxNQUFNO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGtEQUFZO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnNDO0FBQ0k7QUFDZDs7QUFFN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDBDQUFRO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdEQUFNO0FBQ3ZDO0FBQ0E7QUFDQSxtQ0FBbUMsdUNBQUM7QUFDcEM7QUFDQTtBQUNBLDBDQUEwQyxhQUFhO0FBQ3ZELDJDQUEyQyxhQUFhO0FBQ3hELDRDQUE0QyxjQUFjO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEdEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7O0FDZjZDO0FBQ0E7O0FBRTdDLGlFQUFnQjs7QUFFaEI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFFQUFvQjtBQUN6Qyx3QkFBd0IsK0RBQWM7QUFDdEM7QUFDQSxZQUFZLHVFQUFzQjtBQUNsQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFlBQVksMEVBQXlCLENBQUMsaUVBQWdCO0FBQ3RELFNBQVM7QUFDVDtBQUNBLElBQUksaUVBQWdCO0FBQ3BCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvdG9kb0RPTS5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUb0RvfSBmcm9tICcuL3RvZG8uanMnO1xuXG5jb25zdCBQcm9qZWN0ID0gKCgpID0+IHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICAgICAgY29uc3QgcHJvdG90eXBlID0gVG9Eby5uZXdUb0RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgICBjb25zdCBUb0RvcyA9IFtdO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwge1RvRG9zfSwgcHJvdG90eXBlKTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0ge1xuICAgICAgICBUb0RvczogW10sXG4gICAgICAgIFByb2plY3RzOiBbXVxuICAgIH07XG5cbiAgICBjb25zdCBmaW5kVG9EbyA9IChpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gZGVmYXVsdFByb2plY3QuVG9Eb3NbaW5kZXhdO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBhZGRUb0RlZmF1bHQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBUb0RvLmFkZFRvRG8oKTtcbiAgICAgICAgZGVmYXVsdFByb2plY3QuVG9Eb3MucHVzaCh0b2RvKTtcbiAgICAgICAgY29uc29sZS5sb2coZGVmYXVsdFByb2plY3QuVG9Eb3MpO1xuICAgICAgICByZXR1cm4gdG9kbztcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0ucHJvamVjdCcpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGZvcm0uZWxlbWVudHNbJ3RpdGxlJ10udmFsdWU7XG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBmb3JtLmVsZW1lbnRzWydkZXRhaWxzJ10udmFsdWU7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBmb3JtLmVsZW1lbnRzWydkdWUtZGF0ZSddLnZhbHVlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGZvcm0uZWxlbWVudHNbJ3ByaW9yaXR5J10udmFsdWU7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBuZXdUb0RvKHRpdGxlLCBkZXRhaWxzLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgICAgIHJldHVybiB0b2RvO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUZyb21EZWZhdWx0ID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGRlZmF1bHRQcm9qZWN0LlRvRG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0LlRvRG9zWzFdKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge25ld1Byb2plY3QsIGFkZFRvRGVmYXVsdCwgYWRkUHJvamVjdCwgcmVtb3ZlRnJvbURlZmF1bHQsIGZpbmRUb0RvfTtcbn0pKCk7XG5cblxuZXhwb3J0IHtQcm9qZWN0fTsiLCJjb25zdCBUb0RvID0gKCgpID0+IHtcbiAgICBjb25zdCBuZXdUb0RvID0gKHRpdGxlLCBkZXRhaWxzLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgZGV0YWlsczogZGV0YWlscyxcbiAgICAgICAgICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4gICAgICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGFkZFRvRG8gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtLnRvZG8tZm9ybScpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGZvcm0uZWxlbWVudHNbJ3RpdGxlJ10udmFsdWU7XG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBmb3JtLmVsZW1lbnRzWydkZXRhaWxzJ10udmFsdWU7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBmb3JtLmVsZW1lbnRzWydkdWUtZGF0ZSddLnZhbHVlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGZvcm0uZWxlbWVudHNbJ3ByaW9yaXR5J10udmFsdWU7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBuZXdUb0RvKHRpdGxlLCBkZXRhaWxzLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgICAgIHJldHVybiB0b2RvO1xuICAgIH07IFxuXG4gICAgcmV0dXJuIHtuZXdUb0RvLCBhZGRUb0RvfTtcbn0pKCk7XG5cbmV4cG9ydCB7VG9Eb307IiwiaW1wb3J0IGNoZWNrYm94IGZyb20gJy4uL2NoZWNrYm94LnN2Zyc7XG5pbXBvcnQgcGVuY2lsIGZyb20gJy4uL3BlbmNpbC1vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgeCBmcm9tICcuLi9jbG9zZS5zdmcnO1xuXG5jb25zdCB0b0RvRE9NID0gKCgpID0+IHtcbiAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1hZGQnKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybScpO1xuXG4gICAgY29uc3Qgc2hvd0Zvcm0gPSAoKSA9PiB7XG4gICAgICAgIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGFkZC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgZm9ybS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgKX07XG5cbiAgICBjb25zdCBoaWRlRm9ybSA9ICgpID0+IHtcbiAgICAgICAgYWRkLnRleHRDb250ZW50ID0gJysnO1xuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgfTtcblxuICAgIGNvbnN0IFRvRG9zID0gW107XG5cbiAgICBjb25zdCBwcmlvcml0eUNvbG9yID0gKHRvZG8sIGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKHRvZG8ucHJpb3JpdHkgPT0gMSkge1xuICAgICAgICAgICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmY2NjYyc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodG9kby5wcmlvcml0eSA9PSAyKSB7XG4gICAgICAgICAgICBpdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmZmNjJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0b2RvLnByaW9yaXR5ID09IDMpIHtcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNjY2ZmY2MnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZE5ldyA9ICh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCcpO1xuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgndG9kbycpO1xuICAgICAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjaGVjay5zZXRBdHRyaWJ1dGUoJ3NyYycsIGNoZWNrYm94KTtcbiAgICAgICAgY2hlY2suc2V0QXR0cmlidXRlKCdhbHQnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgY2hlY2suY2xhc3NMaXN0LmFkZCgnY2hlY2snKTtcbiAgICAgICAgY2hlY2suY2xhc3NMaXN0LmFkZCgncmVtb3ZlJyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICAgICAgY29uc3QgdGl0bGVDb250ZW50ID0gdG9kby50aXRsZTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZUNvbnRlbnQ7XG4gICAgICAgIHByaW9yaXR5Q29sb3IodG9kbywgaXRlbSk7XG4gICAgICAgIHRvZG9MaXN0LmFwcGVuZChpdGVtKTtcbiAgICAgICAgaXRlbS5hcHBlbmQoY2hlY2ssIHRpdGxlKTtcbiAgICAgICAgVG9Eb3MucHVzaChpdGVtKTtcbiAgICAgICAgYWRkRGV0YWlscyhpdGVtLCB0b2RvKTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuXG4gICAgY29uc3QgYWRkRGV0YWlscyA9IChpdGVtLCB0b0RvKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGVkaXQuc2V0QXR0cmlidXRlKCdzcmMnLCBwZW5jaWwpO1xuICAgICAgICBlZGl0LnNldEF0dHJpYnV0ZSgnYWx0JywgJ2VkaXQnKTtcbiAgICAgICAgZWRpdC5jbGFzc0xpc3QuYWRkKCdlZGl0Jyk7XG4gICAgICAgIHJlbW92ZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHgpO1xuICAgICAgICByZW1vdmUuc2V0QXR0cmlidXRlKCdhbHQnLCAncmVtb3ZlJyk7XG4gICAgICAgIHJlbW92ZS5jbGFzc0xpc3QuYWRkKCdyZW1vdmUnKTtcbiAgICAgICAgZGV0YWlscy50ZXh0Q29udGVudCA9IGBEZXRhaWxzOiAke3RvRG8uZGV0YWlsc31gO1xuICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gYER1ZSBEYXRlOiAke3RvRG8uZHVlRGF0ZX1gO1xuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHt0b0RvLnByaW9yaXR5fWA7XG4gICAgICAgIGl0ZW0uYXBwZW5kKGNvbnRhaW5lcik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoZGV0YWlscywgZHVlRGF0ZSwgcHJpb3JpdHksIGVkaXQsIHJlbW92ZSk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzLWNvbnRhaW5lcicpO1xuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheURldGFpbHMgPSAoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zb2xlLmxvZyhjb250YWluZXIpO1xuICAgICAgICBpZiAoY29udGFpbmVyLmdldEF0dHJpYnV0ZSgnaGlkZGVuJykgPT0gJycpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2hpZGRlbicpID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKHJlbW92ZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZW1vdmUpO1xuICAgICAgICBsZXQgaW5kZXggPSAnJztcbiAgICAgICAgaWYgKHJlbW92ZS5nZXRBdHRyaWJ1dGUoJ2FsdCcpID09ICdyZW1vdmUnKSB7XG4gICAgICAgICAgICBpbmRleCA9IFRvRG9zLmZpbmRJbmRleCgoZWxlbWVudCkgPT4gZWxlbWVudC5pbm5lclRleHQgPT0gcmVtb3ZlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pbm5lclRleHQpO1xuICAgICAgICAgICAgcmVtb3ZlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gVG9Eb3MuZmluZEluZGV4KChlbGVtZW50KSA9PiBlbGVtZW50LmlubmVyVGV4dCA9PSByZW1vdmUucGFyZW50RWxlbWVudC5pbm5lclRleHQpO1xuICAgICAgICAgICAgcmVtb3ZlLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cblxuICAgIHJldHVybiB7c2hvd0Zvcm0sIGhpZGVGb3JtLCBhZGROZXcsIGNvbXBsZXRlLCBkaXNwbGF5RGV0YWlscywgVG9Eb3N9O1xufSkoKTtcblxuZXhwb3J0IHt0b0RvRE9NfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQge1Byb2plY3R9IGZyb20gJy4vbW9kdWxlcy9wcm9qZWN0LmpzJztcbmltcG9ydCB7dG9Eb0RPTX0gZnJvbSAnLi9tb2R1bGVzL3RvZG9ET00uanMnO1xuXG50b0RvRE9NLnNob3dGb3JtKCk7XG5cbmNvbnN0IGZvcm1CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG5mb3JtQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGJ1dHRvbi50ZXh0Q29udGVudCA9PSAnU3VibWl0Jykge1xuICAgICAgICBjb25zdCB0b0RvID0gUHJvamVjdC5hZGRUb0RlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgdG9Eb0JveCA9IHRvRG9ET00uYWRkTmV3KHRvRG8pO1xuICAgICAgICB0b0RvQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdG9Eb0RPTS5kaXNwbGF5RGV0YWlscyh0b0RvQm94KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHJlbW92YWxzID0gdG9Eb0JveC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlJyk7XG4gICAgICAgIHJlbW92YWxzLmZvckVhY2gocmVtb3ZlID0+IHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIFByb2plY3QucmVtb3ZlRnJvbURlZmF1bHQodG9Eb0RPTS5jb21wbGV0ZShyZW1vdmUpKTtcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICB0b0RvRE9NLmhpZGVGb3JtKCk7XG59KSk7XG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==