const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getEstudantes);
router.post('/', controller.addEstudantes);
router.get('/:id', controller.getEstudanteById);
router.get('/:id', controller.getEstudanteById);
router.put('/:id', controller.updateEstudante);
router.delete('/:id', controller.removeEstudante);


module.exports = router;