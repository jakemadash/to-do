import {ToDo} from './modules/todo.js';
import {Project} from './modules/project.js';
import {DOM} from './modules/dom.js';

DOM.showToDoForm();

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => {
    DOM.hideToDoForm();
    if (button.textContent == 'Submit') {
        Project.addToProject();
    }
}));

