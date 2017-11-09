import React from "react";
import { View } from "react-native";
import { List, Text } from "antd-mobile";
import * as StyleUtil from "../util/StyleUtil";
import HeaderNormalWithRightButtonComponent from "../component/HeaderNormalWithRightButtonComponent";
import LabelWithInputSingleLineNormalNoBorderComponent from "../component/LabelWithInputSingleLineNormalNoBorderComponent";
import BaseComponent from "./BaseComponent";
import * as ViewUtil from "../util/ViewUtil";
import * as SecretAsync from "../api/common/SecretAsync";
import BaseCommon from "../common/BaseCommon";
import MyButtonComponent from "../component/MyButtonComponent";
import MyViewComponent from "../component/MyViewComponent";
import MyScrollViewComponent from "../component/MyScrollViewComponent";
import * as ColorUtil from "../util/ColorUtil";
import * as ApiUtil from "../api/common/ApiUtil";
import MyLabelTextComponent from "../component/MyLabelTextComponent";
import * as DateparseFormatUtil from "../util/DateParseFormatUtil";
import AMapLocationUtil from "../util/AMapLocationUtil";
import { Actions } from "react-native-router-flux";
import * as ConstantUtil from "../util/ConstantUtil";

export default class DetailCoursePage extends BaseComponent {
    constructor(props) {
        super(props);
        this.baseCommon = new BaseCommon({ ...props, });

        this.state = {

            passwordNow : '',
            password : '',
            password2 : '',
        };
    }

    componentDidMount() {
        super.componentDidMount();
        this.baseCommon.componentDidMount();
        // console.log('componentDidMount');
    }

    componentWillMount() {
        super.componentWillMount();
        this.baseCommon.componentWillMount();
        // console.log('componentWillMount');
    }

    componentWillUnmount() {
        super.componentWillUnmount();
        this.baseCommon.componentWillUnmount();
        // console.log('componentWillUnmount');
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
            address : TmpDataUtil.curAddress,

        };
        SecretAsync.postWithCommonErrorShow((jsonObj) => {
            this.onOkScanCallBack(jsonObj);
        }, bodyObj);

    }

    onOkGPS(value) {

        if (!this.checkInfo()) {
            return;
        }

        ViewUtil.showToastLoading();

        //发布课程
        let bodyObj = {
            api_name : 'student.sign.verification',
            qrcode : value,
            release_lectures_id : this.props.data.id,
            signcode : this.state.passwordNow,
            longitude : TmpDataUtil.curLongitude,
            latitude : TmpDataUtil.curLatitude,
            address : TmpDataUtil.curAddress,

        };
        SecretAsync.postWithCommonErrorShow((jsonObj) => {
            this.onOkScanCallBack(jsonObj);
        }, bodyObj);

    }

    onPressSignScan() {
        let mScanMode = true;
        this.onPressSignGPS(mScanMode);

        let bodyObj = {};
        Actions.ShowScanPage({
            onReadData : (value) => {
                console.log(value);
                this.onOkScan(value);
            }
        });

    }

    onPressSignGPS(mScanMode) {

        let bodyObj = {};
        TmpDataUtil.curLongitude = '';
        TmpDataUtil.curLatitude = '';
        TmpDataUtil.Address = '';
        this.amapLocationUtil = new AMapLocationUtil({
            _onRequestLocationOk : () => {
                LOG(22);
                LOG(TmpDataUtil.curLatitude);
                if (!mScanMode) {
                    this.onOkGPS('');
                }
            }
        });
        this.amapLocationUtil._showReGeocode();
    }

    render() {
        let item = this.props.data;
        return (
            <MyViewComponent style={{ backgroundColor : ColorUtil.bgGray }}>

                <HeaderNormalWithRightButtonComponent
                    textCenter="课程详情"
                    _leftBtnShouldShow={true}

                />

                <MyScrollViewComponent
                    keyboardShouldPersistTaps='always'
                    // keyboardDismissMode={'on-drag'}
                    showsVerticalScrollIndicator={false}

                    contentContainerStyle={{
                        justifyContent : 'center',
                        alignItems : 'stretch',
                    }}>

                    <View style={StyleUtil.gStyles.gCardBgWhite}>
                        <List>

                            <MyLabelTextComponent _label={'课程'} _labelContent={item.lecture_name}/>
                            <MyLabelTextComponent _label={'老师'} _labelContent={item.username}/>
                            <MyLabelTextComponent _label={'地址'} _labelContent={item.room}/>
                            <MyLabelTextComponent _label={'时间'} _labelContent={DateparseFormatUtil.formatDateLongOrStringToStringMinuteLong10(item.schooltime)}/>
                            <MyLabelTextComponent _label={'开始时间'} _labelContent={DateparseFormatUtil.formatDateLongOrStringToStringMinuteLong10(item.start_sign_time)}/>
                            <MyLabelTextComponent _label={'结束时间'} _labelContent={DateparseFormatUtil.formatDateLongOrStringToStringMinuteLong10(item.end_sign_time)}/>
                            <MyLabelTextComponent _label={'简介'} _labelContent={item.lecture_introduction}/>

                            <List.Item>

                                <LabelWithInputSingleLineNormalNoBorderComponent _labelContent={'验证码    '}
                                                                                 _inputValue={this.state.passwordNow}
                                                                                 _onChange={(value) => {
                                                                                     this.baseCommon.mounted && this.setState({ passwordNow : value });
                                                                                 }}
                                />
                            </List.Item>

                        </List>

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
                                marginBottom : 50,
                                marginTop : 40,
                            }, ]}
                            type={'primary'}
                            onPress={() => {
                                this.onPressSignGPS();
                            }}
                        >
                            <Text> GPS签到 </Text>
                        </MyButtonComponent>

                    </View>

                </MyScrollViewComponent>

            </MyViewComponent>
        );
    }

    checkInfo() {

        if (TmpDataUtil.curLongitude == '') {
            ViewUtil.showToast('获取位置失败');
            return false;
        }
        return true;
    }

    onResetPassPressed() {

        if (!this.checkInfo()) {
            return;
        }

        ViewUtil.showToastLoading();

        let bodyObj = {
            api_name : 'home.login.uppassword',
            password : this.state.passwordNow,
            newpassword : this.state.password,
        };
        SecretAsync.postWithCommonErrorShow((jsonObj) => {
            this.onResetPassCallback(jsonObj);
        }, bodyObj);

        // var bodyObj = {
        //     [URLConf.http.API_NAME] : URLConf.http.PARAM_API_USER__USER_CHANGE_PASSWORD,
        //     [URLConf.http.PARAM_OLD_USER_PASSWORD] : this.state.passwordNow,
        //     [URLConf.http.PARAM_NEW_USER_PASSWORD] : this.state.password,
        // };
        //
        // UserApi.modifyPass(bodyObj, (jsonObj) => {
        //     this.onResetPassCallback(jsonObj);
        // });

    }

    onResetPassCallback(jsonObj) {
        if (jsonObj.code != ApiUtil.http.ERROR_CODE_SUCCESS_0) {
            ViewUtil.dismissToastLoading();
            //处理自定义异常
            SecretAsync.onCustomExceptionNormal(jsonObj);
            return;
        }

        ViewUtil.dismissToastLoading();

        // alert(jsonObj);
        // alert(StringUtil.object2Json(jsonObj));

        ViewUtil.showToast('重置成功');
        ViewUtil.popAllAndToLogin();
        // Actions.Success();

    }

}

