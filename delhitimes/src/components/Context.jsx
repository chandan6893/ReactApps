import React,{ createContext,useContext } from 'react';


const context = createContext()

function ContextProvider({children}) {
  return (
    <div>
        <context.Provider value = {"Ankit"} >
        {children}
        </context.Provider>
    </div>
  )
}

const useGlobalContext = () =>{
    return useContext(context);
}

export default ContextProvider;
export {context,useGlobalContext} ;