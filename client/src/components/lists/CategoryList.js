import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { callGetCategoryAPI } from '../../apis/ItemAPICalls'; 
import CategoryItem from "../items/CategoryItem"; 
import ItemList from "./ItemList";

function CategoryList(){
    
    const categorys = useSelector(state => state.itemReducer); 
    console.log('state : ', categorys); 
    const dispatch = useDispatch(); 

    useEffect(
        () => { dispatch(callGetCategoryAPI('http://localhost:8888/category' ,'GET_CATEGORY' )) }, 
        []
    );

    console.log(categorys); 
    return categorys && (
        <div>
            <h3> 상품 목록 </h3>
            <ul>
                { categorys.map(category => <CategoryItem key={ category.categoryCode } category = { category }/>)}
            </ul>
        </div>
    );
}

export default CategoryList; 