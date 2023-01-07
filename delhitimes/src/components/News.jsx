import React from 'react';
import { useGlobalContext } from './Context';



function News() {
   const {hits,nbPages,isLoading} = useGlobalContext();
  if(isLoading){
    return <h2>...Loading</h2>
  }else{
    return (
      <>
        <div className="stories-div">
          {hits.map((currPost) => {
            const { title, author, objectID, url, num_comments } = currPost;
            return (
              <>
                <div className="card" key={objectID}>
                  <h2>{title}</h2>
                  <p>
                    By <span>{author}</span> | <span>{num_comments} </span>
                     Comments
                  </p>

                  <div className="card-button">
                    <a href={url} target="_blank">
                      Read More
                    </a>
                    <a href="#">Remove</a>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
  
}

export default News