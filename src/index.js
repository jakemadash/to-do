import {ToDo} from './modules/todo.js';
import {Project} from './modules/project.js';
import {toDoDOM} from './modules/todoDOM.js';

toDoDOM.showForm();

const formButtons = document.querySelectorAll('button');
formButtons.forEach(button => button.addEventListener('click', () => {
    if (button.textContent == 'Submit') {
        Project.addToDefault();
        toDoDOM.displayNew();

        const checks = document.querySelectorAll('img.check');
        checks.forEach(check => check.addEventListener('click', () => {
            Project.removeFromDefault(toDoDOM.complete(check));
    }));
    }
    toDoDOM.hideForm();
}));



