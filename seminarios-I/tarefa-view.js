function exibirMenuPrincipal() {
  console.clear();
  console.log('==== GERENCIADOR DE TAREFAS ====');
  console.log('1. Adicionar tarefa');
  console.log('2. Listar tarefas');
  console.log('3. Remover tarefa');
  console.log('4. Marcar tarefa como concluída');
  console.log('5. Filtrar tarefas por palavra-chave');
  console.log('0. Sair');
  console.log('===============================');
}

function exibirListaTarefas(tarefas, titulo = '==== LISTA DE TAREFAS ====') {
  console.log(`\n${titulo}`);

  if (tarefas.length === 0) {
    console.log('Nenhuma tarefa cadastrada.');
    return;
  }

  tarefas.forEach((tarefa, index) => {
    const status = tarefa.concluida ? '[✓]' : '[ ]';
    const dataCriacao = new Date(tarefa.dataCriacao).toLocaleString('pt-BR');
    console.log(
      `${index + 1}. ${status} ${tarefa.descricao} (Criada em: ${dataCriacao})`
    );
  });
}

function exibirMensagemSucesso(mensagem) {
  console.log(`\n${mensagem}`);
}

function exibirMensagemErro(mensagem) {
  console.log(`\n${mensagem}`);
}

function exibirMensagemInfo(mensagem) {
  console.log(`\n${mensagem}`);
}

module.exports = {
  exibirMenuPrincipal,
  exibirListaTarefas,
  exibirMensagemSucesso,
  exibirMensagemErro,
  exibirMensagemInfo,
};
