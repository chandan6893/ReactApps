import React from 'react';
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerLogo">
        <h2 className="logo">EasyShop</h2>
      </div>

      <div className="headerSearch">
        <input className="searchInput" type="text" placeholder="Search..." />
        <i class="fa-solid fa-magnifying-glass searchIcon"></i>
      </div>

      <div className="headerNav">
        <div className="nav__item">
          <span className="navItemLineOne">Hello, Guest</span>
          <span className="navItemLineTwo">Sign In</span>
        </div>

        <div className="nav__item">
          <span className="navItemLineOne">Your</span>
          <span className="navItemLineTwo">Shop</span>
        </div>

        <div className=" cartAndItems">
          <span className="cart">
            <i class="fa-solid fa-cart-shopping cartIcon"></i>
          </span>
          <span className="noOfItems" >0</span>
        </div>
      </div>
    </div>
  );
}

export default Header