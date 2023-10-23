// importacao do express
const express = require("express");
// importando a rota /livro criada no livro.js
const rotalivros = require('./routes/livros');

// Inicializando express
const app = express();

// deixa a rota /livros possivel de ser acessada
app.use('/livros', rotalivros);

// definindo a porta da aplicação
const port = 8000;

// fazendo uma requisição get e devolvendo 'ola mundo' na response
app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
});
