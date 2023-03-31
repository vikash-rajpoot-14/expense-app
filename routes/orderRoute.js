const express = require('express');
const orderController = require('../controller/orderController');
const router = express.Router();

router.route('/order').get(orderController.getAllOrder).post(orderController.createOrder);
router.route('/order/:id').patch(orderController.updateOrder).delete(orderController.deleteOrder).get(orderController.getOrder)

module.exports = router;