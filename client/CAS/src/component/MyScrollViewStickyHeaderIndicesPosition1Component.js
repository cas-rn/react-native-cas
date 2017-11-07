/**
 * Created by nick on 2017/10/12.
 */
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import MyScrollViewComponent from "./MyScrollViewComponent";
import MyViewComponent from "./MyViewComponent";
import MyTextComponent from "./MyTextComponent";

export default class MyScrollViewStickyHeaderIndicesPosition1Component extends Component {
    componentWillMount() {

    }

    render() {
        return (
            <MyViewComponent style={styles.container}>
                <MyScrollViewComponent
                    keyboardShouldPersistTaps='always'
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={200}
                    stickyHeaderIndices={[ 1 ]}
                    contentContainerStyle={{
                        justifyContent : 'center',
                        alignItems : 'center',
                    }}
                >
                    {this.props.item0}
                    <MyViewComponent
                        refFunc={(ref) => {
                            this.tabs = ref;
                        }}
                        style={{ flex : 1, }}
                    >
                        <MyTextComponent>
                            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                        </MyTextComponent>
                    </MyViewComponent>

                    {this.props.item1}
                    {this.props.item2}
                </MyScrollViewComponent>

            </MyViewComponent>
        );
    }

}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#F5FCFF',
    },
});
