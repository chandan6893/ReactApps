import React,{ useMemo } from 'react';
import { useState } from 'react';

export function UseMemoPract() {
    const [countOne,setCountOne] = useState(0);
    const [countTwo,setCountTwo] = useState(0);
 const isEven = useMemo(()=>{
   // for(let i=0;i<1000000000;i++){};
   for (let i = 0; i < 1000000000; i++) {}
   return countOne % 2 === 0;
 },[countOne])

  return (
    <>
        <h1>COUNTONE::::{countOne}</h1><br />
        {isEven?"Even":"Odd"}
        <h1>COUNTTWO::::{countTwo}</h1>
        <button onClick={()=>setCountOne(countOne + 1)} >IncrementCountOne</button>
        <button onClick={()=>setCountTwo(countTwo - 1)} >DecrementCountTwo</button>

    </>
  )
}

