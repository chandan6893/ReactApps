import React, { Component } from "react";
export class TitleChange extends Component{
    constructor(props){
        super(props);
        this.state = {
            coount:0,
        }
    }

    handleClick = () =>{
        this.setState({count:this.state.coount + 1});
        
    }
   
    render(){
        return (
          <>
            <span>Count :{this.state.coount}</span>
            
            <button onClick={this.handleClick}>TitleChange</button>
          </>
        );
    }
}