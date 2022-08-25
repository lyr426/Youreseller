
function SellList(resells){

    console.log("resell: ", resells);
    return (
        <div>셀리스트
            <button> 나도 판매하기 </button>
            <ul>
                { resells.resell.map(resell => <li key={ resell.resellCode }>{ resell.date } {resell.seller} {resell.price} {resell.sellInfo}   </li>)
                }
            </ul>              
        </div>
        
    )
}

export default SellList; 