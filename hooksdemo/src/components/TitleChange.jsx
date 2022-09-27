import React, { Component } from "react";
export class TitleChange extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:0,
        }
    }

    handleClick = () =>{
        this.setState({count:this.state.count + 1});
        
    }
   
    render(){
        return (
          <>
            <span>Count :{this.state.count}</span>
            
            <button onClick={this.handleClick}>TitleChange</button>
          </>
        );
    }
}