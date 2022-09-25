import React, { Component } from "react";
export class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
        email: "",
        password: "",
    }
  }

   handleEmail = (event) => {
  //  console.log(event.target.value)
   this.setState({
    email: event.target.value,
   },()=>{
    console.log("Email==>",this.state.email)
   })}


   handlePassword =(event) => {
    // console.log(event.target.value);
    this.setState({
      password:event.target.value,
    },()=>{
      console.log(this.state.password)
    })
   }

   handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.email,this.state.password)
   }

   handleSelect = (event) => {
    console.log(event.target.value)
    this.setState({
      country: event.target.value,
    });
   };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">EMAIL</label>
            <input
              onChange={this.handleEmail}
              type="text"
              name="email"
              id="email"
              value={this.state.email}
            />
          </div>
          <div>
            <label htmlFor="pwd">PASSWORD</label>
            <input
              onChange={this.handlePassword}
              type="text"
              name="password"
              id="pwd"
              value={this.state.password}
            />
          </div>
          <div>
            <select onChange={this.handleSelect} value={this.state.country} name="countries" id="countries">
              <option value="India">India</option>
              <option value="France">France</option>
              <option value="Japan">Japan</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
   }
