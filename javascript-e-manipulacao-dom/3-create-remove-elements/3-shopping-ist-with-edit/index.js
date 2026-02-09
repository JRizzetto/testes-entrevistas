const itemInputEl = document.getElementById("itemInput");
const addBtnEl = document.getElementById("addBtn");
const errorEl = document.getElementById("error");
const listEl = document.getElementById("list");

let items = [];
let countId = 0;

function addText() {
  addBtnEl.addEventListener("click", () => {
    const inputValue = itemInputEl.value.trim();

    if (!inputValue) {
      errorEl.textContent = "Type something!";
      return;
    }
    errorEl.textContent = "";

    items.push({
      id: countId++,
      text: inputValue,
    });

    itemInputEl.value = "";

    render();
  });
}
addText();

function render() {
  listEl.textContent = "";

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.text;
    listEl.appendChild(li);

    const button = document.createElement("button");
    button.textContent = "Remove";
    li.appendChild(button);

    button.dataset.action = "remove";
    button.dataset.id = item.id;
  });
}

function btnRemove() {
  listEl.addEventListener("click", (event) => {
    const btn = event.target.closest("button[data-action='remove']");
    if (!btn) return;

    const id = Number(btn.dataset.id);
    items = items.filter((item) => item.id !== id);

    render();
  });
}
btnRemove();
render();
