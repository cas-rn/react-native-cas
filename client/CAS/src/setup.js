import React, { Component } from "react";
import App from "./App";
import * as GlobalDataUtil from "./util/GlobalDataUtil";

export default class setup extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        GlobalDataUtil.init();
    }

    componentDidMount() {

    }

    render() {
        return (
            <App />
        );
    }

}
