import  express from "express";
import livros from "./livrosRoutes.js"

const routes = (app) => {
    // se chegarmos na requisicao localhost3000 vamos fazer um get
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Curso De Node"})
    })

    // app use para usar as outras rotas
    app.use(
        express.json(), 
        livros
    )
}

export default routes