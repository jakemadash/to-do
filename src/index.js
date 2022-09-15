import {Project} from './modules/project.js';
import {toDoDOM} from './modules/todoDOM.js';

toDoDOM.showForm();

const form = document.querySelector('.todo-form');

const formButtons = document.querySelectorAll('button');
formButtons.forEach(button => button.addEventListener('click', () => {
    if (button.textContent == 'Submit') {
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
            form.removeAttribute('hidden');
            toDoBox.setAttribute('hidden', '')
            toDoDOM.populateForm(toDo);
            formButtons.forEach(button => button.addEventListener('click', () => {
                if (button.textContent == 'Submit') {
                    toDoDOM.complete(toDoBox);
                }
                else {
                    form.reset();
                    toDoBox.removeAttribute('hidden');
                }
            }
        ))});
    }
    toDoDOM.hideForm();
}));




