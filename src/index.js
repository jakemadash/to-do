import {Project} from './modules/project.js';
import {toDoDOM} from './modules/todoDOM.js';

toDoDOM.showForm();

const form = document.querySelector('.todo-form');
const add = document.querySelector('.todo-add');

const formButtons = document.querySelectorAll('button.button');
formButtons.forEach(button => button.addEventListener('click', () => {
    if (button.textContent == 'Submit') {
        const currentProject = Project.findProject();
        const toDo = Project.addToDo(currentProject);
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
            Project.remove(currentProject, toDoDOM.complete(remove));
        }));
        const edit = toDoBox.querySelector('.edit');
        edit.addEventListener('click', () => {
            const index = toDoDOM.findIndex(toDoBox);
            const toDo = Project.findToDo(currentProject, index);
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
            }
        )}
    toDoDOM.hideForm();
    add.removeAttribute('hidden');
    }));




