function loadTodos(){
    const todos = JSON.parse(localStorage.getItem("todos")) || {"todoList" : []};
    return todos;
  }
  
  function addTodoToLocalStorage(todo){
    const todos = loadTodos();
    todos.todoList.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    todoInput.value = '';
  }
  
  function executeFilterAction(event) {
    const element = event.target;
    const todoList = document.getElementById("todoList");
    const value = element.getAttribute("data-filter");
    todoList.innerHTML = '';
    const todos = loadTodos();
  
    if(value == "all"){
      
      todos.todoList.forEach(todo => {
        appendTodoInHtml(todo);
      });
    } else if(value == "pending"){
      todos.todoList.forEach(todo => {
        if(todos.isCompleted !== true) 
          appendTodoInHtml(todo);
      });
    } else {
      todos.todoList.forEach(todo => {
        if(todos.isCompleted == true) 
          appendTodoInHtml(todo);
      });
    }
  }
  
  function appendTodoInHtml(todo){
    const todoList = document.getElementById("todoList");
  
    const todoItem = document.createElement("li");
  
    const textDiv = document.createElement("div");
    
    textDiv.textContent = todo.text;
    todoItem.classList.add("todoItem");
  
    const wrapper = document.createElement("div");
    wrapper.classList.add("todoButtons");
  
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("editBtn");
  
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");
  
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Completed";
    completeBtn.classList.add("completeBtn");
   
    wrapper.appendChild(editBtn);
    wrapper.appendChild(deleteBtn);
    wrapper.appendChild(completeBtn);
  
    todoItem.appendChild(textDiv);
    todoItem.appendChild(wrapper)
  
    todoList.appendChild(todoItem);
  }
  
  document.addEventListener("DOMContentLoaded",()=>{
    const todoInput = document.getElementById("todoInput");
    todoInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        addTodo.click();
      }
    });
  
    const submitButton = document.getElementById("addTodo");
  
    const todoList = document.getElementById("todoList");
  
    const filterBtns = document.getElementsByClassName("filterBtn");
  
    for(const btn of filterBtns){
      btn.addEventListener("click", executeFilterAction);
    }
  
    submitButton.addEventListener("click", (event)=>{
      const todoText = todoInput.value;
      if (todoText == '') {
        alert("please enter something , it can not be empty");
      } else {
        addTodoToLocalStorage({text: todoText, isCompleted: false});
        appendTodoInHtml({text: todoText, isCompleted: false});
      }
    })
  
    todoInput.addEventListener("change", (event)=>{
      const todoText = event.target.value;
      event.target.value = todoText.trim();
      console.log(event.target.value);
    });
  
  
    const todos = loadTodos();
    todos.todoList.forEach(todo => {
      appendTodoInHtml(todo);
    });
  
    
  })