const { request, response } = require("../app");
const connection = require("../config/db");

async function = listarUsuarios(request, response){
    const query = "SELECT * FROM alunos;"

    connection.query(query, (err, results) => {
        if(results) {
            response
            .status(200)
            .json({
                success: true
                message: "Sucesso! Lista de Alunos"
                data: results
            });
        } else {

        }
    });
}

module.experts = listarUsuarios