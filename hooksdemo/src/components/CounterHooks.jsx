import React, { useState } from "react";
export function CounterHooks(){
    const [count,setCount] = useState(1);

    return(
        <>
        <h2>Count : {count}</h2>
        <button onClick={ () => setCount(count+1) }>INCREMENT</button>
        <button onClick={ () => setCount(count-1) }>DECREMENT</button>
        </>
    )
}