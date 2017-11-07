/**
 * BaseCommon
 * 公共逻辑处理
 * @flow
 */
'use strict';

import React from "react";
import { BackHandler } from "react-native";

import OrientationUtil from "../util/OrientationUtil";

export default class BaseCommon {
    constructor(props) {
        this._onHardwareBackPress = this.onHardwareBackPress.bind(this);
        this._orientationDidChange = this._orientationDidChange.bind(this);
        this.props = props;
    }

    componentWillMount() {
        OrientationUtil.screenLockToPortrait();

    }

    componentDidMount() {
        this.mounted = true;
        if (this.props.backPress) {
            BackHandler.addEventListener('hardwareBackPress', this._onHardwareBackPress);
        }
        if (this.props._orientationDidChange) {
            OrientationUtil.addOrientationListener(this._orientationDidChange);
        }

    }

    componentWillUnmount() {
        if (this.props.backPress) {
            BackHandler.removeEventListener('hardwareBackPress', this._onHardwareBackPress);
        }

        if (this.props._orientationDidChange) {
            OrientationUtil.removeOrientationListener(this._orientationDidChange);
        }

        this.mounted = false;

    }

    //todo im
    onHardwareBackPress(e) {
        return this.props.backPress(e);
    }

    //todo orientation Start
    _orientationDidChange(orientation) {
        return this.props._orientationDidChange(orientation);
    }

    //todo orientation end

}

