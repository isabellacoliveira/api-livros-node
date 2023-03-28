import express from "express";

const app = express();

// para ele reconhecer a requisicao POST
app.use(express.json())

const livros = [
  {id: 1, titulo: "Senhor dos Aneis"},
  {id: 2, titulo: "O Hobbit"}
]

app.get('/', (req, res) => {
  res.status(200).send('Curso de Node');
}) 

app.get('/livros', (req, res) => {
  res.status(200).json(livros)
})

app.post('/livros', (req, res) => {
  livros.push(req.body)
  res.status(201).send('Livro cadastrado com sucesso')
})

// localizar a posicao do array que possui aquele id especifico
app.put('/livros/:id', (req, res) => {
  // aqui vai estar o id que passamos na requisicao 
   let index = buscaLivro(req.params.id)
  // vai receber o corpo da requisicao
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
  //  let index = buscaLivro(req.params.id) ao inves de fazer isso 
  // podemos fazer 
  let { id } = req.params
  let index = buscaLivro(id)
  // posicao de inicio e quantos elementos vamos excluir 
  livros.slice(index, 1)
   res.send(`livro ${index} removido com sucesso`)
})

export default app
