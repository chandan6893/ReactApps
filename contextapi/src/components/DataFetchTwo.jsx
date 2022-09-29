import React, { useState, useEffect } from "react";
import axios from "axios";

export function DataFetchTwo() {


const [post, setPost] = useState([]);
  const [id, setId] = useState(1);
  const [btnId,setBtnId] = useState(1);




useEffect(()=> {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
      })
      .catch((err) => console.log(err));
}, [btnId]);

  return (
    <>
      <div>
        

        <h1>{post.name}</h1>
        <p>{post.email}</p>

        {/* <button onClick={() => setId((prev)=> prev + 1)}> CLICK :: {id}</button> */}

        <input type="text" value={id} onChange={(e)=> setId(e.target.value)} />
        <button onClick={()=> setBtnId(id)}>click</button>
      </div>
    </>
  );
}
