import React, { Component } from "react";
export class CountClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        }
    }

    handleIncrement = (stepValue) =>{
        this.setState({
            count:this.state.count + stepValue,
        });
    }

    render(){
        return (
          <>
            <h1>COUNT:{this.state.count}</h1>
            <button onClick={() => this.handleIncrement(3)}>Increment</button>
          </>
        );
    }
}