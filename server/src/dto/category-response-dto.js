class Category{
    categoryCode;
    itemName;
    itemImage; 
    
    constructor(data){
        this.categoryCode = data.CATEGORY_CODE;
        this.itemName = data.ITEM_NAME;
        this.itemImage = data.ITEM_IMAGE; 
    }
}

module.exports = Category; 