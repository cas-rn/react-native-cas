// RNRF logic here
import React, { Component } from "react";
import { ActionConst, Router, Scene } from "react-native-router-flux";
import LoginPage from "./view/LoginPage";
import IndexPage from "./view/IndexPage";
import ShowScanPage from "./view/ShowScanPage";
import SignUpPage from "./view/SignUpPage";
import ModifyPassPage from "./view/ModifyPassPage";
import PublicCoursePage from "./view/PublicCoursePage";

import BaseCommon from "./common/BaseCommon";
import * as GlobalDataUtil from "./util/GlobalDataUtil";

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
        GlobalDataUtil.init();

    }

    componentWillUnmount() {
        this.baseCommon.componentWillUnmount();

    }

    render() {
        let view = null;
        view = (
            <Router
                hideNavBar={true}
                headerMode={'none'}

            >
                <Scene key="root">

                    <Scene key="LoginPage" component={LoginPage} type={ActionConst.RESET} initial={true}/>
                    <Scene key="IndexPage" component={IndexPage}/>
                    <Scene key="ShowScanPage" component={ShowScanPage}/>
                    <Scene key="SignUpPage" component={SignUpPage}/>
                    <Scene key="ModifyPassPage" component={ModifyPassPage}/>
                    <Scene key="PublicCoursePage" component={PublicCoursePage} initial={true}/>

                </Scene>
            </Router>
        );

        return view;
    }
}

