import React, { createContext, useState } from 'react';
const CountStateContext = createContext();

function CountStateProvider({ children }) {
    const [count, setCount] = useState(0);
    const handleClick = () => setCount(count + 1);

  return <CountStateContext.Provider>{children}</CountStateContext.Provider>
//   all the children will have access to this Privider(CountStateContext) that provider provides
  
}

export default CountStateContext;
