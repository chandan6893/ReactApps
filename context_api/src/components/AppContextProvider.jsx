import React, {useContext,createContext, Children} from 'react';

const context=createContext();
const AppContextProvider = ({children}) => {
  return (
    <div>
        <context.Provider>
            {children}
        </context.Provider>
    </div>
  )
}

const useGlobalContext=()=>{
    return useContext(context);
}

export { AppContextProvider ,useGlobalContext}; 