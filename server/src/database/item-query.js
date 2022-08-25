exports.selectItem = (params) => {
    console.log("params", params);
    return `
        SELECT
               A.ITEM_CODE
             , A.CATEGORY_CODE
             , A.SIZE
             , A.MAX_PRICE             
             , A.MIN_PRICE
             , B.ITEM_NAME
             , B.ITEM_IMAGE 
          FROM ITEM A
          JOIN ITEM_CATEGORY B
            ON A.CATEGORY_CODE = B.CATEGORY_CODE
         WHERE A.CATEGORY_CODE = ${params.categoryCode}
    `;
};