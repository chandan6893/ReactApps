import React, { Component } from "react";
import "./titleChange.css";
export class TitleChangeClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount(){
    document.title = `${this.state.count} Times Clicked`
  }

  componentDidUpdate(){
    document.title = `${this.state.count} Times Clicked`
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
    
  };

  render() {
    return (
      <>
        <div className="titleChangeClass">
          <span>Count :{this.state.count}</span>

          <button onClick={this.handleClick}>TitleChangeClass</button>
        </div>
      </>
    );
  }
}
