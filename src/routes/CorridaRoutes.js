const express = require('express');
const router = express.Router();
const corridaController = require('../controller/CorridaController');

router.get('/', corridaController.listarCorridas);
router.post('/', corridaController.criarCorrida);
router.get('/:id', corridaController.listarCorridasById);
router.put('/:id/cancelar', corridaController.cancelarCorrida);
router.put('/:id/reativar', corridaController.reativarCorrida);
router.put('/:id', corridaController.updateCorrida);

module.exports = router;