const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");
const newTaskInput = document.getElementById("newTask");

taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    event.target.parentElement.remove();
  }
});

addBtn.addEventListener("click", () => {
  const taskText = newTaskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `${taskText} <button class="delete-btn">Видалити</button>`;
  taskList.appendChild(li);

  newTaskInput.value = "";
});
