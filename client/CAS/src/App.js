// RNRF logic here
import React, { Component } from "react";
import { ActionConst, Router, Scene } from "react-native-router-flux";
import Login from "./view/Login";

import BaseCommon from "./common/BaseCommon";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.baseCommon = new BaseCommon({
            ...props,
        });

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
        let view = null;
        view = (
            <Router hideNavBar="true"
                // backAndroidHandler={() => {
                //     return this.willMountBackAndroid2();
                // }}
            >
                <Scene key="root">

                    <Scene key="Login" component={Login} title="Login" type={ActionConst.RESET}
                           initial={true}/>

                </Scene>
            </Router>
        );

        return view;
    }
}

