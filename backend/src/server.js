//Importando express
const express = require('express');
// Importa o moongose
const mongoose = require('mongoose');
// Importando o cors.
const cors = require('cors');

// Importando as rotas.
const routes = require('./routes');

//Criação do servidor
const app = express();
const server = require('http').Server(app);
// Importando o socket.io
const io = require('socket.io')(server);

const connectedUsers = {};

io.on('connection', socket => {
    const { user } = socket.handshake.query;
    connectedUsers[user] = socket.id;
});

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-0w4gj.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.use((request, response, next) => {
    request.io = io;
    request.connectedUsers = connectedUsers;

    return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333); //Indica qual a porta do servidor