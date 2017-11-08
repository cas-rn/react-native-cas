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
import MyDatePickerNormalComponent from "../component/MyDatePickerNormalComponent";
import * as DateParseFormatUtil from "../util/DateParseFormatUtil";
import * as ApiUtil from "../api/common/ApiUtil";
import MyLabelTextComponent from "../component/MyLabelTextComponent";
const RadioItem = Radio.RadioItem;

export default class PublicCoursePage extends BaseComponent {


    // 构造
    constructor(props) {
        super(props);
        this.baseCommon = new BaseCommon({ ...props, backPress : (e) => this.onBackPress(e) });
        // 初始状态
        this.state = {
            showPickerNormal : false,
            curCourse : {
                lecture_name : '请选择',
            },
            value : 0,  //0-学生，1-老师

            address : '',
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
        if (!this.state.curCourse.id) {
            ViewUtil.showToast('请选择课程');
            return false;
        }
        if (this.state.address == '' || StringUtil.trim(this.state.address).length == 0) {
            ViewUtil.showToast('请输入地址');
            return false;
        }

        return true;
    }

    onOkPressedCallBack(json) {
        if (json.code != ApiUtil.http.ERROR_CODE_SUCCESS_0) {
            ViewUtil.dismissToastLoading();
            //处理自定义异常
            SecretAsync.onCustomExceptionNormal(json);

            return;

        }
        ViewUtil.showToast(ConstantUtil.toastDoSuccess);
        Actions.pop();
    }

    onOkPressed() {

        if (!this.checkInfo()) {
            return;
        }

        ViewUtil.showToastLoading();

        //发布课程
        let bodyObj = {
            api_name : 'teacher.release.add',
            lectures_id : this.state.curCourse.id,
            schooltime : this.action.value,
            start_sign_time : this.action1.value,
            end_sign_time : this.action2.value,
            room : this.state.address.trim(),

        };
        SecretAsync.postWithCommonErrorShow((jsonObj) => {
            this.onOkPressedCallBack(jsonObj);
        }, bodyObj);

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
            action.value = DateParseFormatUtil.formatDateToLong10(selectedValue);

        }

        {
            let selectedValue = null;
            selectedValue = new Date();

            action1.selectedValue = selectedValue;
            action1.value = DateParseFormatUtil.formatDateToLong10(selectedValue);

        }

        {
            let selectedValue = null;
            selectedValue = new Date();
            action2.selectedValue = selectedValue;
            action2.value = DateParseFormatUtil.formatDateToLong10(selectedValue);
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

                            <MyLabelTextComponent
                                _rightIconShouldShow={true}
                                _label={'选择课程'}
                                _labelContent={this.state.curCourse.lecture_name}
                                onPress={() => {
                                    Actions.MyCourseListManagePage({
                                        typePage : ConstantUtil.typePageSelectCourse, setData : (data) => {
                                            console.log(data);
                                            this.setState({
                                                curCourse : data,
                                            });
                                        }
                                    });
                                }}

                            />

                            <List.Item>

                                <LabelWithInputSingleLineNormalNoBorder _labelContent={'上课地址'}
                                                                        _inputValue={this.state.address}
                                                                        _onChange={(value) => {
                                                                            this.baseCommon.mounted && this.setState({ address : value });
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

                                    action.value = DateParseFormatUtil.formatDateToLong10(v);

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

                                    action1.value = DateParseFormatUtil.formatDateToLong10(v);

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

                                    action2.value = DateParseFormatUtil.formatDateToLong10(v);

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
                                this.onOkPressed();
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

