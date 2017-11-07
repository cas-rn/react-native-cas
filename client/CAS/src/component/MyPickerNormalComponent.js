/**
 * Created by nick on 2017/4/20.
 */
'use strict';
import React, { Component } from "react";
import { View } from "react-native";
import { List, Picker } from "antd-mobile";
import PropTypes from "prop-types";

/**
 * 1._visible  bool 控制是否显示
 * 2.
 <PickerNormal ref="pickerNormal"
 _visible={this.state.showAlert}
 />

 console.log(this.refs.pickerNormal);

 keySelected === this.refs.pickerNormal.state.sValue[0]
 objSelected === this.refs.pickerNormal.getSelectedObj()

 *
 *
 * @type {[*]}
 */


let data = [ [], ];

let curData = {};

export default class MyPickerNormalComponent extends Component {
    initData() {
        data = [ [], ];
        curData = {};
    }

    // 构造
    constructor(props) {
        super(props);

        // var o1 = {
        //     label: '美味',
        //     value: '2013',
        // };
        // var o2 = {
        //     label: '美味2',
        //     value: '20132',
        // };
        // data[0].push(o1);
        // data[0].push(o2);

        // 初始状态
        this.state = {
            _visible : this.props._visible,
            sValue : [],
            data : this.props._data,
        };
    }

    componentWillReceiveProps(props) {
        this.setState({
            _visible : props._visible,
            data : props._data,
        });
    }

    static propTypes = {
        _data : PropTypes.array, //数据源
        _label : PropTypes.string, //标题
        _visible : PropTypes.bool,       //显示还是隐藏
        _onChange : PropTypes.func,       //
    };

    static defaultProps = {
        _data : [ [ { label : 'label', value : 'value', }, { label : 'label2', value : 'value2', }, ], ],
        _label : '选择课程',
        _visible : false,
        _onChange : () => {
        },

    };
    renderContent = () => {
        return (
            <View >
                <Picker
                    data={this.state.data}
                    title={this.props._label}
                    cascade={false}
                    extra="请选择"
                    value={this.state.sValue}
                    onChange={v => {
                        this.onChangePicker(v);
                    }}
                >
                    <List.Item arrow="horizontal"
                    >{this.props._label}</List.Item>

                </Picker>
            </View>
        );
    };

    render() {
        let retView = null;
        if (this.state._visible) {
            retView = this.renderContent();
        }
        return (retView);
    }

    onChangePicker(v) {
        this.setState({ sValue : v });
        console.log(v);
        for (var i = 0;
            i < this.state.data[ 0 ].length;
            i++) {
            if (v[ 0 ] == this.state.data[ 0 ][ i ].value) {
                curData = this.state.data[ 0 ][ i ];
                break;
            }
        }
        this.props._onChange(v);

    }

    getSelectedObj() {
        return curData;
    }
}

