import {ToDo} from './modules/todo.js';
import {Project} from './modules/project.js';

const defaultProject = Project([], 'default');

const container = document.querySelector('.container');
const add = document.querySelector('div > div');
const form = document.querySelector('form');
add.addEventListener('click', () => {
    add.textContent = '';
    form.removeAttribute('hidden');
});

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => {
    if (button.textContent == 'Submit') {
        const title = form.elements['title'].value;
        const details = form.elements['details'].value;
        const dueDate = form.elements['due-date'].value;
        const priority = form.elements['priority'].value;
        const todo = ToDo(title, details, dueDate, priority);
        defaultProject.ToDos.push(todo);
        console.log(defaultProject.ToDos);
        add.textContent = '+';
        form.setAttribute('hidden', '');
}
}));

// const submit = document.querySelector("input[type='submit']");
