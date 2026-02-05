/*
Challenge 1 — Counter App (JS + DOM + CSS)
Interview context

“Create a small interactive component using vanilla JavaScript. Focus on DOM manipulation, events, and basic layout.”

🎯 Goal

Build a counter component centered on the screen, with interactive behavior and visual feedback.

Requirements — JavaScript
Start the counter at 0
Buttons:
+1 → increments the value
-1 → decrements the value
Reset → resets to 0
If the number is negative, the number must turn red
If the number is 0 or positive, return to the normal color
Display text:
"Even" if the number is even
"Odd" if the number is odd
DOM updates should be handled cleanly (prefer a render() or similar function)
*/

const countNumber = document.querySelector("#number");
const btnDec = document.querySelector(".dec");
const btnInc = document.querySelector(".inc");
const btnReset = document.querySelector(".reset");
const actions = document.querySelector(".actions");

let count = 0;
updateDisplay();

function updateDisplay() {
  countNumber.textContent = count;

  countNumber.classList.toggle("negative", count < 0);

  actions.textContent = count % 2 === 0 ? "Par" : "impar";
}

btnDec.addEventListener("click", () => {
  count -= 1;
  updateDisplay();
});

btnInc.addEventListener("click", () => {
  count += 1;
  updateDisplay();
});

btnReset.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});
