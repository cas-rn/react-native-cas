/**
 * Created by nick on 2017/4/20.
 */

import * as Standalone from "./StandaloneUtil";
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
    // uriImg: 'http://test6.shouhoue.com/?api_name=web.common.get_verify&codekey=ddddd',
    // uriImg: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1658829609,3922696854&fm=23&gp=0.jpg',
    uriImg : 'http://omj1eyvlk.bkt.clouddn.com/c46f5750-4244-11e7-9095-73070b8107de.png',
    ok : '确  定',
    cancel : '取  消',
    signBefore1 : '点击注册即表示你已阅读并同意《',
    signBefore2 : Standalone.string.appName + '服务条款',
    signBefore3 : '》',
    bottomDescription : '    ' + Standalone.string.appName + '，专业化售后服务平台',

    typeHeaderRightBtn : 'typeHeaderRightBtn',
    typeHeaderRightBtnValue0Init : '',
    typeHeaderRightBtnValue1startGo : '开始出发',
    typeHeaderRightBtnValue2signIn : '签 到',
    typeHeaderRightBtnValue3signOut : '签 离',

    typeShowAlertNormal : 'showAlertNormalType',
    typeShowAlertNormalValue0Init : '',
    typeShowAlertNormalValue1OrderCommunicateComplete : 'typeShowAlertNormalValue1OrderCommunicateComplete',

    typeShowAlertNormalInputFee : 'showAlertNormalInputFeeType',
    typeShowAlertNormalInputFeeValue0Init : '',
    typeShowAlertNormalInputFeeValue1OrderAddBudget : 'typeShowAlertNormalInputFeeValue1OrderAddBudget',

    //OrderTabList.js
    weichuli : '未处理',
    chulizhong : '处理中',
    yiwancheng : '已完成',
    wentimiaoshu : '问题描述',
    orderInfo_option_id : 'orderInfo_option_id',
    orderInfo_product_logo : 'orderInfo_product_logo',
    orderInfo_product_name : 'orderInfo_product_name',
    orderInfo_product_brand : 'orderInfo_product_brand',
    orderInfo_create_time : 'orderInfo_create_time',
    orderInfo_order_content : 'orderInfo_order_content',
    orderInfo_customer_name : 'orderInfo_customer_name',
    orderInfo_service_name : 'orderInfo_service_name',
    orderInfo_customer_address : 'orderInfo_customer_address',

    //OrderDetail.js
    orderDetailInfo_cur_step : 'orderDetailInfo_cur_step',
    orderDetailInfo_product_name : 'orderDetailInfo_product_name',
    orderDetailInfo_product_brand : 'orderDetailInfo_product_brand',
    orderDetailInfo_contact_name : 'orderDetailInfo_contact_name',
    orderDetailInfo_contact_address_address : 'orderDetailInfo_contact_address_address',
    orderDetailInfo_contact_address_area : 'orderDetailInfo_contact_address_area',
    orderDetailInfo_contact_type : 'orderDetailInfo_contact_type',
    orderDetailInfo_contact_company_name : 'orderDetailInfo_contact_company_name',
    orderDetailInfo_contact_telephone : 'orderDetailInfo_contact_telephone',
    orderDetailInfo_service_mode : 'orderDetailInfo_service_mode',
    orderDetailInfo_task_holder_name : 'orderDetailInfo_task_holder_name',
    orderDetailInfo_assist__user_name : 'orderDetailInfo_assist__user_name',
    orderDetailInfo_service_expense : 'orderDetailInfo_service_expense',  //费用
    orderDetailInfo_order_number : 'orderDetailInfo_order_number',
    orderDetailInfo_order_create_time : 'orderDetailInfo_order_create_time',
    orderDetailInfo_sign_time : 'orderDetailInfo_sign_time',  //上门签到时间
    orderDetailInfo_order_content : 'orderDetailInfo_order_content',  //问题描述

    //PersonalCenter.js
    personInfo_user_telephone : 'personInfo_user_telephone',
    personInfo_user_name : 'personInfo_user_name',

    //QRCodeBoundScreen.js
    qrCodeInfo_service_object : 'qrCodeInfo_service_object',
    qrCodeInfo_customerName : 'qrCodeInfo_customerName',
    qrCodeInfo_customerPhone : 'qrCodeInfo_customerPhone',
    qrCodeInfo_customerArea : 'qrCodeInfo_customerArea',
    qrCodeInfo_customerAddress : 'qrCodeInfo_customerAddress',
    qrCodeInfo_productName : 'qrCodeInfo_productName',
    qrCodeInfo_productCategory : 'qrCodeInfo_productCategory',
    qrCodeInfo_deviceSn : 'qrCodeInfo_deviceSn',

    titleShenqingyijiao : '申请移交',
    descriptionShenqingyijiao : '移交成功后请及时联系上级处理',
    titleShenqingbiangengliucheng : '申请变更流程',
    descriptionShenqingbiangengliucheng : '移交成功后请及时联系客服处理',
    titleShangjiayifufuwufei : '商家已付服务费',
    descriptionShangjiayifufuwufei : '付款金额（元）',
    titleShangjiayifujiaotongfei : '商家已付交通费',
    descriptionShangjiayifujiaotongfei : '付款金额（元）',

    //StepList.js
    fuwudanqueren : '服务单确认',
    daohuqueren : '到户确认',
    shishizhong : '实施中',
    xiaofeizhequerenwancheng : '消费者确认完成',
    shouqufuwufei : '收取服务费',
    yanchangfuwu : '延长服务',

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
     * typeScreenAssignValue1Group  指派组织
     * typeScreenAssignValue2Person 指派工程师
     *
     *
     *
     */
    typeScreen : '',
    typeScreenSchedulingPQGcsLeaderValue3Person : 'typeScreenSchedulingPQGcsLeaderValue3Person',
    typeScreenSchedulingPQKfAssignValue1Group : 'typeScreenSchedulingPQKfAssignValue1Group',
    typeScreenSchedulingPQKfAssignValue2Person : 'typeScreenSchedulingPQKfAssignValue2Person',
    typeScreenApplyMoveOrder : 'typeScreenApplyMoveOrder',

    typeScreenSelectPersonValue1GcsLeaderSingleChoice : 'typeScreenSelectPersonValue1GcsLeaderSingleChoice',
    typeScreenSelectPersonValue2GcsLeaderMultiChoice : 'typeScreenSelectPersonValue1GcsLeaderMultiChoice',
    typeScreenSelectPersonValue3KfSingleChoice : 'typeScreenSelectPersonValue2KfSingleChoice',
    typeScreenSelectPersonValue4KfMultiChoice : 'typeScreenSelectPersonValue2KfMultiChoice',

    typeScreenMyTravelFeeComponent1Init : 'typeScreenMyTravelFeeComponent1Init',
    typeScreenMyTravelFeeComponent2OnlyShow : 'typeScreenMyTravelFeeComponent2OnlyShow',
    typeScreenMyTravelFeeComponent3Editable : 'typeScreenMyTravelFeeComponent3Editable',

    typeScreenMyPartsComponent1Init : 'typeScreenMyPartsComponent1Init',
    typeScreenMyPartsComponent2OnlyShow : 'typeScreenMyPartsComponent2OnlyShow',
    typeScreenMyPartsComponent3Editable : 'typeScreenMyPartsComponent3Editable',

    //storageKeys
    keyDbVersion : 'keyDbVersion',
    keyUserId : 'keyUserId',
    keyTokenInfo : 'keyTokenInfo',    //token,expired_time,
    keyAccessTokenInfo : 'keyAccessTokenInfo',    //access_token,expired_time,
    keyUserInfo : 'keyUserInfo',      //user_telephone,user_name,user_password,user_id,curCompany={company_name,company_names_simplified,company_id,company_state_value,is_need_location,}
    //company_state_value 1-已申请，2、4-已审核通过

    //option_ids
    optionIdMakeSureHasGotMoney : 'df34a600-36cb-11e7-85b0-c79c0f1fb515',     //维修员确认收款(维修员APP端)
    optionIdMakeSureHasRepairComplete : 'b65a6d50-36cb-11e7-85b0-c79c0f1fb515',       //维修完成(维修员APP端)
    optionIdScanForSignIn : 'a12fb9d0-36cb-11e7-85b0-c79c0f1fb515',       //扫码签到(维修员APP端)
    optionIdMakeSureHasReceiveOrder : '8d368170-36cb-11e7-85b0-c79c0f1fb515',     //确认接单(维修员APP端)
    optionIdAssignWXY : '82b991b0-36cb-11e7-85b0-c79c0f1fb515',       //指派维修员

    mNeedRefreshSignBtn : 'mNeedRefreshSignBtn',
    mNeedRefreshOrderMessageBoard : 'mNeedRefreshOrderMessageBoard',
    mNeedRefreshOrderTaskReport : 'mNeedRefreshOrderTaskReport',
    mNeedRefreshSchedulingPQ : 'mNeedRefreshSchedulingPQ',

    mNeedRefreshSelectPerson : 'mNeedRefreshSelectPerson',
    mNeedRefreshSelectPersonMulti : 'mNeedRefreshSelectPersonMulti',
    mNeedRefreshSelectGroup : 'mNeedRefreshSelectGroup',

    mScreenZZAMapLocationDemo : 'ZZAMapLocationDemo',
    mScreenTestScreen : 'TestScreen',
    mScreenTestAntd : 'TestAntd',
    mScreenLogin : 'LoginPage',
    mScreenResetPass : 'ResetPass',
    mScreenSignUp : 'SignUp',
    mScreenSuccess : 'Success',
    mScreenBDCompany : 'BDCompany',
    mScreenSelectCompany : 'SelectCompany',
    mScreenPersonalCenter : 'PersonalCenter',
    mScreenModifyPass : 'ModifyPass',
    mScreenProblemList : 'ProblemList',
    mScreenSolutionList : 'SolutionList',
    mScreenOrderTabList : 'OrderTabList',
    mScreenOrderDetail : 'OrderDetail',
    mScreenOrderMessageBoardList : 'OrderMessageBoardList',
    mScreenOrderMessageBoardList2 : 'OrderMessageBoardList2',
    mScreenStepList : 'StepList',
    mScreenSchedulingPQ : 'SchedulingPQ',
    mScreenSelectPerson : 'SelectPerson',
    mScreenSelectPersonMulti : 'SelectPersonMulti',
    mScreenSwiperMy : 'SwiperMy',
    mScreenSwiperMyNew : 'SwiperMyNew',
    mScreenShowPhotoSwiper : 'ShowPhotoSwiper',
    mScreenImagePickerView : 'ImagePickerView',
    mScreenSignaturePadScreen : 'SignaturePadScreen',
    mScreenShowScanScreen : 'ShowScanScreen',
    mScreenShowScanScreen2 : 'ShowScanScreen2',
    mScreenQRCodeUnboundScreen : 'QRCodeUnboundScreen',
    mScreenQRCodeBoundScreen : 'QRCodeBoundScreen',
    mScreenTaskReportScreen : 'TaskReportScreen',
    mScreenTaskReportAddScreen : 'TaskReportAddScreen',
    mScreenTaskReportShowScreen : 'TaskReportShowScreen',
    mScreenStepListSign : 'StepListSign',
    mScreenSelectDepartment : 'SelectDepartment',
    mScreenOrderCreateServiceOrderScreen : 'OrderCreateServiceOrderScreen',
    mScreenShowWebView : 'ShowWebView',

    //btn type

    mBtnTypeBlue : 'blue',
    mBtnTypeGreen : 'green',
    mBtnTypeBlueOutline : 'blueOutline',

};

module.exports = ConstantUtil;