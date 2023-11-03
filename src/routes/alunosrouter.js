// Importar pacote do express
const { Router }    = require("express");
// Instanciar o Router na variável router
const router        = Router();

const listarUsuarios = require("../controllers/AlunosController")

router.get("/alunos", listarUsuarios)

module.exports = router