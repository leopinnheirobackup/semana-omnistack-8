//Importando express
const express = require('express');
// Importa o moongose
const mongoose = require('mongoose');
// Importando o cors.
const cors = require('cors');

// Importando as rotas.
const routes = require('./routes');

//Criação do servidor
const server = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-0w4gj.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333); //Indica qual a porta do servidor