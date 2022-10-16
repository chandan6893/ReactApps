import React from 'react'
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
  const navigate = useNavigate();

  const handleClick = () =>{
   navigate("/");
  };
  return (
    <div>
      <h2>Page Not Found</h2>
      <button onClick={handleClick} >Take Me Back To The Home</button>
    </div>
  );
}

export default ErrorPage