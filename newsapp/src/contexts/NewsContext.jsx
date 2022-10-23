import React, { createContext,useState, useEffect } from "react";
import axios from "axios";

 export const NewsContext = createContext();

 export function NewsContextProvider({ children }){
    const [data,setData] = useState([]);
    const [search,setSearch] = useState("");

    // const [isNewsLoading,setIsNewsLoading] = useState(false);

    // const apiKey = "1e3693f3d9fc492c88c192c185e86945";
    useEffect(() =>{
        // setIsNewsLoading(true);
        axios
          .get(
            `https://newsapi.org/v2/everything?q=apple&from=2022-10-21&to=2022-10-21&sortBy=popularity&apiKey=3889666d68c044f695baa7d2ecbe7f78`)
          .then((response) => {
            // console.log(response.data.articles);
            setData(response.data.articles);
          })
          .catch((error) => console.log("Something Unusual", error))
          .finally(() => {
            // setIsNewsLoading(false);
          });

    },[]);

    const handleDelete = (url) => {
    console.log(data);
    const x = data.filter((i) => {
      return i.url !== url;
    });
    setData(x)
  }

    const handleChange = (e) =>{
      setSearch(e.target.value);
      //  console.log(search);
    }
    const handleClick = () =>{
      // console.log("Kumar");
       axios
         .get(
           `https://newsapi.org/v2/everything?q=${search}&from=2022-10-21&to=2022-10-21&sortBy=popularity&apiKey=3889666d68c044f695baa7d2ecbe7f78`
         )
         .then((response) => {
          //  console.log(response.data.articles);
           setData(response.data.articles);
         });
         setSearch("");
    }
   

    return (
      <NewsContext.Provider value={{ data, handleChange, handleClick, search,handleDelete }}>
        {children}
        
      </NewsContext.Provider>
    );
 }