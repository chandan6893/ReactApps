import React from "react";
import "./form.css";

export function Form(){

    return (
      <div className="container">
        <form className="form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Passwurd" />
          <button>submit</button>
        </form>
      </div>
    );
}