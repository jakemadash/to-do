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

    const updateToDo = (index) => {
        const todo = defaultProject.ToDos[index];
        console.log(todo);
        const form = document.querySelector('.todo-form');
        todo.title = form.elements['title'].value;
        todo.details = form.elements['details'].value;
        todo.dueDate = form.elements['due-date'].value;
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
        const dueDate = form.elements['due-date'].value;
        const priority = form.elements['priority'].value;
        const todo = newToDo(title, details, dueDate, priority);
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
        console.log(form.elements['title'].value);
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
            form.reset();
            form.removeAttribute('hidden');
            hideToDos();
        }
    )};

    const hideForm = () => {
        add.textContent = '+';
        form.setAttribute('hidden', '');
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

    const updateToDo = () => {
        const fields = form.querySelectorAll('input');
        const values = Object.values(toDo);
        for (let i = 0; i < fields.length; i++) {
            fields[i].value = values[i];
        }
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
            formButtons[2].textContent = 'Save';
            form.removeAttribute('hidden');
            toDoBox.setAttribute('hidden', '')
            _modules_todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.hideToDos();
            _modules_todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.populateForm(toDo);
            const save = formButtons[2];
            save.addEventListener('click', () => {
                console.log(_modules_project_js__WEBPACK_IMPORTED_MODULE_0__.Project.updateToDo(index));
            }
        )});
    }
    _modules_todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.hideForm();
    formButtons[2].textContent = 'Submit';
    add.removeAttribute('hidden');
}));





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBYztBQUN0QztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsWUFBWSwwRUFBeUIsQ0FBQyxpRUFBZ0I7QUFDdEQsU0FBUztBQUNUO0FBQ0E7QUFDQSwwQkFBMEIsa0VBQWlCO0FBQzNDLHlCQUF5QixpRUFBZ0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtFQUFpQjtBQUM3QixZQUFZLHFFQUFvQjtBQUNoQztBQUNBO0FBQ0EsNEJBQTRCLG1FQUFrQjtBQUM5QztBQUNBLFVBQVU7QUFDVjtBQUNBLElBQUksaUVBQWdCO0FBQ3BCO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL3RvZG9ET00uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VG9Eb30gZnJvbSAnLi90b2RvLmpzJztcblxuY29uc3QgUHJvamVjdCA9ICgoKSA9PiB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3RvdHlwZSA9IFRvRG8ubmV3VG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICAgICAgY29uc3QgVG9Eb3MgPSBbXTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHtUb0Rvc30sIHByb3RvdHlwZSk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IHtcbiAgICAgICAgVG9Eb3M6IFtdLFxuICAgICAgICBQcm9qZWN0czogW11cbiAgICB9O1xuXG4gICAgY29uc3QgZmluZFRvRG8gPSAoaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRQcm9qZWN0LlRvRG9zW2luZGV4XTtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVUb0RvID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBkZWZhdWx0UHJvamVjdC5Ub0Rvc1tpbmRleF07XG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG8pO1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybScpO1xuICAgICAgICB0b2RvLnRpdGxlID0gZm9ybS5lbGVtZW50c1sndGl0bGUnXS52YWx1ZTtcbiAgICAgICAgdG9kby5kZXRhaWxzID0gZm9ybS5lbGVtZW50c1snZGV0YWlscyddLnZhbHVlO1xuICAgICAgICB0b2RvLmR1ZURhdGUgPSBmb3JtLmVsZW1lbnRzWydkdWUtZGF0ZSddLnZhbHVlO1xuICAgICAgICB0b2RvLnByaW9yaXR5ID0gZm9ybS5lbGVtZW50c1sncHJpb3JpdHknXS52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGFkZFRvRGVmYXVsdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9kbyA9IFRvRG8uYWRkVG9EbygpO1xuICAgICAgICBkZWZhdWx0UHJvamVjdC5Ub0Rvcy5wdXNoKHRvZG8pO1xuICAgICAgICBjb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdC5Ub0Rvcyk7XG4gICAgICAgIHJldHVybiB0b2RvO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybS5wcm9qZWN0Jyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZm9ybS5lbGVtZW50c1sndGl0bGUnXS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGV0YWlscyA9IGZvcm0uZWxlbWVudHNbJ2RldGFpbHMnXS52YWx1ZTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGZvcm0uZWxlbWVudHNbJ2R1ZS1kYXRlJ10udmFsdWU7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZm9ybS5lbGVtZW50c1sncHJpb3JpdHknXS52YWx1ZTtcbiAgICAgICAgY29uc3QgdG9kbyA9IG5ld1RvRG8odGl0bGUsIGRldGFpbHMsIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlRnJvbURlZmF1bHQgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgZGVmYXVsdFByb2plY3QuVG9Eb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgY29uc29sZS5sb2coZGVmYXVsdFByb2plY3QuVG9Eb3MpO1xuICAgIH1cblxuICAgIHJldHVybiB7bmV3UHJvamVjdCwgYWRkVG9EZWZhdWx0LCBhZGRQcm9qZWN0LCByZW1vdmVGcm9tRGVmYXVsdCwgZmluZFRvRG8sIHVwZGF0ZVRvRG99O1xufSkoKTtcblxuXG5leHBvcnQge1Byb2plY3R9OyIsImNvbnN0IFRvRG8gPSAoKCkgPT4ge1xuICAgIGNvbnN0IG5ld1RvRG8gPSAodGl0bGUsIGRldGFpbHMsIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICBkZXRhaWxzOiBkZXRhaWxzLFxuICAgICAgICAgICAgZHVlRGF0ZTogZHVlRGF0ZSxcbiAgICAgICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgY29uc3QgYWRkVG9EbyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0udG9kby1mb3JtJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm0uZWxlbWVudHNbJ3RpdGxlJ10udmFsdWUpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGZvcm0uZWxlbWVudHNbJ3RpdGxlJ10udmFsdWU7XG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBmb3JtLmVsZW1lbnRzWydkZXRhaWxzJ10udmFsdWU7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBmb3JtLmVsZW1lbnRzWydkdWUtZGF0ZSddLnZhbHVlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGZvcm0uZWxlbWVudHNbJ3ByaW9yaXR5J10udmFsdWU7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBuZXdUb0RvKHRpdGxlLCBkZXRhaWxzLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgICAgIHJldHVybiB0b2RvO1xuICAgIH07IFxuXG4gICAgcmV0dXJuIHtuZXdUb0RvLCBhZGRUb0RvfTtcbn0pKCk7XG5cbmV4cG9ydCB7VG9Eb307IiwiaW1wb3J0IGNoZWNrYm94IGZyb20gJy4uL2NoZWNrYm94LnN2Zyc7XG5pbXBvcnQgcGVuY2lsIGZyb20gJy4uL3BlbmNpbC1vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgeCBmcm9tICcuLi9jbG9zZS5zdmcnO1xuXG5jb25zdCB0b0RvRE9NID0gKCgpID0+IHtcbiAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1hZGQnKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybScpO1xuXG4gICAgY29uc3QgVG9Eb3MgPSBbXTtcblxuICAgIGNvbnN0IGhpZGVUb0RvcyA9ICgpID0+IHtcbiAgICAgICAgVG9Eb3MuZm9yRWFjaChUb0RvID0+IFRvRG8uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJykpO1xuICAgIH1cblxuICAgIGNvbnN0IHNob3dUb0RvcyA9ICgpID0+IHtcbiAgICAgICAgVG9Eb3MuZm9yRWFjaChUb0RvID0+IFRvRG8ucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0Zvcm0gPSAoKSA9PiB7XG4gICAgICAgIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGFkZC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgZm9ybS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgaGlkZVRvRG9zKCk7XG4gICAgICAgIH1cbiAgICApfTtcblxuICAgIGNvbnN0IGhpZGVGb3JtID0gKCkgPT4ge1xuICAgICAgICBhZGQudGV4dENvbnRlbnQgPSAnKyc7XG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG4gICAgICAgIHNob3dUb0RvcygpO1xuICAgIH07XG5cbiAgICBjb25zdCBwcmlvcml0eUNvbG9yID0gKHRvZG8sIGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKHRvZG8ucHJpb3JpdHkgPT0gMSkge1xuICAgICAgICAgICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmY2NjYyc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodG9kby5wcmlvcml0eSA9PSAyKSB7XG4gICAgICAgICAgICBpdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmZmNjJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0b2RvLnByaW9yaXR5ID09IDMpIHtcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNjY2ZmY2MnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZE5ldyA9ICh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCcpO1xuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgndG9kbycpO1xuICAgICAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjaGVjay5zZXRBdHRyaWJ1dGUoJ3NyYycsIGNoZWNrYm94KTtcbiAgICAgICAgY2hlY2suc2V0QXR0cmlidXRlKCdhbHQnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgY2hlY2suY2xhc3NMaXN0LmFkZCgnY2hlY2snKTtcbiAgICAgICAgY2hlY2suY2xhc3NMaXN0LmFkZCgncmVtb3ZlJyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICAgICAgY29uc3QgdGl0bGVDb250ZW50ID0gdG9kby50aXRsZTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZUNvbnRlbnQ7XG4gICAgICAgIHByaW9yaXR5Q29sb3IodG9kbywgaXRlbSk7XG4gICAgICAgIHRvZG9MaXN0LmFwcGVuZChpdGVtKTtcbiAgICAgICAgaXRlbS5hcHBlbmQoY2hlY2ssIHRpdGxlKTtcbiAgICAgICAgVG9Eb3MucHVzaChpdGVtKTtcbiAgICAgICAgYWRkRGV0YWlscyhpdGVtLCB0b2RvKTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlVG9EbyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZmllbGRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKHRvRG8pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZmllbGRzW2ldLnZhbHVlID0gdmFsdWVzW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWRkRGV0YWlscyA9IChpdGVtLCB0b0RvKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGVkaXQuc2V0QXR0cmlidXRlKCdzcmMnLCBwZW5jaWwpO1xuICAgICAgICBlZGl0LnNldEF0dHJpYnV0ZSgnYWx0JywgJ2VkaXQnKTtcbiAgICAgICAgZWRpdC5jbGFzc0xpc3QuYWRkKCdlZGl0Jyk7XG4gICAgICAgIHJlbW92ZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHgpO1xuICAgICAgICByZW1vdmUuc2V0QXR0cmlidXRlKCdhbHQnLCAncmVtb3ZlJyk7XG4gICAgICAgIHJlbW92ZS5jbGFzc0xpc3QuYWRkKCdyZW1vdmUnKTtcbiAgICAgICAgZGV0YWlscy50ZXh0Q29udGVudCA9IGBEZXRhaWxzOiAke3RvRG8uZGV0YWlsc31gO1xuICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gYER1ZSBEYXRlOiAke3RvRG8uZHVlRGF0ZX1gO1xuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHt0b0RvLnByaW9yaXR5fWA7XG4gICAgICAgIGl0ZW0uYXBwZW5kKGNvbnRhaW5lcik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoZGV0YWlscywgZHVlRGF0ZSwgcHJpb3JpdHksIGVkaXQsIHJlbW92ZSk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzLWNvbnRhaW5lcicpO1xuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheURldGFpbHMgPSAoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzLWNvbnRhaW5lcicpO1xuICAgICAgICBpZiAoY29udGFpbmVyLmdldEF0dHJpYnV0ZSgnaGlkZGVuJykgPT0gJycpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2hpZGRlbicpID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGZpbmRJbmRleCA9ICh0b0RvKSA9PiB7XG4gICAgICAgbGV0IGluZGV4ID0gVG9Eb3MuZmluZEluZGV4KChlbGVtZW50KSA9PiBlbGVtZW50LmlubmVyVGV4dCA9PSB0b0RvLmlubmVyVGV4dCk7XG4gICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xuICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZSA9IChyZW1vdmUpID0+IHtcbiAgICAgICAgbGV0IGluZGV4ID0gJyc7XG4gICAgICAgIGlmIChyZW1vdmUuZ2V0QXR0cmlidXRlKCdhbHQnKSA9PSAncmVtb3ZlJykge1xuICAgICAgICAgICAgaW5kZXggPSBUb0Rvcy5maW5kSW5kZXgoKGVsZW1lbnQpID0+IGVsZW1lbnQuaW5uZXJUZXh0ID09IHJlbW92ZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaW5uZXJUZXh0KTtcbiAgICAgICAgICAgIHJlbW92ZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmVtb3ZlLmdldEF0dHJpYnV0ZSgnYWx0JykgPT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgaW5kZXggPSBUb0Rvcy5maW5kSW5kZXgoKGVsZW1lbnQpID0+IGVsZW1lbnQuaW5uZXJUZXh0ID09IHJlbW92ZS5wYXJlbnRFbGVtZW50LmlubmVyVGV4dCk7XG4gICAgICAgICAgICByZW1vdmUucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaW5kZXggPSBUb0Rvcy5maW5kSW5kZXgoKGVsZW1lbnQpID0+IGVsZW1lbnQuaW5uZXJUZXh0ID09IHJlbW92ZS5pbm5lclRleHQpO1xuICAgICAgICAgICAgcmVtb3ZlLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIFRvRG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG5cbiAgICBjb25zdCBwb3B1bGF0ZUZvcm0gPSAodG9EbykgPT4ge1xuICAgICAgICBmb3JtLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyh0b0RvKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZpZWxkc1tpXS52YWx1ZSA9IHZhbHVlc1tpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7c2hvd0Zvcm0sIGhpZGVGb3JtLCBhZGROZXcsIGNvbXBsZXRlLCBkaXNwbGF5RGV0YWlscywgcG9wdWxhdGVGb3JtLCBmaW5kSW5kZXgsIHNob3dUb0RvcywgaGlkZVRvRG9zLCBUb0Rvc307XG59KSgpO1xuXG5leHBvcnQge3RvRG9ET019OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7UHJvamVjdH0gZnJvbSAnLi9tb2R1bGVzL3Byb2plY3QuanMnO1xuaW1wb3J0IHt0b0RvRE9NfSBmcm9tICcuL21vZHVsZXMvdG9kb0RPTS5qcyc7XG5cbnRvRG9ET00uc2hvd0Zvcm0oKTtcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0nKTtcbmNvbnN0IGFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWFkZCcpO1xuXG5jb25zdCBmb3JtQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuZm9ybUJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChidXR0b24udGV4dENvbnRlbnQgPT0gJ1N1Ym1pdCcpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3BvcCcpO1xuICAgICAgICBjb25zdCB0b0RvID0gUHJvamVjdC5hZGRUb0RlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgdG9Eb0JveCA9IHRvRG9ET00uYWRkTmV3KHRvRG8pO1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0b0RvQm94LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzLWNvbnRhaW5lcicpO1xuICAgICAgICB0b0RvQm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICB9KTtcbiAgICAgICAgdG9Eb0JveC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHJlbW92YWxzID0gdG9Eb0JveC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlJyk7XG4gICAgICAgIHJlbW92YWxzLmZvckVhY2gocmVtb3ZlID0+IHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIFByb2plY3QucmVtb3ZlRnJvbURlZmF1bHQodG9Eb0RPTS5jb21wbGV0ZShyZW1vdmUpKTtcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCBlZGl0ID0gdG9Eb0JveC5xdWVyeVNlbGVjdG9yKCcuZWRpdCcpO1xuICAgICAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0b0RvRE9NLmZpbmRJbmRleCh0b0RvQm94KTtcbiAgICAgICAgICAgIGNvbnN0IHRvRG8gPSBQcm9qZWN0LmZpbmRUb0RvKGluZGV4KTtcbiAgICAgICAgICAgIGFkZC5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcbiAgICAgICAgICAgIGZvcm1CdXR0b25zWzJdLnRleHRDb250ZW50ID0gJ1NhdmUnO1xuICAgICAgICAgICAgZm9ybS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgdG9Eb0JveC5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKVxuICAgICAgICAgICAgdG9Eb0RPTS5oaWRlVG9Eb3MoKTtcbiAgICAgICAgICAgIHRvRG9ET00ucG9wdWxhdGVGb3JtKHRvRG8pO1xuICAgICAgICAgICAgY29uc3Qgc2F2ZSA9IGZvcm1CdXR0b25zWzJdO1xuICAgICAgICAgICAgc2F2ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhQcm9qZWN0LnVwZGF0ZVRvRG8oaW5kZXgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKX0pO1xuICAgIH1cbiAgICB0b0RvRE9NLmhpZGVGb3JtKCk7XG4gICAgZm9ybUJ1dHRvbnNbMl0udGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICBhZGQucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbn0pKTtcblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9