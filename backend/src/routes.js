const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/dev');

const routes = Router();


routes.post('/devs', async (request, response) => {
    const { github_username, techs } = request.body;
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    const { name = login, avatar_url, bio } = apiResponse.data;
    const techsArray = techs.split(',').map(tech => tech.trim());
    
    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray
    });

    return response.json(dev);
});

module.exports = routes;

//Métodos HTTP -> get, post, put, delete

/*
    Tipos de parâmetros:

    GET Query params: request.query (Filtros, ordenação, paginação)
    PUT, DELETE Route params: request.params (Identificar um recurso na alteração ou remoção)
    POST Body: request.body (Dados p/ criação ou alteração de um registro)

*/