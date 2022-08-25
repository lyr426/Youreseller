const express = require('express');
const router = express.Router();
const ItemController = require('../controllers/item-controller');

router.get('/', ItemController.findCategory);
router.get('/:categoryCode', ItemController.findItem); 

module.exports = router; 