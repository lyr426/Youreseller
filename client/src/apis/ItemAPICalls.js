import { GET_CATEGORY, GET_ITEM } from '../modules/ItemModule'; 
import { GET_RESELL } from '../modules/SellModule';

export function callGetCategoryAPI(url, type){

    const requestURL = url || 'http://localhost:8888/category'; 

    switch(type){

        case 'GET_CATEGORY':
            return async function getCategory(dispatch, getState){
        
                const result = await fetch(requestURL).then(res => res.json());
        
                console.log('result: ', result.results); 
                dispatch({ type: GET_CATEGORY, payload: result.results })
            }
        case 'GET_ITEM':
            return async function getItem(dispatch, getState){
        
                const result = await fetch(requestURL).then(res => res.json());
        
                console.log('result: ', result.results); 
                dispatch({ type: GET_ITEM, payload: result.results })
            }
        case 'GET_RESELL':
            return async function getResell(dispatch, getState){
        
                const result = await fetch(requestURL).then(res => res.json());
        
                console.log('result: ', result.results); 
                dispatch({ type: GET_RESELL, payload: result.results })
            }
        default :
            return; 
    

    }

}