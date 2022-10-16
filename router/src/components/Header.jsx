import React from 'react'
import { Link,NavLink } from 'react-router-dom'

export  function Header() {
  return (
    <ul className="H-A-C">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        end> 
        {/* just check output by removing "end" and adding it and observe it  */}
          Home
        </NavLink>
        {/* in place of href="", Link uses to="" */}
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        end>
          {/* active-link, is the name of class */}
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Contact
        </NavLink>
      </li>

      <li>
        <Link to="/content" >
          Content
          </Link>
      </li>
    </ul>
  );
}

