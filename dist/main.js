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
    
    const addToDefault = () => {
        defaultProject.ToDos.push(_todo_js__WEBPACK_IMPORTED_MODULE_0__.ToDo.addToDo());
        console.log(defaultProject.ToDos);
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

    return {newProject, addToDefault, addProject};
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
        const form = document.querySelector('form.todo');
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
const toDoDOM = (() => {
    const container = document.querySelector('.container');
    const add = document.querySelector('div.todo');
    const form = document.querySelector('form.todo');

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

    const displayNew = () => {
        const item = document.createElement('div');
        const title = document.createElement('h3');
        const titleContent = form.elements['title'].value;
        title.textContent = titleContent;
        item.append(title);
        container.append(item);
    }

    return {showForm, hideForm, displayNew};
})();



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/todo.js */ "./src/modules/todo.js");
/* harmony import */ var _modules_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/project.js */ "./src/modules/project.js");
/* harmony import */ var _modules_todoDOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/todoDOM.js */ "./src/modules/todoDOM.js");




_modules_todoDOM_js__WEBPACK_IMPORTED_MODULE_2__.toDoDOM.showForm();

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => {
    if (button.textContent == 'Submit') {
        _modules_project_js__WEBPACK_IMPORTED_MODULE_1__.Project.addToDefault();
        _modules_todoDOM_js__WEBPACK_IMPORTED_MODULE_2__.toDoDOM.displayNew();
    }
    _modules_todoDOM_js__WEBPACK_IMPORTED_MODULE_2__.toDoDOM.hideForm();
}));


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7O0FBRS9CO0FBQ0E7QUFDQSwwQkFBMEIsa0RBQVk7QUFDdEM7QUFDQSwrQkFBK0IsR0FBRyxNQUFNO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msa0RBQVk7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUM7Ozs7Ozs7O1VDNUJEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ051QztBQUNNO0FBQ0E7O0FBRTdDLGlFQUFnQjs7QUFFaEI7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxRUFBb0I7QUFDNUIsUUFBUSxtRUFBa0I7QUFDMUI7QUFDQSxJQUFJLGlFQUFnQjtBQUNwQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL3RvZG9ET00uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RvRG99IGZyb20gJy4vdG9kby5qcyc7XG5cbmNvbnN0IFByb2plY3QgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgICAgICBjb25zdCBwcm90b3R5cGUgPSBUb0RvLm5ld1RvRG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgICAgIGNvbnN0IFRvRG9zID0gW107XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB7VG9Eb3N9LCBwcm90b3R5cGUpO1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSB7XG4gICAgICAgIFRvRG9zOiBbXSxcbiAgICAgICAgUHJvamVjdHM6IFtdXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBhZGRUb0RlZmF1bHQgPSAoKSA9PiB7XG4gICAgICAgIGRlZmF1bHRQcm9qZWN0LlRvRG9zLnB1c2goVG9Eby5hZGRUb0RvKCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdC5Ub0Rvcyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtLnByb2plY3QnKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBmb3JtLmVsZW1lbnRzWyd0aXRsZSddLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXRhaWxzID0gZm9ybS5lbGVtZW50c1snZGV0YWlscyddLnZhbHVlO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZm9ybS5lbGVtZW50c1snZHVlLWRhdGUnXS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBmb3JtLmVsZW1lbnRzWydwcmlvcml0eSddLnZhbHVlO1xuICAgICAgICBjb25zdCB0b2RvID0gbmV3VG9Ebyh0aXRsZSwgZGV0YWlscywgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgICByZXR1cm4gdG9kbztcbiAgICB9XG5cbiAgICByZXR1cm4ge25ld1Byb2plY3QsIGFkZFRvRGVmYXVsdCwgYWRkUHJvamVjdH07XG59KSgpO1xuXG5cbmV4cG9ydCB7IFByb2plY3QgfTsiLCJjb25zdCBUb0RvID0gKCgpID0+IHtcbiAgICBjb25zdCBuZXdUb0RvID0gKHRpdGxlLCBkZXRhaWxzLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgZGV0YWlsczogZGV0YWlscyxcbiAgICAgICAgICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4gICAgICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGFkZFRvRG8gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtLnRvZG8nKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBmb3JtLmVsZW1lbnRzWyd0aXRsZSddLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXRhaWxzID0gZm9ybS5lbGVtZW50c1snZGV0YWlscyddLnZhbHVlO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZm9ybS5lbGVtZW50c1snZHVlLWRhdGUnXS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBmb3JtLmVsZW1lbnRzWydwcmlvcml0eSddLnZhbHVlO1xuICAgICAgICBjb25zdCB0b2RvID0gbmV3VG9Ebyh0aXRsZSwgZGV0YWlscywgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgICByZXR1cm4gdG9kbztcbiAgICB9OyBcblxuICAgIHJldHVybiB7bmV3VG9EbywgYWRkVG9Eb307XG59KSgpO1xuXG5leHBvcnQge1RvRG99OyIsImNvbnN0IHRvRG9ET00gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYudG9kbycpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtLnRvZG8nKTtcblxuICAgIGNvbnN0IHNob3dGb3JtID0gKCkgPT4ge1xuICAgICAgICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBhZGQudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIGZvcm0ucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgICl9O1xuXG4gICAgY29uc3QgaGlkZUZvcm0gPSAoKSA9PiB7XG4gICAgICAgIGFkZC50ZXh0Q29udGVudCA9ICcrJztcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBkaXNwbGF5TmV3ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgY29uc3QgdGl0bGVDb250ZW50ID0gZm9ybS5lbGVtZW50c1sndGl0bGUnXS52YWx1ZTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZUNvbnRlbnQ7XG4gICAgICAgIGl0ZW0uYXBwZW5kKHRpdGxlKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChpdGVtKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge3Nob3dGb3JtLCBoaWRlRm9ybSwgZGlzcGxheU5ld307XG59KSgpO1xuXG5leHBvcnQge3RvRG9ET019OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtUb0RvfSBmcm9tICcuL21vZHVsZXMvdG9kby5qcyc7XG5pbXBvcnQge1Byb2plY3R9IGZyb20gJy4vbW9kdWxlcy9wcm9qZWN0LmpzJztcbmltcG9ydCB7dG9Eb0RPTX0gZnJvbSAnLi9tb2R1bGVzL3RvZG9ET00uanMnO1xuXG50b0RvRE9NLnNob3dGb3JtKCk7XG5cbmNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcbmJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChidXR0b24udGV4dENvbnRlbnQgPT0gJ1N1Ym1pdCcpIHtcbiAgICAgICAgUHJvamVjdC5hZGRUb0RlZmF1bHQoKTtcbiAgICAgICAgdG9Eb0RPTS5kaXNwbGF5TmV3KCk7XG4gICAgfVxuICAgIHRvRG9ET00uaGlkZUZvcm0oKTtcbn0pKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9