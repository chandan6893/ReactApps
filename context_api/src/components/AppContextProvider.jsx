import React, {useContext,createContext,useEffect,useState} from 'react';
import axios from "axios";

const API_URL = "https://example-data.draftbit.com/books?_limit=49";
const context=createContext();
const AppContextProvider = ({children}) => {
  const [books,setBooks]=useState([]);
  const [addToWishlist,setAddToWishlist]=useState([]);
 const  [wishlist, setWishList] = useState([]);
  

// setWishList([...wishlist,addToWishlist]);
// console.log(addToWishlist);

  useEffect(()=>{
    axios.get(API_URL).then(res=>setBooks(res.data))
  },[])

  // const addToWishlit=(books)=>{
  //   console.log(books);
  //     }
  return (
    <div>
      <context.Provider
        value={{ books, addToWishlist,setAddToWishlist,wishlist, setWishList }}
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