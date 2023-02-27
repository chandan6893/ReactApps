import React from 'react';
import "./CheckoutProduct.css";

function CheckoutProduct() {
  return (
    <div className="checkoutProduct">
      <img
        src="https://m.media-amazon.com/images/I/616e2t492uL._SY450_.jpg"
        alt=""
      />
      <div className="product__info">
        <p className="checkoutProduct__title">
          Noise ColorFit Pro 4 Alpha Bluetooth Calling Smart Watch with 1.78
          AMOLED Display, Tru Sync, 60hz Refresh Rate, instacharge, Gesture
          Control, Functional 360 Digital Crown (Rose Pink)
        </p>

        <p className="checkoutProduct__price">
          <small>Rs</small>
          <strong>3799</strong>
        </p>
        <div className="checkoutProduct__rating">
            ⭐⭐⭐⭐
        </div>
        <button>Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct