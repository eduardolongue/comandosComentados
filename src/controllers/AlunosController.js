const res = require("express/lib/response");
const { request, response } = require("../app");
// importar a conexão com o banco de dados
const connection = require("../config/db");
//a função "async" realiza uma requisição de forma paralela ao sistema
//"request" recupera-se os dados enviados na requisição, pode ser visto abreviado em "req"
//"response" tem a resposabilidade de retornar as informações para quem requisitou, pode ser visto abreviado em "res"

async function listarUsuarios(request, response){

}
// Varivel para executar a consulta no banco
    const query = "SELECT * FROM alunos;"
// "err" retorna os erros na execrução
//"results" restorna a ação realizada com sucesso
connection.query(query, (err, results) => {
if(results) {
 response
 .status(200)
 .json({
 success: true,
 message: "Sucesso! Lista de Alunos",
 data: results
 });
} else {
  response
   .status(400)
   .json({
    success: false,
    message: "oops! não foi possivel listar as informações",
    data: err
   });
}; 

async function cadastrarAluno(request, response){
    //1° passo: recuperar variáveis
    //2° passo: montas query para inserir os dados
    //3° pesso: tentar executar a ação no banco
    //4° passo: definir retornos da requisição

// se recupera os dados preenchidos da requisição
    const params = Array(
        request.body.nome,
        request.body.dt_nascimento,
        request.body.time_do_coracao
    );

    const query = "INSERT INTO alunos(nome, dt_nascimento, time_do_coracao) values(?, ?, ?);"

    connection.query(query, params, (err, results) => {
        if (results) {
            response
             .status(201)
             .json({
                success: true,
                message: "Sucesso! Alunos cadastrado",
                data: results
             });

        }
    })
}

module.exports = {
    listarUsuarios,
    cadastrarAluno
}