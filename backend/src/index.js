const express = require('express'); //usar rotas
const mongoose = require('mongoose'); //usar mongodb
const routes = require('./routes');
const cors = require('cors');
const http = require('http');
const { setupWebSocket } = require('./websocket');

mongoose.connect('mongodb+srv://arthurteixeira:gremio@cluster0-xqarv.mongodb.net/week10?retryWrites=true&w=majority', { //connect to cluster
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();
const server = http.Server(app);

setupWebSocket(server);

app.use(cors());
app.use(express.json());
app.use(routes);
 
server.listen(3333); //port used

// yarn add cors -- usar api com outros tipo 3000 e 3333