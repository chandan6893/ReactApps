import React, { createContext,useState, useEffect } from "react";
import axios from "axios";

 export const NewsContext = createContext();

 export function NewsContextProvider({ children }){
    const [data,setData] = useState([]);
    // const [isNewsLoading,setIsNewsLoading] = useState(false);

    // const apiKey = "1e3693f3d9fc492c88c192c185e86945";
    useEffect(() =>{
        // setIsNewsLoading(true);
        axios
          .get(
            `
https://newsapi.org/v2/everything?q=entertainment&from=2022-09-20&sortBy=publishedAt&apiKey=3889666d68c044f695baa7d2ecbe7f78`
          )
          .then((response) => {
            console.log(response.data.articles);
            setData(response.data);
          })
          .catch((error) => console.log("Something Unusual", error))
          .finally(() => {
            // setIsNewsLoading(false);
          });

    },[]);
    return <NewsContext.Provider value={ {data} } >
                { children }
           </NewsContext.Provider>
 }