import React from 'react';
import { useContext,useState,useEffect } from 'react';
import { createContext } from 'react';
 const appContext = createContext();


 const API__URL = `https://www.omdbapi.com/?i=tt3896198&apikey=c2264f6f&s=titanic`;
// const API__URL = `http://www.omdbapi.com/?apikey=c2264f6f`;

function AppContextProvider({children}) {
  
  const [movie,setMovie] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [isError,setIsError] = useState({show : false , msg :""});

  const [query,setQuery] = useState("");
// console.log(mov);
  const getMovies = async(url) =>{
       try{
         const response = await fetch(url);
         const data = await response.json();
        
         console.log(data)
        //  plz check console.log(data,data.Response,data.Search)
         if(data.Response === "True"){
          setIsLoading(false);
            setMovie(data.Search);
            
         }else{
          setIsError({show : true , msg:data.error})
         }
       
       }catch(error){
        console.log(error)
       }
  }

  useEffect(()=>{
    getMovies(`${API__URL}&s=${query}`);
  },[query])
  return (
    <>
        <appContext.Provider value={{movie,isLoading,isError,query,setQuery}} >
            {children}
        </appContext.Provider>
    </>
  )
}
const useGlobalContext =()=>{
    return useContext(appContext)
}

export { appContext,AppContextProvider,useGlobalContext}