import React from 'react'

export function Footer() {
  const currentTime = new Date().toLocaleTimeString();
  return (
    <>
      <ul className="footer">
        <li className='current'>CURRENT</li>
        <li className='time'>TIME : {currentTime}</li>
      </ul>
    </>
  );
}

