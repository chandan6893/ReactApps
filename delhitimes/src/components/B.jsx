import React,{useContext} from 'react';
import { firstName } from './Context';

function B() {
    const fname = useContext(firstName)
  return (
    <div>{fname}</div>
  )
}

export default B