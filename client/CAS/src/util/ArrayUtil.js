export default class ArrayUtil {
    /**
     * 更新数组,若item已存在则将其从数组中删除,若不存在则将其添加到数组
     * **/
    static updateArray(array, item) {
        for (var i = 0, len = array.length;
            i < len;
            i++) {
            var temp = array[ i ];
            if (item === temp) {
                array.splice(i, 1);
                return;
            }
        }
        array.push(item);
    }

    /**
     * 向数组中添加元素,若元素与存在则不添加
     * **/
    static add(array, item) {
        if (!array) {
            return;
        }
        for (var i = 0, l = array.length;
            i < l;
            i++) {
            if (array === array[ i ]) {
                return;
            }
        }
        array.push(item);
    }

    /**
     * 将数组中指定元素移除
     * **/
    static remove(array, item) {
        if (!array) {
            return;
        }
        for (var i = 0, l = array.length;
            i < l;
            i++) {
            if (item === array[ i ]) {
                array.splice(i, 1);
            }
        }
    }

    /**
     * clone 数组
     * @return Array 新的数组
     * */
    static clone(from) {
        if (!from) {
            return [];
        }
        let newArray = [];
        for (let i = 0, l = from.length;
            i < l;
            i++) {
            newArray[ i ] = from[ i ];
        }
        return newArray;
    }

    /**
     * 判断两个数组的是否相等
     * @return boolean true 数组长度相等且对应元素相等
     * */
    static isEqual(arr1, arr2) {
        if (!(arr1 && arr2)) {
            return false;
        }
        if (arr1.length != arr2.length) {
            return false;
        }
        for (let i = 0, l = arr1.length;
            i < l;
            i++) {
            if (arr1[ i ] != arr2[ i ]) {
                return false;
            }
        }
        return true;
    }

    /**
     * 数组去重
     * @param arr   原数组
     * @returns {Array} 去重后的数组
     */
    static deduplication(arr) {
        return Array.from(new Set(arr));
    }

    /**
     * 数组copy
     * @param arr   原数组
     * @returns {Array} 新数组
     */
    static copy(arr) {
        return [ ...arr ];
    }

    /**
     * 数组清空数据
     * @param arr   原数组
     * @returns {Array} 清空后的数组
     */
    static removeAll(arr) {
        return arr.splice(0, arr.length);
    }

    /**
     * 数组copy
     * @param arr   原数组
     * @returns {Array} 新数组
     */
    static copy(arr) {
        return [ ...arr ];
    }

    /**
     * 将一组数值转为数组
     * // let arr2 = Array.of(1, 2, 3); // [1, 2, 3]
     * @param numbers   1, 2, 3
     * @returns {Array} [1, 2, 3]
     */
    static numbersToArray(...numbers) {
        return Array.of(...numbers);
    }

    static addObjToArrIndex0(item, arr = []) {
        let arr1 = [ item ];
        return arr1.concat(arr);
    }

}