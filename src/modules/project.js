import ToDo from 'todo.js';

const Project = (title, description, dueDate, priority) => {
    const prototype = ToDo(title, description, dueDate, priority);
    const ToDos = [];
    return Object.assign({}, {ToDos}, prototype);
};

export {Project};