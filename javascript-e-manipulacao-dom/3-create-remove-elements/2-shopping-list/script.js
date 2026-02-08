const itemInputEl = document.getElementById("itemInput");
const addBtnEl = document.getElementById("addBtn");
const errorEl = document.getElementById("error");
const listEl = document.getElementById("list");
const appEl = document.getElementById("app");

let items = [];
let countId = 0;
let messageNumber = 0;

function getInput() {
  addBtnEl.addEventListener("click", () => {
    let inputValue = itemInputEl.value.trim();

    if (!inputValue) {
      errorEl.textContent = "Type something!";
      return;
    }

    errorEl.textContent = "";

    items.push({
      id: countId++,
      message: inputValue,
    });

    itemInputEl.value = "";
    render();
  });
}
getInput();

function render() {
  listEl.textContent = "";
  messageNumber = 0;

  items.forEach((item) => {
    messageNumber++;
    const li = document.createElement("li");
    li.textContent = `${messageNumber} - ${item.message}`;
    listEl.appendChild(li);

    const button = document.createElement("button");
    button.textContent = "Remove";
    li.appendChild(button);

    button.dataset.action = "remove";
    button.dataset.id = item.id;
  });
}

function removeBtn() {
  listEl.addEventListener("click", (event) => {
    const btn = event.target.closest("button[data-action='remove']");
    if (!btn) return;

    const id = Number(btn.dataset.id);
    console.log(id);
    items = items.filter((item) => item.id !== id);

    render();
  });
}
removeBtn();
render();
