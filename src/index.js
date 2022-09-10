import ToDo from './modules/todo.js';
import Project from './modules/project.js';

const container = document.querySelector('.container');
const add = document.querySelector('div > div');
const form = document.querySelector('form');
add.addEventListener('click', () => {
    add.textContent = '';
    form.removeAttribute('hidden');
});