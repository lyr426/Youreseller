class SellListDTO{
    
    resellCode;
    itemCode;
    date;
    price;
    seller;
    sellInfo;
    sell_status;
    
    constructor(data){
        this.resellCode = data.RESELL_CODE;
        this.itemCode = data.ITEM_CODE;
        this.date = data.DATE;
        this.seller = data.SELLER;
        this.price = data.PRICE; 
        this.sellInfo = data.SELL_INFO; 
        this.sell_status = data.SELL_STATUS;
    }
}

module.exports = SellListDTO; 