const express = require('express')
const router = express.Router();
const controller = require('../controllers/controller');


router.post('/vagas', controller.addNewVaga)
router.get('/vagas', controller.listTitulo)
router.get('/vagas/:id', controller.detalhesVaga)
router.put('/vagas/:id', controller.updateVaga)
router.delete('/vagas/:id', controller.deletarVaga)
router.get('/cargo/:cargo', controller.listVagaFiltrada)
router.get('/localizacao/:cidade', controller.listVagaCidade)


module.exports = router