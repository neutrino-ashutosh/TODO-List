function loadTodos(){
  const todos = JSON.parse(localStorage.getItem("todos")) || {"todoList" : []};
  return todos;
}

const todoInput = document.getElementById("todoInput");
todoInput.addEventListener("change", (event)=>{
  const todoText = event.target.value;
  event.target.value = todoText.trim();
});

function addTodoToLocalStorage(todoText){
  const todos = loadTodos();
  todos.todoList.push(todoText);
  localStorage.setItem("todos", JSON.stringify(todos));
}

const submitButton = document.getElementById("addTodo");
submitButton.addEventListener("click", (event)=>{
  const todoText = todoInput.value;
  if (todoText == '') {
    alert("please enter something , it can not be empty");
  } else {
    addTodoToLocalStorage(todoText);
  }
})
