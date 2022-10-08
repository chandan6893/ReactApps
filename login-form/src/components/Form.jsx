import React,{ useState } from "react";

import "./form.css";

export function Form(){

  const [id, setId] = useState("");
  const [pwd,setPwd] = useState("");
  const [submit, setSubmit] = useState();

    return (
      <div className="container">
        <form className="form">
          <input
            className="inputA"
            type="text"
            placeholder="UserName...."
            value={id}
            onChange={(e) => setId(console.log(e.target.value))}
          />
          <input
            className="inputB"
            type="password"
            placeholder="Password...."
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
          <button type="submit" className="submitButton" >Login</button>
        </form>
      </div>
    );
}