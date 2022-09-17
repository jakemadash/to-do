import {ToDo} from './todo.js';

const Project = (() => {
    const newProject = (title, due) => {
        const ToDos = [];
        return {title, due, ToDos};
    };
    
    const Projects = [{title: 'Main', due: '', ToDos: []}];

    const defaultProject = Projects[0];

    const findToDo = (index) => {
        return defaultProject.ToDos[index];
    }

    const updateToDo = (index) => {
        const todo = defaultProject.ToDos[index];
        const form = document.querySelector('.todo-form');
        todo.title = form.elements['title'].value;
        todo.details = form.elements['details'].value;
        todo.due = form.elements['due-date'].value;
        todo.priority = form.elements['priority'].value;
        return todo;
    }
    
    const addToDefault = () => {
        const todo = ToDo.addToDo();
        defaultProject.ToDos.push(todo);
        return todo;
    };

    const addProject = () => {
        const form = document.querySelector('.project-form');
        const title = form.elements['title'].value;
        const due = form.elements['due-date'].value;
        const project = newProject(title, due);
        defaultProject.Projects.push(project);
        console.log(defaultProject.Projects);
        return project;
    }

    const removeFromDefault = (index) => {
        defaultProject.ToDos.splice(index, 1);
    }

    return {newProject, addToDefault, addProject, removeFromDefault, findToDo, updateToDo};
})();


export {Project};