import React from 'react';
import "../styles/suggestionList.css";
import { Results } from './Results';

export const SuggestionList = ({result}) => {
  return (
    <div className='suggestionList'>{result.map((ele,i)=>{
      return <Results key={i} ele={ele} />
     
    })}</div>
  )
}
