# Sistema Bancário - Node.js

Projeto desenvolvido em Node.js com o objetivo de praticar lógica de programação, manipulação de dados, organização de código em módulos e validação de entradas do usuário.

## Funcionalidades

- Criação de contas
- Login de usuários
- Consulta de saldo
- Depósito
- Saque
- Extrato
- Validação de login duplicado
- Validação de valores inválidos
- Tratamento de entradas não numéricas

## Tecnologias Utilizadas

- JavaScript
- Node.js
- Readline

## Estrutura do Projeto

```text
Sistema Bancário
│
├── index.js
├── menuPrincipal.js
├── menuConta.js
├── formacaoConta.js
├── login.js
├── deposito.js
├── sacar.js
├── conta.js
└── rl.js
```

## Regras Implementadas

### Criação de Conta

- Não permite login duplicado.
- Cada conta recebe um ID único.

### Depósito

- Não permite valores menores ou iguais a zero.
- Não permite entrada de letras ou caracteres inválidos.

### Saque

- Não permite sacar valores maiores que o saldo.
- Não permite valores menores ou iguais a zero.
- Não permite entrada de letras ou caracteres inválidos.

### Extrato

O sistema registra todas as movimentações realizadas na conta.

Exemplo:

```text
Foi realizado um Deposito de R$1000
TOTAL NA CONTA: 1000

Foi realizado um Saque de R$100
TOTAL NA CONTA: 900
```

## Como Executar

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta:

```bash
cd nome-do-projeto
```

Execute:

```bash
node index.js
```

## Aprendizados

Durante o desenvolvimento deste projeto foram praticados conceitos como:

- Funções
- Módulos ES6
- Importação e exportação
- Arrays
- Objetos
- Condicionais
- Validação de dados
- Organização de código
- Tratamento de erros
- Lógica de programação

## Melhorias Futuras

- Migração para TypeScript
- Persistência de dados em banco de dados
- Interface Web
- API REST
- Sistema de transferência entre contas
- Histórico avançado de transações

## Autor

João Lucas Muniz Wietchesky de Souza

GitHub: https://github.com/kartma01
LinkedIn: https://www.linkedin.com/in/joao-lucas-wietchesky/
