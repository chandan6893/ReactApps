import React, { useState } from "react";
export function StateWithObject(){
    const [name, setName] = useState({
        firstName:"",
        lastName:"",
    });


    return (
      <>
        <form>
          <div>
            <label htmlFor="fname">First Name</label>
            <input
              onChange={(e) => {
                setName({
                  ...name,
                  firstName: e.target.value, 
                });
              }}
              type="text"
              id="fname"
              value={name.firstName}
            />
          </div>
          
          <div>
            <label htmlFor="lname">Last Name</label>
            <input
              onChange={(e) => {
                setName({
                  ...name,
                  lastName: e.target.value,
                });
              }}
              type="text"
              id="lname"
              value={name.lastName}
            />
          </div>
          <h3>
            <span>My First Name is : {name.firstName}</span> <br />
            <span>My Last Name is : {name.lastName}</span>
          </h3>
        </form>
      </>
    );
}