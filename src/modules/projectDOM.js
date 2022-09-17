const ProjectDOM = (() => {

    const form = document.querySelector('.project-form');
    const add = document.querySelector('.project-add');

    const Projects = [];

    const showProjects = () => {
        Projects.forEach(Project => Project.removeAttribute('hidden'));
    }

    const hideProjects = () => {
        Projects.forEach(Project => Project.setAttribute('hidden', ''));
    }

    const showForm = () => {
        add.addEventListener('click', () => {
            add.textContent = '';
            form.removeAttribute('hidden');
            hideProjects();
        }
    )};

    const hideForm = () => {
        add.textContent = '+';
        form.setAttribute('hidden', '');
        form.reset();
        showProjects();
    };

    return {showForm, hideForm};

})();

export {ProjectDOM};