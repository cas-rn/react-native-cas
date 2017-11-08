/**
 * Created by nick on 2017/4/20.
 */
'use strict';
import React, { PureComponent } from "react";
import { List } from "antd-mobile";
import { Text, TouchableOpacity, View } from "react-native";
import * as StyleUtil from "../util/StyleUtil";
import PropTypes from "prop-types";
import * as ConfigUtil from "../util/ConfigUtil";
/**
 *
 * https://github.com/sahlhoff/rn-bootstrap-buttons
 *
 *
 *
 */
export default class MyLabelTextComponent extends PureComponent {
    // 构造
    constructor(props) {
        super(props);
    }

    static propTypes = {
        _label : PropTypes.string, //
        _labelContent : PropTypes.string, //
        _rightIconShouldShow : PropTypes.bool, //
        _labelContentStyle : PropTypes.object, //
        onPress : PropTypes.func, //

    };

    static defaultProps = {
        _label : '', //
        _labelContent : '', //
        _rightIconShouldShow : false, //
        _labelContentStyle : {}, //
        onPress : undefined,
    };

    render() {
        if (this.props._label.length == 0 && this.props._labelContent.length == 0) {
            return null;
        }

        let flexLeft = 1;
        let flexRight = 3;
        if (this.props._label.length > 5) {
            flexLeft = 4;
            flexRight = 6;
        }

        let _view = null;
        let _view1 = (
            <View
                style={[ StyleUtil.gStyles.gCenterAlignItems, StyleUtil.gStyles.gFlexDirectionRow,
                    StyleUtil.gStyles.gBgWhite, ]}>
                <Text style={[ StyleUtil.gStyles.gTextBlackLarge, { flex : flexLeft, } ]}>{this.props._label}</Text>

                {
                    this.props._labelContent.length > 0
                    &&
                    <Text
                        style={[ {
                            textAlign : 'right',
                            flex : flexRight
                        }, StyleUtil.gStyles.gTextGrayLarge, this.props._labelContentStyle, ]}>{this.props._labelContent}</Text>
                }

            </View>
        );
        if (this.props.onPress == undefined) {
            _view = _view1;
        } else {

            _view = (
                <TouchableOpacity activeOpacity={ConfigUtil.customActiveOpacity}
                                  onPress={() => {
                                      this.props.onPress();
                                  }}>
                    {_view1}
                </TouchableOpacity>
            );

        }
        return (
            <List.Item arrow={this.props._rightIconShouldShow ? 'horizontal' : undefined}>
                {_view}

            </List.Item>

        );
    }
}

