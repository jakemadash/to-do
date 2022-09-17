const projectDOM = (() => {

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

    const addNew =(project) => {
        const projectList = document.querySelector('.project-list');
        const item = document.createElement('div');
        item.classList.add('project');
        const title = document.createElement('h5');
        const titleContent = project.title;
        title.textContent = titleContent;
        projectList.append(item);
        item.append(title);
        Projects.push(item);
        addDetails(item, project);
        return item;
    }

    const addDetails = (item, project ) => {

    }

    return {showForm, hideForm, addNew};

})();

export {projectDOM};