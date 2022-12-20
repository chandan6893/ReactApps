import React from 'react';
import { Link, Outlet ,NavLink } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to="about">About</Link><br />
      <Link to="contact">Contact</Link><br />
      <Link to="product">product</Link>
      <Outlet />
    </>
  );
}

export default Home