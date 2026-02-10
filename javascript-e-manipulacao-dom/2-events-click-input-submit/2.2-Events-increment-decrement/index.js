/*
Part 2 Challenge — Counter with buttons
Task

Keep count as JS state
Add click listeners to buttons
Update count on click
Call render() after each change
Do NOT read from the DOM
*/

const countEl = document.getElementById("count");
const parityEl = document.getElementById("parity");
const incEl = document.getElementById("inc");
const decEl = document.getElementById("dec");

let count = 0;

function render() {
  countEl.textContent = count;
  countEl.classList.toggle("negative", count < 0);
  parityEl.textContent = count % 2 === 0 ? "Even" : "Odd";
}

incEl.addEventListener("click", () => {
  count++;
  render();
});

decEl.addEventListener("click", () => {
  count--;
  render();
});

render();
