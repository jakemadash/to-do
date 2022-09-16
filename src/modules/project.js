import {ToDo} from './todo.js';

const Project = (() => {
    const newProject = (title, description, due, priority) => {
        const prototype = ToDo.newToDo(title, description, due, priority);
        const ToDos = [];
        return Object.assign({}, {ToDos}, prototype);
    };
    
    const defaultProject = {
        ToDos: [],
        Projects: []
    };

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
        const form = document.querySelector('form.project');
        const title = form.elements['title'].value;
        const details = form.elements['details'].value;
        const due = form.elements['due-date'].value;
        const priority = form.elements['priority'].value;
        const todo = newToDo(title, details, due, priority);
        return todo;
    }

    const removeFromDefault = (index) => {
        defaultProject.ToDos.splice(index, 1);
    }

    return {newProject, addToDefault, addProject, removeFromDefault, findToDo, updateToDo};
})();


export {Project};