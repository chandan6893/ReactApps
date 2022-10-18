import React, { useContext } from 'react';
import { CountStateContext } from "../contexts/CountContext";

export function ComponentD() {
    const { handleClick } =  useContext(CountStateContext);
  return (
    <div className="compD">
      <p>ComponentD</p>
      <button onClick={handleClick}>Set Count</button>
    </div>
  );
}

// export default ComponentD