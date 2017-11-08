'use strict';

import React from "react";
import * as ViewUtil from "../util/ViewUtil";
import * as ConfigUtil from "./ConstantUtil";

export async function getValueByKey(key,
    callback = () => {
    },
    callbackError = () => {
        ViewUtil.showToast(key + ' not found!');
    }) {
    try {
        var ret = await storage.load({
            key : key,
        });
        if (callback) {
            callback(ret);

        }
        return ret;
    } catch (e) {
        // console.error(e);
        callbackError();
    }
}

export async function setKeyValue(key, value) {
    try {
        storage.save({ key : key, data : value });
    } catch (e) {
        console.error(e);
        ViewUtil.showToast(key + ':' + value + ' save error!');
    }
}

export async function getValueByKeyDbVersion(callback) {
    let key = ConfigUtil.keyDbVersion;
    try {
        var ret = await storage.load({
            key : key,
        });
        if (callback) {
            callback(ret);

        }
        return ret;
    } catch (e) {
        callback(1);
        // console.warn(e);
        // ViewUtil.showToast(key + ' not found!');
    }
}

export async function setValueOfDbVersion(value) {
    let key = ConfigUtil.keyDbVersion;
    try {
        storage.save({ key : key, data : value });
    } catch (e) {
        console.error(e);
        ViewUtil.showToast(key + ':' + value + ' save error!');
    }
}

