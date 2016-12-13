var express = require('express');
var router = express.Router();
var ctrlProducts = require('../controllers/products');

// products
router.get('/products', ctrlProducts.productsReadAll);
router.get('/products/:productsid', ctrlProducts.productsReadOne);
router.post('/products', ctrlProducts.productsCreate);
router.put('/products/:productsid', ctrlProducts.productsUpdateOne);
router.delete('/products/:productsid', ctrlProducts.productsDeleteOne);

module.exports = router;
