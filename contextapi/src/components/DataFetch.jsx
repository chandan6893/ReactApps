import React, { useState,useEffect } from "react";
 import axios from "axios";

 export function DataFetch (){
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        axios
          .get("http://fakestoreapi.com/products")
          .then((response) => setPosts([...response.data]));
    });

    return(
        <>
        <div>
            {posts.map((post)=>(
                <div key={post.id}>
                    <h1>TITLE :{post.title}</h1>
                    <h2>PRICE :{post.price}</h2>
                    <p>DESCRIPTION :{post.description}</p>
                </div>
            ))}
        </div>
        </>
    )
 }