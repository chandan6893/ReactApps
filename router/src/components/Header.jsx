import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <ul className="H-A-C">
      <li>
        <Link to="/">Home</Link>
        {/* in place of href="", Link uses to="" */}
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>

      <li>
        <Link to="/content">Content</Link>
      </li>
    </ul>
  );
}

