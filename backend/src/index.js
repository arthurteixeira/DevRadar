const express = require("express"); //usar rotas
const mongoose = require("mongoose"); //usar mongodb
const routes = require("./routes");
const cors = require("cors");
const http = require("http");
const { setupWebSocket } = require("./websocket");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
    //connect to cluster
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();
const server = http.Server(app);

setupWebSocket(server);

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333); //port used

// yarn add cors -- usar api com outros tipo 3000 e 3333
