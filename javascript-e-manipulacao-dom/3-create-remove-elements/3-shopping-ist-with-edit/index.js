const itemInputEl = document.getElementById("itemInput");
const addBtnEl = document.getElementById("addBtn");
const errorEl = document.getElementById("error");
const listEl = document.getElementById("list");

let items = [];
let nextId = 0;
let editingId = null;

function render() {
  listEl.innerHTML = "";

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.text;

    const buttonEdit = document.createElement("button");
    buttonEdit.textContent = "Edit";
    buttonEdit.dataset.action = "edit";
    buttonEdit.dataset.id = item.id;

    const buttonRemove = document.createElement("button");
    buttonRemove.textContent = "Remove";
    buttonRemove.dataset.action = "remove";
    buttonRemove.dataset.id = item.id;

    li.appendChild(buttonEdit);
    li.appendChild(buttonRemove);
    listEl.appendChild(li);
  });
}

addBtnEl.addEventListener("click", () => {
  const value = itemInputEl.value.trim();

  if (!value) {
    errorEl.textContent = "Type something!";
    return;
  }

  errorEl.textContent = "";

  if (editingId === null) {
    items.push({ id: nextId++, text: value });
  } else {
    items = items.map((item) =>
      item.id === editingId ? { ...item, text: value } : item,
    );

    editingId = null;
    addBtnEl.textContent = "Add";
  }

  itemInputEl.value = "";
  render();
});

listEl.addEventListener("click", (event) => {
  const btn = event.target.closest("button[data-action]");
  if (!btn) return;

  const action = btn.dataset.action;
  const id = Number(btn.dataset.id);

  if (action === "remove") {
    items = items.filter((item) => item.id !== id);

    if (editingId === id) {
      editingId = null;
      addBtnEl.textContent = "Add";
      itemInputEl.value = "";
    }

    render();
  }

  if (action === "edit") {
    const item = items.find((item) => item.id === id);
    if (!item) return;

    editingId = id;
    itemInputEl.value = item.text;
    addBtnEl.textContent = "Save";
    itemInputEl.focus();
  }
});

render();
