const HttpStatus = require('http-status');
const SellService = require('../services/sell-service');

exports.findSellList = async (req, res, next) => {
    const results = await SellService.findSellList(req.params);

    res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'successfully found  sell list',
        results: results
    });
};

