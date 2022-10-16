import React from 'react'
import { Link } from 'react-router-dom';

function SideBar({ text }) {
  // here we r accessing the props from App.jsx
  return (
    <>
      <div className="sidebar">
        <h2>SideBar</h2>
        {text === "about" ? (
          <p>
            <Link to="/about/1">content 1</Link>
            <Link to="/about/2">content 2</Link>
          </p>
        ) : (
          <>
            <p>React Out To Me : krc6839</p>
            <p>Link ADD :https://newsapi.org/</p>
            <p>Mob. NO : 12364798</p>
          </>
        )}
      </div>
    </>
  );
}

export default SideBar