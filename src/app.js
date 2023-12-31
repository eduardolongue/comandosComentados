// Importar pacote do express
const express = require("express");

// Instanciar o express na variável app
const app = express();

// Importar as rotas para serem executadas na aplicação
const crudRouter = require('./routes/crudRouter');
// Importar as rotas para serem executadas na aplicação
const AlunosRouter = require('./routes/crudRouter');

// Importar o pacote dotenv
const dotenv = require('dotenv').config();

// Habilitar a utilização do crudRouter
app.use('/api', crudRouter);
// Habilitar a utilização do AlunosRouter
app.use('/api', AlunosRouter);

// Setar a porta do servidor, a partir do arquivo .env
app.set('port', process.env.PORT);

// Exportar as configurações do app para outros arquivos acessarem
module.exports = app;