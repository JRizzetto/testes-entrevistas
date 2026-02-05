/*
Challenge 2 — To-Do List (DOM + Forms + Validation + CSS)

Interview context
“Build a small feature that handles form input, updates the DOM, and manages simple state.”

Goal
Create a To-Do list where the user can add and remove tasks.

Requirements — JavaScript
Add tasks via a form (input + button)
When user submits:
Trim spaces
If empty → show a message like “Please type a task.”
Render tasks into a <ul>
Each task must have a Remove button
Use event delegation for remove (important!)
Keep tasks in an array (state)
✅ Bonus (optional, if you want):
Save tasks in localStorage and load on refresh
*/

const form = document.getElementById("form");
const input = document.getElementById("taskInput");
const error = document.getElementById("error");
const list = document.getElementById("list");

let tasks = [];
let idCounter = 0;

function render() {
  list.innerHTML = "";

  tasks.forEach((tasks) => {
    const li = document.createElement("li");
    li.textContent = tasks.text;

    li.dataset.id = tasks.id;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.dataset.action = "remove";

    li.appendChild(removeBtn);
    list.appendChild(li);

    removeBtn.className = "btnUl";
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const value = input.value.trim();

  if (!value) {
    error.textContent = "Please type a task";
    return;
  }

  error.textContent = "";

  tasks.push({
    id: idCounter++,
    text: value,
  });

  input.value = "";

  render();
});

list.addEventListener("click", (e) => {
  console.log(e);
  const action = e.target.dataset.action;

  if (action === "remove") {
    const li = e.target.closest("li");
    const id = Number(li.dataset.id);

    tasks = tasks.filter((task) => task.id !== id);

    render();
  }
});
