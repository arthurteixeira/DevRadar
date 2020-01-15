const mongoose = require('mongoose');
const PointSchema = new mongoose.Schema({ //tipo localização do cadastro dev
    type: {
        type: String,
        enum: ['Point'],
        required: true,
    },  
    coordinates: {
        type: [Number],
        required: true,
    }
})

module.exports = PointSchema;