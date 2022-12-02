import React,{createContext} from 'react';
import A from"./A";


const FirstName=createContext();
// const LastName=createContext();
function Context() {
  return (
    <>
    
    <FirstName.Provider value="ram">
      <A />
    </FirstName.Provider>

    </>
  )
}

export default Context;
export {FirstName}