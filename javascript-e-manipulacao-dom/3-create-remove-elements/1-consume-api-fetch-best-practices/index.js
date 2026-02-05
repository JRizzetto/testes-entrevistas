/*
Challenge 3 — Fetch + Render Users (API + DOM)

Interview context
“You need to consume an API, show results in the UI, and handle loading + errors.”

🎯 Goal

Fetch a list of users from an API and render them into the DOM.

✅ Use this API (free, no key):
https://jsonplaceholder.typicode.com/users

Requirements — JavaScript
1 - When the page loads, show Loading...
2 - Fetch users from the API using fetch
3 - If success:
- Render a list of users
- Each item must show: Name, Email, City (from adress.city)
4 - If error:
- Show "Something went wrong. Try again."
- Show a Retry button
5 - Retry button must retech the data
6 - Keep DOM updates clean (use render() style functions)

Bonus (optional, but interview-friendly):
- Add a search input to filter users by name (client-side)
*/

const list = document.getElementById("list");
const loading = document.getElementById("loading");
const errorBox = document.getElementById("error");
const retryBtn = document.getElementById("retryBtn");

let users = [];

function setUIState(state) {
  if (state === "loadng") {
    loading.classList.add("show");
    errorBox.classList.remove("show");
    list.innerHTML = "";
  }

  if (state === "success") {
    loading.classList.remove("show");
    errorBox.classList.remove("show");
  }

  if (state === "error") {
    loading.classList.remove("show");
    errorBox.classList.add("show");
    list.innerHTML = "";
  }
}

function fetchUsers() {
  setUIState("loading");

  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      users = data;
      renderUsers();
      setUIState("success");
    })
    .catch((err) => {
      console.log(err);
      setUIState("error");
    });
}

function renderUsers() {
  list.innerHTML = "";

  users.forEach((user) => {
    const item = document.createElement("div");
    item.className = "listCointainer";
    item.dataset.id = user.id;

    item.innerHTML = `
    <ul>
    <li>${user.name}</li>
    <p>${user.email}</p>
    <p>${user.address.city}
    </ul>
    <button class="listBtn" data-action="remove">Remove</button>
    `;

    list.appendChild(item);
  });
}

list.addEventListener("click", (e) => {
  if (e.target.dataset.action !== "remove") return;

  const container = e.target.closest(".listCointainer");
  const id = Number(container.dataset.id);

  users = users.filter((u) => u.id !== id);
  renderUsers();
});

retryBtn.addEventListener("click", () => {
  fetchUsers();
});

fetchUsers();
