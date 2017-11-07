/**
 * Created by nick on 2017/4/26.
 */
import moment from "moment";

var DateParseFormatUtil = {

    //13位时间戳
    formatDateLongOrStringToStringSecondMy(date){
        return this.formatDateLongOrStringToStringWithPatten(Number(date), 'YYYY-MM-DD HH:mm:ss');
    },
    formatDateLongOrStringToStringMinuteMy(date){
        return this.formatDateLongOrStringToStringWithPatten(Number(date), 'YYYY-MM-DD HH:mm');
    },

    formatDateLongOrStringToStringFromMonth2MinuteMy(date){
        return this.formatDateLongOrStringToStringWithPatten(Number(date), 'MM月DD日 HH:mm');
    },

    getCurrentTimeLong10(){
        let ct = this.getCurrentTimeLong13();
        ct = (ct - ct % 1000) / 1000;
        return ct;
    },

    getCurrentTimeLong13(){
        let ct = new Date().getTime();
        return ct;
    },

    getCurrentTimeMoment(){
        return moment(new Date());
    },

    // //moment("2015-08-20T00:00:00+08:00"); //ok
    // parseStringToLong(dateString){
    //     return moment(dateString);
    // },

    /**
     * moment("1970-01-01 8:00", "YYYY-MM-DD HH:mm") //ok
     * @param dateString
     * @param pattenString
     * @returns {number} 13位
     */
    parseStringToLongWithPatten(dateString, pattenString){
        let _moment = moment(dateString, pattenString);
        let tlong = _moment.valueOf();
        return tlong;
    },

    //10位时间戳
    formatDateLongOrStringToStringSecondLong10(dateLong10){
        var date = dateLong10 * 1000;
        return this.formatDateLongOrStringToStringWithPatten(date, 'YYYY-MM-DD HH:mm:ss');
    },
    formatDateLongOrStringToStringMinuteLong10(dateLong10){
        var date = dateLong10 * 1000;
        return this.formatDateLongOrStringToStringWithPatten(date, 'YYYY-MM-DD HH:mm');
    },
    formatDateLongOrStringToStringHourLong10(dateLong10){
        var date = dateLong10 * 1000;
        return this.formatDateLongOrStringToStringWithPatten(date, 'YYYY-MM-DD HH');
    },
    formatDateLongOrStringToStringDayLong10(dateLong10){
        var date = dateLong10 * 1000;
        return this.formatDateLongOrStringToStringWithPatten(date, 'YYYY-MM-DD');
    },

    //13位时间戳
    formatDateLongOrStringToStringSecond(date){
        return this.formatDateLongOrStringToStringWithPatten(date, 'YYYY-MM-DD HH:mm:ss');
    },
    formatDateLongOrStringToStringMinute(date){
        return this.formatDateLongOrStringToStringWithPatten(date, 'YYYY-MM-DD HH:mm');
    },
    formatDateLongOrStringToStringHour(date){
        return this.formatDateLongOrStringToStringWithPatten(date, 'YYYY-MM-DD HH');
    },
    formatDateLongOrStringToStringDay(date){
        return this.formatDateLongOrStringToStringWithPatten(date, 'YYYY-MM-DD');
    },

    formatDateLongOrStringToStringHourMinute(date){
        return this.formatDateLongOrStringToStringWithPatten(date, 'HH:mm');
    },
    formatDateLongOrStringToStringWithPatten(date, pattenString){
        return moment(date).format(pattenString);
    },
    formatDateLongOrStringToStringDayTheFirstDayOfTheMonth(date){
        return this.formatDateLongOrStringToStringDay(moment(date).date(1));

    },

    test11(date){
        return this.formatDateLongOrStringToStringDay(moment(date).date(1));

    },

};

module.exports = DateParseFormatUtil;