const { Sequelize } = require('sequelize');

const conexao = new Sequelize('postgres://ovwdiexc:4HsRS_npEfCJCB47v-iITg_M_758Ysqs@isabelle.db.elephantsql.com/ovwdiexc'); 

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