/**
 * 基于 fetch 封装的 GET请求
 * @param url
 * @param params {}
 * @param headers
 * @returns {Promise}
 */

import * as StringUtil from "./StringUtil";

var HTTPUtil = {};
/**
 * 基于 fetch 封装的 POST请求
 * @param url
 * @param bodyObject
 * @param headers
 * @returns {Promise}
 */
HTTPUtil.postMy = function (url, bodyObject) {
    var headers = {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
    };
    return HTTPUtil.post(url, bodyObject, headers);
};

/**
 * 基于 fetch 封装的 POST请求
 * @param url
 * @param bodyObject
 * @param headers
 * @returns {Promise}
 */
HTTPUtil.post = function (url, bodyObject, headers) {
    console.log(StringUtil.object2Json(bodyObject));

    return new Promise(function (resolve, reject) {
        fetch(url, {
            method : 'POST',
            headers : headers,
            body : JSON.stringify(bodyObject),
        })
            .then((response) => {
                console.log(StringUtil.object2Json(response));

                if (response.ok) {
                    return response.json();
                } else {
                    reject({ status : response.status });
                }
            })
            .then((response) => {
                resolve(response);
            })
            .catch((err) => {
                console.log(StringUtil.object2Json(err));

                // reject(err);
                reject({ status : -1 });
            });
    });
};

HTTPUtil.postMyAsync = async function (url, bodyObject) {
    var headers = {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
    };

    if (
        gUserInfo
        && gUserInfo.user_id
    ) {
        bodyObject.user_name = gUserInfo.user_name;
        bodyObject.user_id = gUserInfo.user_id;
    }
    if (gAccessTokenInfo) {
        bodyObject.user_token = gAccessTokenInfo;
    }
    return await HTTPUtil.postAsync(url, bodyObject, headers);
};

HTTPUtil.postAsync = async function (url, bodyObject, headers) {
    console.log(StringUtil.object2Json(bodyObject));
    console.log(bodyObject);
    let response
        = await
        fetch(url, {
            method : 'POST',
            headers : headers,
            body : JSON.stringify(bodyObject),
        });
    console.log(response);

    let responseJson
        = await
        response.json();
    console.log(responseJson);
    console.log(StringUtil.object2Json(responseJson));
    return responseJson;

};
module.exports = HTTPUtil;