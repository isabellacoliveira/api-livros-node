
// a porta vai ser a PORT que vai escutar qual a porta que foi subida 

import app from "./src/app.js";

// a requisição 
const port = process.env.PORT || 3000; 

// deve escutar o app 
app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);
})

// temos que incluir a linha type : module no package json para trabalhar com import 