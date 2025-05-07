# Gerenciador de Tarefas para Terminal

Uma aplicação de linha de comando desenvolvida em Node.js para gerenciar tarefas diárias, permitindo adicionar, listar, filtrar e remover tarefas de forma simples e eficiente.

## Funcionalidades

- **Cadastrar tarefas** - Adicione novas tarefas com descrição personalizada
- **Listar tarefas** - Visualize todas as tarefas cadastradas com status e data de criação
- **Remover tarefas** - Elimine tarefas que não são mais necessárias
- **Marcar como concluída** - Indique quais tarefas foram finalizadas
- **Filtrar tarefas** - Busque tarefas específicas usando palavras-chave

## Recursos especiais

- Registro automático da data e hora de criação de cada tarefa
- Sistema de marcação de conclusão de tarefas
- Persistência de dados em arquivo JSON (seus dados são salvos entre sessões)
- Interface intuitiva por linha de comando

## Estrutura do projeto

O projeto segue o padrão de arquitetura MVC (Model-View-Controller):

```
seminarios-i/
├── app.js             # Ponto de entrada da aplicação
├── tarefaController.js # Controlador - lógica de negócios
├── tarefaModel.js     # Modelo - persistência e acesso aos dados
├── tarefaView.js      # Visualização - apresentação ao usuário
├── package.json       # Metadados do projeto
└── tarefas.json       # Arquivo de dados (criado automaticamente)
```

## Como instalar e usar

### Pré-requisitos

- Node.js instalado

### Instalação

1. Clone este repositório ou baixe os arquivos:

   ```bash
   git clone https://github.com/alanlimadev/tecweb2
   ```

2. Navegue para o diretório do projeto:

   ```bash
   cd seminarios-i
   ```

### Execução

Para iniciar a aplicação, execute:

```bash
node app.js
```

ou

```bash
npm start
```

## 📖 Como usar

Ao executar a aplicação, você verá um menu interativo com as seguintes opções:

1. **Adicionar tarefa** - Cadastre uma nova tarefa fornecendo sua descrição
2. **Listar tarefas** - Veja todas as tarefas cadastradas
3. **Remover tarefa** - Selecione uma tarefa pelo número para removê-la
4. **Marcar tarefa como concluída** - Altere o status de uma tarefa para concluída
5. **Filtrar tarefas por palavra-chave** - Encontre tarefas específicas
6. **Sair** - Encerre a aplicação

Navegue pelo menu digitando o número da opção desejada e seguindo as instruções na tela.

## Tecnologias utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **readline** - Módulo para interação via terminal
- **fs** - Módulo para manipulação de arquivos

## Exemplos de uso

### Adicionando uma tarefa

```
==== GERENCIADOR DE TAREFAS ====
1. Adicionar tarefa
2. Listar tarefas
3. Remover tarefa
4. Marcar tarefa como concluída
5. Filtrar tarefas por palavra-chave
0. Sair
===============================
Escolha uma opção: 1

Digite a descrição da tarefa: Comprar leite

Tarefa adicionada com sucesso!
```

### Listando tarefas

```
==== LISTA DE TAREFAS ====
1. [ ] Comprar leite (Criada em: 06/05/2025, 14:30:25)
2. [✓] Pagar conta de luz (Criada em: 05/05/2025, 10:15:10)
```
