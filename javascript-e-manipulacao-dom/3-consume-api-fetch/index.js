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

let arrayUsers = [];

function getApi() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      return response.json();
    })
    .then((data) => {
      arrayUsers = data;
      renderusers();
    })
    .catch((err) => {
      console.log(err);
    });
}

function renderusers() {
  const list = document.getElementById("list");

  arrayUsers.forEach((user) => {
    const div = document.createElement("div");
    div.className = "listCointainer";
    list.appendChild(div);

    const ul = document.createElement("ul");
    div.appendChild(ul);

    const li = document.createElement("li");
    const p = document.createElement("p");

    ul.appendChild(li);
    ul.appendChild(p);
    li.textContent = user.name;
    p.textContent = user.email;

    const btn = document.createElement("button");
    btn.textContent = "Remove";
    btn.className = "listBtn";
    div.appendChild(btn);

    btn.dataset.action = "remove";
    div.dataset.id = user.id;
  });
}

list.addEventListener("click", (e) => {
  if (!e.target.matches(".listBtn")) return;

  const action = e.target.dataset.action;

  if (action === "remove") {
    const div = e.target.closest(".listCointainer");
    const id = Number(div.dataset.id);
    console.log(div.dataset.id);

    arrayUsers = arrayUsers.filter((user) => user.id !== id);

    div.remove();
  }
  console.log(arrayUsers);
});

getApi();
