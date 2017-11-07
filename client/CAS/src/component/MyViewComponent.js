import React from "react";
import PropTypes from "prop-types";

import { View } from "antd-mobile";

export default class MyViewComponent extends React.Component {
    static propTypes = {
        onPress : PropTypes.func, //

    };

    static defaultProps = {
        onPress : () => {
        },
    };

    componentDidMount() {
        /**
         * mind 需要使用ref的时候可以使用这个方式;
         * <MyViewComponent
         refFunc={(ref)=>{this.tabs = ref;}}
         style={{flex:1,}}
         />
         */
        this.props.refFunc && this.props.refFunc(this.refMy);
    }

    render() {

        return (
            <View
                {...this.props}
                ref={(ref) => {
                    this.refMy = ref;
                }}
            />
        );
    }
}