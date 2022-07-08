const express = require('express');
const controller = require('../controller/productController');
const router = express.Router();

router.get('/', controller.all);
router.get('/:prodId', controller.get);
router.post('/', controller.save);
router.put('/:prodId', controller.update);
router.delete('/:prodId', controller.delete);

module.exports = router;