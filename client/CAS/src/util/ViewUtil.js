import React from "react";
import { StatusBar, Text, View } from "react-native";
import { Actions } from "react-native-router-flux";
import * as StringUtil from "./StringUtil";
import * as StyleUtil from "./StyleUtil";
import Toast from "teaset/components/Toast/Toast";
import * as ColorUtil from "./ColorUtil";
import MyImageComponent from "../component/MyImageComponent";

var ViewUtil = {

    showToastShouldNotComeHere(){
        this.showToast('...');
    },

    //Toase
    showToast(str) {
        Toast.message(str);
    },

    showToastShort(str) {
        // Toast.info(str, 1);
    },

    showToastLong(str) {
        // Toast.info(str, 3);
    },

    showToastLoading(timeOut = 10000){
        // if (!Loader.isShowing) {
        //     Loader.show();
        //     setTimeout(() => {
        //         this.dismissToastLoading();
        //     }, timeOut);
        // }
    },
    dismissToastLoading(){
        // Loader.hide();
    },

    getLineHorizontal(){
        return (<View style={{ backgroundColor : ColorUtil.bgGray, height : 1, }}/>);
    },

    getLineHorizontalBlue(){
        return (<View style={{ backgroundColor : ColorUtil.blueTheme, height : 1, }}/>);
    },

    getLineVertical(){
        return (<View style={{ backgroundColor : ColorUtil.bgGray, width : 1, }}/>);
    },

    getIconRightSmall(){
        return (
            <View style={{ width : 20, height : 20, justifyContent : 'center', alignItems : 'center', }}>
                <MyImageComponent
                    style={[ StyleUtil.gStyles.gIconSmall, ]}
                    source={require('../image/icon_right.png')}/>
            </View>
        );
    },
    getIconLeftSmall(){
        return (
            <View style={{ width : 20, height : 20, justifyContent : 'center', alignItems : 'center', }}>
                <MyImageComponent
                    style={[ StyleUtil.gStyles.gIconSmall, ]}
                    source={require('../image/icon_left.png')}/>
            </View>
        );
    },
    getIconLeft(){
        return (
            <View style={{ width : 30, height : 30, justifyContent : 'center', alignItems : 'center', }}>
                <MyImageComponent
                    style={[ StyleUtil.gStyles.gIconDefault, ]}
                    source={require('../image/icon_left.png')}/>
            </View>
        );
    },
    getViewStatusBar(){

        let oldStatusBar = (
            <StatusBar
                animated={true}
                hidden={false}
                backgroundColor={ColorUtil.transparent}
                translucent={false}
                barStyle={'dark-content'}
                showHideTransition={'fade'}
                // networkActivityIndicatorVisible={true}
            />
        );
        return (
            <View >
                {oldStatusBar}
            </View>
        );
    },
    popAllAndToLogin() {
        Actions.LoginPage();
    },

    getViewRow1v3(title, description){
        if (!(StringUtil.stringIsAvailable(title) && StringUtil.stringIsAvailable(description))) {
            return null;
        }

        return (
            <View style={[ StyleUtil.gStyles.gFlexDirectionRow, ]}>
                <Text style={[ StyleUtil.gStyles.gTextGray, StyleUtil.gStyles.gPadding5, {
                    flex : 1,
                    textAlign : 'right'
                } ]}>{title}</Text>
                <Text style={[ StyleUtil.gStyles.gTextBlack, StyleUtil.gStyles.gPadding5, {
                    flex : 3,
                    textAlign : 'left'
                } ]}>{description}</Text>
            </View>
        );

    },

    getViewBadge(badgeText = ''){
        if (badgeText.length == 0) {
            return null;
        }
        return (
            <View style={{
                backgroundColor : 'red',
                paddingHorizontal : 10,
                paddingVertical : 2,
                borderRadius : 10,
            }}>
                <Text style={{
                    color : 'white',
                    fontSize : 10,
                }}>
                    {badgeText}
                </Text>
            </View>
        );
    },

    getViewBadgeRightTop(badgeText = ''){
        if (badgeText.length == 0) {
            return null;
        }
        return (

            <View style={{ height : 42, marginLeft : -10, }}>
                {this.getViewBadge(badgeText)}
            </View>


        );
    },
};

module.exports = ViewUtil;