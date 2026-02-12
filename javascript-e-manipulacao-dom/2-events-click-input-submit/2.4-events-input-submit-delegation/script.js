/*
Exercício 2 — Part 2 (Events: input + submit + delegation)
Contexto (vida real)
Um formulário simples de “Adicionar tarefa”, com validação e feedback visual.

Regras mentais (iguais ao exercício anterior)
- Eventos só mudam estado
- render() só desenha
- Nada de DOM espalhado
- Nada de innerHTML
- Nada de onclick

Estado obrigatório
Você deve criar um estado com pelo menos:
- lista de tarefas (array)
- mensagem de erro (string)

Comportamento esperado
1 - Ao carregar
Total deve mostrar 0
Erro deve ficar vazio

2 - Ao digitar no input (input)
Limpar mensagem de erro no estado
Chamar render()

3 - Ao enviar o formulário (submit)
Prevenir comportamento padrão
Ler valor digitado
Validar:
não pode ser vazio
não pode ter mais de 20 caracteres
Se inválido:
atualizar mensagem de erro no estado
não adicionar tarefa
Se válido:
adicionar tarefa no estado
limpar input
limpar erro
Sempre chamar render()

4 - Render deve atualizar
- Texto do erro
- Total de tarefas
*/

const totalTextEl = document.querySelector("#totalText");
const errorTextEl = document.querySelector("#errorText");
const taskInputEl = document.querySelector("#taskInput");
const formEl = document.querySelector("#taskForm");

const MAX_LEN = 20;

const state = {
  tasks: [],
  error: "",
};

function render() {
  errorTextEl.textContent = state.error;
  totalTextEl.textContent = state.tasks.length;
}

function setError(message) {
  state.error = message;
  render();
}

taskInputEl.addEventListener("input", () => {
  if (!state.error) return; // evita render desnecessário
  state.error = "";
  render();
});

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const value = taskInputEl.value.trim();

  if (!value) return setError("Input can't be empty.");
  if (value.length > MAX_LEN) return setError(`Max ${MAX_LEN} characters.`);

  state.tasks.push(value);
  state.error = "";
  taskInputEl.value = "";
  taskInputEl.focus();

  render();
});

render();
