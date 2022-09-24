// import React, { Component } from "react";
// export class Parent extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render(){
//         return (
//             <>
//             <h1>Header</h1>
//             <p>Para1</p>
//             <h2>Header2</h2>
//             </>
//         )
//     }
// }


// Stateless(without state) Functional Component-->state will not be used but if Parents returns 
// any data then we will use that data using props
// export function Parent(props){
//     return(
//         <>
//         <h1>The Name Is {props.name}</h1>
//         <p>Para1</p>
//         <h2>Header2</h2>
//         </>
//     )
// }


import React, { Component } from "react";
import { PureComp } from "./PureComp";
import { RegularComp } from "./RegularComp";

export class Parent extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "Amit",
        }
    }

    render(){
        return(
            <>
            <p>PARENT COMPONENT</p>
            <RegularComp name={this.state.name}/>
            <PureComp name={this.state.name}/>
            <button onClick={()=>this.setState({name:"Vasanth"})}>CHANGE NAME</button>

            <button onClick={()=>this.forceUpdate()}>Force Update</button>
            </>
        )
    }
}