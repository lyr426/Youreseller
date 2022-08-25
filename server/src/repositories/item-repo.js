const itemQuery = require('../database/item-query');
const ItemDTO = require('../dto/item-response-dto'); 

exports.selectItem = (connection, params) => {
    return new Promise((resolve, reject)=>{
        connection.query(itemQuery.selectItem(params), (err, results, fields)=>{
            
            if(err){
                console.log('err: ', err);
                reject(err);
            }
            
            const item = [];
            for(let i=0; i < results.length; i++){
                item.push(new ItemDTO(results[i])); 
            }
            
            console.log('results: ', results); 
            resolve(item); 
        });

    });
};