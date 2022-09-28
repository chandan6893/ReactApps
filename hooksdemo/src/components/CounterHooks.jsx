import React, { useState } from "react";
import { initial__Count } from "./Constants"
export function CounterHooks(){
    // const initialCount = 0;
    const [count,setCount] = useState(initial__Count);
    const [name,setName]   = useState("Vasanth Kumar");
    const handleName = () => {
        if(name !== "Vasanth"){
            setName(name.toLocaleUpperCase());
        }
        }

    const handleIncremrnt = () =>{
        setCount(count+1);
    } ;
    
    const handleDecrement = (x) =>{
        setCount(count - x)
    }
    

    return (
      <>
        <h2>Count : {count}</h2>
        <h3>My Name is {name}</h3>
        {/* <button onClick={ () => setCount(count+1) }>INCREMENT</button> */}
        <button onClick={handleIncremrnt}>Increment</button>
{/* if we don't want to pass any parameters simply put reference of function after onClick just like 
above */}

        {/* <button onClick={() => setCount(count - 1)}>DECREMENT</button> */}
        <button onClick={() => handleDecrement(3)}>Decrement</button>
        {/* if we have to pass any parameters i.e 3 in function handleDecrement() 
        then we have to use Arrow function like above */}

        <button onClick={() => setCount(initial__Count)}>RESET</button>
        {/* <button onClick={ ()=> setName(name.toLocaleUpperCase())}>capitalizseName</button> */}
        <button onClick={handleName}>CapitalizeName</button>
      </>
    );
}