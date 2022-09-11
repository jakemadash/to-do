import {ToDo} from './todo.js';

const Project = (() => {
    const newProject = (title, description, dueDate, priority) => {
        const prototype = ToDo.newToDo(title, description, dueDate, priority);
        const ToDos = [];
        return Object.assign({}, {ToDos}, prototype);
    };
    
    const defaultProject = newProject([], 'default');
    
    const addToProject = () => {
        defaultProject.ToDos.push(ToDo.addToDo());
        console.log(defaultProject.ToDos);
    };

    return {newProject, addToProject};
})();


export { Project };