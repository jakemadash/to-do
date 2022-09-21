import checkbox from '../checkbox.svg';
import pencil from '../pencil-outline.svg';
import x from '../close.svg';

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
        const check = document.createElement('img');
        check.setAttribute('src', checkbox);
        check.setAttribute('alt', 'checkbox');
        check.classList.add('check');
        check.classList.add('remove');
        projectList.append(item);
        item.append(title, check);
        Projects.push(item);
        return title;
    }

    const complete = (project, index) => {
        project.remove();
        Projects.splice(index, 1);
    }

    return {showForm, hideForm, addNew, complete};

})();

export {projectDOM};