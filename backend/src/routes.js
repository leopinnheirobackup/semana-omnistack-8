// Importando express
const express = require('express');
// Importando controller
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

// Criando objeto de rotas.
const routes = express.Router();

// GETs
routes.get('/devs', DevController.index); 

// POSTs
//Cria um cadastro de desenvolvedor.
routes.post('/devs', DevController.store);
//Da like em um desenvolvedor.
routes.post('/devs/:devId/likes', LikeController.store);
//Da dislike em um desenvolvedor.
routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;