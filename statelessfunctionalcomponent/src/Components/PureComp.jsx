import React, { PureComponent } from "react";
export class PureComp extends PureComponent{
    render(){
        return <p>PURE COMPONENT --- {this.props.name}</p>
    }
}