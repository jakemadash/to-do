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

    return {showForm, hideForm};
})();

export {toDoDOM};