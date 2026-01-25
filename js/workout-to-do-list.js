let todoItems = JSON.parse(localStorage.getItem("todos")) || [
  { text: "30 mins Cardio",},
  { text: "Sumo squats 3 sets 15 reps",},
  { text: "Stretching"}
];

const container = document.getElementById("todo-items-container");
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-button");

function renderTodos() {
  container.innerHTML = "";

  todoItems.forEach((todo, index) => {
    container.innerHTML += `
      <div class="todo-item ${todo.done ? "completed" : ""}">
        <span onclick="toggleDone(${index})">${todo.text}</span>
        <div class="todo-actions">
          <img src="/images/delete.png" onclick="deleteTodo(${index})">
        </div>
      </div>
    `;
  });

  localStorage.setItem("todos", JSON.stringify(todoItems));
}

addBtn.addEventListener("click", () => {
  if (!input.value.trim()) return;

  todoItems.push({ text: input.value, done: false });
  input.value = "";
  renderTodos();
});

function deleteTodo(index) {
  todoItems.splice(index, 1);
  renderTodos();
}

function toggleDone(index) {
  todoItems[index].done = !todoItems[index].done;
  renderTodos();
}

renderTodos();