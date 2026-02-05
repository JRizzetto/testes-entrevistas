const countEl = document.getElementById("count");
const parity = document.getElementById("parity");

let count = 3;

function render() {
  countEl.textContent = count;

  const countNumber = Number(countEl.textContent);
  countEl.classList.toggle("negative", countNumber < 0);

  parity.textContent = countNumber % 2 === 0 ? "Even" : "Odd";
}
render();
