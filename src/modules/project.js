import {ToDo} from './todo.js';

const Project = (() => {
    const newProject = (title, description, dueDate, priority) => {
        const prototype = ToDo.newToDo(title, description, dueDate, priority);
        const ToDos = [];
        return Object.assign({}, {ToDos}, prototype);
    };

    let count = 0;
    
    const defaultProject = {
        ToDos: [],
        Projects: []
    };
    
    const addToDefault = () => {
        defaultProject.ToDos.push(ToDo.addToDo());
        count++;
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

    const removeFromDefault = (index) => {
        defaultProject.ToDos.splice(index, 1);
        console.log(defaultProject.ToDos[1]);
    }

    return {newProject, addToDefault, addProject, removeFromDefault};
})();


export {Project};