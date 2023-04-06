import React from "react";
import "../styles/card.css";

function Categories({ item, handleClick, categoryData }) {
  const { title, img, price } = item;

  return (
    <div className="cards">
      <div className="productTitle">
        <h5>{title}</h5>
      </div>
      <div className="productImg">
        <img src={img} alt="" />
      </div>
      <div className="priceAndBtn">
        <p className="price">₹{price}</p>
        <button onClick={() => handleClick(item)}>add to cart</button>
      </div>
    </div>
  );
}

export default Categories;
