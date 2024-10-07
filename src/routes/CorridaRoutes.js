const express = require('express');
const router = express.Router();
const corridaController = require('../controller/CorridaController');

router.post('/', corridaController.criarCorrida);
router.put('/:id/cancelar', corridaController.cancelarCorrida);
router.put('/:id/reativar', corridaController.reativarCorrida);
router.get('/', corridaController.listarCorridas);

module.exports = router;