import { Sequelize } from 'sequelize'

const conexao = new Sequelize('postgres://ovwdiexc:4HsRS_npEfCJCB47v-iITg_M_758Ysqs@isabelle.db.elephantsql.com/ovwdiexc')

try {
    await conexao.authenticate()
    console.log('Conectado com sucesso')
} catch (error) {
    console.error('Erro ao conectar', error)
}

export default conexao