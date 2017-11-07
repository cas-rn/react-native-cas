/**
 * Created by nick on 2017/4/20.
 */
import React, { Component } from "react";
import { Image } from "react-native";
export default class MyImageComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let view;
        view = (
            <Image {...this.props}/>
        );
        return (view);
    }
}

