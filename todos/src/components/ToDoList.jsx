import React, { Component } from "react";
import { List } from "./List";
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
            <h3 deleteTask={this.onDeleteHandle}  items={this.state.items}></h3>
          </>
        );
    }
}