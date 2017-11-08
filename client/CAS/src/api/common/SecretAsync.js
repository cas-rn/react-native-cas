'use strict';

import React from "react";
import * as ApiUtil from "../../api/common/ApiUtil";
import * as HTTPUtil from "../../util/HTTPUtil";
import * as StringUtil from "../../util/StringUtil";
import * as ViewUtil from "../../util/ViewUtil";

export async function postWithCommonErrorShow(callback = () => {
}, data = {}) {

    try {
        let jsonObj = await HTTPUtil.postMyAsync(ApiUtil.http.BASEURL, data);
        callback(jsonObj);
    } catch (e) {
        this.onCatchNormal(e);

    }
}

export function onCustomExceptionNormal(json) {
    console.log('onCustomExceptionNormal' + json);
    ViewUtil.showToast(json.error_msg);

    if (ApiUtil.http.ERROR_CODE_ACCESS_TOKEN_IS_INCORRECT == json.code) {

    } else {
        console.log('onCustomExceptionNormal' + 2);

        ViewUtil.dismissToastLoading();

    }
}

export function onCatchNormal(err) {
    console.log('err:' + err);
    ViewUtil.dismissToastLoading();
    return ViewUtil.showToast('err:' + StringUtil.object2Json(err));
}