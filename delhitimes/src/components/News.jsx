import React from 'react';
import { useGlobalContext } from './Context';



function News() {
   const {hits,nbPages} = useGlobalContext();

  return (
    <>
        {hits.map((currElem)=>{
            return <h2>{currElem.title}</h2>
        })}
    </>
  )
}

export default News