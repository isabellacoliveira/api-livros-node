import express from "express";
import db from "./config/dbConnect.js"
import livros from "./models/Livro.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro referente ao banco"))
db.once("open", () => {
  console.log(`Conexao com o banco feita com sucesso`)
})

const app = express();

app.use(express.json())

// para obter as rotas
routes(app)

app.post('/livros', (req, res) => {
  livros.push(req.body)
  res.status(201).send('Livro cadastrado com sucesso')
})

app.put('/livros/:id', (req, res) => {
   let index = buscaLivro(req.params.id)
   livros[index].titulo = req.body.titulo
   res.json(livros)
})

function buscaLivro(id){
  return livros.findIndex(livro => livro.id == id) 
}

app.get('/livros/:id', (req, res) => {
   let index = buscaLivro(req.params.id)
   res.json(livros[index])
})

app.delete('/livros/:id', (req, res) => {
  let { id } = req.params
  let index = buscaLivro(id)
  livros.slice(index, 1)
   res.send(`livro ${index} removido com sucesso`)
})

export default app
