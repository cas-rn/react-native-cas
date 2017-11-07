import React from "react";
import PropTypes from "prop-types";

import { List, Text, TextareaItem, View } from "antd-mobile";
import * as SizeUtil from "../util/SizeUtil";
import * as ColorUtil from "../util/ColorUtil";

export default class MyPushCardInputAreaComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    static propTypes = {
        title : PropTypes.string,
        mInputDefaultValue : PropTypes.string,
        mInputValue : PropTypes.string,
        // myRef : PropTypes.string,
        onClick : PropTypes.func, //
        onChange : PropTypes.func, //

    };

    static defaultProps = {
        title : '',
        mInputDefaultValue : '',
        mInputValue : '',
        // myRef : 'r' + new Date().getTime(),
        onClick : () => {
        },

        onChange : () => {
        },
    };

    refCb = (instance) => {
        // console.log(instance);   //todo 会导致卡顿
    };

    render() {
        return (
            <List.Item>

                <View style={{
                    display : 'flex',
                    flexDirection : 'row',
                    backgroundColor : '#ffffff',
                    justifyContent : 'center',
                    alignItems : 'stretch',
                }}>
                    <View style={{ flex : 1, paddingTop : 7, }}>
                        <Text style={{
                            fontSize : SizeUtil.gTextSizeLarge,
                            color : ColorUtil.textColorBlack,
                        }}>{this.props.title}</Text>
                    </View>
                    <View style={{ flex : 2, }}>
                        <TextareaItem
                            ref={(v) => this.refCb(v)}
                            rows={3}
                            placeholder={`请输入${this.props.title}`}
                            style={{ borderBottomWidth : 0, }}
                            onChange={(v) => {

                                console.log(v);
                                this.props.onChange(v);
                            }}
                            defaultValue={this.props.mInputDefaultValue}
                            // value={this.props.mInputValue}
                        />
                    </View>
                </View>
            </List.Item>

        );
    }
}