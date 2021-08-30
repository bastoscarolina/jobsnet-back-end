const express = require('express');
const ControladorCandidato = require('./ControladorCandidato');

const routes = new express.Router();

routes.post('/registro', ControladorCandidato.register);
routes.get('/', (req, res) => {
    res.send('Jobs Net');
});
module.exports = routes;