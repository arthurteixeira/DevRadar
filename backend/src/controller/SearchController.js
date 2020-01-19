const Dev = require('../models/dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response){ //buscar devs raio 10km, filtar por tecnologia
        const { latitude, longitude, techs } = request.query;
        const techsArray = parseStringAsArray(techs);
        const devs = await Dev.find({
            techs: { $in: techsArray },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000
                }
            }
        });
        return response.json({ devs });
    }
}