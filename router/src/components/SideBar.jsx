import React from 'react'
import { Link,NavLink } from 'react-router-dom';

function SideBar({ text }) {
  console.log("prop",text)
  // here we r accessing the props from App.jsx
  return (
    <>
      <div className="sidebar">
        <h2>SideBar</h2>
        {text === "about" ? (
          <p>
            <NavLink
              to="/about/1"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              content 1
            </NavLink>
            <NavLink
              to="/about/2"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              content 2
            </NavLink>
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