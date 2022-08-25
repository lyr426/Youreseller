import "../../style.css"
import { NavLink } from 'react-router-dom';

function CategoryItem( { category } ){

    return (
        <NavLink to={ `/category/${ category.categoryCode }` }>
            <div className="categoryList">
                <div>
                    <img className="categoryImage" src={ category.itemImage }></img>
                    <div>{ category.itemName }</div>
                </div>
            </div>
        </NavLink>
    )
}

export default CategoryItem;