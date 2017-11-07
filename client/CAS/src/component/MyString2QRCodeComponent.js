/**
 * Created by nick on 2017/4/20.
 */
'use strict';
import React, { Component } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import QRCode from "react-native-qrcode";
/**
 *
 *
 *
 */
export default class MyString2QRCodeComponent extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    static propTypes = {
        content : PropTypes.string, //
        onPress : PropTypes.func, //

    };

    static defaultProps = {
        content : 'qrCode content', //
        onPress : () => {
        },
    };

    render() {

        return (
            <View >
                <QRCode
                    value={this.props.content}
                    size={200}
                    bgColor='purple'
                    fgColor='white'/>
            </View>

        );
    }
}

