<p align="center"><a href="https://imgur.com/mV8Bhni"><img src="https://i.imgur.com/mV8Bhni.png" title="source: imgur.com" /></a></p>

## Índice

- [Índice](#índice)
- [Descrição do Projeto](#-descrição-do-projeto)
- [Resquisitos da aplicação](#-requisitos-da-aplicação)
- [Estrutura](#-estrutura)
- [Instalação](#-instalação)

## 💾 Descrição do projeto

Este projeto foi desenvolvido em duas fases. A primeira consiste em criar uma API em Node.js, aliado ao express e sequelize, a qual se conectará a um banco de dados MySQL. A segunda fase trás o desafio de replicar uma tela desenhada no Figma, utilizando Vue.js, onde serão realizadas as consultas à API criada e serão exibidos os seus dados.

## 🌐 Requisitos da aplicação

- [Node.js](https://nodejs.org/en/)
- [Vue.js](https://vuejs.org/)

## 🏗️ Estrutura

```bash
teste-tecnico/
├── README.md # este arquivo
├── backend # componente responsável por processar os dados através das requisições
│   ├── package.json # principal componente da aplicação
│   ├── package-lock.json # arquivo responsável por otimizar a instalação em outros ambientes
│   ├── routers.js # inicia a aplicação
│   ├── server.js # ouve a porta configurada
│   ├── .env # variáveis de ambiente 
│   └── src
│       ├── config
│       │   ├── config.js
│       ├── controllers.js
│       │   ├── ordersController.js
│       │   ├── usersController.js
│       ├── models
│       │   ├── buyers.js
│       │   ├── cnpjs.js
│       │   ├── index.js
│       │   ├── orders.js
│       │   ├── providers.js
│       │   └── users.js
│       ├── services
│       │   ├── ordersService.js
│       │   └── usersService.js
├── frontend # interface que irá consumir os dados da nossa API
│   ├── package.json # principal componente da aplicação
│   ├── package-lock.json # arquivo responsável por otimizar a instalação em outros ambientes
│   ├── index.html
│   ├── vite.config.js
│   ├── README.md
│   ├── public
│   │   ├── favicon.svg
│   └── src
│       ├── App.vue
│       ├── main.js
│       ├── assets
│       │   ├── icon-handshake-blue.svg
│       │   └── icon-handshake-green.svg
│       │   └── logo.svg
│       ├── components
│       │   ├── MyReceipts.vue
│       │   └── MySideBar.vue
│       ├── pages
│       │   └── TheOrdersPage.vue
│       ├── store
│       │   ├── orders.js
│       │   ├── actions.js
│       │   ├── getters.js
│       │   ├── mutations.js
│       │   └── index.js

```


## 💻 Instalação

A aplicação possui dois componentes, o FrontEnd desenvolvido em [Vue.js](https://vuejs.org/) e o BackEnd desenvolvido em [Node.js](https://nodejs.org/en/).

Para que tudo funcione, é necessário instalar primeiramente o BackEnd, pois assim o FrontEnd terá dados para consumir e serem devidamente exibidos.

#### Instalação do BackEnd

- Acesse a pasta `./teste-tecnico-cf/backend`;
- Instalar a aplicação utilizando o comando `npm install`;
- O processo não deve retornar erros. `Warns` *(Avisos)* não impedem seu funcionamento;
- Rodar a aplicação com `npm start`;
-  Esse aplicativo requer, **excepcionalmente**, um arquivo `.env`, que deve ser inserido na raiz do projeto (`./teste-tecnico-cf/backend`); 
    - Neste arquivo deve-se ser inserido as seguintes variáveis de uma banco de dados SQL:
        -  DB_HOST='nome do Host'
        -  DB_USER='user de acesso ao banco'
        -  DB_PASSWORD='insira o password de acesso ao banco'
        -  DB_NAME=cashforce_v3 //exemplo - nome do schema
        -  PORT=3000 //exemplo - porta que a aplicação backend irá rodar

#### Instalação do FrontEnd

- Acesse a pasta `./teste-tecnico-cf/frontend`;
- Instalar a aplicação utilizando o comando `npm install`;
- O processo não deve retornar erros. `Warns` *(Avisos)* não impedem seu funcionamento;
- Rodar a aplicação com `npm run dev`;
- Por padrão, essa aplicação funciona a partir da porta `5173`;







