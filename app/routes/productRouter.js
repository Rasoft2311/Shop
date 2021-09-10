const express = require('express');
const ProductController = require('../controllers/ProductController.js');
const productRouter = express.Router();

productRouter.get('/', ProductController.getAllProducts);

module.exports = productRouter;
