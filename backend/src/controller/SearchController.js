const Dev = require('../models/dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response){ //buscar devs raio 10km, filtar por tecnologia
        const { latitude, longitude, techs } = request.query;
        const techsArray = parseStringAsArray(techs);
        
        const devs = await Dev.find({
            techs: {
                $in: techsArray, // $in operador do mongo, comparando tech da query com os do banco
            },
            location: { //filtrando por localização
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistancy: 10000, //meters, 10km
                },
            },
        });

        return response.json(devs);
    }
}