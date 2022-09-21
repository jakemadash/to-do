import {Project} from './project.js';
import {toDoDOM} from './todoDOM.js';
import {projectDOM} from './projectDOM.js';

const projectIndex = (() => {

    const populateToDos = (toDo) => {
        const currentProject = Project.findProject();
        const add = document.querySelector('.todo-add');
        const formButtons = document.querySelectorAll('button.button');
        const form = document.querySelector('.todo-form');

        const toDoBox = toDoDOM.addNew(toDo);
        const container = toDoBox.querySelector('.details-container');
        toDoBox.addEventListener('mouseover', () => {
            container.removeAttribute('hidden');
        });
        toDoBox.addEventListener('mouseout', () => {
            container.setAttribute('hidden', '');
        });
        const removals = toDoBox.querySelectorAll('.remove');
        removals.forEach(remove => remove.addEventListener('click', () => {
            Project.removeToDo(currentProject, toDoDOM.complete(remove));
        }));
        const edit = toDoBox.querySelector('.edit');
        edit.addEventListener('click', () => {
            const index = toDoDOM.findIndex(toDoBox);
            const toDo = Project.findToDo(currentProject, index);
            console.log(index, currentProject, toDo);
            add.setAttribute('hidden', '');
            const save = document.querySelector('button[hidden]')
            save.removeAttribute('hidden')
            formButtons[0].setAttribute('hidden', '');
            form.removeAttribute('hidden');
            toDoBox.setAttribute('hidden', '')
            toDoDOM.hideToDos();
            toDoDOM.populateForm(toDo);
            save.addEventListener('click', () => {
                Project.updateToDo(currentProject, index);
                toDoDOM.updateToDo(toDo, toDoBox);
                toDoDOM.hideForm();
                add.removeAttribute('hidden');
                save.setAttribute('hidden', '');
                formButtons[0].removeAttribute('hidden');
                }, {once : true});
            });
            }

    const populateProjects = (project) => {
        const header = document.querySelector('.project-header');
        const projectBox = projectDOM.addNew(project);
        const projectContainer = projectBox.parentElement;
        projectBox.addEventListener('click', () => {
            toDoDOM.hideForm();
            header.textContent = project.title;
            const dueDate = document.querySelector('.project-due');
            if (project.due != undefined) {
                dueDate.textContent = `Due: ${project.due}`;
                dueDate.removeAttribute('hidden');
            }
            const toDos = document.querySelectorAll('.todo');
            toDos.forEach((toDo) => {
                toDoDOM.complete(toDo);
            });
            const currentProject = Project.findProject();
            const ToDos = Project.getToDos(currentProject);
            console.log(ToDos);
            ToDos.forEach(ToDo => populateToDos(ToDo));
            });
            const removal = projectContainer.querySelector('h5 + img');
            removal.addEventListener('click', () => {
                const index = Project.findIndex(project);
                Project.removeProject(index);
                projectDOM.complete(projectContainer, index);
                const toDos = document.querySelectorAll('.todo');
                toDos.forEach((toDo) => {
                    toDoDOM.complete(toDo);
                });
            });
    }

    const projectListeners = () => {
        projectDOM.showForm();

        const header = document.querySelector('.project-header');
        const defaultProject = document.querySelector('#main');

        defaultProject.addEventListener('click', () => {
            toDoDOM.hideForm();
            header.textContent = 'Main';
            const dueDate = document.querySelector('h5.project-header');
            dueDate.setAttribute('hidden', '');
            const currentProject = Project.findProject();
            console.log(currentProject.ToDos);
            const toDos = document.querySelectorAll('.todo');
            toDos.forEach((toDo) => {
                toDoDOM.complete(toDo);
            });
            currentProject.ToDos.forEach(ToDo => populateToDos(ToDo));
        });

        const add = document.querySelector('.project-add');

        const formButtons = document.querySelectorAll('.project-button');
        formButtons.forEach(button => button.addEventListener('click', () => {
            if (button.textContent == 'Submit') {
                const project = Project.addProject();
                populateProjects(project);
            }
            projectDOM.hideForm();
            add.removeAttribute('hidden');
        }));
        }

    return {projectListeners, populateToDos, populateProjects};
})();

export {projectIndex};