import React from 'react';

function NewsArticle({ data }) {
  return (
    <>
      <div className='NewsArtilceContainer' >
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
            <a href={data.url}>Read More</a>
          </div>

          {/* <a href={data.url}>Read More</a> */}
        </div>
      </div>
    </>
  );
}

export default NewsArticle