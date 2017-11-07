import React from "react";

import { ScrollView } from "react-native";

export default class MyScrollViewComponent extends React.PureComponent {

    render() {
        return (<ScrollView {...this.props}/>);
    }
}