const express = require('express');
const controller = require('../controller/cartController');
const router = express.Router();

router.get('/', controller.cartItems);
router.post('/', controller.addItem);
router.delete('/', controller.removeItem);
router.put('/quantity/add', controller.addQuantity);
router.put('/quantity/minus', controller.minusQuantity);
// router.get('/place-order', controller.placeOrder);

module.exports = router;