import React from 'react';
import "./Products.css"

function Products() {
  return (
    <div>
      <div className="product">
        <div className="product__info">
          <p>
            ASUS Vivo AiO V222, 4 core Intel Pentium Silver J5040, All-in-One
            Desktop (8GB/256GB SSD/Integrated Graphics/Windows 11/Black/4.8 kg),
            V222GAK-BA034W
          </p>
          <p className="product__price">Rs29,990</p>
          <div className="product__rating">⭐⭐</div>
        </div>
        <img
          src="https://m.media-amazon.com/images/I/71kDCavI6JS._SL1500_.jpg"
          alt=""
        />
        <button>add to cart</button>
      </div>
    </div>
  );
}

export default Products