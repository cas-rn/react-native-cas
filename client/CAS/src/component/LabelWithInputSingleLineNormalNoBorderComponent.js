/**
 * Created by nick on 2017/4/20.
 */
'use strict';
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { InputItem } from "antd-mobile";
import * as StyleUtil from "../util/StyleUtil";
import * as SizeUtil from "../util/SizeUtil";
import * as ColorUtil from "../util/ColorUtil";
import PropTypes from "prop-types";

// css样式
var styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#ECECF0',
        alignItems : 'center',
        marginLeft : SizeUtil.gMarginLeftRight,
        marginRight : SizeUtil.gMarginLeftRight,

    },
    //
    subView : {
        flexDirection : 'row',
        backgroundColor : ColorUtil.bgWhite,
        alignSelf : 'stretch',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 5,
        borderWidth : 0,
        borderColor : ColorUtil.grayBorder,
    },
    // 标题
    labelText : {
        fontSize : SizeUtil.gTextSizeLarge,
        color : ColorUtil.textColorBlack,
        textAlign : 'left',
        flex : 1,
    },
    inputItemStyle : {
        flex : 2,
        display : 'flex',
    },
});
export default class LabelWithInputSingleLineNormalNoBorderComponent extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    static propTypes = {
        _labelContent : PropTypes.string, //内容
        _inputPlaceHolder : PropTypes.string, //内容
        _inputDefaultValue : PropTypes.string, //内容
        _inputValue : PropTypes.string, //内容
        _type : PropTypes.string, //
        _visible : PropTypes.bool,       //显示还是隐藏
        _inputEditable : PropTypes.bool,       //输入框是否可以编辑
        _style : PropTypes.array,       //
        _styleInputItem : PropTypes.array,       //
        _onChange : PropTypes.func,       //
        _onBlur : PropTypes.func,       //

    };

    static defaultProps = {
        _inputPlaceHolder : '',
        _inputDefaultValue : '',
        _inputValue : '',
        _visible : true,
        _inputEditable : true,
        _style : [],
        _styleInputItem : [ styles.inputItemStyle ],
        _type : 'text',
        _onChange : () => {
        },
        _onBlur : () => {
        },
    };

    render() {
        if (!this.props._visible) {
            return null;
        }
        return (
            <View style={this.props._style}>
                <View style={styles.subView}>
                    {
                        this.props._labelContent
                        &&
                        <Text style={styles.labelText}>
                            {this.props._labelContent}
                        </Text>
                    }

                    <InputItem
                        onBlur={this.props._onBlur}
                        onChange={this.props._onChange}
                        style={[ styles.inputItemStyle, ...this.props._styleInputItem, StyleUtil.gStyles.gInputDelBorderBottom,

                        ]}
                        clear
                        type={this.props._type}
                        fontSize={SizeUtil.gTextSizeLarge}
                        placeholder={this.props._inputPlaceHolder.length > 0 ? this.props._inputPlaceHolder : `请输入${this.props._labelContent}`}
                        defaultValue={this.props._inputDefaultValue}
                        value={this.props._inputValue}
                        editable={this.props._inputEditable}
                    />
                </View>
            </View>

        );
    }
}

