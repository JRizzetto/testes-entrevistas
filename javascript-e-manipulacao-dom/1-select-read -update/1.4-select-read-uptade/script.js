/*
Contexto (entrevista):
“Você recebeu dados iniciais no HTML e precisa ajustar a UI corretamente ao carregar a página.”

Requisitos objetivos (JS rodando uma vez)
1 - Leia o nome do usuário do data-user e atualize:
Usuário: Jefferson

2 - Leia a pontuação do data-score e atualize:
Pontuação: 82

3 - Badge (#levelBadge) deve ser definido assim:
- score ≥ 80 → texto Avançado + classe badge--high
- score ≥ 50 e < 80 → texto Intermediário + classe badge--mid
- score < 50 → texto Iniciante + classe badge--low

4 - Mensagem (#message) deve ser:
- Excelente desempenho! se score ≥ 80
- Bom progresso, continue praticando. se score entre 50 e 79
- Vamos estudar mais um pouco. se score < 50

Restrições (entrevista)
Sem eventos
Sem innerHTML
Sem alterar o HTML
Limpar classes antes de aplicar novas (badge--high/mid/low)
Código legível (nomes importam)
*/

const userNameEl = document.querySelector("#userName");
const scoreTextEl = document.querySelector("#scoreText");
const levelBadgeEl = document.querySelector("#levelBadge");
const messageEl = document.querySelector("#message");

let nameUser = userNameEl.dataset.user;
let score = Number(scoreTextEl.dataset.score);

function render() {
  userNameEl.textContent = `Usuário: ${nameUser}`;
  scoreTextEl.textContent = score;

  levelBadgeEl.classList.remove("badge--high", "badge--mid", "badge--low");

  if (score >= 80) {
    levelBadgeEl.textContent = "Avançado";
    levelBadgeEl.classList.add("badge--high");

    messageEl.textContent = "Excelente desempenho!";
  } else if (score >= 50) {
    levelBadgeEl.textContent = "Intermediário";
    levelBadgeEl.classList.add("badge--mid");

    messageEl.textContent = "Bom progresso, continue praticando.";
  } else {
    levelBadgeEl.textContent = "Iniciante";
    levelBadgeEl.classList.add("badge--low");

    messageEl.textContent = "Vamos estudar mais um pouco.";
  }
}
render();
