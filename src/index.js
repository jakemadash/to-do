import {ToDo} from './modules/todo.js';
import {Project} from './modules/project.js';
import {toDoDOM} from './modules/todoDOM.js';

toDoDOM.showForm();

const formButtons = document.querySelectorAll('button');
formButtons.forEach(button => button.addEventListener('click', () => {
    if (button.textContent == 'Submit') {
        toDoDOM.displayNew(Project.addToDefault());

        const checks = document.querySelectorAll('img.check');
        checks.forEach(check => check.addEventListener('click', () => {
            Project.removeFromDefault(toDoDOM.complete(check));
    }));

        const items = document.querySelectorAll('.todo');
        items.forEach(item => item.addEventListener('click', () => {
            const index = toDoDOM.ToDos.findIndex((element) => element.innerText == item.innerText);
            const toDo = Project.findToDo(index);
            toDoDOM.displayDetails(item, toDo);
        }));
    }
    toDoDOM.hideForm();
}));



