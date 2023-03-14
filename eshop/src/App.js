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
  console.log(cart)
  return (
    <Container maxWidth="md">
      <Navbar size={cart.length} />
      <LandingPage handleClick={handleClick} />
      <Cart />
      { warning && <h4 className="warning">item is already added to your cart</h4>}
    </Container>
  );
}

export default App;

