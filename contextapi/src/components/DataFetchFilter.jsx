import React, { useState, useEffect } from "react";
import axios from "axios";

export function DataFetchFilter() {
  const [posts, setPosts] = useState([]);
  const [filteredData, setFilteredData]   = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        //   console.log(response.data) ;
        setPosts([...response.data]);
        setFilteredData([...response.data]);
      });
  }, []);

  useEffect(() => {
   const afterFilterData = posts.filter((post) => {
    
        if(post.title){
            return post.title.includes(search);
        }
     });
     console.log(afterFilterData);
     setFilteredData(afterFilterData);
  }, [search]);

  return (
    <>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {filteredData.map((post) => (
          <div key={post.id}>
            <h1>ID :{post.id}</h1>
            <h2>TITLE :{post.title}</h2>
            <h3>BODY :{post.body}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
