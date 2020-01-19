const { Router } = require('express');

const DevController = require('./controller/DevController');
const SearchController = require('./controller/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
//routes.post('/devs/atualizar', DevController.update);
routes.get('/search', SearchController.index); 
//routes.delete('/devs', DevController.destroy);   

module.exports = routes;
 
//Métodos HTTP -> get, post, put, delete

/*
    Tipos de parâmetros:

    GET Query params: request.query (Filtros, ordenação, paginação)
    PUT, DELETE Route params: request.params (Identificar um recurso na alteração ou remoção)
    POST Body: request.body (Dados p/ criação ou alteração de um registro)

*/