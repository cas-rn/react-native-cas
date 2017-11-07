/**
 * Created by nick on 2017/4/20.
 */
import { StyleSheet } from "react-native";
import * as WindowUtil from "../util/WindowUtil";
import * as ColorUtil from "./ColorUtil";

var StyleUtil = {

    //单位像素
    pixel : WindowUtil.pixel,
    pi : WindowUtil.pi,
    size : {
        width : WindowUtil.size.width,
        height : WindowUtil.size.height,
        iconHeaderLeftSize : 25,
        iconSizeSmall : 15,

        headerHeight : 50,
        bottomHeight : 50,
        tabHeight : 50,
        tabBarHeight : 50,

        viewPartAndTravelFeeMinHeight : WindowUtil.size.height,

    },

    gStyles : StyleSheet.create({

        gIconSmall : {
            width : 15,
            height : 15,
        },

        gIconDefault : {
            width : 20,
            height : 20,
        },

        gWrap : {
            flexWrap : 'wrap',
        },
        gWindowWidth : {
            width : WindowUtil.size.width,
        },

        gCardBgWhite : {
            padding : 20,
            backgroundColor : ColorUtil.bgWhite,
            marginTop : 5,
        },
        gCardBgWhiteNoMargin : {
            padding : 20,
            backgroundColor : ColorUtil.bgWhite,
            flex : 1,
        },
        gImg : {
            width : WindowUtil.size.width,
            height : WindowUtil.size.width * 101 / (309),
        },

        gRowSpaceBetween : {
            flexDirection : 'row',
            justifyContent : 'space-between',
        },
        gInputDelBorderBottom : {
            borderBottomWidth : 0,
        },
        gBorderBottom1Gray : {
            borderBottomWidth : 1,
            borderBottomColor : ColorUtil.bgGray,
        },

        gInputCenter : {
            backgroundColor : ColorUtil.bgWhite,
            marginLeft : 0,
            padding : 5,
            paddingRight : 10,
        },
        gInvisible : {
            display : 'none',
        },
        gVisible : {
            display : 'flex',
        },
        gFlex1 : {
            flex : 1,
        },
        gWidthMax100 : {
            left : 0,
            right : 0,
        },
        gHeightMax100 : {
            top : 0,
            bottom : 0,
        },
        gBgWhite : {
            backgroundColor : ColorUtil.bgWhite,
        },
        gFlexWrap : {
            flexWrap : 'wrap',
        },
        gFlexDirectionRow : {
            flexDirection : 'row',
        },
        gFlexDirectionColumn : {
            flexDirection : 'column',
        },

        gAbsoluteRight20 : {
            position : 'absolute',
            right : 20,
        },
        gCenterAlignItems : {
            alignItems : 'center',
        },
        gCenterJustifyContent : {
            justifyContent : 'center',
        },
        gTextCenter : {
            textAlign : 'center',
        },

        gMarginLeftRight : {
            marginLeft : 15,
            marginRight : 15,
        },
        gMarginLeft : {
            marginLeft : 15,
        },
        gMarginTopBottom : {
            marginTop : 5,
            marginBottom : 5,
        },
        gPaddingLeftRight : {
            paddingLeft : 10,
            paddingRight : 10,
        },
        gPaddingLeftRight20 : {
            paddingLeft : 20,
            paddingRight : 20,
        },
        gPaddingTopBottom : {
            paddingTop : 5,
            paddingBottom : 5,
        },

        gBottomNormal : {
            height : 50,
            backgroundColor : ColorUtil.bgGray,
            width : WindowUtil.size.width,
            alignItems : 'center',
            marginTop : 20,
            marginBottom : 0,
        },
        gHeader : {
            flexDirection : 'row',
            backgroundColor : ColorUtil.blueTheme,
            width : WindowUtil.size.width,
            height : 50 + WindowUtil.getHeaderViewPaddingTop(),
            paddingTop : WindowUtil.getHeaderViewPaddingTop(),
        },
        gHeaderLeftView : {
            width : 50,
            height : 50,
            alignItems : 'center',
            justifyContent : 'center',
            alignContent : 'center',
        },
        gHeaderRightView : {
            width : 50,
            height : 50,
            alignItems : 'center',
            justifyContent : 'center',
            alignContent : 'center',
        },
        gHeaderCenterView : {
            width : WindowUtil.size.width - 50 * 2,
            height : 50,
            alignItems : 'center',
            justifyContent : 'center',
            alignContent : 'center',
        },
        gHeaderCenterText : {
            color : ColorUtil.textColorGrayHeader,
            textAlign : 'center',
            fontSize : 20,
        },
        gImg3perLine : {
            width : (WindowUtil.size.width - 40 - 30) / 3,
            height : (WindowUtil.size.width - 40 - 30) / 3,
            margin : 5,
        },
        gViewLineRow : {
            height : 1,
            backgroundColor : ColorUtil.bgGray,
        },
        gFlexBetweenLRItemPaddingLR20TB10 : {
            paddingLeft : 20,
            paddingRight : 20,
            paddingTop : 10,
            paddingBottom : 10,
            minHeight : 50,
        },
        gMinHeight50 : {
            minHeight : 50,
        },
        gPadding5 : {
            padding : 5,
        },
        gPaddingTop5 : {
            paddingTop : 5,
        },
        gPadding20 : {
            padding : 20,
        },
        gPadding50 : {
            padding : 50,
        },
        gMarginRight20 : {
            marginRight : 20,
        },
        gSuccessView : {
            backgroundColor : ColorUtil.bgWhite,
            height : 150,
            width : WindowUtil.size.width,
            alignItems : 'center',
            justifyContent : 'center'
        },
        gSuccessView_TextColorSize : {
            color : 'blue', fontSize : 23,
        },
        gTextListViewItem : {
            // numberOfLines:2,
            // ellipsizeMode:'tail',
        },
        gTextGrayXSmall : {
            color : ColorUtil.textColorGray,
            fontSize : 10,
        },
        gTextGraySmall : {
            color : ColorUtil.textColorGray,
            fontSize : 12,
        },
        gTextGray : {
            color : ColorUtil.textColorGray,
            fontSize : 14,
        },
        gTextGrayLarge : {
            color : ColorUtil.textColorGray,
            fontSize : 17,
        },
        gTextGrayLargeHint : {
            color : ColorUtil.textColorGray,
            fontSize : 17,
        },
        gTextBlueSmall : {
            color : ColorUtil.textColorBlue,
            fontSize : 12,
        },
        gTextBlue : {
            color : ColorUtil.textColorBlue,
            fontSize : 14,
        },
        gTextBlueLarge : {
            color : ColorUtil.textColorBlue,
            fontSize : 17,
        },
        gTextBlackSmall : {
            color : ColorUtil.textColorBlack,
            fontSize : 12,
        },
        gTextBlack : {
            color : ColorUtil.textColorBlack,
            fontSize : 14,
        },
        gTextBlackLarge : {
            color : ColorUtil.textColorBlack,
            fontSize : 17,
        },

        gTextOrangeLarge : {
            color : ColorUtil.orangeTheme,
            fontSize : 17,
        },

        gTextWhiteSmall : {
            color : ColorUtil.textColorWhite,
            fontSize : 12,
        },
        gTextWhite : {
            color : ColorUtil.textColorWhite,
            fontSize : 14,
        },
        gTextWhiteLarge : {
            color : ColorUtil.textColorWhite,
            fontSize : 17,
        },

        gButtonBlue : {
            backgroundColor : ColorUtil.blueTheme,
        },
        gButtonOrange : {
            backgroundColor : ColorUtil.orangeTheme,
        },

        gButtonTransparentDefault : {
            backgroundColor : ColorUtil.transparent,
            borderWidth : 0,
        },

        gButtonOrangeDefault : {
            backgroundColor : ColorUtil.orangeTheme,
            borderWidth : 0,
        },

        gButtonGreenDefault : {
            backgroundColor : ColorUtil.greenButton,
            borderWidth : 0,
        },
        gButtonBlueDefault : {
            backgroundColor : ColorUtil.blueTheme,
            borderWidth : 0,
        },

        gButtonBlueDefaultOutline : {
            borderColor : ColorUtil.blueTheme,
            borderWidth : 1,
        },

        gButtonTextBlueDefaultSmall : {
            textAlign : 'center',
            color : ColorUtil.textColorBlue,
            fontSize : 12,
            paddingTop : 10,
            paddingBottom : 10,
            paddingLeft : 12,
            paddingRight : 12,

        },

        gButtonTextBlueDefaultXSmall : {
            textAlign : 'center',
            color : ColorUtil.textColorBlue,
            fontSize : 10,
            paddingTop : 8,
            paddingBottom : 8,
            paddingLeft : 10,
            paddingRight : 10,

        },

        //todo buttonText eg.
        gButtonTextWhiteDefaultLarge : {
            textAlign : 'center',
            color : ColorUtil.textColorWhite,
            fontSize : 17,
            paddingTop : 14,
            paddingBottom : 14,
            paddingLeft : 16,
            paddingRight : 16,
        },

        gButtonTextWhiteDefault : {
            textAlign : 'center',
            color : ColorUtil.textColorWhite,
            fontSize : 14,
            paddingTop : 12,
            paddingBottom : 12,
            paddingLeft : 14,
            paddingRight : 14,

        },

        gButtonTextWhiteDefaultSmall : {
            textAlign : 'center',
            color : ColorUtil.textColorWhite,
            fontSize : 12,
            paddingTop : 10,
            paddingBottom : 10,
            paddingLeft : 12,
            paddingRight : 12,

        },
        gButtonTextWhiteDefaultXSmall : {
            textAlign : 'center',
            color : ColorUtil.textColorWhite,
            fontSize : 10,
            paddingTop : 8,
            paddingBottom : 8,
            paddingLeft : 10,
            paddingRight : 10,

        },

        gButtonSize3 : {
            paddingTop : 3,
            paddingBottom : 3,
            paddingLeft : 3,
            paddingRight : 3,
        },
        gButtonSizeW100 : {
            width : 100,
        },
        gButtonSize4 : {
            height : 38,
        },
        gButtonSize5 : {
            // width: 48,
            height : 44,
            // height: 36,
            // paddingTop: 5,
            // paddingBottom: 5,
            // paddingLeft: 5,
            // paddingRight: 5,
        },
        gButtonSize48 : {
            height : 48,
            // height: 42,
            // height: 36,
            // paddingTop: 5,
            // paddingBottom: 5,
            // paddingLeft: 5,
            // paddingRight: 5,
        },
        gButtonSize48Text : {
            textAlign : 'center',
            height : 48,
            color : ColorUtil.textColorWhite,
            fontSize : 14,
        },
        gBorder0 : {
            borderWidth : 0,
        },
        gOrderBtnMargin : {
            margin : 0,
        },

        gTextBlackLeft : {
            color : ColorUtil.textColorBlack,
            fontSize : 14,
            paddingTop : 3,
            paddingBottom : 3,
            paddingLeft : 10,
            paddingRight : 10,
        },
        gTextBlackClickItem : {
            // backgroundColor:ColorUtil.bgWhite,
            color : ColorUtil.textColorBlack,
            fontSize : 14,
            paddingTop : 10,
            paddingBottom : 10,
            paddingLeft : 10,
            paddingRight : 10,
        },
        gTextAlignRight : {
            textAlign : 'right',
        },
        gTextAlignCenter : {
            textAlign : 'center',
        },
        gTextGrayRight : {
            color : ColorUtil.textColorGray,
            fontSize : 14,
            paddingTop : 3,
            paddingBottom : 3,
            paddingLeft : 10,
            paddingRight : 10,
        },
        gBorderBlue1 : {
            borderStyle : 'solid',
            borderBottomWidth : 1.0,
            borderRadius : 5,
            borderWidth : 1,
            borderColor : ColorUtil.textColorBlue
        },
        gBorderGray1Bottom : {
            borderStyle : 'solid',
            borderBottomWidth : 1.0,
            borderColor : ColorUtil.bgGray,
            borderRadius : 0,
            borderWidth : 0,
            overflow : 'hidden',
        },
        gBorderGray1Radius5 : {
            borderStyle : 'solid',
            borderBottomWidth : 1.0,
            borderColor : ColorUtil.grayBorder,
            borderRadius : 5,
            borderWidth : 1.0,
            overflow : 'hidden',
        },
        gBorder0Radius5 : {
            backgroundColor : ColorUtil.orangeTheme,
            borderColor : ColorUtil.grayBorder,
            color : ColorUtil.bgWhite,
            padding : 3,
            borderRadius : 10,
            borderWidth : 0,
            overflow : 'hidden',
        },
        gFlexItemMarginBorder1 : {
            margin : 5,
            padding : 5,
            backgroundColor : ColorUtil.bgGray,
            color : '#bbb',
            textAlign : 'center',
            borderColor : '#ff8447',
            borderRadius : 5,
            borderWidth : 1,
            overflow : 'hidden',
        },
        gFlexItemMarginBorder0bgBlue : {
            margin : 5,
            padding : 5,
            backgroundColor : ColorUtil.textColorBlue,
            color : ColorUtil.bgWhite,
            textAlign : 'center',
            borderRadius : 5,
            overflow : 'hidden',
        },

        gFlexItemMarginBorder0bgGray : {
            margin : 5,
            padding : 5,
            backgroundColor : ColorUtil.bgGray,
            color : ColorUtil.textColorBlack,
            textAlign : 'center',
            borderRadius : 5,
            overflow : 'hidden',
        },
        gCircleBlueBoard : {
            // margin: 5,
            // padding: 5,
            // backgroundColor: ColorUtil.bgGray,
            // color: ColorUtil.textColorBlack,
            // textAlign: 'center',
            borderRadius : 50,
            borderWidth : 2,
            borderColor : ColorUtil.blueTheme,
            width : 20,
            height : 20,
            overflow : 'hidden',
        },
        gLineVerticalBluePlayWithCircle : {
            backgroundColor : ColorUtil.blueTheme,
            width : 2,
            height : 100,
        },
        gViewLeftOfCircleBlueBoard : {
            width : 50,
            height : 20,
        },
        gViewLeftOfLineVerticalBluePlayWithCircle : {
            width : 50,
            // height:50,
        },

    }),

    object2Json(object){
        return JSON.stringify(object);
    },

};

module.exports = StyleUtil;