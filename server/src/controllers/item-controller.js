const HttpStatus = require('http-status');
const ItemService = require('../services/item-service');

exports.findCategory = async (req, res, next) => {
    const results = await ItemService.findCategory();

    res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'successfully found all category',
        results: results
    });
};

exports.findItem = async (req, res, next) => {
    const results = await ItemService.findItem(req.params); 
    console.log(req.params);
    res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'successfully found item',
        results: results
    });
};