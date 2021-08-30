const express = require('express');
const routes = require("./routes");
const swaggerDocs = require("./swagger.json");
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const cors = require("cors");
const server = express ();
const enableCors = cors({origin:'http:localhost:3001'})

mongoose.connect('mongodb+srv://newUser:x46JKttD9e6Zyec5@cluster0.thfaw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
});

server
.options('registro', enableCors)
.post('/registro', enableCors, express.json(), (req, res) =>{})
server.use(express.json());
server.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
server.use(routes);
server.listen('5000', () => {
    console.log('rodando na porta 5000');
})