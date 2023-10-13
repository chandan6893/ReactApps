import React, {useContext,createContext,useEffect,useState} from 'react';
import axios from "axios";

const API_URL = "https://example-data.draftbit.com/books?_limit=49";
const context=createContext();
const AppContextProvider = ({children}) => {
const [books,setBooks]=useState([]);
const [favourates,setFavourates]=useState([]);
const [search, setSearch] = useState("");
const [searchResult, setSearchResult] = useState([]);
  
const fav=(book)=>{
    setFavourates([...favourates,book])
  }

const removeFun = (id) => {
    // console.log(id)
const filteredFavBook = favourates.filter((favBook) => {
      // console.log(favBook.id!==id)
      return favBook.id !== id;
      
    });
    setFavourates(filteredFavBook);
  };


  useEffect(()=>{
    axios.get(API_URL).then(res=>setBooks(res.data))
  },[])

  return (
    <div>
      <context.Provider
        value={{
          books,
          fav,
          favourates,
          removeFun,
          searchResult,
          setSearchResult,
          search,
          setSearch,
        }}
      >
        {children}
      </context.Provider>
    </div>
  );
}

const useGlobalContext=()=>{
    return useContext(context);
}

export { AppContextProvider ,useGlobalContext}; 