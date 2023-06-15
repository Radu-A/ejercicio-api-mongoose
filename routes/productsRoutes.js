const express = require('express');
const productsController = require('../controllers/productsController')
const productsRouter = express.Router();

productsRouter.get('/:CIF?', productsController.getProducts);
productsRouter.post('/', productsController.createProduct);


module.exports = productsRouter;