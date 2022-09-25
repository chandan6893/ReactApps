import React, { Component } from "react";
export class List extends Component{
    render(){
        return (
          <>
            <span className="listItem">
              {this.props.items.map((item, index) => (
                <div 
                  key={index}
                  onClick={this.props.deleteTask.bind(this, index)}
                >
                  {item}
                </div>
              ))}
            </span>
          </>
        );
    }
}
