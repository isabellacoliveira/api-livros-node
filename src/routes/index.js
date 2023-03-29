import express from "express";
import livros from "./livrosRoutes.js"
import autores from "./autoresRoutes.js"
// o index é o arquivo que centraliza as rotas 

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "Curso de node"})
  })

  app.use(
    express.json(),
    livros, 
    autores
  )
}

export default routes
