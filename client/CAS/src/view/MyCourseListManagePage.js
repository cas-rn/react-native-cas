/**
 * Created by nick on 2017/4/20.
 */
import React from "react";
import * as ConstantUtil from "../util/ConstantUtil";
import { FlatList, InteractionManager, RefreshControl, Text, TouchableOpacity, View } from "react-native";
import * as StyleUtil from "../util/StyleUtil";
import BaseComponent from "./BaseComponent";
import * as ViewUtil from "../util/ViewUtil";
import { Actions } from "react-native-router-flux";
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
import ArrayUtil from "../util/ArrayUtil";
import * as DateparseFormatUtil from "../util/DateParseFormatUtil";
import MyString2QRCodeComponent from "../component/MyString2QRCodeComponent";

var Platform = require('Platform');

let totalPageNum = 1;
let curPageNum = 0;
let responseArr = [];
let submitArr = [];
export default class MyCourseListManagePage extends BaseComponent {

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

        let rightBtnShouldShow = false;
        let headerTitle = '';
        if (this.props.typePage == ConstantUtil.typePageSelectCourse) {
            rightBtnShouldShow = false;
            headerTitle = '选择课程';
        } else if (this.props.typePage == ConstantUtil.typePageManageMyCourse) {
            rightBtnShouldShow = true;
            headerTitle = '课程管理';

        } else if (this.props.typePage == ConstantUtil.typePageReleasedCourse) {
            rightBtnShouldShow = false;
            headerTitle = '已发布课程';
        } else if (this.props.typePage == ConstantUtil.typePageSelectSigningCourse) {
            rightBtnShouldShow = false;
            headerTitle = '可签到课程';
        } else if (this.props.typePage == ConstantUtil.typePageSelectSignedCourse) {
            rightBtnShouldShow = false;
            headerTitle = '已签到课程';
        }

        this.state = {
            isLoading : false,
            isRefreshing : false,
            rightBtnShouldShow : rightBtnShouldShow,
            headerTitle : headerTitle,
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

        });

    }

    onFirstComeIn() {
        console.log('onfirstComeIn');
        this.initData();
        this.getDataList();

    }

    getCenterHeight() {
        if (Platform.OS === 'ios') {
            return StyleUtil.size.height - 100;
        } else {
            return StyleUtil.size.height - 120;

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

        let row = () => {
            return null;
        };

        if (this.props.typePage == ConstantUtil.typePageSelectCourse
            || this.props.typePage == ConstantUtil.typePageManageMyCourse
        ) {
            row = (item) => {

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
                                        <Text>{'课程：'}</Text>
                                        <Text>{item.lecture_name}</Text>
                                    </View>

                                    <View style={{ flexDirection : 'row', }}>
                                        <Text>{'描述：'}</Text>
                                        <Text>{item.lecture_introduction}</Text>
                                    </View>
                                </View>

                            </TouchableOpacity>
                        </Swipeout>

                    </View>
                );
            };

        } else if (this.props.typePage == ConstantUtil.typePageReleasedCourse) {

            row = (item) => {

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
                                        <Text>{'课程：'}</Text>
                                        <Text>{item.lecture_name}</Text>
                                    </View>

                                    <View style={{ flexDirection : 'row', }}>
                                        <Text>{'地址：'}</Text>
                                        <Text>{item.room}</Text>
                                    </View>

                                    <View style={{ flexDirection : 'row', }}>
                                        <Text>{'时间：'}</Text>
                                        <Text>{DateparseFormatUtil.formatDateLongOrStringToStringMinuteLong10(item.schooltime)}</Text>
                                    </View>
                                </View>

                            </TouchableOpacity>
                        </Swipeout>

                    </View>
                );
            };
        } else if (this.props.typePage == ConstantUtil.typePageSelectSigningCourse) {
            row = (item) => {

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
                                        <Text>{'课程：'}</Text>
                                        <Text>{item.lecture_name}</Text>
                                    </View>
                                    <View style={{ flexDirection : 'row', }}>
                                        <Text>{'老师：'}</Text>
                                        <Text>{item.username}</Text>
                                    </View>
                                    <View style={{ flexDirection : 'row', }}>
                                        <Text>{'地址：'}</Text>
                                        <Text>{item.room}</Text>
                                    </View>

                                    <View style={{ flexDirection : 'row', }}>
                                        <Text>{'时间：'}</Text>
                                        <Text>{DateparseFormatUtil.formatDateLongOrStringToStringMinuteLong10(item.schooltime)}</Text>
                                    </View>
                                    <View style={{ flexDirection : 'row', }}>
                                        <Text>{'开始时间：'}</Text>
                                        <Text>{DateparseFormatUtil.formatDateLongOrStringToStringMinuteLong10(item.start_sign_time)}</Text>
                                    </View>
                                    <View style={{ flexDirection : 'row', }}>
                                        <Text>{'结束时间：'}</Text>
                                        <Text>{DateparseFormatUtil.formatDateLongOrStringToStringMinuteLong10(item.end_sign_time)}</Text>
                                    </View>
                                </View>

                            </TouchableOpacity>
                        </Swipeout>

                    </View>
                );
            };
        } else if (this.props.typePage == ConstantUtil.typePageSelectSignedCourse) {
            row = (item) => {

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
                                        <Text>{'课程：'}</Text>
                                        <Text>{item.lecture_name}</Text>
                                    </View>
                                    <View style={{ flexDirection : 'row', }}>
                                        <Text>{'老师：'}</Text>
                                        <Text>{item.username}</Text>
                                    </View>
                                    <View style={{ flexDirection : 'row', }}>
                                        <Text>{'地址：'}</Text>
                                        <Text>{item.room}</Text>
                                    </View>
                                    <View style={{ flexDirection : 'row', }}>
                                        <Text>{'签到地址：'}</Text>
                                        <Text>{item.address}</Text>
                                    </View>

                                    <View style={{ flexDirection : 'row', }}>
                                        <Text>{'时间：'}</Text>
                                        <Text>{DateparseFormatUtil.formatDateLongOrStringToStringMinuteLong10(item.schooltime)}</Text>
                                    </View>
                                    <View style={{ flexDirection : 'row', }}>
                                        <Text>{'开始时间：'}</Text>
                                        <Text>{DateparseFormatUtil.formatDateLongOrStringToStringMinuteLong10(item.start_sign_time)}</Text>
                                    </View>
                                    <View style={{ flexDirection : 'row', }}>
                                        <Text>{'结束时间：'}</Text>
                                        <Text>{DateparseFormatUtil.formatDateLongOrStringToStringMinuteLong10(item.end_sign_time)}</Text>
                                    </View>
                                </View>

                            </TouchableOpacity>
                        </Swipeout>

                    </View>
                );
            };
        }

        let qrCodeView = null;
        if (false) {
            qrCodeView = (

                <MyViewComponent style={{ alignItems : 'center', justifyContent : 'center', }}>
                    <MyString2QRCodeComponent />

                </MyViewComponent>

            );
        }

        return (
            <MyViewComponent style={{ backgroundColor : ColorUtil.bgGray }}>

                <HeaderNormalWithRightButtonComponent textCenter={this.state.headerTitle}
                                                      _leftBtnShouldShow={true}
                                                      _rightBtnShouldShow={this.state.rightBtnShouldShow}
                                                      _textBtn={'添 加'}
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

        if (this.props.typePage == ConstantUtil.typePageSelectCourse) {
            this.props.setData(item);
            Actions.pop();
        } else if (this.props.typePage == ConstantUtil.typePageManageMyCourse) {

        } else if (this.props.typePage == ConstantUtil.typePageReleasedCourse) {
            Actions.MyCourseSignListWithQRCodePage({ data : item, });
            // Actions.MyCourseListManagePage({typePage:ConstantUtil.typePageSignListWithQRCode});

        } else if (this.props.typePage == ConstantUtil.typePageSelectSigningCourse) {
            Actions.DetailCoursePage({ data : item, });

        } else if (this.props.typePage == ConstantUtil.typePageSelectSignedCourse) {

        }
    }

    onOkPressed() {

        if (this.props.typePage == ConstantUtil.typePageSelectCourse) {

        } else if (this.props.typePage == ConstantUtil.typePageManageMyCourse) {
            Actions.AddCoursePage({
                setData : (data) => {
                    this.rData = ArrayUtil.addObjToArrIndex0(data, this.rData);
                    this.rData = _.cloneDeep(this.rData);
                    this.baseCommon.mounted && this.setState({
                        dataList : this.rData,
                        isLoading : false,
                        isRefreshing : false,
                    });

                }
            });
        } else if (this.props.typePage == ConstantUtil.typePageReleasedCourse) {

            return;
        } else if (this.props.typePage == ConstantUtil.typePageSelectSigningCourse) {

        } else if (this.props.typePage == ConstantUtil.typePageSelectSignedCourse) {

        }

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
            bodyObj.pagesize = SizeUtil.pageSize;

            if (this.props.typePage == ConstantUtil.typePageSelectCourse
                || this.props.typePage == ConstantUtil.typePageManageMyCourse
            ) {
                bodyObj.api_name = 'teacher.lectures.getlist';

            } else if (this.props.typePage == ConstantUtil.typePageReleasedCourse) {
                bodyObj.api_name = 'teacher.release.getlist';

            } else if (this.props.typePage == ConstantUtil.typePageSelectSigningCourse) {
                bodyObj.api_name = 'student.release.getlist';

            } else if (this.props.typePage == ConstantUtil.typePageSelectSignedCourse) {
                bodyObj.api_name = 'student.sign.singlog';

            }

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

        if (this.props.typePage == ConstantUtil.typePageSelectCourse
            || this.props.typePage == ConstantUtil.typePageManageMyCourse
            || this.props.typePage == ConstantUtil.typePageReleasedCourse
            || this.props.typePage == ConstantUtil.typePageSelectSigningCourse
            || this.props.typePage == ConstantUtil.typePageSelectSignedCourse
        ) {
            mOkArr = TmpDataUtil.getDataList(_retArr);

        } else if (this.props.typePage == ConstantUtil.typePageSelectSigningCourse) {

        } else if (this.props.typePage == ConstantUtil.typePageSelectSignedCourse) {

        }

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

