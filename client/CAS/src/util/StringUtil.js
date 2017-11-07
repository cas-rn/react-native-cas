/**
 * Created by nick on 2017/4/20.
 */


var StringUtil = {
    objectIsAvailable(object){
        if ('undefind' == object || null == object) {
            return false;
        }
        return true;
    },

    stringIsAvailable(object){
        if ('undefind' == object || null == object || '' == object || '-1' == object) {
            return false;
        }
        return true;
    },

    //todo test
    objectIsValueEqual(object1, object2) {
        for (let _key in
            object1) {
            if (object1._key !== object2._key) {
                return false;
            }
        }
        return true;
    },
    object2Json(object){
        return JSON.stringify(object);
    },

    trim(str){
        return str.replace(/(^\s*)|(\s*$)/g, '');
    },
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },

    cutLastOneChar(str){
        let _str = str;
        if (str.length > 0) {
            _str = str.substring(0, str.length - 1);
        }
        return _str;
    },

    getLastTwoChar(str){
        let _str = str;
        if (str.length > 0) {
            _str = str.substring(str.length - 2, str.length);
        }
        return _str;
    },

};

module.exports = StringUtil;