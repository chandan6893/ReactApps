import "./App.css";
import React,{useState} from "react";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Cart from "./components/Cart";
import "./styles/amazon.css";
import list from "./data";
import { SearchedContent } from "./components/SearchedContent";


function App() {
  const [show,setShow] = useState(true);
  const [cart,setCart] = useState([]);
  const [warning,setWarning] = useState(false);

  const [search,setSearch] = useState("");
  const [searchOutput,setSearchOutput] = useState([]);

  const [state, setState] = useState(false);
  const [singleProd, setSingleProd] = useState([]);

  const handleSearch = (value) => {
    const result = list.filter((item, index) => {
      return (
        value.trim() &&
        item.title.trim() &&
        item.title.trim().toLowerCase().includes(value.trim())
      );
    });
    // console.log(result);
    setSearchOutput(result);
    setSearch(value);
  };
  

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
    <Container maxWidth="md" className="appContainer" >
      <Navbar handleSearch={handleSearch} setSearch={setSearch} search={search} setState={setState} setShow={setShow} size={cart.length} />
      <SearchedContent handleSearch={handleSearch} setState={setState} setSingleProd={setSingleProd} searchOutput={searchOutput} />
      {show ? <LandingPage state={state} singleProd={singleProd} handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleIncDecItemInCart={handleIncDecItemInCart} />}
      {warning && (
        <h4 className="warning">item is already added to your cart</h4>
      )}
      
    </Container>
  );
}

export default App;

