import  express from "express";
import LivrosController from "../controllers/livrosController.js";

const router = express.Router()

router
// primeiro parametro, rota caso haja o get 
// segundo, o que tem que acontecer
    .get("/livros", LivrosController.listarLivros)
    .get("/livros/:id", LivrosController.listarLivrosPorId)
    .post("/livros", LivrosController.cadastrarLivros)
    .put("/livros/:id", LivrosController.atualizarLivro)
    .delete("/livros/:id", LivrosController.excluirLivro)

export default router 