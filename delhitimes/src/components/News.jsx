import React from 'react';
import { useGlobalContext } from './Context';



function News() {
   const {hits,nbPages,isLoading,removePost} = useGlobalContext();
  if(isLoading){
    return <h2 className='loading' >...Loading</h2>
  }else{
    return (
      <>
        <div className="stories-div">
          {hits.map((currPost) => {
            const { title, story_title, author, objectID, url,story_url ,num_comments } =
              currPost;
            return (
              
                <div className="card" key={objectID}>
                  <h2>{title || story_title }</h2>
                  <p>
                    By <span>{author}</span> | <span>{num_comments} </span>
                     Comments
                  </p>

                  <div className="card-button">
                    <a href={url || story_url } target="_blank">
                      Read More
                    </a>
                    <a href="#" onClick={()=>removePost(objectID)} >Remove</a>
                  </div>
                </div>
              
            );
          })}
        </div>
      </>
    );
  }
  
}

export default News