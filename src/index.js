import {Project} from './modules/project.js';
import {toDoDOM} from './modules/todoDOM.js';

toDoDOM.showForm();

const formButtons = document.querySelectorAll('button');
formButtons.forEach(button => button.addEventListener('click', () => {
    if (button.textContent == 'Submit') {
        const toDo = Project.addToDefault();
        const toDoBox = toDoDOM.addNew(toDo);
        toDoBox.addEventListener('click', () => {
            toDoDOM.displayDetails(toDoBox);
        });
        const removals = toDoBox.querySelectorAll('.remove');
        removals.forEach(remove => remove.addEventListener('click', () => {
            Project.removeFromDefault(toDoDOM.complete(remove));
        }));
    }
    toDoDOM.hideForm();
}));




