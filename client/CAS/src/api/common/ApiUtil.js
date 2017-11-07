/**
 * Created by nick on 2017/5/9.
 */

import * as StandaloneUtil from "../../util/StandaloneUtil";
var URLConf = {};
URLConf.http = {
    BASEURL : StandaloneUtil.string.BASEURL,

    RET_TYPE_SUCCESS : 1,
    RET_TYPE_FAILURE : 2,
    RET_TYPE_ERR : 3,

    API_NAME : 'api_name',
    ACCESS_TOKEN : 'access_token',

    CODE : 'code',

    //返回值
    ERROR_CODE_SUCCESS_0 : 0,     //成功
    ERROR_CODE_1 : 1,     //失败
    ERROR_CODE_ACCESS_TOKEN_IS_INCORRECT : 100,     //access_token 不正确

    errorCode : [
        { code : 10001, des : 'c10001' },
    ],

};
URLConf.TEST = URLConf.http.baseUrl + URLConf.http.baseUrl;

module.exports = URLConf;
