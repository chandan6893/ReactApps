import React,{ useState } from "react";
import Welcome from "./Welcome"

import "./form.css";

export function Form(){

  const [userName, setUserName] = useState("");
  const [password,setPassword] = useState("");
  const [user, setUser] = useState(null);
  

  const submitForm = (e) =>{
    e.preventDefault();
    const currentEntry = {userName:userName ,password: password};
    setUser( currentEntry);
    
  }

    return (
      <div className="container">
       { !user?.userName ?
         <form className="form" onSubmit={submitForm}>
          <input
            className="inputA"
            type="text"
            placeholder="UserName...."
            autoComplete="off"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            className="inputB"
            type="password"
            placeholder="Password...."
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="submitButton">
            Login
          </button>
        </form> :<Welcome user={user}  />

       
       }



        {/* ********************************xxxxxxxxxxxxxxxxx************** */}

        
      </div>
    );
}