const Candidato = require("./Candidato");

module.exports = {
    async register (req, res) {
        const {
            nomeCompleto,
            email,
            dia,
            mes,
            ano,
            genero,
            status,
            cargo,
            rua,
            numero,
            bairro,
            cidade,
            cep,
            telefone1,
            telefone2,
            celular,
            contato,
            identidade,
            cpf,
            veiculo,
            licenca,
        } = req.body;

        const novoCandidato = new Candidato();

        novoCandidato.nomeCompleto = nomeCompleto;
        novoCandidato.email = email;
        novoCandidato.dia = dia;
        novoCandidato.mes = mes;
        novoCandidato.ano = ano;
        novoCandidato.genero = genero;
        novoCandidato.status = status;
        novoCandidato.cargo = cargo;
        novoCandidato.rua = rua;
        novoCandidato.numero = numero;
        novoCandidato.bairro = bairro;
        novoCandidato.cidade = cidade;
        novoCandidato.cep = cep;
        novoCandidato.telefone1 = telefone1;
        novoCandidato.telefone2 = telefone2;
        novoCandidato.celular = celular;
        novoCandidato.contato = contato;
        novoCandidato.identidade = identidade;
        novoCandidato.cpf = cpf;
        novoCandidato.veiculo = veiculo;
        novoCandidato.licenca = licenca;

        novoCandidato.save((err, savedCandidato) => {
            if(err){
                console.log(err);
                return res.status(500).send('gif do John Travolta perdido');
            }

            return res.status(200).send(savedCandidato);
        })
    }
}