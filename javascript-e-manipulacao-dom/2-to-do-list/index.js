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
const error = document.querySelector("#error");
const ul = document.getElementById("list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const value = input.value.trim();

  if (value === "") {
    error.textContent = "Please type a task";
    return;
  } else {
    error.textContent = "";
  }

  const li = document.createElement("li");
  li.textContent = value;

  const btnRemove = document.createElement("button");
  btnRemove.textContent = "Remove";
  btnRemove.className = "btnUl";

  btnRemove.onclick = () => li.remove();

  li.appendChild(btnRemove);
  ul.appendChild(li);

  input.value = "";
});
