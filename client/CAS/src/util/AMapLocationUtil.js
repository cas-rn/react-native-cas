/**
 * Created by nick on 2017/6/27.
 */
import React from "react";
import { Alert, NativeAppEventEmitter } from "react-native";

import AMapLocation from "react-native-smart-amap-location";
import PropTypes from 'prop-types';

/**
 *  how to use:
 * this.amapLocationUtil = new AMapLocationUtil({_onRequestLocationOk:()=>{alert(22)}});
 this.amapLocationUtil._showLocation();
 */
export default class AMapLocationUtil {


    // 构造
    constructor(props) {
        this.props = props;
    }

    static propTypes = {
        _onRequestLocationOk : PropTypes.func,
    };

    static defaultProps = {
        _onRequestLocationOk : () => {
        },
    };

    componentDidMount() {
        console.log('componentDidMount amapLocationMy');
        let amapOptions = null;
        amapOptions = {
            onceLocation : true,
        };

        AMapLocation.init(amapOptions); //使用默认定位配置
        this.listenerAMap = NativeAppEventEmitter.addListener('amap.location.onLocationResult',
            (result) => this._onLocationResult(result)
        );
    }

    componentWillUnmount() {
        console.log('componentWillUnmount amapLocationMy');

        //停止并销毁定位服务
        AMapLocation.cleanUp();
        this.listenerAMap && this.listenerAMap.remove();
    }

    _onLocationResult(result) {
        // alert(1);
        this.componentWillUnmount();

        console.log(result);
        if (result.error) {
            Alert.alert(`错误代码: ${result.error.code}, 错误信息: ${result.error.localizedDescription}`);
            TmpDataUtil.curLatitude = 0;
            TmpDataUtil.curLongitude = 0;
        }
        else {
            if (result.formattedAddress) {
                // Alert.alert(`格式化地址 = ${result.formattedAddress}`);
            }
            else {
                // Alert.alert(`纬度 = ${result.coordinate.latitude}, 经度 = ${result.coordinate.longitude}`);
            }

            TmpDataUtil.curLatitude = result.coordinate.latitude;
            TmpDataUtil.curLongitude = result.coordinate.longitude;

        }

        if (TmpDataUtil.isRequestLocation) {
            TmpDataUtil.isRequestLocation = false;
            this.props._onRequestLocationOk && this.props._onRequestLocationOk();
        }

    }

    //单次定位并返回逆地理编码信息
    _showReGeocode() {
        AMapLocation.getReGeocode();
    }

    //单次定位并返回地理编码信息
    _showLocation() {
        this.componentWillUnmount();
        this.componentDidMount();

        if (false == TmpDataUtil.isRequestLocation) {
            TmpDataUtil.isRequestLocation = true;
            setTimeout(() => {
                this.componentWillUnmount();
                TmpDataUtil.isRequestLocation = false;
            }, 15000);
            AMapLocation.getLocation();
        }

    }

}
