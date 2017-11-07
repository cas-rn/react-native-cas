import React from "react";
import PropTypes from "prop-types";

import MyDatePickerComponent from "./MyDatePickerComponent";

export default class MyDatePickerNormalComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedValue : this.props.selectedValue,
        };
    }

    static propTypes = {
        title : PropTypes.string,
        selectedValue : PropTypes.object,
        data : PropTypes.array,
        mInputDefaultValue : PropTypes.string,
        myRef : PropTypes.string,
        onClick : PropTypes.func, //
        onChange : PropTypes.func, //

    };

    static defaultProps = {
        mode : 'datetime',
        minuteStep : 1,
        title : '时间选择器',
        data : [ {
            label : '2013',
            value : '20131',
        },
            {
                label : '2014',
                value : '20141',
            }, ],
        selectedValue : null,
        myRef : 'r' + new Date().getTime(),
        onClick : () => {
        },

        onChange : () => {
        },
    };

    render() {
        return (
            <MyDatePickerComponent {...this.props}/>

        );
    }
}