import {ToDo} from './todo.js';

const Project = (() => {
    const newProject = (title, description, dueDate, priority) => {
        const prototype = ToDo.newToDo(title, description, dueDate, priority);
        const ToDos = [];
        return Object.assign({}, {ToDos}, prototype);
    };
    
    const defaultProject = {
        ToDos: [],
        Projects: []
    };
    
    const addToDefault = () => {
        defaultProject.ToDos.push(ToDo.addToDo());
        console.log(defaultProject.ToDos);
    };

    const addProject = () => {
        const form = document.querySelector('form.project');
        const title = form.elements['title'].value;
        const details = form.elements['details'].value;
        const dueDate = form.elements['due-date'].value;
        const priority = form.elements['priority'].value;
        const todo = newToDo(title, details, dueDate, priority);
        return todo;
    }

    return {newProject, addToDefault, addProject};
})();


export { Project };