const tarefaModel = require('./tarefa-model');

function adicionarTarefa(descricao) {
  const tarefa = {
    descricao,
    dataCriacao: new Date().toISOString(),
    concluida: false,
  };

  tarefaModel.salvarTarefa(tarefa);
}

function listarTarefas() {
  return tarefaModel.carregarTarefas();
}

function removerTarefa(indice) {
  const tarefas = tarefaModel.carregarTarefas();

  if (indice >= 0 && indice < tarefas.length) {
    tarefas.splice(indice, 1);

    tarefaModel.salvarTodasTarefas(tarefas);
    return true;
  }

  return false;
}

function marcarConcluida(indice) {
  const tarefas = tarefaModel.carregarTarefas();

  if (indice >= 0 && indice < tarefas.length) {
    tarefas[indice].concluida = true;

    tarefaModel.salvarTodasTarefas(tarefas);
    return true;
  }

  return false;
}

function filtrarTarefas(palavraChave) {
  const tarefas = tarefaModel.carregarTarefas();

  return tarefas.filter((tarefa) =>
    tarefa.descricao.toLowerCase().includes(palavraChave.toLowerCase())
  );
}

module.exports = {
  adicionarTarefa,
  listarTarefas,
  removerTarefa,
  marcarConcluida,
  filtrarTarefas,
};
