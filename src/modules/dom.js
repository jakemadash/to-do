const DOM = (() => {
    const container = document.querySelector('.container');
    const add = document.querySelector('div > div');
    const form = document.querySelector('form');

    const showToDoForm = () => {
        add.addEventListener('click', () => {
            add.textContent = '';
            form.removeAttribute('hidden');
        }
    )};

    const hideToDoForm = () => {
        add.textContent = '+';
        form.setAttribute('hidden', '');
        form.reset();
    };

    return {showToDoForm, hideToDoForm};
})();

export {DOM};