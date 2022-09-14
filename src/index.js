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
        const check = toDoBox.querySelector('img.check');
        check.addEventListener('click', () => {
            Project.removeFromDefault(toDoDOM.complete(check));
        });
    }
    toDoDOM.hideForm();
}));

// const items = document.querySelectorAll('.todo');
// items.forEach(item => item.addEventListener('click', () => {
//     toDoDOM.displayDetails(item);
// }));

// const checks = document.querySelectorAll('img.check');
// checks.forEach(check => check.addEventListener('click', () => {
//     Project.removeFromDefault(toDoDOM.complete(check));
// }));



