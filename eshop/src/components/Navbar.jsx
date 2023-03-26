import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../styles/navbar.css";

const Navbar = ({size,setShow}) => {
  return (
    <AppBar sx={{  fontWeight: "1000" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography onClick={()=>setShow(true)} variant="h4" component="div" sx={{ cursor: "pointer",color: "yellow" }}>
          eshop
        </Typography>
        <Typography className='inputNdIconContainer' >
          <input type="text" placeholder='Search here...' className='searchContent' />
          <i className="fa-solid fa-magnifying-glass fa-beat-fade searchIcon"></i>
        </Typography>
        <IconButton onClick={()=>setShow(false)}>
          <AddShoppingCartIcon sx={{ color: "white", fontSize: "2.5rem" }} />
          <Typography component="span" sx={{color: "yellow", fontWeight: "1000"}}>{size}</Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;


