import React from 'react';
import "./Home.css";
import Products from "./Products"

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="onlineShoppingImg"
          src="https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_960_720.jpg"
          alt=""
        />
        <div className="home__row">
          <Products />
          <Products />
        </div>
        <div className="home__row">
          <Products />
          <Products />
          <Products />
        </div>
        <div className="home__row">
          <Products />
          <Products />
          <Products />
        </div>
      </div>
    </div>
  );
}

export default Home