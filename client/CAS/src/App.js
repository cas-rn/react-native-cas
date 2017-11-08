// RNRF logic here
import React, { Component } from "react";
import { ActionConst, Router, Scene } from "react-native-router-flux";
import LoginPage from "./view/LoginPage";
import IndexPage from "./view/IndexPage";
import ShowScanPage from "./view/ShowScanPage";
import SignUpPage from "./view/SignUpPage";
import ModifyPassPage from "./view/ModifyPassPage";
import PublicCoursePage from "./view/PublicCoursePage";
import MyCourseListManagePage from "./view/MyCourseListManagePage";
import AddCoursePage from "./view/AddCoursePage";
import MyCourseSignListWithQRCodePage from "./view/MyCourseSignListWithQRCodePage";

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
            <Router
                hideNavBar={true}
                headerMode={'none'}

            >
                <Scene key="root">

                    <Scene key="LoginPage" component={LoginPage} type={ActionConst.RESET} initial={!hasLogin}/>
                    <Scene key="IndexPage" component={IndexPage} initial={hasLogin}/>
                    <Scene key="ShowScanPage" component={ShowScanPage}/>
                    <Scene key="SignUpPage" component={SignUpPage}/>
                    <Scene key="ModifyPassPage" component={ModifyPassPage}/>
                    <Scene key="PublicCoursePage" component={PublicCoursePage}/>
                    <Scene key="MyCourseListManagePage" component={MyCourseListManagePage}/>
                    <Scene key="AddCoursePage" component={AddCoursePage}/>
                    <Scene key="MyCourseSignListWithQRCodePage" component={MyCourseSignListWithQRCodePage}/>

                </Scene>
            </Router>
        );

        return view;
    }
}

