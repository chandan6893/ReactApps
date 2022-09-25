import React, { Component } from "react";
export class ToDoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            term:'',
            items:[],
        }
    }


    render(){
        return(
            <>
            <div>
                <input type="text" />
                <button>Add Item</button>
            </div>
            </>
        )
    }
}