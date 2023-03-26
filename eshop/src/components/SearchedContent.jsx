import React, { useState } from 'react';
import "../styles/searchedContent.css";


export const SearchedContent = ({ searchOutput }) => {
    const [state,setState] = useState(false);
    const [singleProd,setSingleProd]= useState([]);
    console.log(searchOutput);
    const getProduct =(id)=>{
        
        const prod = searchOutput.find((ele)=>{
            return ele.id === id
        });
        setState(true);
        setSingleProd(prod);
    }
  return <>{searchOutput.map((value,i)=>{
    return (
      <div className='searchedContentContainer' onClick={() => getProduct(value.id)} key={i}>
        <div className="searchedContent">
          <img src={value.img} alt="" />
          <h5>{value.title}</h5>
        </div>
      </div>
    );
  })}</>;
};
