import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../styles/navbar.css";
import list from "../data";

import { useAuth0 } from "@auth0/auth0-react";

import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import MenuSharpIcon from "@mui/icons-material/MenuSharp";

const Navbar = ({
  size,
  setShow,
  setState,
  search,
  setSearch,
  handleSearch,
  setCategoryData,
  setCategoryState,
  setSearchOutput,
}) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const handleShowAndState = () => {
    setShow(true);
    setState(false);
    setCategoryData(list);
  };

  const filterResult = (type) => {
    const selectedCategory = list.filter((currentItem) => {
      return currentItem.category === type;
    });
    setCategoryData(selectedCategory);
    setCategoryState(true);
  };

  const [menu,setMenu] = useState(false);

  return (
    <AppBar className="appBar" sx={{ fontWeight: "1000", width: "100%" }}>
      <Toolbar
        className="toolBar"
        sx={{ justifyContent: "space-between", position: "relative" }}
      >
        <Typography
          className="webTitle"
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
        <Box className={menu === false ? "navMenu navActive" : "navMenu"} onClick={() => {
                setMenu(!menu);
              }} >
          <Typography className="category">
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth sx={{ margin: "7px 0px" }}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Category"
                  onChange={handleChange}
                >
                  <MenuItem
                    className="menuItem"
                    sx={{ margin: "3px 0px" }}
                    value={10}
                    onClick={() => setCategoryData(list)}
                  >
                    All Products
                  </MenuItem>
                  <MenuItem
                    sx={{ margin: "3px 0px" }}
                    value={20}
                    onClick={() => filterResult("men")}
                  >
                    Men
                  </MenuItem>
                  <MenuItem
                    sx={{ margin: "3px 0px" }}
                    value={30}
                    onClick={() => filterResult("women")}
                  >
                    Women
                  </MenuItem>
                  <MenuItem
                    sx={{ margin: "3px 0px" }}
                    value={40}
                    onClick={() => filterResult("electronics")}
                  >
                    Electronics
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Typography>
          <Typography className="loginLogout" sx={{ position: "relative" }}>
            {isAuthenticated && (
              <Typography className="userName">
                <span>{user.name}</span>
              </Typography>
            )}

            {isAuthenticated ? (
              <Typography>
                <button
                  className="logoutBtn"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>
              </Typography>
            ) : (
              <Typography>
                <button
                  className="loginBtn"
                  onClick={() => loginWithRedirect()}
                >
                  Log In
                </button>
              </Typography>
            )}
          </Typography>

          <IconButton className="cart" onClick={() => setShow(false)}>
            <AddShoppingCartIcon sx={{ color: "white", fontSize: "2.5rem" }} />
            <Typography
              component="span"
              sx={{ color: "yellow", fontWeight: "1000" }}
            >
              {size}
            </Typography>
          </IconButton>
        </Box>

        <Typography className="bar">
          <IconButton>
            <MenuSharpIcon
              className="menuBar"
              onClick={() => {
                setMenu(!menu);
              }}
            />
          </IconButton>
          <IconButton>
            <CloseIcon className="closeBar" />
          </IconButton>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
