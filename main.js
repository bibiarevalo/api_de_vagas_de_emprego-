const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routers/router');
const sequelize = require('./dataBase/dataBase');
const Vagas = require('./models/Vagas.js')

async function startServer() {
    try {
        await sequelize.sync(); 
        console.log('Banco de dados sincronizado');
    } catch (err) {
        console.log('Erro ao sincronizar banco de dados', err);
    }

    app.use(bodyParser.json());

    app.use('/vaga', router);

    app.listen(3000, () => console.log('OK'));
}


startServer()

module.exports = app 