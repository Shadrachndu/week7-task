const express = require('express');
const router = express.Router();
const {getProduct, getSpecificProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/Product')
 
//This is where I defined routes for our products
router.get('/', getProduct)  //gets all product
router.get('/:id', getSpecificProduct) // gets a specified product with id
router.post('/', createProduct); //create new product
router.put('/:id', updateProduct) // updates a product
router.delete('/:id', deleteProduct) // deletes a product

module.exports = router;