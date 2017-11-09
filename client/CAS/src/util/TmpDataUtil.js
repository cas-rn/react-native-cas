let TmpDataUtil = {

    isRequestLocation : false,
    curLatitude : '',
    curLongitude : '',
    curAddress : '',

    getDataList : (arr) => {
        let retArr = [];
        for (let i = 0;
            i < arr.length;
            i++) {
            let item = arr[ i ];
            retArr.push({ key : item.id, ...item });
        }
        return retArr;
    },

};

module.exports = TmpDataUtil;