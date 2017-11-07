import React from "react";
import { Text } from "react-native";
import * as ConstantUtil from "../util/ConstantUtil";
import * as StyleUtil from "../util/StyleUtil";
import * as StringUtil from "../util/StringUtil";
import BaseComponent from "./BaseComponent";
import * as ViewUtil from "../util/ViewUtil";
import * as SecretAsync from "../api/common/SecretAsync";
import BaseCommon from "../common/BaseCommon";
import * as ColorUtil from "../util/ColorUtil";
import MyViewComponent from "../component/MyViewComponent";
import MyScrollViewComponent from "../component/MyScrollViewComponent";
import LabelWithInputSingleLineNormalNoBorder from "../component/LabelWithInputSingleLineNormalNoBorderComponent";
import MyButtonComponent from "../component/MyButtonComponent";
import { Actions } from "react-native-router-flux";
import HeaderNormalWithRightButtonComponent from "../component/HeaderNormalWithRightButtonComponent";
import { List, Radio } from "antd-mobile";
import MyPickerNormalComponent from "../component/MyPickerNormalComponent";
import MyDatePickerNormalComponent from "../component/MyDatePickerNormalComponent";
import * as DateParseFormatUtil from "../util/DateParseFormatUtil";
const RadioItem = Radio.RadioItem;

export default class PublicCoursePage extends BaseComponent {


    // 构造
    constructor(props) {
        super(props);
        this.baseCommon = new BaseCommon({ ...props, backPress : (e) => this.onBackPress(e) });
        // 初始状态
        this.state = {
            showPickerNormal : true,
            value : 0,  //0-学生，1-老师

            name : '',
        };
    }

    onBackPress(e) {
        return false;
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

    checkInfo() {
        if (this.state.name == '' || StringUtil.trim(this.state.name).length == 0) {
            ViewUtil.showToast('请输入姓名');
            return false;
        }
        if (this.state.telephone == '' || StringUtil.trim(this.state.telephone).length == 0) {
            ViewUtil.showToast('请输入手机号');
            return false;
        }

        if (this.state.password == '' || StringUtil.trim(this.state.password).length < 6) {
            ViewUtil.showToast('请输入密码,不少于6位');
            return false;
        }
        if (this.state.password2 == '' || StringUtil.trim(this.state.password2).length < 6) {
            ViewUtil.showToast('请输入重复密码,不少于6位');
            return false;
        }
        if (this.state.password != this.state.password2) {
            ViewUtil.showToast('两次密码输入不一致');
            return false;
        }
        return true;
    }

    loginCallBack(json) {
        if (json.code != URLConf.http.ERROR_CODE_SUCCESS_0) {
            ViewUtil.dismissToastLoading();
            //处理自定义异常
            SecretAsync.onCustomExceptionNormal(json);

            return;

        }

        // if (URLConf.http.RET_TYPE_SUCCESS == retType) {
        // alert(StringUtil.object2Json(json));
        var userInfo = {
            user_id : json.response.user_id,
            user_name : json.response.user_name,
            user_telephone : StringUtil.trim(this.state.telephone),
            user_password : StringUtil.trim(this.state.password),
        };
        gUserInfo = userInfo;
        storage.save({ key : ConstantUtil.strings.keyUserInfo, data : userInfo });
        var tokenInfo = {
            token : json.response.token,
            expired_time : json.response.expired_time,
        };
        storage.save({ key : ConstantUtil.strings.keyTokenInfo, data : tokenInfo });

    }

    onPressSignUp() {

        Actions.SignUpPage();

    }

    componentWillMount() {
        super.componentWillMount();
        this.baseCommon.componentWillMount();

        this.action = {
            "widgetName" : "datetimepicker",                 // 控件类型:text、textarea、select、datepicker、timepicker、citypicker、phone...
            "title" : "日期+时间",                         // 显示的标题
            "subTitle" : "请选择",                    // 显示的副标题，非必须
            "valueKey" : "datetime",                  // 字段名称
            "value" : "",
            "YPKey" : "YPContactGender",            // 优豹字段名称，非必须
            "validator" : [
                {
                    "rule" : "range",
                    "value" : "6,30",
                    "error" : "密码长度必须大于等于6，小于30"
                }
            ]
        };
        this.action1 = {
            "widgetName" : "datetimepicker",                 // 控件类型:text、textarea、select、datepicker、timepicker、citypicker、phone...
            "title" : "日期+时间",                         // 显示的标题
            "subTitle" : "请选择",                    // 显示的副标题，非必须
            "valueKey" : "datetime",                  // 字段名称
            "value" : "",
            "YPKey" : "YPContactGender",            // 优豹字段名称，非必须
            "validator" : [
                {
                    "rule" : "range",
                    "value" : "6,30",
                    "error" : "密码长度必须大于等于6，小于30"
                }
            ]
        };
        this.action2 = {
            "widgetName" : "datetimepicker",                 // 控件类型:text、textarea、select、datepicker、timepicker、citypicker、phone...
            "title" : "日期+时间",                         // 显示的标题
            "subTitle" : "请选择",                    // 显示的副标题，非必须
            "valueKey" : "datetime",                  // 字段名称
            "value" : "",
            "YPKey" : "YPContactGender",            // 优豹字段名称，非必须
            "validator" : [
                {
                    "rule" : "range",
                    "value" : "6,30",
                    "error" : "密码长度必须大于等于6，小于30"
                }
            ]
        };
        const { action, action1, action2 } = this;

        {
            let selectedValue = null;

            selectedValue = new Date();
            action.selectedValue = selectedValue;
        }

        {
            let selectedValue = null;
            selectedValue = new Date();

            action1.selectedValue = selectedValue;
        }

        {
            let selectedValue = null;
            selectedValue = new Date();
            action2.selectedValue = selectedValue;
        }

    }

    onChange = (value) => {
        console.log('checkbox');
        this.setState({
            value,
        });
    };

    render() {
        const { value, } = this.state;
        let action = this.action;
        let action1 = this.action1;
        let action2 = this.action2;
        const data = [
            { value : 0, label : '学生' },
            { value : 1, label : '老师' },
        ];

        return (
            <MyViewComponent style={{ backgroundColor : ColorUtil.bgGray, flex : 1, }}>

                {ViewUtil.getViewStatusBar()}
                <HeaderNormalWithRightButtonComponent
                    textCenter={'发 布'}
                    _leftBtnShouldShow={true}
                />
                <MyScrollViewComponent
                    keyboardShouldPersistTaps='always'
                    showsVerticalScrollIndicator={false}

                    contentContainerStyle={{
                        justifyContent : 'center',
                        alignItems : 'stretch',
                    }}>

                    <MyViewComponent
                        style={[ StyleUtil.gStyles.gFlex1, StyleUtil.gStyles.gBgWhite, StyleUtil.gStyles.gCardBgWhite ]}>

                        <List>

                            <MyPickerNormalComponent ref="pickerNormal"
                                                     _visible={this.state.showPickerNormal}
                            />

                            <List.Item>

                                <LabelWithInputSingleLineNormalNoBorder _labelContent={'上课地址'}
                                                                        _inputValue={this.state.name}
                                                                        _onChange={(value) => {
                                                                            this.baseCommon.mounted && this.setState({ name : value });
                                                                        }}
                                />
                            </List.Item>

                            <MyDatePickerNormalComponent
                                title={'上课时间'}
                                selectedValue={action.selectedValue}
                                onChange={(v) => {
                                    console.log(action.value);
                                    action.selectedValue = v;
                                    console.log(action.value);

                                    action.value = DateParseFormatUtil.formatDateLongOrStringToStringMinute(v);

                                    console.log(action.value);
                                }}
                            />
                            <MyDatePickerNormalComponent
                                title={'开始签到时间'}
                                selectedValue={action1.selectedValue}
                                onChange={(v) => {
                                    console.log(action1.value);
                                    action1.selectedValue = v;
                                    console.log(action1.value);

                                    action1.value = DateParseFormatUtil.formatDateLongOrStringToStringMinute(v);

                                    console.log(action1.value);
                                }}
                            />
                            <MyDatePickerNormalComponent
                                title={'结束签到时间'}
                                selectedValue={action2.selectedValue}
                                onChange={(v) => {
                                    console.log(v);
                                    console.log(action2.value);
                                    action2.selectedValue = v;
                                    console.log(action2.value);

                                    action2.value = DateParseFormatUtil.formatDateLongOrStringToStringMinute(v);

                                    // action2.value = v.format("YYYY-MM-DD HH:mm");//data为日期的字符串形式
                                    console.log(action2.value);
                                }}
                            />

                        </List>

                        <MyButtonComponent
                            style={[ StyleUtil.gStyles.gButtonBlueDefault, {
                                marginBottom : 20,
                                marginTop : 40,
                            }, ]}
                            type={'primary'}
                            onPress={() => {
                                this.onPressSignUp();
                            }}
                        >
                            <Text> 发 布 </Text>
                        </MyButtonComponent>

                    </MyViewComponent>

                </MyScrollViewComponent>

            </MyViewComponent>
        );
    }

}

