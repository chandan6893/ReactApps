import React from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
 const appContext = createContext();

function AppContextProvider({children}) {
  return (
    <>
        <appContext.Provider value={"THAPA"} >
            {children}
        </appContext.Provider>
    </>
  )
}
const useGlobalContext =()=>{
    return useContext(appContext)
}

export { appContext,AppContextProvider,useGlobalContext}