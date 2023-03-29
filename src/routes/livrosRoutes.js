import  express from "express";
import LivrosController from "../controllers/livrosController";

const router = express.Router()

router
// primeiro parametro, rota caso haja o get 
// segundo, o que tem que acontecer
    .get("/livros", LivrosController.listarLivros)

export default router 