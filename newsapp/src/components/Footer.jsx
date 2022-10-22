import React, { useState,useEffect } from 'react'

export function Footer() {


const [date, setDate] = useState(new Date());

useEffect(() => {
  const runningTime = setInterval(() => setDate(new Date()), 1000);
  return function cleanup() {
    clearInterval(runningTime);
  };
});


  // const currentTime = new Date().toLocaleTimeString();
  return (
    <>
      <ul className="footer">
        <li className="current">CURRENT</li>
        <li className="time">TIME : {date.toLocaleTimeString()}</li>
      </ul>
    </>
  );
}

