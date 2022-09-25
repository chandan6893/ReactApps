import React, { Component } from "react";
export class ToDoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            term:'',
            items:[],
        }
    }

    onChangeHandler = (event) =>{
        this.setState({
            term:event.target.value,
        })
    }

    onFormHandler = (event) =>{
        event.preventDefault();
        this.setState({
            term:'',
            items:[...this.state.items,this.state.term]
        })
    }

    render(){
        return (
          <>
            <div>
              <form>
                <div>
                  <input
                    onChange={this.onChangeHandler}
                    type="text"
                    value={this.state.term}
                    placeholder="enter term"
                  />
                  <button onClick={this.onFormHandler}>Add Item</button>
                </div>
              </form>
            </div>
          </>
        );
    }
}