import {Project} from './modules/project.js';
import {toDoDOM} from './modules/todoDOM.js';

toDoDOM.showForm();

const formButtons = document.querySelectorAll('button');
formButtons.forEach(button => button.addEventListener('click', () => {
    if (button.textContent == 'Submit') {
        toDoDOM.addNew(Project.addToDefault());

        const checks = document.querySelectorAll('img.check');
        checks.forEach(check => check.addEventListener('click', () => {
            Project.removeFromDefault(toDoDOM.complete(check));
    }));

        const items = document.querySelectorAll('.todo');
        items.forEach(item => item.addEventListener('click', () => {
            toDoDOM.displayDetails(item);
        }));
    }
    toDoDOM.hideForm();
}));



