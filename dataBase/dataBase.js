const { Sequelize } = require('sequelize');

const conexao = new Sequelize('URL AQUI'); 

async function conectar() {
    try {
        await conexao.authenticate(); 
        console.log('Conectado com sucesso');
    } catch (error) {
        console.error('Erro ao conectar', error);
    }
}

conectar(); 

module.exports = conexao; 