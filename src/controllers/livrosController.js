import livros from "../models/Livro";

class LivrosController {
    static listarLivros = (req, res) => {
        livros.find((erro, livros) => {
            res.status(200).send(livros);
          })
    } 

    static listarLivrosPorId = (req, res) => {
        const id = req.params.id; 

        livros.findById(id, (erro, livros) => {
            if(erro){
                res.status(400).send({message: `${erro.message} = Id do livro não localizado`})
            } else {
                res.status(200).send(livros); 
            }
        })
    } 


    static cadastrarLivros = (req, res) => {
        let livro = new livros(req.body)
        livro.save((erro) => {
            if(erro){
                res.status(500).send({message:`${erro.message} - falha ao cadastrar livro`});
            } else {
                res.status(201).send(livro.toJSON());
            }
          }) 
    }

    static atualizarLivro = (req, res) => {
        // vamos passar o id e o conteudo que for atualizado 
        const id =  req.params.id;
        // comando de mongo db 
        // set, para atualizar o corpo do id correspondente 
        livros.findByIdAndUpdate(id, {$set: req.body}, (erro) => {
            if(!erro){
                res.status(200).send({message: 'Livro atualizado com sucesso'}); 
            } else {
                res.status(500).send({message: erro.message});
            }
        })
    }

    static excluirLivro = (req, res) => {
        const id =  req.params.id;
        livros.findByIdAndDelete(id, (erro) => {
            if(!erro){
                res.status(200).send({message: 'Livro removido com sucesso'}); 
            } else {
                res.status(500).send({message: erro.message}); 
            }
        })
    }
}

export default LivrosController