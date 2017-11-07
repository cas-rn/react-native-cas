/**
 * Created by nick on 2017/4/20.
 */
import { PixelRatio } from "react-native";

//获取
var Dimensions = require(
    'Dimensions'
    )
;

var Platform = require('Platform');

var WindowUtil = {

    //单位像素
    pixel : 1 / PixelRatio.get(),
    pi : PixelRatio.get(),
    size : {
        width : Dimensions.get('window').width,
        height : Dimensions.get('window').height,
    },

    initPortraitSize(){
        this.size = {
            width : Dimensions.get('window').width,
            height : Dimensions.get('window').height,
        };
    },
    initLandscapeSize(){
        this.size = {
            width : Dimensions.get('window').width,
            height : Dimensions.get('window').height,
        };
    },
    getHeaderViewPaddingTop(){
        if (Platform.OS === 'ios') {
            return 20;
        } else {
            return 0;
        }
    },
    getBottomViewMarginTopDiff(){
        if (Platform.OS === 'ios') {
            return 50;
        } else {
            return 60;
        }
    },

};

module.exports = WindowUtil;