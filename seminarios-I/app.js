const readline = require('readline');
const {
  adicionarTarefa,
  listarTarefas,
  removerTarefa,
  marcarConcluida,
  filtrarTarefas,
} = require('./tarefa-controller');
const view = require('./tarefa-view');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function exibirMenu() {
  view.exibirMenuPrincipal();

  rl.question('Escolha uma opção: ', (opcao) => {
    switch (opcao) {
      case '1':
        menuAdicionarTarefa();
        break;
      case '2':
        menuListarTarefas();
        break;
      case '3':
        menuRemoverTarefa();
        break;
      case '4':
        menuMarcarConcluida();
        break;
      case '5':
        menuFiltrarTarefas();
        break;
      case '0':
        view.exibirMensagemInfo('Saindo...');
        setTimeout(() => {
          console.log('Até logo!');
          rl.close();
        }, 1000);
        rl.close();
        break;
      default:
        view.exibirMensagemErro('Opção inválida!');
        setTimeout(exibirMenu, 1500);
    }
  });
}

function menuAdicionarTarefa() {
  rl.question('Digite a descrição da tarefa: ', (descricao) => {
    adicionarTarefa(descricao);
    view.exibirMensagemSucesso('Tarefa adicionada com sucesso!');

    rl.question('\nPressione Enter para continuar...', () => {
      exibirMenu();
    });
  });
}

function menuListarTarefas() {
  const tarefas = listarTarefas();
  view.exibirListaTarefas(tarefas);

  rl.question('\nPressione Enter para continuar...', () => {
    exibirMenu();
  });
}

function menuRemoverTarefa() {
  const tarefas = listarTarefas();

  view.exibirListaTarefas(tarefas, '==== REMOVER TAREFA ====');
  if (tarefas.length === 0) {
    rl.question('\nPressione Enter para continuar...', () => {
      exibirMenu();
    });
    return;
  }

  rl.question('\nDigite o número da tarefa que deseja remover: ', (indice) => {
    const idx = parseInt(indice) - 1;

    if (idx >= 0 && idx < tarefas.length) {
      removerTarefa(idx);
      view.exibirMensagemSucesso('Tarefa removida com sucesso!');
    } else {
      view.exibirMensagemErro('Número de tarefa inválido!');
    }

    rl.question('\nPressione Enter para continuar...', () => {
      exibirMenu();
    });
  });
}

function menuMarcarConcluida() {
  const tarefas = listarTarefas();

  view.exibirListaTarefas(tarefas, '==== MARCAR TAREFA COMO CONCLUÍDA ====');
  if (tarefas.length === 0) {
    rl.question('\nPressione Enter para continuar...', () => {
      exibirMenu();
    });
    return;
  }

  rl.question(
    '\nDigite o número da tarefa que deseja marcar como concluída: ',
    (indice) => {
      const idx = parseInt(indice) - 1;

      if (idx >= 0 && idx < tarefas.length) {
        marcarConcluida(idx);
        view.exibirMensagemSucesso('Tarefa marcada como concluída!');
      } else {
        view.exibirMensagemErro('Número de tarefa inválido!');
      }

      rl.question('\nPressione Enter para continuar...', () => {
        exibirMenu();
      });
    }
  );
}

function menuFiltrarTarefas() {
  rl.question(
    'Digite a palavra-chave para filtrar as tarefas: ',
    (palavraChave) => {
      const tarefasFiltradas = filtrarTarefas(palavraChave);

      view.exibirListaTarefas(
        tarefasFiltradas,
        `==== TAREFAS FILTRADAS POR "${palavraChave}" ====`
      );

      rl.question('\nPressione Enter para continuar...', () => {
        exibirMenu();
      });
    }
  );
}

console.log('Inicializando o gerenciador de tarefas...');
setTimeout(exibirMenu, 1000);
