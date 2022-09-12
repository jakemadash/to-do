import {ToDo} from './modules/todo.js';
import {Project} from './modules/project.js';
import {toDoDOM} from './modules/todoDOM.js';

toDoDOM.showForm();

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => {
    if (button.textContent == 'Submit') {
        Project.addToDefault();
        toDoDOM.displayNew();
    }
    toDoDOM.hideForm();
}));

