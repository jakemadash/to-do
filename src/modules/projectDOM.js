const ProjectDOM = (() => {

    const form = document.querySelector('.project-form');
    const add = document.querySelector('.project-add');

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

export {ProjectDOM};