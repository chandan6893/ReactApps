import React, { useState,useEffect, useRef } from "react";

export function UseRefExample(){
    const [name,setname] = useState("");

    let countObject = useRef(0);

    const inputRef = useRef();

    useEffect(()=>{
      countObject.current = countObject.current + 1;

      console.log(inputRef.current);
      // inputRef.current, contains input tag/html 
      inputRef.current.focus();
      inputRef.current.style.border = "3px solid yellow";
      inputRef.current.style.color ="green"
    //   inputRef.current.style.background = "tomato"
    });

    return (
      <>
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <p>this is {name}</p>
        <p>Rendered {countObject.current} Times</p>

        <input
          ref={inputRef}
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
      </>
    );
}

