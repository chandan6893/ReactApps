import React, { useState } from 'react';
import AppBar from "@mui/material/AppBar";
import { Toolbar, Typography,Box } from '@mui/material';
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import { Link,useNavigate} from 'react-router-dom';
import { useGlobalContext } from "./AppContextProvider";
import SearchBooks from './SearchBooks';

const Header = () => {
  const navigate = useNavigate();
  const { addToWishlist, wishlist, setWishList } = useGlobalContext();
  const wishListFun = () => {
    navigate("/wishlist");
    // setWishList([...wishlist,addToWishlist]);
  };

  return (
    <>
      <AppBar>
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box
              component="h1"
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              <Typography variant="span" sx={{ color: "#ffea00" }}>
                Book
              </Typography>
              <Typography variant="span" sx={{ color: "lightgreen" }}>
                Shop
              </Typography>
            </Box>
            <Box>
              <SearchBooks />
            </Box>
            <Box>
              <CollectionsBookmarkIcon
                sx={{ color: "#263238", fontSize: "40px", cursor: "pointer" }}
                onClick={wishListFun}
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header