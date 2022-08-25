const express = require('express');
const router = express.Router();
const sellCotroller = require('../controllers/sell-controller');

router.get('/:itemCode', sellCotroller.findSellList);

module.exports = router; 