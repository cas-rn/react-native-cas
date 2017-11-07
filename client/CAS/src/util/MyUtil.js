import * as ConstantUtil from "./ConstantUtil";
import { Linking, Platform } from "react-native";
import * as StringUtil from "./StringUtil";

var MyUtil = {

    parseQRCodeUrl(qrCodeUrl, callback) {
        let _ret_pn = ConstantUtil.tmpString;
        let _ret_gn = ConstantUtil.tmpString;
        let _arr = qrCodeUrl.split('=');
        if (3 == _arr.length
            && _arr[ 1 ].length > 3
            && qrCodeUrl.indexOf('?pn=') >= 0
            && qrCodeUrl.indexOf('&gn=') >= 0
        ) {

            _ret_pn = _arr[ 1 ].substring(0, _arr[ 1 ].length - 3);
            _ret_gn = _arr[ 2 ];
            // console.log('_pn:' + _ret_pn + '\n_gn:' + _ret_gn);
            callback(true, _ret_pn, _ret_gn);
        } else {
            callback(false, qrCodeUrl);
        }

    },

    /**
     * 跳转到导航界面
     * @param lon
     * @param lat
     * @param name
     * @param targetAppName browser-浏览器打开， gaode-高德APP， baidu-百度APP，如果没有安装相应APP则使用浏览器打开。
     */
    turn2MapApp(lon = 0, lat = 0, targetAppName = 'baidu', name = '目标地址'){
        if (0 == lat && 0 == lon) {
            console.warn('暂时不能导航');
            return;
        }

        let url = '';
        let webUrl = `http://uri.amap.com/navigation?to=${lon},${lat},${name}&mode=bus&coordinate=gaode`;
        let webUrlGaode = `http://uri.amap.com/navigation?to=${lon},${lat},${name}&mode=bus&coordinate=gaode`;
        let webUrlBaidu = `http://api.map.baidu.com/direction?destination=latlng:${lat},${lon}|name=${name}&mode=transit&coord_type=gcj02&output=html&src=mybaoxiu|wxy`;

        url = webUrl;
        if (Platform.OS == 'android') {//android

            if (targetAppName == 'gaode') {
                // webUrl = 'androidamap://navi?sourceApplication=appname&amp;poiname=fangheng&amp;lat=36.547901&amp;lon=104.258354&amp;dev=1&amp;style=2';
                url = `androidamap://route?sourceApplication=appname&dev=0&m=0&t=1&dlon=${lon}&dlat=${lat}&dname=${name}`;
                webUrl = webUrlGaode;
            } else if (targetAppName == 'baidu') {
                url =
                    `baidumap://map/direction?destination=name:${name}|latlng:${lat},${lon}&mode=transit&coord_type=gcj02&src=thirdapp.navi.mybaoxiu.wxy#Intent;scheme=bdapp;package=com.baidu.BaiduMap;end`;
                webUrl = webUrlBaidu;
            }
        } else if (Platform.OS == 'ios') {//ios

            if (targetAppName == 'gaode') {
                url = `iosamap://path?sourceApplication=appname&dev=0&m=0&t=1&dlon=${lon}&dlat=${lat}&dname=${name}`;
                webUrl = webUrlGaode;
            } else if (targetAppName == 'baidu') {
                url =
                    `baidumap://map/direction?destination=name:${name}|latlng:${lat},${lon}&mode=transit&coord_type=gcj02&src=thirdapp.navi.mybaoxiu.wxy#Intent;scheme=bdapp;package=com.baidu.BaiduMap;end`;
                webUrl = webUrlBaidu;
            }

        }

        Linking.canOpenURL(url).then(supported => {
            if (!supported) {
                console.log('Can\'t handle url: ' + url);
                //'http://uri.amap.com/marker?position=121.815086,31.156484&name=浦东国际机场'
                return Linking.openURL(webUrl).catch(e => console.warn(e));
            } else {
                return Linking.openURL(url).catch(e => console.warn(e));
            }
        }).catch(err => console.error('An error occurred', err));
    },

    /**
     * 拨打电话
     * @param lon
     * @param lat
     * @param name
     */
    turn2TelApp(num = ''){
        if (!StringUtil.stringIsAvailable(num)) {
            console.warn('电话号码未知');
            return;
        }

        let url = 'tel:' + num;
        console.log(url);
        Linking.canOpenURL(url).then(supported => {
            if (!supported) {
                console.log('Can\'t handle url: ' + url);
            } else {
                return Linking.openURL(url).catch(e => console.log(e));
            }
        }).catch(err => console.error('An error occurred', err));
    },

    /**
     * Picker antd 根据选中的值找到选中项的内容
     * @param selectedValue     选中的值
     * @param selectableData    所有可以被选中的值的集合
     */
    getSelectedObject(selectedValue, selectableData){
        let curSelected = null;

        for (var i = 0;
            i < selectableData[ 0 ].length;
            i++) {
            if (selectedValue[ 0 ] == selectableData[ 0 ][ i ].value) {
                curSelected = selectableData[ 0 ][ i ];
                break;
            }
        }

        return curSelected;
    },

};

module.exports = MyUtil;