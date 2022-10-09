import React,{ useState } from "react";

import "./form.css";

export function Form(){

  const [userName, setUserName] = useState("");
  const [password,setPassword] = useState("");
  const [submit, setSubmit] = useState([]);

  const submitForm = (e) =>{
    e.preventDefault();
    const currentEntry = {userName:userName ,password: password};
    setSubmit([...submit, currentEntry]);
    
  }

    return (
      <div className="container">
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
        </form>

        <div className="welcomePage">
          {submit.map((namePwd) => (
            <div >
              <h3>Welcome :{namePwd.userName}</h3>
            </div>
          ))}
        </div>



        {/* ********************************xxxxxxxxxxxxxxxxx************** */}

        
      </div>
    );
}