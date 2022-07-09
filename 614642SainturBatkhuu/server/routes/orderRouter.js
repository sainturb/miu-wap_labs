const express = require('express');
const controller = require('../controllers/orderController');
const router = express.Router();

router.get('/', controller.all);
router.post('/place-order', controller.placeOrder);

module.exports = router;