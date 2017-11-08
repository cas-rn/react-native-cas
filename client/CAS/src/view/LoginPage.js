import React from "react";
import { BackHandler, Text } from "react-native";
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
import { List } from "antd-mobile";
import * as ApiUtil from "../api/common/ApiUtil";

export default class LoginPage extends BaseComponent {


    // 构造
    constructor(props) {
        super(props);
        this.baseCommon = new BaseCommon({ ...props, backPress : (e) => this.onBackPress(e) });
        // 初始状态
        this.state = {
            telephone : '',
            password : '',
        };
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

    checkInfo() {

        if (this.state.telephone == '' || StringUtil.trim(this.state.telephone).length == 0) {
            ViewUtil.showToast('请输入账号');
            return false;
        }

        if (this.state.password == '' || StringUtil.trim(this.state.password).length < 6) {
            ViewUtil.showToast('请输入密码,不少于6位');
            return false;
        }

        return true;
    }

    loginCallBack(json) {
        if (json.code != ApiUtil.http.ERROR_CODE_SUCCESS_0) {
            ViewUtil.dismissToastLoading();
            //处理自定义异常
            SecretAsync.onCustomExceptionNormal(json);

            return;

        }

        // if (URLConf.http.RET_TYPE_SUCCESS == retType) {
        // alert(StringUtil.object2Json(json));
        let userInfo = {
            user_id : json.response.user_info.id,
            user_name : json.response.user_info.username,
            user_telephone : StringUtil.trim(this.state.telephone),
            user_password : StringUtil.trim(this.state.password),
            role : json.response.user_info.role + '',
        };
        gUserInfo = userInfo;
        storage.save({ key : ConstantUtil.keyUserInfo, data : userInfo });
        let tokenInfo = json.response.user_token;
        gAccessTokenInfo = tokenInfo;
        hasLogin = true;
        storage.save({ key : ConstantUtil.keyTokenInfo, data : tokenInfo });

        ViewUtil.showToast('登录成功');
        Actions.IndexPage({ role : gUserInfo.role });

    }

    onPressLogin() {

        if (!this.checkInfo()) {
            return;
        }

        ViewUtil.showToastLoading(1000 * 60);

        let bodyObj = {
            api_name : 'home.login.index',
            phone : this.state.telephone.trim(),
            password : this.state.password.trim(),

        };
        SecretAsync.postWithCommonErrorShow((jsonObj) => {
            this.loginCallBack(jsonObj);
        }, bodyObj);

    }

    onPressSignUp() {

        Actions.SignUpPage();

    }

    componentWillMount() {
        super.componentWillMount();
        this.baseCommon.componentWillMount();

    }

    render() {
        return (
            <MyViewComponent style={{ backgroundColor : ColorUtil.bgGray, flex : 1, }}>

                {ViewUtil.getViewStatusBar()}
                <HeaderNormalWithRightButtonComponent
                    textCenter={'登 录'}
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

                            <List.Item>

                                <LabelWithInputSingleLineNormalNoBorder
                                    _labelContent={'账号        '}
                                    _inputValue={this.state.telephone}
                                    _onChange={(value) => {
                                        this.baseCommon.mounted && this.setState({ telephone : value });
                                    }}
                                />
                            </List.Item>

                            <List.Item>

                                <LabelWithInputSingleLineNormalNoBorder
                                    _labelContent={'密码        '}
                                    _inputPlaceHolder={'不少于6位'}
                                    _type={'password'}
                                    _inputValue={this.state.password}
                                    _onChange={(value) => {
                                        this.baseCommon.mounted && this.setState({ password : value });
                                    }}
                                />

                            </List.Item>

                        </List>
                        <MyButtonComponent
                            textStyle={[ StyleUtil.gStyles.gButtonTextWhiteDefault, ]}
                            style={[ StyleUtil.gStyles.gButtonBlueDefault, {
                                marginBottom : 20,
                                marginTop : 40,
                            }, ]}
                            type={'primary'}
                            onPress={() => {
                                this.onPressLogin();
                            }}
                        >
                            <Text> 登 录 </Text>
                        </MyButtonComponent>

                        <MyButtonComponent
                            textStyle={[ StyleUtil.gStyles.gButtonTextWhiteDefault, ]}
                            style={[ StyleUtil.gStyles.gButtonBlueDefault, {
                                marginBottom : 20,
                            }, ]}
                            type={'primary'}
                            onPress={() => {
                                this.onPressSignUp();
                            }}
                        >
                            <Text> 注 册 </Text>
                        </MyButtonComponent>

                    </MyViewComponent>

                </MyScrollViewComponent>

            </MyViewComponent>
        );
    }

}

