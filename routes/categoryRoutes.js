const express = require('express');
const router = express.Router();
const category = require('../controlleur/CategoryController');

router.get('/category', category.getCategories);
router.post('/category', category.createCategory);
router.get('/category/:id', category.getCategoryById);
router.delete('/category/:id',category.deleteCategory);
router.put('/category', category.updateCategory);




module.exports = router;
