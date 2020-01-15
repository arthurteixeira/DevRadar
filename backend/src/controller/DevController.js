const axios = require('axios');
const Dev = require('../models/dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

//index, show, store, update, destroy

module.exports = {
    async index(request, response){
        const devs = await Dev.find();
        return response.json(devs);
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body; //pegando requisicoes das rotas

        let dev = await Dev.findOne({ github_username }); //procurando no banco se ja tem obj com esse username
        if(!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`); //api github 
            const { name = login, avatar_url, bio } = apiResponse.data; //pegando da api
            const techsArray = parseStringAsArray(techs); //fazendo parser das tecnologias     

            const location = { //tipo de cordenada
                type: 'Point',
                coordinates: [longitude, latitude],
            };        

            dev = await Dev.create({ //criacao do obj no banco
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });
        }       
    
        return response.json(dev);
    }
};