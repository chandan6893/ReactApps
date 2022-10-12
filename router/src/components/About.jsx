import React from 'react';
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="comman">
      <h1>About</h1>
      <Link to="/about/1">content 1</Link>
      <Link to="/about/abcd&ABCD">content 2</Link>
    </div>
  );
}

export default About