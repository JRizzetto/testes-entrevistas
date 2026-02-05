/*

*/

const inputEl = document.getElementById("textInput");
const addBtnEl = document.getElementById("addBtn");
const listEl = document.getElementById("list");

let items = [];
let itemId = 0;

function render() {
  listEl.textContent = "";

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.message;
    listEl.appendChild(li);

    const button = document.createElement("button");
    button.textContent = "Remove";
    li.appendChild(button);

    button.dataset.action = "remove";
    button.dataset.id = item.id;
  });
}

addBtnEl.addEventListener("click", () => {
  const input = inputEl.value.trim();
  if (!input) {
    alert("Don't forget your text!");
    return;
  }

  items.push({
    id: itemId++,
    message: input,
  });

  inputEl.value = "";
  render();
});

window.addEventListener("click", (e) => {
  const action = e.target.dataset.action;
  const id = Number(e.target.dataset.id);

  if (action !== "remove") return;

  if (action === "remove") {
    items = items.filter((e) => e.id !== id);
  }
  render();
});
