import React,{ useState,useEffect } from 'react';
import { useParams,NavLink } from 'react-router-dom';
import {API__URL} from "./Context"

function SingleMovie() {
  const {id} = useParams();

   const [movie, setMovie] = useState("");
   const [isLoading, setIsLoading] = useState(true);
   

  

   const getMovies = async (url) => {
     try {
       const response = await fetch(url);
       const data = await response.json();

       console.log(data);
       //  plz check console.log(data,data.Response,data.Search)
       if (data.Response === "True") {
         setIsLoading(false);
         
         setMovie(data);
       } 
     } catch (error) {
       console.log(error);
     }
   };

   useEffect(() => {
     // console.log(query)
     let timer;
     timer = setTimeout(() => {
       getMovies(`${API__URL}&i=${id}`);
     }, 500);
     return function cleanUp() {
       clearTimeout(timer);
     };
   }, [id]);

if(isLoading){
  return(
    <div className='movie-section'>
      <div className='loading'>Loading...</div>
    </div>
  );
}

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className=""></p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating} / 10</p>
          <p className="card-text">{movie.Country}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default SingleMovie