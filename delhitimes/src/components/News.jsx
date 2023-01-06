import React from 'react';
import { useEffect } from 'react';



function News() {
    let API = "https://hn.algolia.com/api/v1/search_by_date?query=cricket";
    const getData = async (url) => {
      try {
        const response = await fetch(url);
        const actualData = await response.json();
        console.log(actualData);
      } catch (error) {
        console.log(error)
      }
    };
    useEffect(() => {
    //   getData(API);
    }, []);

  return (
    <>News</>
  )
}

export default News