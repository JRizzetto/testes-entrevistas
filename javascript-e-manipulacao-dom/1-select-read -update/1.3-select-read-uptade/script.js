/*
Requisitos objetivos (faça tudo via JS, rodando uma vez ao carregar)

1 - Leia o nome do produto do atributo data-name do #productName e atualize o texto para:
Produto: Keyboard

2 - Atualize o preço (#priceText) para: R$ 199,90

3 - Leia o estoque do atributo data-stock do #stockText (lembre: vem como string) e:
atualize o texto para: 7 unidades

4 - Badge (#badge) deve virar:
- Se estoque > 5: texto Disponível e classe badge--ok
- Se estoque entre 1 e 5: texto Últimas unidades e classe badge--warn
- Se estoque == 0: texto Esgotado e classe badge--out

5 - Botão #buyBtn:
- Se estoque > 0, habilite o botão (remova disabled) e deixe texto Comprar agora
- Se estoque == 0, mantenha desabilitado e deixe texto Indisponível

Restrições
Sem eventos
Sem innerHTML
Sem alterar o HTML
Não use setAttribute("class", ...) (use classList)
Badge: garanta que só uma das classes badge--ok/warn/out fique aplicada
*/

const productNameEl = document.querySelector("#productName");
const priceTextEl = document.querySelector("#priceText");
const stockTextEl = document.querySelector("#stockText");
const badgeEl = document.querySelector("#badge");
const buyBtnEl = document.querySelector("#buyBtn");

const productName = productNameEl.dataset.name;
const priceText = "R$ 199,90";
const stockText = Number(stockTextEl.dataset.stock);

function render() {
  // 1
  productNameEl.textContent = `Produto: ${productName}`;

  // 2
  priceTextEl.textContent = priceText;

  // 3
  stockTextEl.textContent = `${stockText} unidades`;

  badgeEl.classList.remove("badge--ok", "badge--warn", "badge--out");

  // 4 -
  if (stockText > 5) {
    badgeEl.textContent = "Disponível";
    badgeEl.classList.add("badge--ok");

    buyBtnEl.disabled = false;
    buyBtnEl.textContent = "Comprar agora";
  } else if (stockText >= 1) {
    badgeEl.textContent = "Últimas unidades";
    badgeEl.classList.add("badge--warn");

    buyBtnEl.disabled = false;
    buyBtnEl.textContent = "Comprar agora";
  } else {
    badgeEl.textContent = "Esgotado";
    badgeEl.classList.add("badge--out");

    buyBtnEl.disabled = true;
    buyBtnEl.textContent = "Indisponível";
  }
}
render();
