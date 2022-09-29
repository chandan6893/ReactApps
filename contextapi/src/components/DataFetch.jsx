import React, { useState,useEffect } from "react";
 import axios from "axios";

 export function DataFetch (){
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        axios
          .get("https://jsonplaceholder.typicode.com/comments")
          .then((response) => {
            //   console.log(response.data) ;
            setPosts([...response.data]);
          });
          
    },[]);

    return(
        <>
        <div>
            {posts.map((post)=>(
                <div key={post.id}>
                    <h1>Name :{post.name}</h1>
                    <h2>Email :{post.email}</h2>
                    <p>Body :{post.body}</p>
                </div>
            ))}
        </div>
        </>
    )
 }