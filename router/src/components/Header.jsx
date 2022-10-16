import React from 'react'
import { Link,NavLink } from 'react-router-dom'

export  function Header() {
  return (
    <ul className="H-A-C">
      <li>
        <NavLink to="/">Home</NavLink>
        {/* in place of href="", Link uses to="" */}
      </li>
      <li>
          <NavLink to="/about"  className={({ isActive })=> (isActive ? "active-link" : "")} >
            {/* active-link, is the name of class */}
            About
          </NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>

      <li>
        <Link to="/content">Content</Link>
      </li>
    </ul>
  );
}

