import React from 'react';
import "../styles/suggestionList.css";

export const SuggestionList = ({result}) => {
  return (
    <div>{result.map((ele,i)=>{
      return <div className='suggestionList' key={i} >{ele.name}</div>
    })}</div>
  )
}
