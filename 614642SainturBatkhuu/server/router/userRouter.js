const express = require('express');
const controller = require('../controller/userController');
const router = express.Router();

router.get('/', controller.all);
router.get('/:id', controller.get);
router.post('/', controller.save);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;