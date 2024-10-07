const corridaModel = require('../models/corridaModel');

const criarCorrida = (req, res) => {
    const { usuario, ponto_partida, ponto_destino, custo_estimado } = req.body;

   
    if (!usuario || !ponto_partida || !ponto_destino || !custo_estimado) {
        return res.status(400).json({ erro: 'Todos os campos são obrigatórios: usuário, ponto de partida, ponto de destino e custo estimado.' });
    }

    corridaModel.criarCorrida({ usuario, ponto_partida, ponto_destino, custo_estimado }, (err, corrida) => {
        if (err) return res.status(500).json({ erro: 'Erro ao criar corrida' });
        res.status(201).json(corrida);
    });
};

const cancelarCorrida = (req, res) => {
    const { id } = req.params;
    corridaModel.cancelarCorrida(id, (err, corrida) => {
        if (err) return res.status(500).json({ erro: "Erro ao cancelar corrida" });
        res.status(200).json(corrida);
    });
};

const listarCorridas = (req, res) => {
    corridaModel.buscarCorridas((err, corridas) => {
        if (err) return res.status(500).json({ erro: "Erro ao buscar corridas" });
        res.status(200).json(corridas);
    });
};

const reativarCorrida = (req, res) => {
    const { id } = req.params;

    corridaModel.reativarCorrida(id, (err, corrida) => {
        if (err) {
            return res.status(400).json({ erro: err.message });
        }
        res.status(200).json(corrida);
    });
};
module.exports = { criarCorrida, cancelarCorrida, listarCorridas, reativarCorrida };