import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
//   const [state,setState] = useState(false)
  const handleCounter=()=>{
    setCount(count + 1);
  }
const handleDecrement = () => {
    // console.log("hello")
    setCount(count-1);
    // if(count===0){
    //     // setCount(count-1);
        
        
    // }
  
};

const handleReset=()=>{
    setCount(0)
}

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleCounter}>Click</button>
      <button onClick={handleDecrement} disabled={count===0}>
        decrement
      </button>
      {/* {count === 0?  <button onClick={handleDecrement} disabled={true} >decrement</button> : <button onClick={handleDecrement}>decrement</button>} */}
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default Counter;
