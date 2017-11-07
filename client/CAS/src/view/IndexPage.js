import React from "react";
import { BackHandler, Text } from "react-native";
import * as StyleUtil from "../util/StyleUtil";
import BaseComponent from "./BaseComponent";
import * as ViewUtil from "../util/ViewUtil";
import BaseCommon from "../common/BaseCommon";
import * as ColorUtil from "../util/ColorUtil";
import MyViewComponent from "../component/MyViewComponent";
import MyScrollViewComponent from "../component/MyScrollViewComponent";
import MyButtonComponent from "../component/MyButtonComponent";
import { Actions } from "react-native-router-flux";
import HeaderNormalWithRightButtonComponent from "../component/HeaderNormalWithRightButtonComponent";
import AMapLocationUtil from "../util/AMapLocationUtil";

export default class IndexPage extends BaseComponent {


    // 构造
    constructor(props) {
        super(props);
        this.baseCommon = new BaseCommon({ ...props, backPress : (e) => this.onBackPress(e) });
        // 初始状态
        this.state = {};
    }

    onBackPress(e) {
        console.log('再按返回退出应用11');
        console.log('lastBackTime', lastBackTime);

        if ((lastBackTime + 2000) >= Date.now()) {
            BackHandler.exitApp();
            return true;
        }
        // 此处可以根据情况实现 点2次就退出应用，或者弹出rn视图等
        //记录点击返回键的时间
        lastBackTime = Date.now();
        console.log('lastBackTime2', lastBackTime);

        ViewUtil.showToast('再按返回退出应用');
        console.log('再按返回退出应用');
        return true;
    }

    componentDidMount() {
        super.componentDidMount();
        this.baseCommon.componentDidMount();
        // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
    }

    componentWillUnmount() {
        super.componentWillUnmount();
        this.baseCommon.componentWillUnmount();

    }

    onPressSignScan() {

        let bodyObj = {};
        alert('132');
        Actions.ShowScanPage({onReadData:(value)=>{
            console.log(value);
        }});

    }

    onPressSignGPS() {

        let bodyObj = {};
        this.amapLocationUtil = new AMapLocationUtil({
            _onRequestLocationOk : () => {
                LOG(22);
                LOG(TmpDataUtil.curLatitude);
            }
        });
        this.amapLocationUtil._showLocation();
    }

    componentWillMount() {
        super.componentWillMount();
        this.baseCommon.componentWillMount();

    }

    render() {
        return (
            <MyViewComponent style={{ backgroundColor : ColorUtil.bgGray, flex : 1, }}>

                {ViewUtil.getViewStatusBar()}
                <HeaderNormalWithRightButtonComponent textCenter={'主 页'}
                                                      _leftBtnShouldShow={true}
                                                      _rightBtnShouldShow={true}
                                                      _textBtn={'btn'}
                                                      _onPressBtn={() => {
                                                          console.log(123);
                                                      }}

                />
                <MyScrollViewComponent
                    keyboardShouldPersistTaps='always'
                    showsVerticalScrollIndicator={false}

                    contentContainerStyle={{
                        justifyContent : 'center',
                        alignItems : 'stretch',
                    }}>

                    <MyViewComponent
                        style={[ StyleUtil.gStyles.gPadding20, StyleUtil.gStyles.gFlex1, StyleUtil.gStyles.gBgWhite ]}>

                        <MyButtonComponent
                            style={[ StyleUtil.gStyles.gButtonBlueDefault, {
                                marginBottom : 20,
                                marginTop : 40,
                            }, ]}
                            type={'primary'}
                            onPress={() => {
                                this.onPressSignScan();
                            }}
                        >
                            <Text> 扫码签到 </Text>
                        </MyButtonComponent>

                        <MyButtonComponent
                            style={[ StyleUtil.gStyles.gButtonBlueDefault, {
                                marginBottom : 20,
                                marginTop : 40,
                            }, ]}
                            type={'primary'}
                            onPress={() => {
                                this.onPressSignGPS();
                            }}
                        >
                            <Text> GPS签到 </Text>
                        </MyButtonComponent>

                    </MyViewComponent>

                </MyScrollViewComponent>

            </MyViewComponent>
        );
    }

}

