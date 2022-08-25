
exports.selectSellList = (params) => {
    return `
        SELECT
               A.RESELL_CODE
             , A.ITEM_CODE
             , A.DATE
             , A.PRICE             
             , A.SELLER  
             , A.SELL_INFO
             , A.SELL_STATUS
          FROM RESELL A
         WHERE A.ITEM_CODE = ${params.itemCode}
    `;
};
