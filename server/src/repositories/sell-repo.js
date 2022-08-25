const sellListQuery = require('../database/sell-list-query');
const SellListDTO = require('../dto/sell-response-dto'); 

exports.selectSellList = (connection, params) => {

    return new Promise((resolve, reject)=>{
        connection.query(sellListQuery.selectSellList(params), (err, results, fields)=>{

            if(err){
                console.log('err: ', err);
                reject(err);
            }
            
            const sell = [];
            for(let i=0; i < results.length; i++){
                sell.push(new SellListDTO(results[i])); 
            }
            console.log('results: ', results); 
            resolve(sell); 
        });

    });
};

exports.selectAllSellList = (connection) => {

    return new Promise((resolve, reject)=>{
        connection.query(sellListQuery.selectAllSellList(), (err, results, fields)=>{

            if(err){
                console.log('err: ', err);
                reject(err);
            }
            
            const sell = [];
            for(let i=0; i < results.length; i++){
                sell.push(new SellListDTO(results[i])); 
            }
            console.log('results: ', results); 
            resolve(sell); 
        });

    });
};