import React, { useContext } from 'react';
import { ComponentB } from './ComponentB';
import { CountStateContext } from "../contexts/CountContext";

export function ComponentA() {
    const { count } = useContext(CountStateContext);
  return (
    <div>
        <div className='compA'>
            <p>ComponentA</p>
            <p>COUNT is :::: {count}</p>
        </div>
        <ComponentB  />
    </div>
  )
}

// export default ComponentA