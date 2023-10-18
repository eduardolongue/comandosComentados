# Documentação da Api
* Escolher local do computador para criar a pasta do projeto
*Abrir o gitBash nesta pasta

```
mkdir NOME_PROJETO
```
Acessar a pasta do projeto
```
cd NOME_PROJETO
```
Abrir a pasta no VSCode
```
Code .
```
Iniciar o gerenciador de pacotes Node
```
npm init -y
```
Criar arquivo .gitignore: arquivos e pastas que não vão para o github
```
touch .gitignore
```
Criar arquivo .env: armazenará as variáveis do ambiente
```
touch .env
```
Instalar pacotes da API
```
npm i express nodemon dotenv
```
* express: será o servidor da api
* nodemon: atualizar os arquivos alterados sem parar o servidor
* dotenv: gerenciador de variáveis de ambiente

Informar arquivos e pastas no .gitignore
```
node_modules
.env
```
Criar pasta src para estrutura do projeto
```
mkdir src
```
Criar arquivo server.js na pasta src
```
touch src/server.js
```
Configurar o servidor
```
// Importar pacote do express
const  express = require('express');
// Instanciar o express na variável app
const app = express()
// Importar o pacote dotenv
const dotenv = require('dotenv').config();
// Definir a porta do servidor
const PORT = process.env.PORT || 1903;

// Testar servidor
app.listen(PORT, () => console.log(`Running at port ${PORT}`))
```

Criar comando para rodar o servidor
```
"start":"nodemon src/server.js"
```

Rodar o comando no terminal
```
npm run start
```

## Criar estrutura para o projeto

Criar arquivo app.js na pasta src
```
Touch src/app.js
```

## Rodar o comando 'npm install' sempre que fizer um clone do gitHub

## Criar o arquivo .env e .env.example

```
touch .env
```
* Criar arquivo para salvar as variáveis necessárias da aplicação sem os valores
```
touch .env.example
```
* Criar pasta routes
```
mkdir routes

```
* Criar arquivo crudRouter.js dentro das pasta routes
```
nano crudRouter.js 
```

### Ctrl + O: Salvar o arquivo
### Enter: confirmar o nome do arquivo
### Ctrl + X: fechar o arquivo

* Digitar o código no arquivo criado
```

// Importar pacote do express
const { Router }    = require("express");
// Instanciar o Router na variável router
const router        = Router();
// Importar funções do controller para a rota acessar
const { listarDados } = require('../controllers/controller');

router.get('/api', listarDados);

router.post('/api', (request, response) => {
    response.send('Método utilizado para salvar informações!');
    console.log('post')
    console.log(request)
});

router.put('/api/:id', (request, response) => {
    response.send('Método utilizado para editar informações!');
    console.log('put')
    console.log('id: ', request.params.id)
});

router.delete('/api/:id', (request, response) => {
    response.send('Método utilizado para deletar informações!');
    console.log('delete')
});

module.exports = router;

```
### CRIAÇÃO DE CONTROLLERS
* Arquivos para processar as requisições das rotas

<hr>

### Criar pasta de controllers

```
mkdir src/controllers
```

### Criar arquivo controller.js

```
touch src/controllers/controller.js
```

### Criar funções para processar as requisições das rotas

```
function listarDados(request, response) {
    function listarDados(request, response) {
    response.send('Retorno de lista de informações do bando de dados');
    console.log('get')
}

module.exports = {
    listarDados
}
}
```