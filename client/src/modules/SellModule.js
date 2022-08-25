import { createActions, handleActions } from 'redux-actions';

const initialState = []; 

export const GET_RESELL = 'item/GET_RESELL'; 


const actions = createActions({
    [GET_RESELL]: () => {} 
}); 

const SellReducer = handleActions(
    {
        [GET_RESELL]: (state, { payload }) => {
            console.log('payload: ', payload);
            return payload;
        }
    },
    initialState
); 

export default SellReducer; 