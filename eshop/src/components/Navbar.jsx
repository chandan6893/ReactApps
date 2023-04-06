// import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../styles/navbar.css";
import list from "../data";

import { useAuth0 } from "@auth0/auth0-react";

import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Navbar = ({
  size,
  setShow,
  setState,
  search,
  setSearch,
  handleSearch,
  setCategoryData,
  setCategoryState,
}) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const handleShowAndState = () => {
    setShow(true);
    setState(false);
  };

  const filterResult = (type) => {
    const selectedCategory = list.filter((currentItem) => {
      return currentItem.category === type;
    });
    setCategoryData(selectedCategory);
    setCategoryState(true);
  };

  return (
    <AppBar sx={{ fontWeight: "1000", width: "100%" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          onClick={handleShowAndState}
          variant="h4"
          component="div"
          sx={{ cursor: "pointer", color: "yellow" }}
        >
          eshop
        </Typography>
        <Typography className="inputNdIconContainer">
          <input
            type="text"
            placeholder="Search here..."
            className="searchContent"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <i className="fa-solid fa-magnifying-glass fa-beat-fade searchIcon"></i>
        </Typography>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Category"
              onChange={handleChange}
            >
              <MenuItem value={20} onClick={() => setCategoryData(list)}>
                All Products
              </MenuItem>
              <MenuItem value={10} onClick={() => filterResult("men")}>
                Men
              </MenuItem>
              <MenuItem value={20} onClick={() => filterResult("women")}>
                Women
              </MenuItem>
              <MenuItem value={20} onClick={() => filterResult("electronics")}>
                Electronics
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        {/* {isAuthenticated &&
          <Typography>
           <span>{user.name}</span>
           </Typography>
           } */}

        {isAuthenticated ? (
          <Typography>
            <button
              className="logoutBtn"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          </Typography>
        ) : (
          <Typography>
            <button className="loginBtn" onClick={() => loginWithRedirect()}>
              Log In
            </button>
          </Typography>
        )}
        <IconButton onClick={() => setShow(false)}>
          <AddShoppingCartIcon sx={{ color: "white", fontSize: "2.5rem" }} />
          <Typography
            component="span"
            sx={{ color: "yellow", fontWeight: "1000" }}
          >
            {size}
          </Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
