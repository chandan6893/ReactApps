import React from 'react';
import "./Products.css"

function Products({id, title, price, rating, image}) {
  return (
    <>
      <div className="productParent">
        <div className="product">
          <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
              <small>Rs</small>
              <strong>{price}</strong>
            </p>
            <div className="product__rating">⭐⭐</div>
          </div>
          <img src={image} alt="" />
          <button>add to cart</button>
        </div>
      </div>
    </>
  );
}

export default Products