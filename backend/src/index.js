const express = require('express'); //usar rotas
const mongoose = require('mongoose'); //usar mongodb
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://arthurteixeira:gremio@cluster0-xqarv.mongodb.net/week10?retryWrites=true&w=majority', { //connect to cluster
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333); //port used
