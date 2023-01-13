import React from 'react';
import { useGlobalContext } from './Context';
import {NavLink} from "react-router-dom"

function Movies() {
  const {movie} =useGlobalContext()
  return (
    <section className='movie-page' >
      <div className='grid grid-4-col' >{movie.map((currMve)=>{
        const { Title, imdbID, Poster } = currMve;
        return (
          <NavLink to={`movie/${imdbID}`} key={imdbID}>
            <div className='card'>
              <div className="card-info">
                <h2>{Title}</h2>
                <img src={Poster} alt="" />
              </div>
            </div>
          </NavLink>
        );
      })}</div>
      
    </section>
  )
}

export default Movies