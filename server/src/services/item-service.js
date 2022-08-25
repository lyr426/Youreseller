const getConnection = require('../database/connection');
const CategoryRepository = require('../repositories/category-repo');
const itemRepository = require('../repositories/item-repo');

exports.findCategory = () => {

    return new Promise((resolve, reject)=> {

        const connection = getConnection(); 
        const results = CategoryRepository.selectCategory(connection);
        connection.end();
        resolve(results); 
    }); 
}; 

exports.findItem = (params) => {
    //console.log(params);
    return new Promise((resolve, reject) => {
        const connection = getConnection(); 
        const results = itemRepository.selectItem(connection, params);
        connection.end(); 
        resolve(results);
    })
}