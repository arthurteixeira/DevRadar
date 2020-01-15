const { Router } = require('express');
const routes = Router();

routes.post('/devs', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello World!'});
});

//Métodos HTTP -> get, post, put, delete

/*
    Tipos de parâmetros:

    GET Query params: request.query (Filtros, ordenação, paginação)
    PUT, DELETE Route params: request.params (Identificar um recurso na alteração ou remoção)
    POST Body: request.body (Dados p/ criação ou alteração de um registro)

*/

module.exports = routes;