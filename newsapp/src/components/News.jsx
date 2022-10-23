import React, { useContext } from 'react';
import { NewsContext } from "../contexts/NewsContext"
import Header from './Header';
import NewsArticle from './NewsArticle';
import { Footer } from "./Footer"


function News(props) {
    const { data } = useContext(NewsContext);
    // console.log(data);

  return (

    <div className='News'>

      <Header  />

      {data

        ? data?.map((news) => (
            // <div>{console.log({news})}</div>
            <NewsArticle dataA={news} key={news.url} />
          ))
        : "Loading"}

        <Footer />
      
    </div>
  );
}

export default News;