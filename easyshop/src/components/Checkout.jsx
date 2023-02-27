import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkoutLeft">
        <div>
          <h2 className="checkoutTitle">Shopping Cart</h2>
          <CheckoutProduct />
        </div>
      </div>

      <div className="checkoutRight">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout