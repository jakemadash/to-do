import checkbox from '../checkbox.svg';

const toDoDOM = (() => {
    const container = document.querySelector('.container');
    const add = document.querySelector('div.todo-add');
    const form = document.querySelector('form.todo-form');

    const showForm = () => {
        add.addEventListener('click', () => {
            add.textContent = '';
            form.removeAttribute('hidden');
        }
    )};

    const hideForm = () => {
        add.textContent = '+';
        form.setAttribute('hidden', '');
        form.reset();
    };

    const ToDos = [];

    const displayNew = () => {
        const todoList = document.querySelector('.todo-list');
        const item = document.createElement('div');
        item.classList.add('todo');
        const check = document.createElement('img');
        check.setAttribute('src', checkbox);
        check.setAttribute('alt', 'checkbox');
        check.classList.add('check');
        const title = document.createElement('h5');
        const titleContent = form.elements['title'].value;
        title.textContent = titleContent;
        todoList.append(item);
        item.append(check);
        item.append(title);
        ToDos.push(item);
    }

    const complete = (check) => {
        const index = ToDos.findIndex((element) => element.innerText == check.parentElement.innerText);
        check.parentElement.remove();
        return index;
    }

    return {showForm, hideForm, displayNew, complete};
})();

export {toDoDOM};