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
import PropTypes from "prop-types";
import * as ConstantUtil from "../util/ConstantUtil";
import * as SecretAsync from "../api/common/SecretAsync";
import * as ApiUtil from "../api/common/ApiUtil";

export default class IndexPage extends BaseComponent {

    static propTypes = {
        role : PropTypes.string, //

    };

    static defaultProps = {
        role : '2', //1-老师，2-学生
    };

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

    componentWillMount() {
        super.componentWillMount();
        this.baseCommon.componentWillMount();
        console.log(global.gUserInfo);

    }

    onOkScanCallBack(json) {
        if (json.code != ApiUtil.http.ERROR_CODE_SUCCESS_0) {
            ViewUtil.dismissToastLoading();
            //处理自定义异常
            SecretAsync.onCustomExceptionNormal(json);

            return;

        }
        ViewUtil.showToast(ConstantUtil.toastDoSuccess);
        // Actions.pop();
    }

    checkInfo() {

        if (TmpDataUtil.curLongitude == '') {
            ViewUtil.showToast('获取位置失败');
            return false;
        }
        return true;
    }

    onOkScan(value) {

        if (!this.checkInfo()) {
            return;
        }

        ViewUtil.showToastLoading();

        //发布课程
        let bodyObj = {
            api_name : 'student.sign.scanning',
            qrcode : value,
            longitude : TmpDataUtil.curLongitude,
            latitude : TmpDataUtil.curLatitude,
            address : '1',

        };
        SecretAsync.postWithCommonErrorShow((jsonObj) => {
            this.onOkScanCallBack(jsonObj);
        }, bodyObj);

    }

    onPressSignScan() {
        this.onPressSignGPS();

        let bodyObj = {};
        Actions.ShowScanPage({
            onReadData : (value) => {
                console.log(value);
                this.onOkScan(value);
            }
        });

    }

    onPressSignGPS() {

        let bodyObj = {};
        TmpDataUtil.curLongitude = '';
        TmpDataUtil.curLatitude = '';
        this.amapLocationUtil = new AMapLocationUtil({
            _onRequestLocationOk : () => {
                LOG(22);
                LOG(TmpDataUtil.curLatitude);
            }
        });
        this.amapLocationUtil._showLocation();
    }

    render() {
        return (
            <MyViewComponent style={{ backgroundColor : ColorUtil.bgGray, flex : 1, }}>

                {ViewUtil.getViewStatusBar()}
                <HeaderNormalWithRightButtonComponent textCenter={'主 页'}
                                                      _leftBtnShouldShow={true}
                                                      _rightBtnShouldShow={false}
                                                      _textBtn={'btn'}
                                                      _onPressBtn={() => {
                                                          console.log(123);
                                                          Actions.ModifyPassPage();
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
                        style={[ StyleUtil.gStyles.gPadding20, StyleUtil.gStyles.gFlex1, StyleUtil.gStyles.gBgWhite, StyleUtil.gStyles.gCardBgWhite ]}>

                        <Text style={{ textAlign : 'center', }}> {gUserInfo.user_name} </Text>

                        {
                            gUserInfo && gUserInfo.role == '1'
                                ? <MyViewComponent>

                                <MyButtonComponent
                                    style={[ StyleUtil.gStyles.gButtonBlueDefault, {
                                        marginBottom : 20,
                                        marginTop : 40,
                                    }, ]}
                                    type={'primary'}
                                    onPress={() => {
                                        Actions.PublicCoursePage();
                                    }}
                                >
                                    <Text> 发布课程 </Text>
                                </MyButtonComponent>
                                <MyButtonComponent
                                    style={[ StyleUtil.gStyles.gButtonBlueDefault, {
                                        marginBottom : 20,
                                        marginTop : 40,
                                    }, ]}
                                    type={'primary'}
                                    onPress={() => {
                                        Actions.MyCourseListManagePage({ typePage : ConstantUtil.typePageReleasedCourse });
                                    }}
                                >
                                    <Text> 已发布课程 </Text>
                                </MyButtonComponent>
                                <MyButtonComponent
                                    style={[ StyleUtil.gStyles.gButtonBlueDefault, {
                                        marginBottom : 20,
                                        marginTop : 40,
                                    }, ]}
                                    type={'primary'}
                                    onPress={() => {
                                        Actions.MyCourseListManagePage({ typePage : ConstantUtil.typePageManageMyCourse });
                                    }}
                                >
                                    <Text> 我的课程 </Text>
                                </MyButtonComponent>

                            </MyViewComponent>
                                : <MyViewComponent>
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

                                {/*<MyButtonComponent*/}
                                {/*style={[ StyleUtil.gStyles.gButtonBlueDefault, {*/}
                                {/*marginBottom : 20,*/}
                                {/*marginTop : 40,*/}
                                {/*}, ]}*/}
                                {/*type={'primary'}*/}
                                {/*onPress={() => {*/}
                                {/*this.onPressSignGPS();*/}
                                {/*}}*/}
                                {/*>*/}
                                {/*<Text> GPS签到 </Text>*/}
                                {/*</MyButtonComponent>*/}

                                <MyButtonComponent
                                    style={[ StyleUtil.gStyles.gButtonBlueDefault, {
                                        marginBottom : 20,
                                        marginTop : 40,
                                    }, ]}
                                    type={'primary'}
                                    onPress={() => {
                                        Actions.MyCourseListManagePage({ typePage : ConstantUtil.typePageSelectSigningCourse });
                                    }}
                                >
                                    <Text> 可签到课程 </Text>
                                </MyButtonComponent>

                                <MyButtonComponent
                                    style={[ StyleUtil.gStyles.gButtonBlueDefault, {
                                        marginBottom : 20,
                                        marginTop : 40,
                                    }, ]}
                                    type={'primary'}
                                    onPress={() => {
                                        Actions.MyCourseListManagePage({ typePage : ConstantUtil.typePageSelectSignedCourse });
                                    }}
                                >
                                    <Text> 已签到课程 </Text>
                                </MyButtonComponent>
                            </MyViewComponent>
                        }

                        <MyButtonComponent
                            style={[ StyleUtil.gStyles.gButtonBlueDefault, {
                                marginBottom : 20,
                                marginTop : 40,
                            }, ]}
                            type={'primary'}
                            onPress={() => {
                                Actions.ModifyPassPage();
                            }}
                        >
                            <Text> 修改密码 </Text>
                        </MyButtonComponent>

                        <MyButtonComponent
                            style={[ StyleUtil.gStyles.gButtonBlueDefault, {
                                marginBottom : 20,
                                marginTop : 40,
                            }, ]}
                            type={'primary'}
                            onPress={() => {
                                ViewUtil.popAllAndToLogin();
                            }}
                        >
                            <Text> 退出登录 </Text>
                        </MyButtonComponent>

                    </MyViewComponent>

                </MyScrollViewComponent>

            </MyViewComponent>
        );
    }

}

