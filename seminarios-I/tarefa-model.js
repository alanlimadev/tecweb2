const fs = require('fs');
const path = require('path');

const ARQUIVO_TAREFAS = path.join(__dirname, 'tarefas.json');

function carregarTarefas() {
  try {
    if (fs.existsSync(ARQUIVO_TAREFAS)) {
      const dados = fs.readFileSync(ARQUIVO_TAREFAS, 'utf8');
      return JSON.parse(dados);
    }

    return [];
  } catch (erro) {
    console.error('Erro ao carregar as tarefas:', erro.message);
    return [];
  }
}

function salvarTodasTarefas(tarefas) {
  try {
    fs.writeFileSync(ARQUIVO_TAREFAS, JSON.stringify(tarefas, null, 2), 'utf8');
  } catch (erro) {
    console.error('Erro ao salvar as tarefas:', erro.message);
  }
}

function salvarTarefa(tarefa) {
  const tarefas = carregarTarefas();

  tarefas.push(tarefa);

  salvarTodasTarefas(tarefas);
}

module.exports = {
  carregarTarefas,
  salvarTodasTarefas,
  salvarTarefa,
};
