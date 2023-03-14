import React,{ useEffect, useState } from 'react';
import "../styles/cart.css"

function Cart({cart,setCart}) {
  const [price,setPrice]=useState(0);

  const handleRemove=(id)=>{
   const updatedArrInCart=cart.filter((ele)=>{
      return ele.id !==id;
    })
    setCart(updatedArrInCart)
  }
  const handlePrice=()=>{
    let ans=0;
    cart.map((item)=>(
      ans=ans+item.amount*item.price
    ))
    setPrice(ans)
  }

  useEffect(()=>{
    handlePrice();
  })
  return (
    <article>
      {cart?.map((item) => (
        <div className="cartBox" key={item.id}>
          <div className="imgNdTitle">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div className="incDecAmtBtn">
            <button>+</button>
            <button>{item.amount}</button>
            <button>-</button>
          </div>
          <div>
            <span>₹{item.price}</span>
            <button onClick={()=>handleRemove(item.id)} >remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price</span>
        <span>₹{price}</span>
      </div>
    </article>
  );
}

export default Cart