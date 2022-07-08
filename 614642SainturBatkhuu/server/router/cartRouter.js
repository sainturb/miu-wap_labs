const express = require('express');
const controller = require('../controller/productController');
const router = express.Router();

router.get('/', controller.cartItems);
router.post('/', controller.addItem);
router.delete('/', controller.removeItem);
router.put('/quantity/add/:prodId', controller.addQuantity);
router.put('/quantity/minus/:prodId', controller.minusQuantity);
router.get('/place-order', controller.placeOrder);

module.exports = router;