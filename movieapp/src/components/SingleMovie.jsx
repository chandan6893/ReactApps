import React from 'react';
import { useParams } from 'react-router-dom';

function SingleMovie() {
  const {id} = useParams();
  return (
    <div>SingleMovie {id} </div>
  )
}

export default SingleMovie