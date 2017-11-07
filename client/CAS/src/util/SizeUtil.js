/**
 * Created by nick on 2017/4/20.
 */

var SizeUtil = {

    pageSize : 10,

    gTimeToShowToastAfterDone : 1000,     //1 second to show toast
    exchangeAccessTokenBefore5Minutes : 5 * 60,     //5 minutes

    //listView_
    //这是一个应用在长列表上极其重要的优化。
    // removeClippedSubviews
    // Android上，overflow值总是hidden的，所以你不必担心没有设置它。
    // 而在iOS上，你需要确保在行容器上设置了overflow: hidden。
    /**
     * removeClippedSubviews={true} // 用于提升大列表的滚动性能（需要给行容器添加样式overflow:'hidden'）默认开启
     * onEndReached={this.onEndReached} // 当所有数据已经渲染过，并且列表被滚动到距离底部不足100像素距离时调用
     * onEndReachedThreshold={100} // 调用onEndReached之前的临界值，单位是像素
     */
    listView_onEndReachedThreshold : 100,
    listView_scrollEventThrottle : 20,
    listView_scrollRenderAheadDistance : 50,  // 当一行接近屏幕范围多少像素之内的时候开始渲染该行
    listView_pageSize : 1,   //10 每次事件循环渲染的行数
    listView_initialListSize : 1,    //20 指定在组件刚挂载的时候渲染多少行数据

    gMarginLeftRight : 15,
    gMarginTopBottom : 5,
    gPaddingLeftRight : 10,
    gPaddingTopBottom : 5,

    gTextSizeSmall : 12,
    gTextSize : 14,
    gTextSizeLarge : 17,

    gBannerWH : 309 / 101,

    oneDay : 60 * 60 * 24, //秒
    oneHour : 60 * 60, //秒
    oneMinute : 60, //秒

};

module.exports = SizeUtil;