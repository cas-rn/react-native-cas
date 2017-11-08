/**
 * Created by nick on 2017/4/20.
 */

var ConstantUtil = {

    tmpString : ' ',

    tmpAccessToken : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTgzODA2NTI3NjEsInRva2VuIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmxlSEFpT2pFME9UZ3pPREEyTlRFMU16QXNJblZ6WlhJaU9pSTFNVGRoTURKak1DMHpZelpoTFRFeFpUY3RPV1E1Wmkxa1ptVXhPV1E0WVRSaE5qUWlMQ0ptY205dElqb2lRVkJRSWl3aWFXRjBJam94TkRrMU56ZzROalV4ZlEuaDJJRjJNbUpBZEZtbWtILTIzazg5andEYmJNTEFORzREWWpFR242Q2xFNCIsImlhdCI6MTQ5NTc4ODY1Mn0.E9KKfcA-XalUuMWKR4jHcP37wKcdg-Y_c9X0efvph78',
    tmpOrderId : '4bd249b0-41b8-11e7-a88c-e3d44b9a8193',
    tmpUserIdWeiwanchengYiwanchengList : 'd797b360-3c6b-11e7-99ac-5386441488d5',
    tmpCompanyIdWeiwanchengYiwanchengList : '807d3400-3c62-11e7-8d58-9b8604ac7ec9',
    tmpGn : '549a9620501211e79ae23f5befb80cbc',
    tmpDate : 1,
    tmpDate2 : '1',
    tmpQRCodeUrl : 'http://test1.shouhoue.com/?pn=99779890405111e7ae9b2d591ccb1966&gn=9977e6b0405111e7ae9b2d591ccb1966',
    tmpCustomerName : '公司',
    tmpProductName : '键盘',
    tmpSn : '111111',
    tmpCustomerId : '111111',
    tmpProductId : '111111',
    tmpCompanyId : '0f295690-5007-11e7-aea1-0f5ece512e56',

    //AppState
    appStateActive : 'active',
    appStateBackground : 'background',
    appStateInactive : 'inactive',

    //netInfo

    netInfoWIFI : 'WIFI',
    netInfoWIFI_IOS : 'wifi',
    netInfoWIFI_Android : 'WIFI',
    netInfoMOBILE : 'MOBILE',
    netInfoMOBILE_IOS : 'cell',
    netInfoMOBILE_Android : 'MOBILE',
    netInfoNONE : 'NONE',

    //
    undefined : 'undefined',
    timeMinute : '2017-06-23 23:15',
    timeSecond : '2017-06-23 23:15:15',
    uriImg : 'http://omj1eyvlk.bkt.clouddn.com/c46f5750-4244-11e7-9095-73070b8107de.png',
    ok : '确  定',
    cancel : '取  消',

    //PersonalCenter.js
    personInfo_user_telephone : 'personInfo_user_telephone',
    personInfo_user_name : 'personInfo_user_name',

    //toast,
    toastTokenIsNull : 'Token不存在或已过期，请登录',
    toastAccessTokenIsNull : 'AccessToken不存在或已过期，请登录',
    toastDoSuccess : '操作成功',
    toastDoFailure : '操作失败',
    toastGetSuccess : '获取数据成功',
    toastGetFailure : '获取数据失败',

    toastPleaseInputNumber : '请输入金额',
    toastPleaseInputBz : '请输入备注',
    toastPleaseInputSolution : '请输入方案',

    mLabelPosition : '        职位',
    mLabelEmployeeID : '    员工号',

    toastPleaseInputPosition : '请输入职位',
    toastPleaseInputEmployeeID : '请输入员工号',

    typeSn : 'typeSn',
    typeProduct : 'typeProduct',

    typeRole : 'typeRole',
    typeRoleKf : '1',
    typeRoleGcs : '2',
    typeRoleKfAndGcs : '4',

    /**
     * typeScreen 页面类型
     *
     *
     *
     *
     *
     */
    typePageManageMyCourse : 'typePageManageMyCourse',
    typePageSelectCourse : 'typePageSelectCourse',
    typePageReleasedCourse : 'typePageReleasedCourse',
    typePageSignListWithQRCode : 'typePageSignListWithQRCode',

    typePageSelectSigningCourse : 'typePageSelectSigningCourse',
    typePageSelectSignedCourse : 'typePageSelectSignedCourse',

    //storageKeys
    keyDbVersion : 'keyDbVersion',
    keyUserId : 'keyUserId',
    keyTokenInfo : 'keyTokenInfo',    //user_token,
    keyUserInfo : 'keyUserInfo',      //user_id,user_telephone,username,role,user_password,

    //btn type

    mBtnTypeBlue : 'blue',
    mBtnTypeGreen : 'green',
    mBtnTypeBlueOutline : 'blueOutline',

};

module.exports = ConstantUtil;