import React from 'react';
import "../styles/searchedContent.css";


export const SearchedContent = ({ searchOutput,setState,handleSearch,setSingleProd }) => {
    
    
    // console.log(searchOutput);
    const getProduct =(id)=>{
        
        const prod = searchOutput.find((ele)=>{
            return ele.id === id
        });
        setState(true);
        setSingleProd(prod);
        handleSearch("")
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
