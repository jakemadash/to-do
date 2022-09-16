const ToDo = (() => {
    const newToDo = (title, details, due, priority) => {
        return {
            title: title,
            details: details,
            due: due,
            priority: priority,
        }
    };
    
    const addToDo = () => {
        const form = document.querySelector('form.todo-form');
        const title = form.elements['title'].value;
        const details = form.elements['details'].value;
        const due = form.elements['due-date'].value;
        const priority = form.elements['priority'].value;
        const todo = newToDo(title, details, due, priority);
        return todo;
    }; 

    return {newToDo, addToDo};
})();

export {ToDo};