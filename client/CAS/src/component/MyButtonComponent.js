/**
 * Created by nick on 2017/4/20.
 */
'use strict';
import React, { Component } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import Button from "teaset/components/Button/Button";
import * as PressOnlyOnceUtil from "../util/PressOnlyOnceUtil";

/**
 *
 * https://github.com/sahlhoff/rn-bootstrap-buttons
 *
 *
 *
 */
export default class MyButtonComponent extends Component {
    // 构造
    constructor(props) {
        super(props);
        // console.log(props);
        // console.log(this);
        // 初始状态
        this.state = {};
    }

    static propTypes = {
        type : PropTypes.string, //
        onPress : PropTypes.func, //

    };

    static defaultProps = {
        type : 'default', //
        onPress : () => {
        },
    };

    /**
     *
     *             <Button {...this.props} buttonType="dangerOutline">secondary<Text style={{fontSize:50,}}>aaaaaa</Text>
     <MyImage style={{ height: 80, width: 80, margin: 10, }}
     source={require('../image/icon_report.png')}/>
     </Button>
     *
     * @returns {XML}
     */
    getButton() {

        return (
            <Button {...this.props} type={this.props.type} onPress={
                () => {
                    PressOnlyOnceUtil.onPress(() => {
                        this.props.onPress();
                    });
                }
            }>
            </Button>
        );
    }

    render() {

        return (
            <View >
                {this.getButton()}
            </View>

        );
    }
}

/**
 textStyle={[StyleUtil.gStyles.gButtonTextWhiteDefaultSmall,]}
 buttonStyle={[StyleUtil.gStyles.gButtonBlueDefault,]}



 */


/**

 var Button = require('rn-bootstrap-buttons');

 class helloWorld extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Default Buttons</Text>
        <View style={styles.buttonContainer}>
          <Button onPress={this.btnClick} buttonType="primary">primary</Button>
          <Button buttonType="secondary">secondary</Button>
          <Button buttonType="success">success</Button>
          <Button buttonType="info">info</Button>
          <Button buttonType="warning">warning</Button>
          <Button buttonType="danger">danger</Button>
        </View>
        <Text>Outline Buttons</Text>
        <View style={styles.buttonContainer}>
          <Button buttonType="primaryOutline">primary outline</Button>
          <Button buttonType="secondaryOutline">secondary outline</Button>
          <Button buttonType="successOutline">success outline</Button>
          <Button buttonType="infoOutline">info outline</Button>
          <Button buttonType="warningOutline">warning outline</Button>
          <Button buttonType="dangerOutline">danger outline</Button>
        </View>
        <Text>Custom Buttons</Text>
        <Button buttonStyle={{backgroundColor: 'yellow'}} textStyle={{color: 'orange'}}>custom button</Button>
      </View>
    );
  }

  btnClick() {
    console.log('click');
  }

}

 */


