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

export default class AddCoursePage extends BaseComponent {
    constructor(props) {
        super(props);
        this.baseCommon = new BaseCommon({ ...props, });

        this.state = {
            // ...this.state,

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

        this.action = {
            "title" : "描述",                         // 显示的标题
            "subTitle" : "",                    // 显示的副标题，非必须
            "valueKey" : "age",                  // 字段名称
            "value" : "66",
            "default" : "",
        };
    }

    componentWillUnmount() {
        super.componentWillUnmount();
        this.baseCommon.componentWillUnmount();
        // console.log('componentWillUnmount');
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
                                                                                 _type={'password'}
                                                                                 _inputValue={this.state.passwordNow}
                                                                                 _onChange={(value) => {
                                                                                     this.baseCommon.mounted && this.setState({ passwordNow : value });
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
                            onClick={() => {
                                PressOnlyOnceUtil.onPress(() => {
                                    this.onResetPassPressed();
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

    checkInfo() {

        if (this.state.passwordNow == '' || StringUtil.trim(this.state.passwordNow).length == 0) {
            ViewUtil.showToast('请输入原密码');
            return false;
        }

        if (this.state.password == '' || StringUtil.trim(this.state.password).length < 6) {
            ViewUtil.showToast('请输入新密码,不少于6位');
            return false;
        }
        if (this.state.password2 == '' || StringUtil.trim(this.state.password2).length < 6) {
            ViewUtil.showToast('请输入重复密码,不少于6位');
            return false;
        }
        if (this.state.password != this.state.password2) {
            ViewUtil.showToast('两次密码输入不一致');
            return;
        }

        return true;
    }

    onResetPassPressed() {

        if (!this.checkInfo()) {
            return;
        }

        ViewUtil.showToastLoading();

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
        if (jsonObj.code != URLConf.http.ERROR_CODE_SUCCESS_0) {
            ViewUtil.dismissToastLoading();
            //处理自定义异常
            SecretAsync.onCustomExceptionNormal(jsonObj);
            return;
        }

        ViewUtil.dismissToastLoading();

        // alert(jsonObj);
        // alert(StringUtil.object2Json(jsonObj));

        ViewUtil.showToast('重置成功');
        // Actions.Success();

    }

}

