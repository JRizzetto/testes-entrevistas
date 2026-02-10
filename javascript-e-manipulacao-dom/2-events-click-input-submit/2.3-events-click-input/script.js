/*
Requisitos objetivos
Você vai implementar um contador com passo (step).

Estado (obrigatório):
const state = {
  count: 0,
  step: 1
};

1 - Ao carregar, renderizar countText e hint com base no state

2 - input#stepInput (evento input):
ler o valor digitado
converter para número
limitar entre 1 e 10
salvar em state.step
chamar render()


3 - Botões dentro de #controls (evento click no container — delegation):
data-action="inc": state.count += state.step
data-action="dec": state.count -= state.step
data-action="reset": state.count = 0

sempre chamar render()

4 - render() deve atualizar:
- #countText com state.count
- #hint com Step: X (X = state.step)

Restrições (entrevista)
Sem onclick
Sem “um listener por botão”
Obrigatório: 1 listener no #controls (delegation)
Nada de innerHTML
*/
