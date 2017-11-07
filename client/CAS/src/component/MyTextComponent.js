import React from "react";

import Label from "teaset/components/Label/Label";

export default class MyTextComponent extends React.PureComponent {

    render() {
        return (<Label {...this.props}/>);
    }
}