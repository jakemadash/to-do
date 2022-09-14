import checkbox from '../checkbox.svg';

const toDoDOM = (() => {
    const add = document.querySelector('.todo-add');
    const form = document.querySelector('.todo-form');

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

    const priorityColor = (todo, item) => {
        if (todo.priority == 1) {
            item.style.backgroundColor = '#ffcccc';
        }
        else if (todo.priority == 2) {
            item.style.backgroundColor = '#ffffcc';
        }
        else if (todo.priority == 3) {
            item.style.backgroundColor = '#ccffcc';
        }
        else item.style.backgroundColor = 'white';
    }

    const displayNew = (todo) => {
        const todoList = document.querySelector('.todo-list');
        const item = document.createElement('div');
        item.classList.add('todo');
        const check = document.createElement('img');
        check.setAttribute('src', checkbox);
        check.setAttribute('alt', 'checkbox');
        check.classList.add('check');
        const title = document.createElement('h5');
        const titleContent = todo.title;
        title.textContent = titleContent;
        priorityColor(todo, item);
        todoList.append(item);
        item.append(check);
        item.append(title);
        ToDos.push(item);
    }

    const displayDetails = (item, toDo) => {
        if (item.container && container.getAttribute('hidden') == '') {
            container.removeAttribute('hidden', '')
        }
        else if (item.container && container.getAttribute('hidden') == null) {
            container.setAttribute('hidden', '');
        }
        else {
            const container = document.createElement('div');
            const details = document.createElement('p');
            const dueDate = document.createElement('div');
            const priority = document.createElement('div');
            details.textContent = toDo.details;
            dueDate.textContent = toDo.dueDate;
            priority.textContent = toDo.priority;
            item.append(container);
            container.append(details, dueDate, priority);
        }
    }

    const complete = (check) => {
        const index = ToDos.findIndex((element) => element.innerText == check.parentElement.innerText);
        check.parentElement.remove();
        return index;
    }

    return {showForm, hideForm, displayNew, complete, displayDetails, ToDos};
})();

export {toDoDOM};