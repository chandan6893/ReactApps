import React from 'react';
import "./header.css";

function Header() {
  return (
    <div className='header'>
      <div className="headerLogo">
        <h1 className="logo">EasyShop</h1>
      </div>

      <div className="headerSearch">
        <input className="searchInput" type="text" placeholder="Search..." />
      </div>

      <div className="headerNav">
        <div className="nav__item">
          <span className="navItemLineOne">Hello Guest</span>
          <span className="navItemLineTwo">Sign In</span>
        </div>

        <div className="nav__item">
          <span className="navItemLineOne">Your</span>
          <span className="navItemLineTwo">Shop</span>
        </div>

        <div className="nav__item">
          <span className="navItemLineOne cart">
            <i class="fa-solid fa-cart-shopping"></i>
          </span>
          <span className="navItemLineTwo">cart</span>
        </div>
      </div>
    </div>
  );
}

export default Header