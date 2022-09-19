import {Project} from './project.js';
import {toDoDOM} from './todoDOM.js';
import {projectDOM} from './projectDOM.js';

const projectIndex = (() => {

    const projectListeners = () => {
        projectDOM.showForm();

        const header = document.querySelector('.project-header');
        const defaultProject = document.querySelector('#main');

        defaultProject.addEventListener('click', () => {
            toDoDOM.hideForm();
            header.textContent = 'Main';
            const currentProject = Project.findProject();
            console.log(currentProject.ToDos);
            const toDos = document.querySelectorAll('.todo');
            toDos.forEach(toDo => toDo.remove());
            currentProject.ToDos.forEach(ToDo => toDoDOM.addNew(ToDo));
        });

        const add = document.querySelector('.project-add');

        const formButtons = document.querySelectorAll('.project-button');
        formButtons.forEach(button => button.addEventListener('click', () => {
            if (button.textContent == 'Submit') {
                const project = Project.addProject();
                const projectBox = projectDOM.addNew(project);
                projectBox.addEventListener('click', () => {
                    toDoDOM.hideForm();
                    header.textContent = project.title;
                    const toDos = document.querySelectorAll('.todo');
                    toDos.forEach(toDo => toDo.remove());
                    const currentProject = Project.findProject();
                    const ToDos = Project.getToDos(currentProject);
                    console.log(ToDos);
                    ToDos.forEach(ToDo => toDoDOM.addNew(ToDo));
                });
            }
            projectDOM.hideForm();
            add.removeAttribute('hidden');
        }));
        }

    return {projectListeners};
})();

export {projectIndex};