import React from "react";
import { View } from "react-native";
import { List, Text } from "antd-mobile";
import * as StyleUtil from "../util/StyleUtil";
import HeaderNormalWithRightButtonComponent from "../component/HeaderNormalWithRightButtonComponent";
import LabelWithInputSingleLineNormalNoBorderComponent from "../component/LabelWithInputSingleLineNormalNoBorderComponent";
import BaseComponent from "./BaseComponent";
import * as ViewUtil from "../util/ViewUtil";
import * as StringUtil from "../util/StringUtil";
import * as SecretAsync from "../api/common/SecretAsync";
import BaseCommon from "../common/BaseCommon";
import MyButtonComponent from "../component/MyButtonComponent";
import MyViewComponent from "../component/MyViewComponent";
import MyScrollViewComponent from "../component/MyScrollViewComponent";
import * as PressOnlyOnceUtil from "../util/PressOnlyOnceUtil";
import * as ColorUtil from "../util/ColorUtil";
import MyPushCardInputAreaComponent from "../component/MyPushCardInputAreaComponent";
import * as ApiUtil from "../api/common/ApiUtil";
import * as ConstantUtil from "../util/ConstantUtil";
import { Actions } from "react-native-router-flux";

export default class AddCoursePage extends BaseComponent {
    constructor(props) {
        super(props);
        this.baseCommon = new BaseCommon({ ...props, });

        this.state = {
            lecture_name : '',
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

        this.action = {
            "title" : "描述",                         // 显示的标题
            "subTitle" : "",                    // 显示的副标题，非必须
            "valueKey" : "lecture_introduction",                  // 字段名称
            "value" : "",
            "default" : "",
        };
    }

    componentWillUnmount() {
        super.componentWillUnmount();
        this.baseCommon.componentWillUnmount();
        // console.log('componentWillUnmount');
    }

    checkInfo() {

        if (this.state.lecture_name == '' || StringUtil.trim(this.state.lecture_name).length == 0) {
            ViewUtil.showToast('请输入课程');
            return false;
        }

        if (this.action.value == '' || StringUtil.trim(this.action.value).length == 0) {
            ViewUtil.showToast('请输入描述');
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
        let key = new Date().getTime() + '';
        this.props.setData({ key : key, id : key, lecture_name : this.state.lecture_name, lecture_introduction : this.action.value.trim(), });
        Actions.pop();
    }

    onOkPressed() {

        if (!this.checkInfo()) {
            return;
        }

        ViewUtil.showToastLoading();

        //发布课程
        let bodyObj = {
            api_name : 'teacher.lectures.add',
            lecture_name : this.state.lecture_name.trim(),
            lecture_introduction : this.action.value.trim(),

        };
        SecretAsync.postWithCommonErrorShow((jsonObj) => {
            this.onOkPressedCallBack(jsonObj);
        }, bodyObj);

    }

    render() {
        let action = this.action;

        if (action.value.length == 0 && action.default.length > 0) {
            action.value = action.default;
        }
        let viewAction = (
            <MyPushCardInputAreaComponent title={action.title} subTitle={action.subTitle}
                                          mInputDefaultValue={action.value}
                                          onChange={(v) => {
                                              console.log(action);
                                              action.value = v;
                                              console.log(action);
                                          }}

            />

        );

        return (
            <MyViewComponent style={{ backgroundColor : ColorUtil.bgGray }}>

                <HeaderNormalWithRightButtonComponent
                    textCenter={"添加课程"}
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
                            <List.Item>

                                <LabelWithInputSingleLineNormalNoBorderComponent _labelContent={'课程    '}
                                                                                 _inputValue={this.state.lecture_name}
                                                                                 _onChange={(value) => {
                                                                                     this.baseCommon.mounted && this.setState({ lecture_name : value });
                                                                                 }}
                                />
                            </List.Item>

                            {viewAction}

                        </List>

                        <MyButtonComponent
                            style={[ StyleUtil.gStyles.gButtonBlueDefault, {
                                marginBottom : 20,
                                marginTop : 40,
                            }, ]}
                            onPress={() => {
                                PressOnlyOnceUtil.onPress(() => {
                                    this.onOkPressed();
                                });
                            }}
                        >
                            <Text> 添 加 </Text>
                        </MyButtonComponent>

                    </View>

                </MyScrollViewComponent>

            </MyViewComponent>
        );
    }

}

