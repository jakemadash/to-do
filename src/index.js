import {Project} from './modules/project.js';
import {toDoDOM} from './modules/todoDOM.js';

toDoDOM.showForm();

const form = document.querySelector('.todo-form');
const add = document.querySelector('.todo-add');

const formButtons = document.querySelectorAll('button');
formButtons.forEach(button => button.addEventListener('click', () => {
    if (button.textContent == 'Save') {
        const toDo = Project.addToDefault();
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
            Project.removeFromDefault(toDoDOM.complete(remove));
        }));
        const edit = toDoBox.querySelector('.edit');
        edit.addEventListener('click', () => {
            const index = toDoDOM.findIndex(toDoBox);
            const toDo = Project.findToDo(index);
            add.setAttribute('hidden', '');
            form.removeAttribute('hidden');
            formButtons[3].setAttribute('hidden', '');
            toDoBox.setAttribute('hidden', '')
            toDoDOM.hideToDos();
            toDoDOM.populateForm(toDo);
            Project.removeFromDefault(toDoDOM.complete(toDoBox));
            formButtons[2].addEventListener('click', () => {
                toDoDOM.showToDos();
                console.log('ok');
            }
        )});
    }
    toDoDOM.hideForm();
    formButtons[1].removeAttribute('hidden');
    add.removeAttribute('hidden');
}));




