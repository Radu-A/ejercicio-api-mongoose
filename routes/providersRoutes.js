const express = require('express');
const providersController = require('../controllers/providersController');
const providersRouter = express.Router();

providersRouter.get('/:CIF?', providersController.getProviders);
providersRouter.post('/create', providersController.createProvider);


module.exports = providersRouter;