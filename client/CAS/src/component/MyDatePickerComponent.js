import React from "react";
import PropTypes from "prop-types";

import { DatePicker, List } from "antd-mobile";
// https://mobile.ant.design/components/date-picker-cn/
export default class MyDatePickerComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedValue : this.props.selectedValue,
        };
    }

    static propTypes = {
        title : PropTypes.string,
        subTitle : PropTypes.string,
        onClick : PropTypes.func, //

    };

    static defaultProps = {
        title : '',
        subTitle : '请选择',
        onClick : () => {
        },
    };

    render() {
        return (
            <DatePicker {...this.props}
                        value={this.state.selectedValue}
                        extra={this.props.subTitle}
                        onChange={(v) => {
                            this.setState({ selectedValue : v });
                            this.props.onChange(v);
                        }}>
                <List.Item
                    arrow="horizontal">{this.props.title}</List.Item>
            </DatePicker>
        );
    }
}