import React from 'react'
import { useParams } from 'react-router-dom'

function Content() {
  const { id } = useParams();
  console.log("ID",id)
  return <p>this is the page for Content ::  { id } </p>
}

export default Content