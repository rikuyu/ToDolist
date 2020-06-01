const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

console.log(todoList);

todoButton.addEventListener("click", addTodo);

function addTodo(event) {
  event.preventDefault(); //submitするとリフレッシュするのを停止

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.innerText = "hey";
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  const trashdButton = document.createElement("button");
  trashdButton.innerHTML = '<i class="fas  fa-check"></i>';
  trashdButton.classList.add("trash-btn");
  todoDiv.appendChild(trashdButton);

  todoList.appendChild(todoDiv);
}
