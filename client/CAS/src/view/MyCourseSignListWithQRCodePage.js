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
import MyString2QRCodeComponent from "../component/MyString2QRCodeComponent";

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
    }

    constructor(props) {
        super(props);
        this.initData();
        this.baseCommon = new BaseCommon({ ...props, });

        this.state = {
            isLoading : false,
            isRefreshing : false,
            dataList : [
                { key : '11', name : 'name' },
                { key : '12', name : 'name' },
                { key : '13', name : 'name' },
            ],
            selectedItemsPosition : [],
        };
    }

    componentDidMount() {
        super.componentDidMount();
        this.baseCommon.componentDidMount();

        this.initData();
        InteractionManager.runAfterInteractions(() => {
            // this.getDataList();
        });

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

        const row = (item) => {

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
                                    <Text>{item.name}</Text>
                                </View>

                                <View style={{ flexDirection : 'row', }}>
                                    <Text>{'描述：'}</Text>
                                    <Text>{item.name}</Text>
                                </View>
                            </View>

                        </TouchableOpacity>
                    </Swipeout>

                </View>
            );
        };

        return (
            <MyViewComponent style={{ backgroundColor : ColorUtil.bgGray }}>

                <HeaderNormalWithRightButtonComponent textCenter="课程管理"
                                                      _leftBtnShouldShow={true}
                                                      _rightBtnShouldShow={true}
                                                      _textBtn={'确 定'}
                                                      _onPressBtn={() => {
                                                          PressOnlyOnceUtil.onPress(() => {
                                                              this.onOkPressed();
                                                          });
                                                      }}
                />

                <MyViewComponent style={{ alignItems : 'center', justifyContent : 'center', }}>
                    <MyString2QRCodeComponent/>

                </MyViewComponent>

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

    onOkPressed() {

        Actions.AddCoursePage();

    }

    //获取问题定位数据
    getDataList() {
        // console.log('ProblemList.getDataList');
        if (totalPageNum > curPageNum) {
            var bodyObj = {};
            curPageNum = curPageNum + 1;
            bodyObj.order_id = this.props.order_id;
            bodyObj.warehouse_id = this.props.warehouse_id;
            bodyObj.current_page = curPageNum;

            if (curPageNum == 1) {
                ViewUtil.showToastLoading();
            }

            // PartsApi.getPartsSelect(bodyObj, (jsonObj) => {
            //     this.onGetDataListCallback(jsonObj);
            // });
        } else {
            this.baseCommon.mounted && this.setState(
                {
                    isLoading : false,
                    isRefreshing : false,
                }
            );

        }
    }

    onGetDataListCallback(jsonObj) {

        if (jsonObj.error_msg.code != URLConf.http.ERROR_CODE_SUCCESS_0) {
            ViewUtil.dismissToastLoading();
            //处理自定义异常
            SecretAsync.onCustomExceptionNormal(jsonObj);
            this.baseCommon.mounted && this.setState({
                isLoading : false,
                isRefreshing : false,
            });
            return;
        }
        totalPageNum = jsonObj.response.data.count / ConstantUtil.size.pageSize + 1;

        if (!this.rData) {
            this.rData = [];
        }
        //
        // let _retArr = jsonObj.response.data;
        //
        // let _mOkArr = MyUtil.getPartListData(_retArr);
        // responseArr = responseArr.concat(_retArr);
        // this.rData = this.rData.concat(_mOkArr);
        // this.rData = _.cloneDeep(this.rData);
        // let selectedItemsPosition = [];
        // selectedItemsPosition = MyUtil.getSelectedItemsPosition(this.rData, selectedItemsPosition);
        //
        // this.baseCommon.mounted && this.setState({
        //     selectedItemsPosition : selectedItemsPosition,
        //     dataList : this.state.dataList.cloneWithRows(this.rData),
        //     isLoading : false,
        //     isRefreshing : false,
        // });

        ViewUtil.dismissToastLoading();

    }

    onEndReached(event) {
        // console.log('reach end', event);

        if (this.state.isLoading || this.state.isRefreshing || totalPageNum == curPageNum) {
            return;
        }
        // console.log('reach end', event);
        this.baseCommon.mounted && this.setState({ isLoading : true });
        // console.log('onEndReachedYwc');
        this.getDataList();

    }

    onRefresh() {
        // alert('onRefresh');
        if (this.state.isRefreshing) {
            return;
        }

        this.initData();
        curPageNum = 0;
        this.rData = [];
        this.baseCommon.mounted && this.setState({
            isRefreshing : true,
            dataList : this.rData,
            selectedItemsPosition : [],
        });

        // console.log('onRefresh1');
        this.getDataList();

        setTimeout(() => {
            if (this.state.isRefreshing) {
                this.baseCommon.mounted && this.setState({
                    isRefreshing : false,
                });
            }

        }, ConfigUtil.customTimeOut);
    }
}

