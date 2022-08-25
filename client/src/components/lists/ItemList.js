import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { callGetCategoryAPI } from "../../apis/ItemAPICalls";
import SellList from "./SellList";

function ItemList(){

    const { categoryCode } = useParams(); 
    const items = useSelector(state => state.itemReducer);  
    const dispatch = useDispatch(); 
    console.log('categorCode: ',categoryCode); 

    const sells = useSelector(state => state.sellReducer); 
    console.log( "sellse ",sells); 
    useEffect(
        () => { dispatch(callGetCategoryAPI(`http://localhost:8888/category/${categoryCode}`, "GET_ITEM")) 
        }, 
        []
    );

    console.log( "items: ", items);

    const onClickHandler = (itemCode) => {
        dispatch(callGetCategoryAPI(`http://localhost:8888/sell-list/${itemCode}`, "GET_RESELL"));
    }

    return (
        <div>
            <div>
                <img className="categoryImage" src={ items[0].itemImage }></img>
                <div>{ items[0].itemName }</div>
            </div>
            <ul>
                { items.map(item => <li key={ item.itemCode }>{ item.size } {item.maxPrice} {item.minPrice} 
                <button onClick={ () => onClickHandler(item.itemCode)}> 판매목록 확인하기</button>
                </li>)
                } 
            </ul>
            <SellList key={ sells.resellCode } resell = { sells }/>
        </div>
    )

}

export default ItemList; 