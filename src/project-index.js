import {Project} from './modules/project.js';
import {toDoDOM} from './modules/todoDOM.js';
import {projectDOM} from './modules/projectDOM.js';

projectDOM.showForm();

const form = document.querySelector('.project-form');
const add = document.querySelector('.project-add');

const formButtons = document.querySelectorAll('.project-button');
formButtons.forEach(button => button.addEventListener('click', () => {
    if (button.textContent == 'Submit') {
        const project = Project.addProject();
        const projectBox = projectDOM.addNew(project);
        projectBox.addEventListener('click', () => {
            const header = document.querySelector('.project-header')
            header.textContent = project.title;
        })
    }
    projectDOM.hideForm();
    add.removeAttribute('hidden');
}));