/**
 * Created by nick on 2017/4/20.
 */
import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import IconHeaderLeft from "./IconHeaderLeft";
import * as StyleUtil from "../util/StyleUtil";
import { Actions } from "react-native-router-flux";
import * as ConstantUtil from "../util/ConstantUtil";
import * as ViewUtil from "../util/ViewUtil";
import MyButtonComponent from "./MyButtonComponent";
import PropTypes from "prop-types";
import BaseCommon from "../common/BaseCommon";
import * as ConfigUtil from "../util/ConfigUtil";
import * as ColorUtil from "../util/ColorUtil";
import * as PressOnlyOnceUtil from "../util/PressOnlyOnceUtil";
import * as WindowUtil from "../util/WindowUtil";

export default class HeaderNormalWithRightButtonComponent extends Component {

    static propTypes = {
        textCenter : PropTypes.string, //标题
        _leftBtnShouldShow : PropTypes.bool, //左侧按钮
        _rightBtnShouldShow : PropTypes.bool, //右侧按钮
        _rightBtnType : PropTypes.string, //按钮类型
        _textBtn : PropTypes.string, //标题
        _textBadge : PropTypes.number, //标题
        onBackPress : PropTypes.func,       //
        _onPressBtn : PropTypes.func,       //
        _onPressBtnCallBack : PropTypes.func,       //
    };

    static defaultProps = {
        textCenter : '',
        _textBtn : '',
        _textBadge : 0,
        _leftBtnShouldShow : false,
        _rightBtnShouldShow : false,
        _rightBtnType : ConstantUtil.mBtnTypeBlue,
        onBackPress : undefined,
        _onPressBtn : () => {

        },
        _onPressBtnCallBack : () => {

        },
    };

    initData() {
        this.mNeedRefresh = false;
    }

    // 构造
    constructor(props) {
        super(props);
        this.initData();
        this.baseCommon = new BaseCommon({ backPress : (e) => this.onBackPress(e) });

        // 初始状态
        this.state = {};
    }

    onBackPress(e) {
        if (this.props.onBackPress) {
            this.props.onBackPress();
            return true;
        }

        Actions.pop();
        return true;
    }

    componentWillReceiveProps(nextProps) {
        // if (nextProps.mNeedRefresh
        //     && nextProps.mNeedRefresh != this.mNeedRefresh
        //
        // ) {
        //     this.mNeedRefresh = nextProps.mNeedRefresh;
        //     global.mNeedRefresh = nextProps.mNeedRefresh;
        //
        // }
    }

    componentDidMount() {
        this.baseCommon.componentDidMount();
    }

    componentWillMount() {
        this.baseCommon.componentWillMount();
    }

    componentWillUnmount() {
        this.baseCommon.componentWillUnmount();
    }

    render() {
        return (
            <View>
                {ViewUtil.getViewStatusBar()}

                <View style={[ StyleUtil.gStyles.gHeader, {
                    justifyContent : 'space-between',
                    backgroundColor : ColorUtil.bgTitleWhite,
                } ]}>
                    {this.props._leftBtnShouldShow ? <TouchableOpacity
                        activeOpacity={ConfigUtil.customActiveOpacity}
                        style={[ StyleUtil.gStyles.gHeaderLeftView, ]} onPress={() => {
                        PressOnlyOnceUtil.onPress(() => {
                            this.onBackPress();
                        });
                    }}>
                        <View>

                            <IconHeaderLeft />
                        </View>

                    </TouchableOpacity>
                        : <View/>
                    }
                    <View style={[ StyleUtil.gStyles.gHeaderCenterView, {
                        width : StyleUtil.size.width,
                        position : 'absolute',
                        zIndex : -200,
                        height : 50 + WindowUtil.getHeaderViewPaddingTop(),
                        paddingTop : WindowUtil.getHeaderViewPaddingTop(),
                    } ]}>
                        <Text
                            numberOfLines={1}
                            style={[ StyleUtil.gStyles.gHeaderCenterText, { width : StyleUtil.size.width - 200, } ]}>
                            {this.props.textCenter}
                        </Text>
                    </View>

                    {this.getRightBtn()}

                </View>
            </View>
        );
    }

    getRightBtn() {
        if (!this.props._rightBtnShouldShow) {
            return null;
        } else {

            let _viewBadge = null;
            if (this.props._textBadge > 0) {
                _viewBadge = ViewUtil.getViewBadgeRightTop(this.props._textBadge);
            }

            let styleWidth = (this.props._textBtn.length < 4) ? 60 : 100;
            let _rightBtnType = this.props._rightBtnType;
            let btnStyle = [];
            if (_rightBtnType == ConstantUtil.mBtnTypeBlue) {
                btnStyle.push(StyleUtil.gStyles.gButtonBlueDefault);
            } else if (_rightBtnType == ConstantUtil.mBtnTypeBlueOutline) {
                btnStyle.push(StyleUtil.gStyles.gButtonBlueDefaultOutline);

            } else if (_rightBtnType == ConstantUtil.mBtnTypeGreen) {
                btnStyle.push(StyleUtil.gStyles.gButtonGreenDefault);

            }

            // let btnStyleSmall = {paddingTop:8,paddingBottom:10,};
            // textStyle.push(btnStyleSmall);

            let _view = (
                <View style={[ StyleUtil.gStyles.gCenterJustifyContent, {} ]}>
                    <MyButtonComponent
                        style={btnStyle}
                        onPress={() => {
                            this.props._onPressBtn();

                        }}><Text>{this.props._textBtn}</Text>
                    </MyButtonComponent>
                </View>
            );

            return (

                <View style={{
                    marginRight : 20,
                    flexDirection : 'row',
                    alignItems : 'center',
                    justifyContent : 'center',
                }}>
                    {_view}
                    {_viewBadge}
                </View>

            );
        }
    }
}

