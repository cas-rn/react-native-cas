/**
 * Created by nick on 2017/4/20.
 */
import React, { Component } from "react";
import { View } from "react-native";
import * as ViewUtil from "../util/ViewUtil";
// const IconLeft = (
//     <IconFontAwesome name="arrow-left" size={StyleUtil.size.iconHeaderLeftSize} color={ConstantUtil.colors.blueTheme}
//     />);

const IconLeft = ViewUtil.getIconLeft();
export default class IconHeaderLeft extends Component {

    render() {
        return (
            <View>
                {IconLeft}
            </View>

        );
    }
}

