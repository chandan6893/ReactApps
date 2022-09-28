
// import React from 'react';
import './App.css';
import UseEffectsCheck from "./components/UseEffectsCheck";
import React, { useState } from 'react'; 

function App() {
  const [valid, setValid] = useState(0);
  return (
    <>
      
        {valid < 10 && <UseEffectsCheck />} 
     
      <button onClick={()=> setValid((prev)=>prev + 1)}>CLICK :: {valid}</button>
    </>
  );
}

export default App;
