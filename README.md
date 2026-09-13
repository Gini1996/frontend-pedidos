# JhowExpress

Aplicação frontend em Angular para cadastro e gestão de pedidos da Jhow Express. O projeto foi criado com Angular CLI e utiliza arquitetura de componentes standalone, rotas e formulário reativo para suporte ao fluxo principal do sistema.

## Visão geral

Este frontend atende ao módulo de pedidos com:

- layout de sidebar com menu de navegação
- cadastro de pedidos
- feedback visual por toast personalizado
- formulário reativo com validação
- integração com API REST

A rota inicial redireciona provisoriamente para a tela de cadastro de pedidos:

- `/order-registration`

## Tecnologias

- Angular 21
- TypeScript
- RxJS
- Angular Reactive Forms
- Angular Router
- SCSS
- Vitest (estrutura de testes configurada pelo projeto)

## Estrutura principal

```text
src/
├── app/
│   ├── components/
│   │   └── order-registration/
│   │       ├── order-registration.ts
│   │       ├── order-registration.html
│   │       └── order-registration.scss
        └── order-report/
│   │       ├── order-report.ts
│   │       ├── order-report.html
│   │       └── order-report.scss
        └── order-status/
│   │       ├── order-status.ts
│   │       ├── order-status.html
│   │       └── order-status.scss
│   ├── app.ts
│   ├── app.html
│   ├── app.routes.ts
│   └── app.scss
├── styles.scss
├── main.ts
└── index.html
```

## Funcionalidades atuais

### Cadastro de pedidos

A tela principal permite registrar um pedido com:

- número do pedido
- item
- quantidade

Ao enviar o formulário, a aplicação faz uma requisição POST para a API:

```http
POST /pedidos/cadastro
```

Em caso de sucesso, exibe um toast com mensagem de confirmação. Em caso de erro, mostra uma mensagem de falha.

### Menu lateral

O layout inclui:

- sidebar com itens de navegação
- grupo expansível "Pedidos"
- botão para recolher/expandir o menu
- área de rodapé com marca da empresa

## Requisitos

Antes de iniciar, certifique-se de ter instalado:

- Node.js
- npm
- Angular CLI 

## Como executar

Clone o projeto e instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm start
```

Ou:

```bash
ng serve
```

A aplicação estará disponível em:

```text
http://localhost:4200
```

O Angular recarrega automaticamente quando você altera arquivos do projeto.

## Build

Para gerar a build da aplicação:

```bash
npm run build
```

Os artefatos compilados serão armazenados em `dist/frontend-pedidos`.

## Testes

Para executar os testes unitários:

```bash
npm test
```

## Observações de integração

Como o sistema depende da API de pedidos, é necessário que o backend esteja disponível antes de testar.

## Tradução adaptada da documentação padrão do Angular

Abaixo está a documentação padrão do Angular traduzida e contextualizada para este projeto.

### Servidor de desenvolvimento

Para iniciar um servidor local de desenvolvimento, execute:

```bash
ng serve
```

Assim que o servidor estiver rodando, abra o navegador e acesse `http://localhost:4200/`. A aplicação será recarregada automaticamente sempre que qualquer arquivo de origem for alterado.

### Geração de código

O Angular CLI inclui ferramentas poderosas de scaffolding. Para gerar um novo componente, execute:

```bash
ng generate component nome-do-componente
```

Para consultar a lista completa de schematics disponíveis, como `components`, `directives` e `pipes`, execute:

```bash
ng generate --help
```

### Compilação

Para compilar o projeto, execute:

```bash
ng build
```

Isso compila a aplicação e salva os artefatos na pasta `dist/`. Por padrão, o build de produção otimiza o desempenho e a velocidade da aplicação.

### Testes unitários

Para executar testes unitários com o runner [Vitest](https://vitest.dev/), use:

```bash
ng test
```

### Testes end-to-end

Para testar a aplicação de ponta a ponta, execute:

```bash
ng e2e
```

O Angular CLI não inclui um framework de testes e2e por padrão; você pode escolher a ferramenta que melhor se adequar ao projeto.

### Recursos adicionais

Para mais informações sobre o Angular CLI, incluindo referências detalhadas de comandos, consulte a documentação oficial:

- [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)

## Conclusão

Este projeto representa uma interface web para o fluxo de pedidos da Jhow Express, com foco em usabilidade, organização visual e integração com backend. A estrutura atual já permite cadastro e feedback ao usuário, servindo como base para expansão para módulos como consulta, relatório e gestão completa de pedidos.
