import React from 'react';
import { useContext,useState,useEffect } from 'react';
import { createContext } from 'react';
 const appContext = createContext();


//  const API__URL = `https://www.omdbapi.com/?i=tt3896198&apikey=c2264f6f&s=matrix`;
export const API__URL = `http://www.omdbapi.com/?apikey=c2264f6f`;

function AppContextProvider({children}) {
  
  const [movie,setMovie] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [isError,setIsError] = useState({show : false , msg :""});

  const [query,setQuery] = useState("avengers");
// console.log(mov);
  const getMovies = async(url) =>{
    setIsLoading(true);
       try{
         const response = await fetch(url);
         const data = await response.json();
        
         console.log(data)
        //  plz check console.log(data,data.Response,data.Search)
         if(data.Response === "True"){
          setIsLoading(false);
          setIsError({ show: false, msg: "" });
            setMovie(data.Search);
            
         }else{
          setIsError(
            {show : true ,
             msg:data.Error
            }
            )
         }
       
       }catch(error){
        console.log(error)
       }
  }

  useEffect(()=>{
    // console.log(query)
    let timer;
    timer=setTimeout(()=>{
      getMovies(`${API__URL}&s=${query}`);
    },500)
    return function cleanUp(){
      clearTimeout(timer);
    }
    
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