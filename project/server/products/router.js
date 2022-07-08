const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.get('/', controller.all);
router.get('/:prodId', controller.get);
router.post('/', controller.save);
router.put('/:prodId', controller.update);
router.delete('/:prodId', controller.delete);

router.post('/cart/:prodId', controller.addItem);
router.delete('/cart/:prodId', controller.removeItem);
router.put('/quantity/add/:prodId', controller.addQuantity);
router.put('/quantity/minus/:prodId', controller.minusQuantity);

module.exports = router;