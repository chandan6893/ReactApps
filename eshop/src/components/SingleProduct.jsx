import React from 'react';
import "../styles/singleProduct.css";
export const SingleProduct = ({ singleProd, handleClick }) => {
  return (
    <div className="cards singleProduct">
      <div className="productTitle">
        <h5>{singleProd.title}</h5>
      </div>
      <div className="productImg">
        <img src={singleProd.img} alt="" />
      </div>
      <div className="priceAndBtn">
        <p className="price">₹{singleProd.price}</p>
        <button onClick={() => handleClick(singleProd)}>add to cart</button>
      </div>
    </div>
  );
};
