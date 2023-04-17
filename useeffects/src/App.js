
// import React from 'react';
// import './App.css';
// import UseEffectsCheck from "./components/UseEffectsCheck";
// import React, { useState } from 'react'; 

// function App() {
//   const [valid, setValid] = useState(0);
//   return (
//     <>
      
//         {valid < 10 && <UseEffectsCheck />} 
     
//       <button onClick={()=> setValid((prev)=>prev + 1)}>CLICK :: {valid}</button>
//     </>
//   );
// }

// export default App;

import React,{useState,useEffect} from 'react'

 const App = () => {
  const [date,setDate]=useState(new Date());
  useEffect(()=>{
    const timer=setInterval(()=>{
      setDate(new Date());
    },1000);
    return ()=>{
      clearInterval(timer);
    }
  })
  return (
    <>
    <h3>{date.toDateString()}</h3>
    <h4>{date.toLocaleTimeString()}</h4>
    </>
  )
}
export default App;

