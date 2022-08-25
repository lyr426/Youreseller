const getConnection = require('../database/connection');
const SellRepository = require('../repositories/sell-repo');

exports.findSellList = (params) => {

    return new Promise((resolve, reject)=> {

        const connection = getConnection(); 
        const results = SellRepository.selectSellList(connection, params);
        connection.end();
        resolve(results); 
    }); 
}; 
