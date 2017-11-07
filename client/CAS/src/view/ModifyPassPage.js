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

export default class ModifyPassPage extends BaseComponent {
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
    }

    componentWillUnmount() {
        super.componentWillUnmount();
        this.baseCommon.componentWillUnmount();
        // console.log('componentWillUnmount');
    }

    render() {
        return (
            <MyViewComponent style={{ backgroundColor : ColorUtil.bgGray }}>

                <HeaderNormalWithRightButtonComponent
                    textCenter="重置密码"
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

                                <LabelWithInputSingleLineNormalNoBorderComponent _labelContent={'原密码    '} _inputPlaceHolder={'请输入原密码'}
                                                                                 _type={'password'}
                                                                                 _inputValue={this.state.passwordNow}
                                                                                 _onChange={(value) => {
                                                                                     this.baseCommon.mounted && this.setState({ passwordNow : value });
                                                                                 }}
                                />
                            </List.Item>

                            <List.Item>

                                <LabelWithInputSingleLineNormalNoBorderComponent _labelContent={'新密码    '} _inputPlaceHolder={'不少于6位'}
                                                                                 _type={'password'}
                                                                                 _inputValue={this.state.password}
                                                                                 _onChange={(value) => {
                                                                                     this.baseCommon.mounted && this.setState({ password : value });
                                                                                 }}
                                />
                            </List.Item>

                            <List.Item>

                                <LabelWithInputSingleLineNormalNoBorderComponent _labelContent={'重复密码'} _inputPlaceHolder={'不少于6位'}
                                                                                 _type={'password'}
                                                                                 _inputValue={this.state.password2}
                                                                                 _onChange={(value) => {
                                                                                     this.baseCommon.mounted && this.setState({ password2 : value });
                                                                                 }}
                                />
                            </List.Item>

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
                            <Text> 重 置 </Text>
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

