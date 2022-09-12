const DOM = (() => {
    const container = document.querySelector('.container');
    const add = document.querySelector('div.todo');
    const toDoForm = document.querySelector('form.todo');

    const showToDoForm = () => {
        add.addEventListener('click', () => {
            add.textContent = '';
            toDoForm.removeAttribute('hidden');
        }
    )};

    const hideToDoForm = () => {
        add.textContent = '+';
        toDoForm.setAttribute('hidden', '');
        toDoForm.reset();
    };

    return {showToDoForm, hideToDoForm};
})();

export {DOM};