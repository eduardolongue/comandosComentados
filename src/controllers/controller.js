function listarDados(request, response) {
    response.send('Retorno de lista de informações do bando de dados');
}

function gravarDados(request, response) {
    response.send('Método utilizado para salvar informações!');
} 

function atualizarDados(request, response) {
    response.send('Método utilizado para editar informações!');
}

function deletarDados(response, response) {
    response.send('Método utilizado para deletar informações!');
}

module.exports = {
    listarDados, 
    gravarDados,
    atualizarDados,
    deletarDados
}