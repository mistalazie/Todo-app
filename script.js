document.getElementById("appendTodo").addEventListener("click", function(e) {
    if (e.target.classList.contains("todo-delete")) {
        deleteTodo(e.target.closest(".todo-div").id);
    }
});

let todoCounter = 0;

function addTodo() {
    todoCounter++;
    const todoId = `todo-${todoCounter}`;

    const todoHtml = `
        <div class="todo-div" id="${todoId}">
            <h2>
                <input class="todo-title" type="text" placeholder="title">
            </h2>
            <p>
                <input class="todo-description" type="text" placeholder="description">
            </p>
            <input class="todo-status" type="checkbox"> Mark as completed
            <button class="todo-delete">Delete</button>
        </div>`;
    
    document.getElementById("appendTodo").innerHTML += todoHtml;
}

function deleteTodo(todoId) {
    const todoElement = document.getElementById(todoId);
    todoElement.remove();
}
