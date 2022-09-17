import {Project} from './modules/project.js';
import {toDoDOM} from './modules/todoDOM.js';
import {ProjectDOM} from './modules/projectDOM.js';

ProjectDOM.showForm();

const form = document.querySelector('.todo-form');
const add = document.querySelector('.todo-add');

const formButtons = document.querySelectorAll('button.project-button');
formButtons.forEach(button => button.addEventListener('click', () => {
    if (button.textContent == 'Submit') {
        const project = Project.addProject();
    }
}));