// Importar pacote do express
const { Router }    = require("express");
// Instanciar o Router na variável router
const router        = Router();

// Importar funções para rotas
const {
    listarUsuarios,
    cadastrarAluno
} = require("..controllers/alunosController")
const listarUsuarios = require("../controllers/AlunosController");

router.get("/alunos", listarUsuarios)
router.post("/alunos/create")

module.exports = router