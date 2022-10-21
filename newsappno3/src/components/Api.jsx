import React,{ useState,useEffect } from 'react';
import axios from "axios";
export function Api() {

const [newsData,setNewsData] = useState([]);

useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=tesla&from=2022-09-20&sortBy=publishedAt&apiKey=1e3693f3d9fc492c88c192c185e86945"
      )
      .then((response) => {
        console.log(response.data);
        setNewsData(response.data);
      });
},[newsData]);


  return (
    <div>
      {newsData.map((news) => (
        <div key={news.url}>
          <h1>{news?.title}</h1>
          <h5>{news.description}</h5>
          <img src={news.urlToImage} alt="" />
          <p>{news.content}</p>
          <p>{news.url}</p>
        </div>
      ))}
    </div>
  );
}

