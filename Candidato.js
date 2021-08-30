const mongoose = require('mongoose');

const CandidatoSchema = new mongoose.Schema({
    nomeCompleto: {type: String, unique: false},
    email: {type: String, unique: true},
    dia:{type: String, unique: false},
    mes:{type: String, unique: false},
    ano:{type: String, unique: false},
    genero:{type: String, unique: false},
    status: {type: String, unique: false},
    cargo: {type: String, unique: false},
    rua:{type: String, unique: false},
    numero:{type: String, unique: false},
    bairro:{type: String, unique: false},
    cidade:{type: String, unique: false},
    cep:{type: String, unique: false},
    telefone1:{type: String, unique: true},
    telefone2:{type: String, unique: true},
    celular:{type: String, unique: true},
    contato:{type: String, unique: false},
    identidade:{type: String, unique: true},
    cpf:{type: String, unique: true},
    veiculo:{type: String, unique: false},
    licenca:{type: String, unique: false}
}, {
    timestamps:true
});

module.exports = mongoose.model('Candidato', CandidatoSchema);