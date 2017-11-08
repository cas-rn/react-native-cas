import React, { Component } from "react";
import App from "./App";
import * as GlobalDataUtil from "./util/GlobalDataUtil";
import * as StorageUtil from "./util/StorageUtil";
import * as ConstantUtil from "./util/ConstantUtil";

export default class setup extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        GlobalDataUtil.init();
        StorageUtil.getValueByKey(ConstantUtil.keyUserInfo, (ret) => {
            global.gUserInfo = ret;
            console.log(global.gUserInfo);
        }, () => {
            global.hasLogin = false;
            this.setState({});

        });
        StorageUtil.getValueByKey(ConstantUtil.keyTokenInfo, (ret) => {
            global.gAccessTokenInfo = ret;
            if (ret) {
                global.hasLogin = true;

            } else {
                global.hasLogin = false;

            }

            console.log(gAccessTokenInfo);
            console.log(hasLogin);
            this.setState({});

        }, () => {
            global.hasLogin = false;
            this.setState({});

        });
    }

    componentDidMount() {

    }

    render() {
        if (null == hasLogin) {
            return null;
        }
        return (
            <App />
        );
    }

}
