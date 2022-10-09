
import './App.css';
import React, { useState } from "react";
import { LoginForm } from "./components/LoginForm"

function App() {

  const adminUser = {
    email: "admin@gmail.com",
    password: "abc@123"
  }

  const [user,setUser] = useState({name:"", email:"" });
  const [error, setError] = useState("");

  const Login = details =>{
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password){
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      });
    } else{
      console.log("Details Do Not Match!");
      setError("Details Do Not Match!");
    }
  }

  const Logout = () =>{
    console.log("logout");
    setUser({name:"",email: ""})
  }

  return (
    <div className="App">
    {
      (user.email !== "") ? (<div className="welcome">
          <h2>WelCome, <span>{user.name}</span></h2>
          <button onClick={Logout}>logout</button>
      </div>) : (<LoginForm Login={Login} error={error} />)
    }
    </div>
  );
}

export default App;
