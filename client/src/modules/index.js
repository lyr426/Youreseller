import { combineReducers } from 'redux'; 
import itemReducer from './ItemModule';
import sellReducer from './SellModule'; 

const rootReducer = combineReducers({
    itemReducer, 
    sellReducer
}); 

export default rootReducer; 