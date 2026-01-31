const countNumber = document.querySelector("#count");
const parity = document.querySelector("#parity");

if (!countNumber || !parity) throw new Error("Missing any button in HTML");

let count = 0;

function render() {
  countNumber.textContent = count;

  countNumber.classList.toggle("active", count < 0);

  count % 2 === 0 ? "even" : "odd";
}

document.querySelector(".buttons").addEventListener("click", (e) => {
  const action = e.target.dataset.action;

  if (!action) return;

  if (action === "inc") count++;
  if (action === "dec") count--;
  if (action === "reset") count = 0;

  render();
});
