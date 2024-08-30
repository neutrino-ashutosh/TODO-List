function loadTodos(){
  const todos = JSON.parse(localStorage.getItem("todos")) || {"todoList" : []};
  return todos;
}

function addTodoToLocalStorage(todoText){
  const todos = loadTodos();
  todos.todoList.push(todoText);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function appendTodoInHtml(todoText){
  const todoList = document.getElementById("todoList");
  const todo = document.createElement("li");
  todo.textContent = todoText;
  todoList.appendChild(todo);
}

document.addEventListener("DOMContentLoaded",()=>{
  const todoInput = document.getElementById("todoInput");
  const submitButton = document.getElementById("addTodo");
  submitButton.addEventListener("click", (event)=>{
    const todoText = todoInput.value;
    if (todoText == '') {
      alert("please enter something , it can not be empty");
    } else {
      addTodoToLocalStorage(todoText);
      appendTodoInHtml(todoText);
    }
  })

  todoInput.addEventListener("change", (event)=>{
    const todoText = event.target.value;
    event.target.value = todoText.trim();
  });
})
