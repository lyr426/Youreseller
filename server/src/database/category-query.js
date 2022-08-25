exports.selectCategory = () => {

    return `
        SELECT
               A.CATEGORY_CODE
             , A.ITEM_NAME
             , A.ITEM_IMAGE
          FROM ITEM_CATEGORY A
    `;
};