/*
Requisitos objetivos (faça tudo via JS, rodando uma vez ao carregar)
1 - Troque o texto do <h1 id="title"> para "Perfil do Jefferson"

2 - Troque o #statusText para "online" e: 
- adicione a classe is-online no elemento #statusText

3 - No #avatar:
mude o src para https://i.pravatar.cc/96?img=3
mude o alt para "Foto do Jefferson"

4 - No elemento com data-role="bio":
Atualize o texto do #bioText para "Estudando front-end todos os dias."

5 - Em #tags:
- leia quantas .tag existem e salve em uma variável tagCount
- atualize o #title para incluir o total, ficando: "Perfil do Jefferson (3 tags)"

Restrições
Nada de eventos, nada de innerHTML
Use textContent e seletores (querySelector/querySelectorAll)
Não pode editar o HTML
*/

const titleEl = document.querySelector("#title");
const statusTextEl = document.querySelector("#statusText");
const avatarEl = document.querySelector("#avatar");
const tagEls = document.querySelectorAll(".tag");
const bioTextEl = document.querySelector("#bioText");

let titleName = "Perfil do Jefferson";
let statusText = "online";
let statusAvatar = "https://i.pravatar.cc/96?img=3";

function render() {
  titleEl.textContent = titleName;

  statusTextEl.textContent = statusText;
  statusTextEl.classList.add("is-online");

  avatarEl.src = statusAvatar;
  avatarEl.alt = "Foto do Jefferson";

  bioTextEl.textContent = "Estudando front-end todos os dias.";

  const tagCount = tagEls.length;

  titleEl.textContent = `${titleName} (${tagCount} tags)`;
}
render();
