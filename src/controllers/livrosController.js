import livros from "../models/Livro";

class LivrosController {
    static listarLivros = (req, res) => {
        livros.find((erro, livros) => {
            res.status(200).send(livros);
          })
    }
}

export default LivrosController