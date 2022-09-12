const toDoDOM = (() => {
    const container = document.querySelector('.container');
    const add = document.querySelector('div.todo');
    const form = document.querySelector('form.todo');

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
        const title = document.createElement('h3');
        const titleContent = form.elements['title'].value;
        title.textContent = titleContent;
        item.append(title);
        container.append(item);
    }

    return {showForm, hideForm, displayNew};
})();

export {toDoDOM};