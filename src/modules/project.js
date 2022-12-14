import {ToDo} from './todo.js';

const Project = (() => {
    const newProject = (title, due) => {
        const ToDos = [];
        return {title, due, ToDos};
    };
    
    let Projects = JSON.parse(localStorage.getItem('projects')) || [{title: 'Main', due: '', ToDos: []}];

    const findToDo = (project, index) => {
        return project.ToDos[index];
    }

    const findProject = () => {
        const header = document.querySelector('.project-header');
        const index = Projects.findIndex((element) => element.title == header.textContent);
        return Projects[index];
    }

    const findIndex = (project) => {
        const index = Projects.findIndex((element) => element.title == project.title);
        return index;
    }

    const updateToDo = (project, index) => {
        const todo = project.ToDos[index];
        const form = document.querySelector('.todo-form');
        todo.title = form.elements['title'].value;
        todo.details = form.elements['details'].value;
        todo.due = form.elements['due-date'].value;
        todo.priority = form.elements['priority'].value;
        store();
        return todo;
    }
    
    const addToDo = (project) => {
        const todo = ToDo.addToDo();
        project.ToDos.push(todo);
        store();
        return todo;
    };

    const store = () => {
        localStorage.setItem('projects', JSON.stringify(Projects));
    }

    const getToDos = (project) => {
        return project.ToDos;
    }

    const addProject = () => {
        const form = document.querySelector('.project-form');
        const title = form.elements['title'].value;
        const due = form.elements['due-date'].value;
        const project = newProject(title, due);
        Projects.push(project);
        store();
        return project;
    }

    const removeToDo = (project, index) => {
        project.ToDos.splice(index, 1);
        store();
    }

    const removeProject = (index) => {
        Projects.splice(index, 1);
        store();
    }

    return {Projects, newProject, addToDo, addProject, removeToDo, findToDo, updateToDo, findProject, getToDos, removeProject, findIndex, store};
})();


export {Project};