const categoryQuery = require('../database/category-query');
const CategoryDTO = require('../dto/category-response-dto'); 

exports.selectCategory = (connection) => {

    return new Promise((resolve, reject)=>{
        connection.query(categoryQuery.selectCategory(), (err, results, fields)=>{

            if(err){
                console.log('err: ', err);
                reject(err);
            }
            
            const category = [];
            for(let i=0; i < results.length; i++){
                category.push(new CategoryDTO(results[i])); 
            }
            console.log('results: ', results); 
            resolve(category); 
        });

    });
};