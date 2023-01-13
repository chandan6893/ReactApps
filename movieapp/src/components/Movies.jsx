import React from 'react';
import { useGlobalContext } from './Context';

function Movies() {
  const {movie} =useGlobalContext()
  return (
    <>
      {movie.map((currEle)=>{
        return <div>
          <h2>{currEle.Title}</h2>
        </div>
      })}
    </>
  )
}

export default Movies