import React, { useCallback } from 'react'
import { useState } from 'react'
import Child from './Child';

function Parent() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

//   const func=()=>{
//       console.log("first")
//   }

  const func = useCallback(() => {
    console.log("Hello Ajay");
  }, [counterTwo]);

  return (
    <div>
      <Child counterTwo={counterTwo} setCounterTwo={setCounterTwo} func={func} />
      <button onClick={incrementOne}>IncOne : {counterOne}</button>
    </div>
  );
}

export default Parent 