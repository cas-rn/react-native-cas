/**
 * Created by nick on 2017/4/20.
 */
import React from "react";
import * as ConstantUtil from "../util/ConstantUtil";
import { FlatList, InteractionManager, RefreshControl, Text, TouchableOpacity, View } from "react-native";
import * as StyleUtil from "../util/StyleUtil";
import BaseComponent from "./BaseComponent";
import * as ViewUtil from "../util/ViewUtil";
import * as SecretAsync from "../api/common/SecretAsync";
import BaseCommon from "../common/BaseCommon";
import HeaderNormalWithRightButtonComponent from "../component/HeaderNormalWithRightButtonComponent";
import MyViewComponent from "../component/MyViewComponent";
import * as ColorUtil from "../util/ColorUtil";
import * as PressOnlyOnceUtil from "../util/PressOnlyOnceUtil";
// import { Swipeout } from "react-native-swipeout";
import Swipeout from "react-native-swipeout";
import * as ConfigUtil from "../util/ConfigUtil";
import * as SizeUtil from "../util/SizeUtil";
import * as ApiUtil from "../api/common/ApiUtil";
import * as _ from "lodash";
import MyString2QRCodeComponent from "../component/MyString2QRCodeComponent";
import MyLabelTextComponent from "../component/MyLabelTextComponent";
import * as DateparseFormatUtil from "../util/DateParseFormatUtil";

var Platform = require('Platform');

let totalPageNum = 1;
let curPageNum = 0;
let responseArr = [];
let submitArr = [];
export default class MyCourseSignListWithQRCodePage extends BaseComponent {

    initData() {
        totalPageNum = 1;
        curPageNum = 0;
        responseArr = [];
        submitArr = [];
        this.hasMoreData = true;
        this.isLoading = false;
    }

    constructor(props) {
        super(props);
        this.initData();
        this.baseCommon = new BaseCommon({ ...props, });

        let rightBtnShouldShow = true;
        let headerTitle = '签到记录';
        this.state = {
            isLoading : false,
            isRefreshing : false,
            rightBtnShouldShow : rightBtnShouldShow,
            headerTitle : headerTitle,
            qrcode : '',
            signcode : '',
            dataList : [
                // { key : '11', lecture_name : 'name',lecture_introduction:'dddddd' },
                // { key : '12', lecture_name : 'name',lecture_introduction:'dddddd' },
                // { key : '13', lecture_name : 'name' ,lecture_introduction:'dddddd'},
            ],
        };
    }

    componentDidMount() {
        super.componentDidMount();
        this.baseCommon.componentDidMount();

        InteractionManager.runAfterInteractions(() => {
            // this.onFirstComeIn();
            this.onOkPressed();

        });

    }

    onFirstComeIn() {
        console.log('onfirstComeIn');
        this.initData();
        this.onOkPressed();
        this.getDataList();

    }

    getCenterHeight() {
        if (Platform.OS === 'ios') {
            return StyleUtil.size.height - 100 - 250;
        } else {
            return StyleUtil.size.height - 120 - 250;

        }
    }

    componentWillMount() {
        super.componentWillMount();
        this.baseCommon.componentWillMount();
        // console.log('componentWillMount');
    }

    componentWillUnmount() {
        super.componentWillUnmount();
        this.baseCommon.componentWillUnmount();
        // console.log('componentWillUnmount');
    }

    render() {
        const separator = () => (
            <View style={{
                backgroundColor : '#F5F5F9',
                height : 8,
            }}
            />
        );

        let row = (item) => {

            return (
                <View key={item.key}>
                    <Swipeout right={
                        [
                            {
                                text : 'Button',
                                backgroundColor : ColorUtil.redTheme,
                                onPress : () => {
                                    alert('123' + item.key);
                                },
                            }
                        ]
                    }>
                        <TouchableOpacity
                            activeOpacity={ConfigUtil.customActiveOpacity}
                            onPress={() => {
                                this.onPressItem(item);

                            }}>

                            <View
                                style={{
                                    paddingBottom : 5,
                                    paddingTop : 5,
                                    paddingLeft : 20,
                                    paddingRight : 20
                                }}>
                                <View style={{ flexDirection : 'row', }}>
                                    <Text>{'姓名：'}</Text>
                                    <Text>{item.username}</Text>
                                </View>

                                <View style={{ flexDirection : 'row', }}>
                                    <Text>{'时间：'}</Text>
                                    <Text>{DateparseFormatUtil.formatDateLongOrStringToStringMinuteLong10(item.add_time)}</Text>
                                </View>
                                <View style={{ flexDirection : 'row', }}>
                                    <Text>{'地址：'}</Text>
                                    <Text>{item.address}</Text>
                                </View>
                                <View style={{ flexDirection : 'row', }}>
                                    <Text>{'经度：'}</Text>
                                    <Text>{item.longitude}</Text>
                                </View>
                                <View style={{ flexDirection : 'row', }}>
                                    <Text>{'纬度：'}</Text>
                                    <Text>{item.latitude}</Text>
                                </View>
                            </View>

                        </TouchableOpacity>
                    </Swipeout>

                </View>
            );
        };

        let qrCodeView = null;
        if (this.state.qrcode.length > 0) {
            qrCodeView = (

                <MyViewComponent>

                    <MyViewComponent style={{ alignItems : 'center', justifyContent : 'center', }}>
                        <MyString2QRCodeComponent content={this.state.qrcode}/>
                    </MyViewComponent>
                    <MyLabelTextComponent _label={'验证码'} _labelContent={this.state.signcode}/>

                </MyViewComponent>

            );
        }

        return (
            <MyViewComponent style={{ backgroundColor : ColorUtil.bgGray }}>

                <HeaderNormalWithRightButtonComponent textCenter={this.state.headerTitle}
                                                      _leftBtnShouldShow={true}
                                                      _rightBtnShouldShow={this.state.rightBtnShouldShow}
                                                      _textBtn={'更新码'}
                                                      _onPressBtn={() => {
                                                          PressOnlyOnceUtil.onPress(() => {
                                                              this.onOkPressed();
                                                          });
                                                      }}
                />

                {qrCodeView}
                <FlatList ref="lv"
                          style={{
                              width : StyleUtil.size.width,
                              height : this.getCenterHeight(),
                              backgroundColor : ColorUtil.bgWhite,
                          }}
                          data={this.state.dataList}
                          renderHeader={() => {
                          }}
                          renderFooter={() => <Text style={{ padding : 20, textAlign : 'center' }}>
                              {this.state.isLoading ? '加载中...' : ''}
                          </Text>}
                          renderItem={({ item }) => row(item)}
                          ItemSeparatorComponent={separator}
                          pageSize={4}
                          scrollRenderAheadDistance={500}
                          scrollEventThrottle={20}
                          onScroll={() => {
                              // console.log('scroll');
                          }}
                          useBodyScroll
                          enableEmptySections
                          onEndReached={() => {
                              this.onEndReached();
                          }}
                          onEndReachedThreshold={10}
                          refreshControl={
                              <RefreshControl

                                  refreshing={this.state.isRefreshing}

                                  onRefresh={() => this.onRefresh()}

                                  tintColor="#fff"

                                  title="正在拉取数据..."

                              />


                          }
                />

            </MyViewComponent>
        );
    }

    onPressItem(item) {

        console.log(item);

    }

    onOkPressedCallBack(json) {
        if (json.code != ApiUtil.http.ERROR_CODE_SUCCESS_0) {
            ViewUtil.dismissToastLoading();
            //处理自定义异常
            SecretAsync.onCustomExceptionNormal(json);

            return;

        }

        if (json.response.qrcode != this.state.qrcode) {
            this.setState({
                qrcode : json.response.qrcode,
                signcode : json.response.signcode,
            });
        }

        ViewUtil.showToast(ConstantUtil.toastDoSuccess);
    }

    onOkPressed() {

        console.log('ok');

        let bodyObj = {
            api_name : 'teacher.release.getsign',
            release_lectures_id : this.props.data.id,
        };
        SecretAsync.postWithCommonErrorShow((jsonObj) => {
            this.onOkPressedCallBack(jsonObj);
        }, bodyObj);

    }

    //获取问题定位数据
    getDataList() {
        console.log('ProblemList.getDataList');
        console.log('this.hasMoreData', this.hasMoreData);
        console.log('this.isLoading', this.isLoading);
        if (this.hasMoreData && !this.isLoading) {
            this.isLoading = true;
            this.baseCommon.mounted && this.setState({
                isRefreshing : true,
                dataList : this.rData,
            });
            let bodyObj = {};
            curPageNum = curPageNum + 1;
            bodyObj.page = curPageNum;
            bodyObj.pagesize = 100;
            bodyObj.api_name = 'teacher.release.signlog';
            bodyObj.release_lectures_id = this.props.data.id;

            if (curPageNum == 1) {
                ViewUtil.showToastLoading();
            }

            SecretAsync.postWithCommonErrorShow((jsonObj) => {
                this.onGetDataListCallback(jsonObj);
            }, bodyObj);

        }
    }

    onGetDataListCallback(jsonObj) {
        ViewUtil.dismissToastLoading();

        if (jsonObj.code != ApiUtil.http.ERROR_CODE_SUCCESS_0) {
            //处理自定义异常
            SecretAsync.onCustomExceptionNormal(jsonObj);
            this.isLoading = false;
            this.baseCommon.mounted && this.setState({
                isLoading : false,
                isRefreshing : false,
            });
            return;
        }
        // totalPageNum = jsonObj.response.list.count / SizeUtil.pageSize + 1;

        if (!this.rData) {
            this.rData = [];
        }

        let _retArr = jsonObj.response.list;

        this.isLoading = false;

        if (_retArr.length < SizeUtil.pageSize) {
            this.hasMoreData = false;
        } else {
            this.hasMoreData = true;
        }
        let mOkArr = [];
        mOkArr = TmpDataUtil.getDataList(_retArr);

        this.rData = this.rData.concat(mOkArr);
        this.rData = _.cloneDeep(this.rData);
        this.baseCommon.mounted && this.setState({
            dataList : this.rData,
            isLoading : false,
            isRefreshing : false,
        });

        ViewUtil.dismissToastLoading();

    }

    onEndReached(event) {
        console.log('reach end', event);

        if (this.state.isLoading || this.state.isRefreshing || !this.hasMoreData || this.isLoading) {
            return;
        }
        // console.log('reach end', event);
        this.baseCommon.mounted && this.setState({ isLoading : true });
        // console.log('onEndReachedYwc');
        this.getDataList();

    }

    onRefresh() {
        console.log('onRefresh');
        if (this.state.isRefreshing) {
            return;
        }

        curPageNum = 0;
        this.rData = [];

        this.onFirstComeIn();

        setTimeout(() => {
            if (this.state.isRefreshing) {
                this.baseCommon.mounted && this.setState({
                    isRefreshing : false,
                });
            }

        }, ConfigUtil.customTimeOut);
    }
}

