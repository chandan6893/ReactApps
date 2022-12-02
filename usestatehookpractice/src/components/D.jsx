import React,{useContext} from 'react';
import {FirstName} from "./Context";

function D() {
    const fname = useContext(FirstName);
  return (
    <>
    
       {fname} 

    </>
  )
}

export default D