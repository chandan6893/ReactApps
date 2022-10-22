import React, {useState} from 'react';



function NewsArticle({ data }) {

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
          <h1>{data?.title}</h1>
          <h5>{data.description}</h5>

          <img className="articleImage" src={data.urlToImage} alt="" />
          <p>{data.content}</p>

          {/* <h6 className="author"> {data.author}</h6>
          <h6 className="publishedAt">{data.publishedAt}</h6> */}

          <div className="author-PublishedAt-readMore">
            <div className="author-PublishedAt">
              <span className="author"> {data.author}</span>,
              <span className="publishedAt">{data.publishedAt}</span>
            </div>
            <a className='readMore' href={data.url}>Read More....</a>
          </div>

          <ul className="like-dislike-comment-remove">
            <li className="LDCRCCN"  onClick={ handleLike } > <i class="fa-solid fa-thumbs-up">{like? like: ""} </i> </li>
            <li className="LDCRCCN" onClick={handleDislike} > <i class="fa-solid fa-thumbs-down"> <span> {dislike? dislike : ""} </span> </i> </li>
            <li className="LDCRCCN comment"> <i class="fa-solid fa-comment"></i> </li>
            <li className="LDCRCCN trash"> <i class="fa-solid fa-trash"></i> </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NewsArticle