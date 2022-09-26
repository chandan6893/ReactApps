import React, { Component } from "react";
export class TitleChange extends Component {
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
        <span>Count :{this.state.count}</span>

        <button onClick={this.handleClick}>TitleChange</button>
      </>
    );
  }
}
