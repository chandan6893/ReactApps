import React, {useState,useContext} from 'react';
import { NewsContext } from '../contexts/NewsContext';



function NewsArticle({ dataA }) {
  const { handleDelete } = useContext(NewsContext);
  // const [del, setDel] = useState(dataA);
  
    // setDel(x);
  // };

  const [like, setLike] = useState();
  const [lik, setLik] = useState(0);

   const handleLike = () => {
     setLik((prev) => prev + 1);
     setLike(lik);
   };

  const [dislike,setDislike] =useState();
  const [count,setCount] = useState(0)
  
  const handleDislike =() =>{
    setCount((prev) => prev + 1);
    setDislike(count);
  }  
  return (
    <>
      {/* <ul className='searchDisplay'>
          <li>
            {data.map((val) => {
              return <h1>{val.title}</h1>
            })}
          </li>
        </ul> */}

      <div className="NewsArtilceContainer">
        <div className="NewsArticle">
          <h1>{dataA?.title}</h1>
          <h5>{dataA.description}</h5>

          <img className="articleImage" src={dataA.urlToImage} alt="" />
          <p>{dataA.content}</p>

        

          <div className="author-PublishedAt-readMore">
            <div className="author-PublishedAt">
              <span className="author"> {dataA.author}</span>,
              <span className="publishedAt">{dataA.publishedAt}</span>
            </div>
            <a className='readMore' href={dataA.url}>Read More....</a>
          </div>

          <ul className="like-dislike-comment-remove">
            <li className="LDCRCCN"  onClick={ handleLike } > <i class="fa-solid fa-thumbs-up">{like? like: ""} </i> </li>
            <li className="LDCRCCN" onClick={handleDislike} > <i class="fa-solid fa-thumbs-down"> <span> {dislike? dislike : ""} </span> </i> </li>
            <li className="LDCRCCN comment"> <i class="fa-solid fa-comment"></i> </li>
            <li className="LDCRCCN trash" onClick={()=>handleDelete(dataA.url)} > <i class="fa-solid fa-trash"></i> </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NewsArticle