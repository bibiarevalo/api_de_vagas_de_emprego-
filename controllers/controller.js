const database = require('../dataBase/dataBase.js')
const Vaga = require('../models/Vagas.js');

exports.addNewVaga = async (req, res) => {
    try {
        const { titulo, descricao, cargo, cidade, salario } = req.body;
        const vaga = await Vaga.create({ titulo, descricao, cargo, cidade, salario });
        return res.status(201).json(vaga);
    } catch (error) {
        return res.status(400).json({ error: 'Erro ao criar vaga.' });
    }
};


exports.listTitulo = async (req, res) => {
    try {
        const vagas = await Vaga.findAll({ attributes: ['id', 'titulo'] });
        return res.status(200).json(vagas);
    } catch (error) {
        return res.status(404).json({ error: 'Erro ao buscar vagas.' });
    }
};


exports.detalhesVaga = async (req, res) => {
    try {
        const vaga = await Vaga.findByPk(req.params.id);
        if (vaga) {
            return res.status(200).json(vaga);
        } else {
            return res.status(404).json({ error: 'Vaga não encontrada.' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Erro interno ao buscar vaga.' });
    }
};


exports.updateVaga = async (req, res) => {
    try {
        const { titulo, descricao, cargo, cidade, salario } = req.body;
        const vaga = await Vaga.findByPk(req.params.id);
        if (vaga) {
            await vaga.update({ titulo, descricao, cargo, cidade, salario });
            return res.status(200).json(vaga);
        } else {
            return res.status(404).json({ error: 'Vaga não encontrada.' });
        }
    } catch (error) {
        return res.status(400).json({ error: 'Erro ao atualizar vaga.' });
    }
};

exports.deletarVaga = async (req, res) => {
    try {
        const vaga = await Vaga.findByPk(req.params.id);
        if (vaga) {
            await vaga.destroy();
            return res.status(200).json({ message: 'Vaga removida com sucesso.' });
        } else {
            return res.status(404).json({ error: 'Vaga não encontrada.' });
        }
    } catch (error) {
        return res.status(400).json({ error: 'Erro ao remover vaga.' });
    }
};


exports.listVagaFiltrada = async (req, res) => {
    try {
        const vagas = await Vaga.findAll({ where: { cargo: req.params.cargo } });
        return res.status(200).json(vagas);
    } catch (error) {
        return res.status(404).json({ error: 'Erro ao buscar vagas por cargo.' });
    }
};


exports.listVagaCidade = async (req, res) => {
    try {
        const vagas = await Vaga.findAll({ where: { cidade: req.params.cidade } });
        return res.status(200).json(vagas);
    } catch (error) {
        return res.status(400).json({ error: 'Erro ao buscar vagas por cidade.' });
    }
};