/**
 * Created by nick on 2017/7/28.
 * 封装的横竖屏工具类
 */
import React from "react";
import Orientation from "react-native-orientation";

export default class OrientationUtil {

    static screenLockToPortrait() {
        Orientation.lockToPortrait(); //this will lock the view to Portrait
    }

    static screenLockToLandscape() {
        Orientation.lockToLandscape(); //this will lock the view to Landscape
    }

    static screenunLockAllOrientations() {
        Orientation.unlockAllOrientations(); //this will unlock the view to all Orientations

    }

    static addOrientationListener(listener) {
        Orientation.addOrientationListener(listener);

    }

    static removeOrientationListener(listener) {
        Orientation.removeOrientationListener(listener);

    }

}