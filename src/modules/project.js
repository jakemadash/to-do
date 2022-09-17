import {ToDo} from './todo.js';

const Project = (() => {
    const newProject = (title, due) => {
        const ToDos = [];
        return {title, due, ToDos};
    };
    
    const Projects = [{title: 'Main', due: '', ToDos: []}];

    const findToDo = (project, index) => {
        return project.ToDos[index];
    }

    const findProject = () => {
        const header = document.querySelector('.project-header');
        const index = Projects.findIndex((element) => element.title == header.textContent);
        return Projects[index];
    }

    const updateToDo = (project, index) => {
        const todo = project.ToDos[index];
        const form = document.querySelector('.todo-form');
        todo.title = form.elements['title'].value;
        todo.details = form.elements['details'].value;
        todo.due = form.elements['due-date'].value;
        todo.priority = form.elements['priority'].value;
        return todo;
    }
    
    const addToDo = (project) => {
        const todo = ToDo.addToDo();
        project.ToDos.push(todo);
        return todo;
    };

    const addProject = () => {
        const form = document.querySelector('.project-form');
        const title = form.elements['title'].value;
        const due = form.elements['due-date'].value;
        const project = newProject(title, due);
        Projects.push(project);
        return project;
    }

    const remove = (project, index) => {
        project.ToDos.splice(index, 1);
    }

    return {newProject, addToDo, addProject, remove, findToDo, updateToDo, findProject};
})();


export {Project};