import { createActions, handleActions } from 'redux-actions';

const initialState = []; 

export const GET_CATEGORY = 'category/GET_CATEGORY';
export const GET_ITEM = 'item/GET_ITEM';


const actions = createActions({
    [GET_CATEGORY]: () => {},
    [GET_ITEM]: () => {}
}); 

const ItemReducer = handleActions(
    {
        [GET_CATEGORY]: (state, { payload }) => {
            return payload; 
        },
        [GET_ITEM]: (state, { payload }) => {
            console.log('payload: ', payload);
            return payload;
        }
    },
    initialState
); 

export default ItemReducer; 