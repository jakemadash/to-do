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

    const displayNew = () => {
        const item = document.createElement('div');
        item.classList.add('todo');
        const check = document.createElement('img');
        check.setAttribute('src', checkbox);
        check.setAttribute('alt', 'checkbox');
        const title = document.createElement('h3');
        const titleContent = form.elements['title'].value;
        title.textContent = titleContent;
        item.append(check);
        item.append(title);
        container.append(item);
    }

    return {showForm, hideForm, displayNew};
})();

export {toDoDOM};