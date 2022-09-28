// import React, { UseState } from "react";
import { useState } from "react";
export function CountHooks() {
   const [count,setCount] = useState(0);
    //   [value,method which updates the value]   

    return(
        <>
        <h2>count={count}</h2>
        <button onClick={() => setCount(count+3)}>INCREMENT</button>
        </>
    )
}