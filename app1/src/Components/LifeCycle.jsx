import React, { Component } from "react";
export class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
        };
    }

    incrementCount = () => {
        this.setState((prev) => ({
            count:prev.count + 1,
        }))
    }

    render() {
        return (
          <>
            <div className="lifeCycle">
              <h1>count - {this.state.count}</h1>
              <button onClick={this.incrementCount}>IncrementLifeCycle</button>
            </div>
            {/* {this.state.count > 6 && <h1>We Will Rule the World</h1> } */}
            {/* {this.state.count > 4 ? <h3>We Will Rise Again</h3> : <h4>Never Again</h4> } */}
          </>
        );
    }
}