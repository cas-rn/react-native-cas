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
const RadioItem = Radio.RadioItem;
export default class SignUpPage extends BaseComponent {


    // 构造
    constructor(props) {
        super(props);
        this.baseCommon = new BaseCommon({ ...props, backPress : (e) => this.onBackPress(e) });
        // 初始状态
        this.state = {
            value : 0,  //0-学生，1-老师
            name : '',
            telephone : '',
            password : '',
            password2 : '',
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

    }

    onChange = (value) => {
        console.log('checkbox');
        this.setState({
            value,
        });
    };

    render() {
        const { value, } = this.state;
        const data = [
            { value : 0, label : '学生' },
            { value : 1, label : '老师' },
        ];

        return (
            <MyViewComponent style={{ backgroundColor : ColorUtil.bgGray, flex : 1, }}>

                {ViewUtil.getViewStatusBar()}
                <HeaderNormalWithRightButtonComponent
                    textCenter={'注 册'}
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
                            {data.map(i => (
                                <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
                                    {i.label}
                                </RadioItem>
                            ))}

                            <List.Item>

                                <LabelWithInputSingleLineNormalNoBorder _labelContent={'姓名        '}
                                                                        _inputValue={this.state.name}
                                                                        _onChange={(value) => {
                                                                            this.baseCommon.mounted && this.setState({ name : value });
                                                                        }}
                                />
                            </List.Item>

                            <List.Item>
                                <LabelWithInputSingleLineNormalNoBorder _labelContent={'账号        '}
                                                                        _inputValue={this.state.telephone}
                                                                        _onChange={(value) => {
                                                                            this.baseCommon.mounted && this.setState({ telephone : value });
                                                                        }}
                                />
                            </List.Item>

                            <List.Item>
                                <LabelWithInputSingleLineNormalNoBorder _labelContent={'密码        '} _inputPlaceHolder={'不少于6位'}
                                                                        _type={'password'}
                                                                        _inputValue={this.state.password}
                                                                        _onChange={(value) => {
                                                                            this.baseCommon.mounted && this.setState({ password : value });
                                                                        }}
                                />
                            </List.Item>

                            <List.Item>
                                <LabelWithInputSingleLineNormalNoBorder _labelContent={'重复密码'} _inputPlaceHolder={'不少于6位'}
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

