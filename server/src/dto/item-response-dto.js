class ItemDTO{
    itemCode; 
    categoryCode;
    size;
    maxPrice;
    minPrice; 
    itemName;
    itemImage; 
    
    constructor(data){
        this.itemCode = data.ITEM_CODE;
        this.categoryCode = data.CATEGORY_CODE;
        this.size = data.SIZE;
        this.maxPrice = data.MAX_PRICE;
        this.minPrice = data.MIN_PRICE;
        this.itemName = data.ITEM_NAME;
        this.itemImage = data.ITEM_IMAGE; 
    }
}

module.exports = ItemDTO; 