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

    return {showForm, hideForm, addNew, complete, displayDetails, populateForm, findIndex, ToDos};
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

const formButtons = document.querySelectorAll('button');
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
            form.removeAttribute('hidden');
            toDoBox.setAttribute('hidden', '')
            _modules_todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.populateForm(toDo);
            formButtons.forEach(button => button.addEventListener('click', () => {
                if (button.textContent == 'Submit') {
                    _modules_todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.complete(toDoBox);
                }
                else {
                    form.reset();
                    toDoBox.removeAttribute('hidden');
                }
            }
        ))});
    }
    _modules_todoDOM_js__WEBPACK_IMPORTED_MODULE_1__.toDoDOM.hideForm();
}));





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxxRUFBb0I7QUFDaEM7QUFDQTtBQUNBLG9CQUFvQixpRUFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsSUFBSSxpRUFBZ0I7QUFDcEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy90b2RvRE9NLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RvRG99IGZyb20gJy4vdG9kby5qcyc7XG5cbmNvbnN0IFByb2plY3QgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgICAgICBjb25zdCBwcm90b3R5cGUgPSBUb0RvLm5ld1RvRG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgICAgIGNvbnN0IFRvRG9zID0gW107XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB7VG9Eb3N9LCBwcm90b3R5cGUpO1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSB7XG4gICAgICAgIFRvRG9zOiBbXSxcbiAgICAgICAgUHJvamVjdHM6IFtdXG4gICAgfTtcblxuICAgIGNvbnN0IGZpbmRUb0RvID0gKGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0UHJvamVjdC5Ub0Rvc1tpbmRleF07XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGFkZFRvRGVmYXVsdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9kbyA9IFRvRG8uYWRkVG9EbygpO1xuICAgICAgICBkZWZhdWx0UHJvamVjdC5Ub0Rvcy5wdXNoKHRvZG8pO1xuICAgICAgICBjb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdC5Ub0Rvcyk7XG4gICAgICAgIHJldHVybiB0b2RvO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybS5wcm9qZWN0Jyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZm9ybS5lbGVtZW50c1sndGl0bGUnXS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGV0YWlscyA9IGZvcm0uZWxlbWVudHNbJ2RldGFpbHMnXS52YWx1ZTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGZvcm0uZWxlbWVudHNbJ2R1ZS1kYXRlJ10udmFsdWU7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZm9ybS5lbGVtZW50c1sncHJpb3JpdHknXS52YWx1ZTtcbiAgICAgICAgY29uc3QgdG9kbyA9IG5ld1RvRG8odGl0bGUsIGRldGFpbHMsIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlRnJvbURlZmF1bHQgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgZGVmYXVsdFByb2plY3QuVG9Eb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgY29uc29sZS5sb2coZGVmYXVsdFByb2plY3QuVG9Eb3NbMV0pO1xuICAgIH1cblxuICAgIHJldHVybiB7bmV3UHJvamVjdCwgYWRkVG9EZWZhdWx0LCBhZGRQcm9qZWN0LCByZW1vdmVGcm9tRGVmYXVsdCwgZmluZFRvRG99O1xufSkoKTtcblxuXG5leHBvcnQge1Byb2plY3R9OyIsImNvbnN0IFRvRG8gPSAoKCkgPT4ge1xuICAgIGNvbnN0IG5ld1RvRG8gPSAodGl0bGUsIGRldGFpbHMsIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICBkZXRhaWxzOiBkZXRhaWxzLFxuICAgICAgICAgICAgZHVlRGF0ZTogZHVlRGF0ZSxcbiAgICAgICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgY29uc3QgYWRkVG9EbyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0udG9kby1mb3JtJyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZm9ybS5lbGVtZW50c1sndGl0bGUnXS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGV0YWlscyA9IGZvcm0uZWxlbWVudHNbJ2RldGFpbHMnXS52YWx1ZTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGZvcm0uZWxlbWVudHNbJ2R1ZS1kYXRlJ10udmFsdWU7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZm9ybS5lbGVtZW50c1sncHJpb3JpdHknXS52YWx1ZTtcbiAgICAgICAgY29uc3QgdG9kbyA9IG5ld1RvRG8odGl0bGUsIGRldGFpbHMsIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgfTsgXG5cbiAgICByZXR1cm4ge25ld1RvRG8sIGFkZFRvRG99O1xufSkoKTtcblxuZXhwb3J0IHtUb0RvfTsiLCJpbXBvcnQgY2hlY2tib3ggZnJvbSAnLi4vY2hlY2tib3guc3ZnJztcbmltcG9ydCBwZW5jaWwgZnJvbSAnLi4vcGVuY2lsLW91dGxpbmUuc3ZnJztcbmltcG9ydCB4IGZyb20gJy4uL2Nsb3NlLnN2Zyc7XG5cbmNvbnN0IHRvRG9ET00gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWFkZCcpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtJyk7XG5cbiAgICBjb25zdCBzaG93Rm9ybSA9ICgpID0+IHtcbiAgICAgICAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgYWRkLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICBmb3JtLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICApfTtcblxuICAgIGNvbnN0IGhpZGVGb3JtID0gKCkgPT4ge1xuICAgICAgICBhZGQudGV4dENvbnRlbnQgPSAnKyc7XG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG4gICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgVG9Eb3MgPSBbXTtcblxuICAgIGNvbnN0IHByaW9yaXR5Q29sb3IgPSAodG9kbywgaXRlbSkgPT4ge1xuICAgICAgICBpZiAodG9kby5wcmlvcml0eSA9PSAxKSB7XG4gICAgICAgICAgICBpdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZjY2NjJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0b2RvLnByaW9yaXR5ID09IDIpIHtcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmZmY2MnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRvZG8ucHJpb3JpdHkgPT0gMykge1xuICAgICAgICAgICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2NjZmZjYyc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkTmV3ID0gKHRvZG8pID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0Jyk7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XG4gICAgICAgIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNoZWNrLnNldEF0dHJpYnV0ZSgnc3JjJywgY2hlY2tib3gpO1xuICAgICAgICBjaGVjay5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdjaGVja2JveCcpO1xuICAgICAgICBjaGVjay5jbGFzc0xpc3QuYWRkKCdjaGVjaycpO1xuICAgICAgICBjaGVjay5jbGFzc0xpc3QuYWRkKCdyZW1vdmUnKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICAgICAgICBjb25zdCB0aXRsZUNvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRpdGxlQ29udGVudDtcbiAgICAgICAgcHJpb3JpdHlDb2xvcih0b2RvLCBpdGVtKTtcbiAgICAgICAgdG9kb0xpc3QuYXBwZW5kKGl0ZW0pO1xuICAgICAgICBpdGVtLmFwcGVuZChjaGVjaywgdGl0bGUpO1xuICAgICAgICBUb0Rvcy5wdXNoKGl0ZW0pO1xuICAgICAgICBhZGREZXRhaWxzKGl0ZW0sIHRvZG8pO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGREZXRhaWxzID0gKGl0ZW0sIHRvRG8pID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZWRpdC5zZXRBdHRyaWJ1dGUoJ3NyYycsIHBlbmNpbCk7XG4gICAgICAgIGVkaXQuc2V0QXR0cmlidXRlKCdhbHQnLCAnZWRpdCcpO1xuICAgICAgICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgICAgICAgcmVtb3ZlLnNldEF0dHJpYnV0ZSgnc3JjJywgeCk7XG4gICAgICAgIHJlbW92ZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdyZW1vdmUnKTtcbiAgICAgICAgcmVtb3ZlLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZScpO1xuICAgICAgICBkZXRhaWxzLnRleHRDb250ZW50ID0gYERldGFpbHM6ICR7dG9Eby5kZXRhaWxzfWA7XG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBgRHVlIERhdGU6ICR7dG9Eby5kdWVEYXRlfWA7XG4gICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3RvRG8ucHJpb3JpdHl9YDtcbiAgICAgICAgaXRlbS5hcHBlbmQoY29udGFpbmVyKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChkZXRhaWxzLCBkdWVEYXRlLCBwcmlvcml0eSwgZWRpdCwgcmVtb3ZlKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5RGV0YWlscyA9IChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmRldGFpbHMtY29udGFpbmVyJyk7XG4gICAgICAgIGlmIChjb250YWluZXIuZ2V0QXR0cmlidXRlKCdoaWRkZW4nKSA9PSAnJykge1xuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29udGFpbmVyLmdldEF0dHJpYnV0ZSgnaGlkZGVuJykgPT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZmluZEluZGV4ID0gKHRvRG8pID0+IHtcbiAgICAgICBsZXQgaW5kZXggPSBUb0Rvcy5maW5kSW5kZXgoKGVsZW1lbnQpID0+IGVsZW1lbnQuaW5uZXJUZXh0ID09IHRvRG8uaW5uZXJUZXh0KTtcbiAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAocmVtb3ZlKSA9PiB7XG4gICAgICAgIGxldCBpbmRleCA9ICcnO1xuICAgICAgICBpZiAocmVtb3ZlLmdldEF0dHJpYnV0ZSgnYWx0JykgPT0gJ3JlbW92ZScpIHtcbiAgICAgICAgICAgIGluZGV4ID0gVG9Eb3MuZmluZEluZGV4KChlbGVtZW50KSA9PiBlbGVtZW50LmlubmVyVGV4dCA9PSByZW1vdmUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlubmVyVGV4dCk7XG4gICAgICAgICAgICByZW1vdmUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJlbW92ZS5nZXRBdHRyaWJ1dGUoJ2FsdCcpID09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgIGluZGV4ID0gVG9Eb3MuZmluZEluZGV4KChlbGVtZW50KSA9PiBlbGVtZW50LmlubmVyVGV4dCA9PSByZW1vdmUucGFyZW50RWxlbWVudC5pbm5lclRleHQpO1xuICAgICAgICAgICAgcmVtb3ZlLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gVG9Eb3MuZmluZEluZGV4KChlbGVtZW50KSA9PiBlbGVtZW50LmlubmVyVGV4dCA9PSByZW1vdmUuaW5uZXJUZXh0KTtcbiAgICAgICAgICAgIHJlbW92ZS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuXG4gICAgY29uc3QgcG9wdWxhdGVGb3JtID0gKHRvRG8pID0+IHtcbiAgICAgICAgZm9ybS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICBjb25zdCBmaWVsZHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXModG9Ebyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmaWVsZHNbaV0udmFsdWUgPSB2YWx1ZXNbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge3Nob3dGb3JtLCBoaWRlRm9ybSwgYWRkTmV3LCBjb21wbGV0ZSwgZGlzcGxheURldGFpbHMsIHBvcHVsYXRlRm9ybSwgZmluZEluZGV4LCBUb0Rvc307XG59KSgpO1xuXG5leHBvcnQge3RvRG9ET019OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7UHJvamVjdH0gZnJvbSAnLi9tb2R1bGVzL3Byb2plY3QuanMnO1xuaW1wb3J0IHt0b0RvRE9NfSBmcm9tICcuL21vZHVsZXMvdG9kb0RPTS5qcyc7XG5cbnRvRG9ET00uc2hvd0Zvcm0oKTtcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0nKTtcblxuY29uc3QgZm9ybUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcbmZvcm1CdXR0b25zLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoYnV0dG9uLnRleHRDb250ZW50ID09ICdTdWJtaXQnKSB7XG4gICAgICAgIGNvbnN0IHRvRG8gPSBQcm9qZWN0LmFkZFRvRGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB0b0RvQm94ID0gdG9Eb0RPTS5hZGROZXcodG9Ebyk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRvRG9Cb3gucXVlcnlTZWxlY3RvcignLmRldGFpbHMtY29udGFpbmVyJyk7XG4gICAgICAgIHRvRG9Cb3guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0b0RvQm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcmVtb3ZhbHMgPSB0b0RvQm94LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmUnKTtcbiAgICAgICAgcmVtb3ZhbHMuZm9yRWFjaChyZW1vdmUgPT4gcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgUHJvamVjdC5yZW1vdmVGcm9tRGVmYXVsdCh0b0RvRE9NLmNvbXBsZXRlKHJlbW92ZSkpO1xuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IGVkaXQgPSB0b0RvQm94LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Jyk7XG4gICAgICAgIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRvRG9ET00uZmluZEluZGV4KHRvRG9Cb3gpO1xuICAgICAgICAgICAgY29uc3QgdG9EbyA9IFByb2plY3QuZmluZFRvRG8oaW5kZXgpO1xuICAgICAgICAgICAgZm9ybS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgdG9Eb0JveC5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKVxuICAgICAgICAgICAgdG9Eb0RPTS5wb3B1bGF0ZUZvcm0odG9Ebyk7XG4gICAgICAgICAgICBmb3JtQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGJ1dHRvbi50ZXh0Q29udGVudCA9PSAnU3VibWl0Jykge1xuICAgICAgICAgICAgICAgICAgICB0b0RvRE9NLmNvbXBsZXRlKHRvRG9Cb3gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICB0b0RvQm94LnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApKX0pO1xuICAgIH1cbiAgICB0b0RvRE9NLmhpZGVGb3JtKCk7XG59KSk7XG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==