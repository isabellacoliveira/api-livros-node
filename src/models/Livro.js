// precisamos dizer que eh um schema
import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id:{type: String, required: true},
        titulo:{type: String, required: true},
        editora:{type: String, required: true},
        numeroPaginas:{type: Number}
    }
)

// isso representa a nova colecao que sera criada no banco 
// cria automatico com esse comando 
const livros = mongoose.model(`livros`, livroSchema)

export default livros
