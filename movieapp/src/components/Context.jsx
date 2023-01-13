import React from 'react';
import { useContext,useState,useEffect } from 'react';
import { createContext } from 'react';
 const appContext = createContext();
 const API__URL = `https://www.omdbapi.com/?i=tt3896198&apikey=c2264f6f`;

function AppContextProvider({children}) {
  
  const getMovie = async(url) =>{
        const response = await fetch(url);
        const mveData =  await response.json()
        console.log(mveData)
  }

  useEffect(()=>{
    getMovie(API__URL)
  },[])
  return (
    <>
        <appContext.Provider value={"THAPA"} >
            {children}
        </appContext.Provider>
    </>
  )
}
const useGlobalContext =()=>{
    return useContext(appContext)
}

export { appContext,AppContextProvider,useGlobalContext}