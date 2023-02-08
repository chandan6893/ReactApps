import React from 'react';
import { useGlobalContext } from './Context';
import {NavLink} from "react-router-dom"

function Movies() {
  const {movie,isLoading} =useGlobalContext();

 if(isLoading){
  return(
    <div className='"movie-section'>
      <div className='loading'>Loading...</div>
    </div>
  );
 }

  return (
    <section className='movie-page' >
      <div className='container grid grid-4-col' >{movie.map((currMve)=>{
        const { Title, imdbID, Poster } = currMve;
        // console.log(Title.substring(0,15))
        return (
          <NavLink to={`movie/${imdbID}`} key={imdbID}>
            <div className='card'>
              <div className="card-info">
                <h2>{Title.length >= 15 ? `${Title.substring(0,15)}...`: Title}</h2>
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