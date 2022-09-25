import React, { Component } from "react";
import { List } from "./List";
import "./Todo.css";
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

    onDeleteHandle = index =>{
        const deleteTask = [...this.state.items];
        deleteTask.splice(index,1);
        this.setState({
            items:deleteTask
        });
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
                <div className="container">
                  <input
                  className="input"
                    onChange={this.onChangeHandler}
                    type="text"
                    value={this.state.term}
                    placeholder="enter term"
                  />
                  <button className="Add-item" onClick={this.onFormHandler}>Add Item</button>
                </div>
              </form>
            </div>
            <List  deleteTask={this.onDeleteHandle}  items={this.state.items} />
          </>
        );
    }
}