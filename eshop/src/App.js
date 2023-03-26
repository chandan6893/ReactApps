import "./App.css";
import React,{useState} from "react";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Cart from "./components/Cart";
import "./styles/amazon.css"


function App() {
  const [show,setShow] = useState(true);
  const [cart,setCart] = useState([]);
  const [warning,setWarning] = useState(false);

  const handleClick=(item)=>{
    let isPresent=false;
    cart.forEach((prod)=>{
      if(item.id===prod.id){
        isPresent=true;
      }
    })
    if(isPresent){
      setWarning(true);
      setTimeout(()=>{
        setWarning(false)
      },2000);

      return;
    }
      
    setCart([...cart,item])
    
  }

  const handleIncDecItemInCart=(item,d)=>{
    let ind=-1;
    cart.forEach((ele,index)=>{
      if(ele.id===item.id){
        ind=index;
      }
    })
    let tempArr=cart;
    tempArr[ind].amount=tempArr[ind].amount + d;
    // tempArr[ind].amount = tempArr[ind].amount - d;   it will not work
    if(tempArr[ind].amount===0){
      tempArr[ind].amount=1;
    }
    setCart([...tempArr]) 
  }
  // console.log(cart)
  return (
    <Container maxWidth="md">
      <Navbar setShow={setShow} size={cart.length} />

      {show ? <LandingPage  handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleIncDecItemInCart={handleIncDecItemInCart} />}
      {warning && (
        <h4 className="warning">item is already added to your cart</h4>
      )}
    </Container>
  );
}

export default App;

