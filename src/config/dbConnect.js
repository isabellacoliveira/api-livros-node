import mongoose from "mongoose";

// aqui ficara a string de conexao
// clicar em database (no mongo) e em connect
mongoose.connect("mongodb+srv://NODEJS:PPATiPT1YBBoLtYG@nodejs.mce8f6c.mongodb.net/?")

// exportar a conexao 

let db = mongoose.connection 

export default db 