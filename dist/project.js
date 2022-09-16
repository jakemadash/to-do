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

/***/ "./src/modules/projectDOM.js":
/*!***********************************!*\
  !*** ./src/modules/projectDOM.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectDOM": () => (/* binding */ ProjectDOM)
/* harmony export */ });
/* harmony import */ var _todoDOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoDOM.js */ "./src/modules/todoDOM.js");


const ProjectDOM = () => {
    const prototype = _todoDOM_js__WEBPACK_IMPORTED_MODULE_0__.toDoDOM;
    return Object.assign({}, prototype);
};

console.log(ProjectDOM);

const form = document.querySelector('.project-form');
const add = document.querySelector('.project-add');



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
/*!******************************!*\
  !*** ./src/project-index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/project.js */ "./src/modules/project.js");
/* harmony import */ var _modules_todoDOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/todoDOM.js */ "./src/modules/todoDOM.js");
/* harmony import */ var _modules_projectDOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/projectDOM.js */ "./src/modules/projectDOM.js");




console.log('k');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZjZDO0FBQ0E7QUFDTTs7QUFFbkQsaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy9wcm9qZWN0RE9NLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL3RvZG9ET00uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Byb2plY3QtaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUb0RvfSBmcm9tICcuL3RvZG8uanMnO1xuXG5jb25zdCBQcm9qZWN0ID0gKCgpID0+IHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlLCBwcmlvcml0eSkgPT4ge1xuICAgICAgICBjb25zdCBwcm90b3R5cGUgPSBUb0RvLm5ld1RvRG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWUsIHByaW9yaXR5KTtcbiAgICAgICAgY29uc3QgVG9Eb3MgPSBbXTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHtUb0Rvc30sIHByb3RvdHlwZSk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IHtcbiAgICAgICAgVG9Eb3M6IFtdLFxuICAgICAgICBQcm9qZWN0czogW11cbiAgICB9O1xuXG4gICAgY29uc3QgZmluZFRvRG8gPSAoaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRQcm9qZWN0LlRvRG9zW2luZGV4XTtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVUb0RvID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBkZWZhdWx0UHJvamVjdC5Ub0Rvc1tpbmRleF07XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtJyk7XG4gICAgICAgIHRvZG8udGl0bGUgPSBmb3JtLmVsZW1lbnRzWyd0aXRsZSddLnZhbHVlO1xuICAgICAgICB0b2RvLmRldGFpbHMgPSBmb3JtLmVsZW1lbnRzWydkZXRhaWxzJ10udmFsdWU7XG4gICAgICAgIHRvZG8uZHVlID0gZm9ybS5lbGVtZW50c1snZHVlLWRhdGUnXS52YWx1ZTtcbiAgICAgICAgdG9kby5wcmlvcml0eSA9IGZvcm0uZWxlbWVudHNbJ3ByaW9yaXR5J10udmFsdWU7XG4gICAgICAgIHJldHVybiB0b2RvO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBhZGRUb0RlZmF1bHQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBUb0RvLmFkZFRvRG8oKTtcbiAgICAgICAgZGVmYXVsdFByb2plY3QuVG9Eb3MucHVzaCh0b2RvKTtcbiAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtLnByb2plY3QnKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBmb3JtLmVsZW1lbnRzWyd0aXRsZSddLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXRhaWxzID0gZm9ybS5lbGVtZW50c1snZGV0YWlscyddLnZhbHVlO1xuICAgICAgICBjb25zdCBkdWUgPSBmb3JtLmVsZW1lbnRzWydkdWUtZGF0ZSddLnZhbHVlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGZvcm0uZWxlbWVudHNbJ3ByaW9yaXR5J10udmFsdWU7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBuZXdUb0RvKHRpdGxlLCBkZXRhaWxzLCBkdWUsIHByaW9yaXR5KTtcbiAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlRnJvbURlZmF1bHQgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgZGVmYXVsdFByb2plY3QuVG9Eb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge25ld1Byb2plY3QsIGFkZFRvRGVmYXVsdCwgYWRkUHJvamVjdCwgcmVtb3ZlRnJvbURlZmF1bHQsIGZpbmRUb0RvLCB1cGRhdGVUb0RvfTtcbn0pKCk7XG5cblxuZXhwb3J0IHtQcm9qZWN0fTsiLCJpbXBvcnQge3RvRG9ET019IGZyb20gJy4vdG9kb0RPTS5qcyc7XG5cbmNvbnN0IFByb2plY3RET00gPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gdG9Eb0RPTTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJvdG90eXBlKTtcbn07XG5cbmNvbnNvbGUubG9nKFByb2plY3RET00pO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpO1xuY29uc3QgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtYWRkJyk7XG5cbmV4cG9ydCB7UHJvamVjdERPTX07IiwiY29uc3QgVG9EbyA9ICgoKSA9PiB7XG4gICAgY29uc3QgbmV3VG9EbyA9ICh0aXRsZSwgZGV0YWlscywgZHVlLCBwcmlvcml0eSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgZGV0YWlsczogZGV0YWlscyxcbiAgICAgICAgICAgIGR1ZTogZHVlLFxuICAgICAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LFxuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBhZGRUb0RvID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybS50b2RvLWZvcm0nKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBmb3JtLmVsZW1lbnRzWyd0aXRsZSddLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXRhaWxzID0gZm9ybS5lbGVtZW50c1snZGV0YWlscyddLnZhbHVlO1xuICAgICAgICBjb25zdCBkdWUgPSBmb3JtLmVsZW1lbnRzWydkdWUtZGF0ZSddLnZhbHVlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGZvcm0uZWxlbWVudHNbJ3ByaW9yaXR5J10udmFsdWU7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBuZXdUb0RvKHRpdGxlLCBkZXRhaWxzLCBkdWUsIHByaW9yaXR5KTtcbiAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgfTsgXG5cbiAgICByZXR1cm4ge25ld1RvRG8sIGFkZFRvRG99O1xufSkoKTtcblxuZXhwb3J0IHtUb0RvfTsiLCJpbXBvcnQgY2hlY2tib3ggZnJvbSAnLi4vY2hlY2tib3guc3ZnJztcbmltcG9ydCBwZW5jaWwgZnJvbSAnLi4vcGVuY2lsLW91dGxpbmUuc3ZnJztcbmltcG9ydCB4IGZyb20gJy4uL2Nsb3NlLnN2Zyc7XG5cbmNvbnN0IHRvRG9ET00gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWFkZCcpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtJyk7XG5cbiAgICBjb25zdCBUb0RvcyA9IFtdO1xuXG4gICAgY29uc3QgaGlkZVRvRG9zID0gKCkgPT4ge1xuICAgICAgICBUb0Rvcy5mb3JFYWNoKFRvRG8gPT4gVG9Eby5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd1RvRG9zID0gKCkgPT4ge1xuICAgICAgICBUb0Rvcy5mb3JFYWNoKFRvRG8gPT4gVG9Eby5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpKTtcbiAgICB9XG5cbiAgICBjb25zdCBzaG93Rm9ybSA9ICgpID0+IHtcbiAgICAgICAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgYWRkLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICBmb3JtLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICBoaWRlVG9Eb3MoKTtcbiAgICAgICAgfVxuICAgICl9O1xuXG4gICAgY29uc3QgaGlkZUZvcm0gPSAoKSA9PiB7XG4gICAgICAgIGFkZC50ZXh0Q29udGVudCA9ICcrJztcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICBzaG93VG9Eb3MoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcHJpb3JpdHlDb2xvciA9ICh0b2RvLCBpdGVtKSA9PiB7XG4gICAgICAgIGlmICh0b2RvLnByaW9yaXR5ID09IDEpIHtcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmNjY2MnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRvZG8ucHJpb3JpdHkgPT0gMikge1xuICAgICAgICAgICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZmZjYyc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodG9kby5wcmlvcml0eSA9PSAzKSB7XG4gICAgICAgICAgICBpdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjY2NmZmNjJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGl0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICB9XG5cbiAgICBjb25zdCBhZGROZXcgPSAodG9kbykgPT4ge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKTtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY2hlY2suc2V0QXR0cmlidXRlKCdzcmMnLCBjaGVja2JveCk7XG4gICAgICAgIGNoZWNrLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2NoZWNrYm94Jyk7XG4gICAgICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoJ2NoZWNrJyk7XG4gICAgICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZScpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgICAgIGNvbnN0IHRpdGxlQ29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGl0bGVDb250ZW50O1xuICAgICAgICBwcmlvcml0eUNvbG9yKHRvZG8sIGl0ZW0pO1xuICAgICAgICB0b2RvTGlzdC5hcHBlbmQoaXRlbSk7XG4gICAgICAgIGl0ZW0uYXBwZW5kKGNoZWNrLCB0aXRsZSk7XG4gICAgICAgIFRvRG9zLnB1c2goaXRlbSk7XG4gICAgICAgIGFkZERldGFpbHMoaXRlbSwgdG9kbyk7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZERldGFpbHMgPSAoaXRlbSwgdG9EbykgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZWRpdC5zZXRBdHRyaWJ1dGUoJ3NyYycsIHBlbmNpbCk7XG4gICAgICAgIGVkaXQuc2V0QXR0cmlidXRlKCdhbHQnLCAnZWRpdCcpO1xuICAgICAgICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgICAgICAgcmVtb3ZlLnNldEF0dHJpYnV0ZSgnc3JjJywgeCk7XG4gICAgICAgIHJlbW92ZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdyZW1vdmUnKTtcbiAgICAgICAgcmVtb3ZlLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZScpO1xuICAgICAgICBkZXRhaWxzLnRleHRDb250ZW50ID0gYGRldGFpbHM6ICR7dG9Eby5kZXRhaWxzfWA7XG4gICAgICAgIGR1ZS50ZXh0Q29udGVudCA9IGBkdWU6ICR7dG9Eby5kdWV9YDtcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBgcHJpb3JpdHk6ICR7dG9Eby5wcmlvcml0eX1gO1xuICAgICAgICBpdGVtLmFwcGVuZChjb250YWluZXIpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKGRldGFpbHMsIGR1ZSwgcHJpb3JpdHksIGVkaXQsIHJlbW92ZSk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzLWNvbnRhaW5lcicpO1xuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheURldGFpbHMgPSAoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzLWNvbnRhaW5lcicpO1xuICAgICAgICBpZiAoY29udGFpbmVyLmdldEF0dHJpYnV0ZSgnaGlkZGVuJykgPT0gJycpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2hpZGRlbicpID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGZpbmRJbmRleCA9ICh0b0RvKSA9PiB7XG4gICAgICAgbGV0IGluZGV4ID0gVG9Eb3MuZmluZEluZGV4KChlbGVtZW50KSA9PiBlbGVtZW50LmlubmVyVGV4dCA9PSB0b0RvLmlubmVyVGV4dCk7XG4gICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKHJlbW92ZSkgPT4ge1xuICAgICAgICBsZXQgaW5kZXggPSAnJztcbiAgICAgICAgaWYgKHJlbW92ZS5nZXRBdHRyaWJ1dGUoJ2FsdCcpID09ICdyZW1vdmUnKSB7XG4gICAgICAgICAgICBpbmRleCA9IFRvRG9zLmZpbmRJbmRleCgoZWxlbWVudCkgPT4gZWxlbWVudC5pbm5lclRleHQgPT0gcmVtb3ZlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pbm5lclRleHQpO1xuICAgICAgICAgICAgcmVtb3ZlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyZW1vdmUuZ2V0QXR0cmlidXRlKCdhbHQnKSA9PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICBpbmRleCA9IFRvRG9zLmZpbmRJbmRleCgoZWxlbWVudCkgPT4gZWxlbWVudC5pbm5lclRleHQgPT0gcmVtb3ZlLnBhcmVudEVsZW1lbnQuaW5uZXJUZXh0KTtcbiAgICAgICAgICAgIHJlbW92ZS5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpbmRleCA9IFRvRG9zLmZpbmRJbmRleCgoZWxlbWVudCkgPT4gZWxlbWVudC5pbm5lclRleHQgPT0gcmVtb3ZlLmlubmVyVGV4dCk7XG4gICAgICAgICAgICByZW1vdmUucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgVG9Eb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZVRvRG8gPSAodG9EbywgdG9Eb0JveCkgPT4ge1xuICAgICAgICBjb25zdCBmaWVsZHMgPSB0b0RvQm94LnF1ZXJ5U2VsZWN0b3JBbGwoJ2g1LCBwJyk7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0b0RvKTtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyh0b0RvKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICBmaWVsZHNbaV0udGV4dENvbnRlbnQgPSB2YWx1ZXNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGZpZWxkc1tpXS50ZXh0Q29udGVudCA9IGAke2tleXNbaV19OiAke3ZhbHVlc1tpXX1gO1xuICAgICAgICB9XG4gICAgICAgIHByaW9yaXR5Q29sb3IodG9EbywgdG9Eb0JveCk7XG4gICAgfVxuXG4gICAgY29uc3QgcG9wdWxhdGVGb3JtID0gKHRvRG8pID0+IHtcbiAgICAgICAgZm9ybS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICBjb25zdCBmaWVsZHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXModG9Ebyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmaWVsZHNbaV0udmFsdWUgPSB2YWx1ZXNbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge3Nob3dGb3JtLCBoaWRlRm9ybSwgYWRkTmV3LCBjb21wbGV0ZSwgZGlzcGxheURldGFpbHMsIHBvcHVsYXRlRm9ybSwgZmluZEluZGV4LCBzaG93VG9Eb3MsIGhpZGVUb0RvcywgdXBkYXRlVG9EbywgVG9Eb3N9O1xufSkoKTtcblxuZXhwb3J0IHt0b0RvRE9NfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQge1Byb2plY3R9IGZyb20gJy4vbW9kdWxlcy9wcm9qZWN0LmpzJztcbmltcG9ydCB7dG9Eb0RPTX0gZnJvbSAnLi9tb2R1bGVzL3RvZG9ET00uanMnO1xuaW1wb3J0IHtQcm9qZWN0RE9NfSBmcm9tICcuL21vZHVsZXMvcHJvamVjdERPTS5qcyc7XG5cbmNvbnNvbGUubG9nKCdrJyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9