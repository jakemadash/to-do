import {Project} from './modules/project.js';
import {toDoDOM} from './modules/todoDOM.js';
import {projectIndex} from './modules/project-index.js';

toDoDOM.showForm();
projectIndex.projectListeners();

const add = document.querySelector('.todo-add');

const formButtons = document.querySelectorAll('button.button');
formButtons.forEach(button => button.addEventListener('click', () => {
    if (button.textContent == 'Submit') {
        const currentProject = Project.findProject();
        const toDo = Project.addToDo(currentProject);
        console.log(currentProject.ToDos);
        projectIndex.populateToDos(toDo);
    }
    toDoDOM.hideForm();
    add.removeAttribute('hidden');
    }));




