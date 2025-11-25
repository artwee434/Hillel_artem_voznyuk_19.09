const form = document.querySelector(".js--form");
const input = document.querySelector(".js--form__input");
const todoWrapper = document.querySelector(".js--todos-wrapper");

function getTodosFromStorage() {
  const todos = localStorage.getItem("todos");

  return todos ? JSON.parse(todos) : [];
}

function saveTodosToStorage(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function createTodoElement(text, isChecked) {
  const li = document.createElement("li");
  li.className = isChecked ? "todo-item todo-item--checked" : "todo-item";

  li.innerHTML = `
        <input type="checkbox" ${isChecked ? "checked" : ""}>
        <span class="todo-item__description">${text}</span>
        <button class="todo-item__delete">Видалити</button>
    `;

  li.querySelector('input[type="checkbox"]').addEventListener(
    "change",
    toggleTodo
  );
  li.querySelector(".todo-item__delete").addEventListener("click", deleteTodo);

  return li;
}

function renderTodos() {
  todoWrapper.innerHTML = "";
  const todos = getTodosFromStorage();
  todos.forEach((todo) => {
    const todoElement = createTodoElement(todo.text, todo.checked);
    todoWrapper.appendChild(todoElement);
  });
}

function addTodo(e) {
  e.preventDefault();
  const todoText = input.value.trim();

  if (todoText) {
    const todos = getTodosFromStorage();

    const newTodo = { text: todoText, checked: false };
    todos.push(newTodo);

    saveTodosToStorage(todos);
    renderTodos();

    input.value = "";
  }
}

function deleteTodo(e) {
  const li = e.target.closest(".todo-item");
  const description = li.querySelector(".todo-item__description").textContent;

  let todos = getTodosFromStorage();

  todos = todos.filter((todo) => todo.text !== description);

  saveTodosToStorage(todos);
  renderTodos();
}

function toggleTodo(e) {
  const li = e.target.closest(".todo-item");
  const isChecked = e.target.checked;
  const description = li.querySelector(".todo-item__description").textContent;

  li.classList.toggle("todo-item--checked", isChecked);

  let todos = getTodosFromStorage();

  const todoIndex = todos.findIndex((todo) => todo.text === description);
  if (todoIndex !== -1) {
    todos[todoIndex].checked = isChecked;

    saveTodosToStorage(todos);
  }
}

document.addEventListener("DOMContentLoaded", renderTodos);

form.addEventListener("submit", addTodo);
