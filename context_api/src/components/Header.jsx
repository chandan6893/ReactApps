import React from 'react';
import AppBar from "@mui/material/AppBar";
import { Toolbar, Typography,Box } from '@mui/material';
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";

const Header = () => {
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
            <Box component="h1" sx={{cursor:"pointer"}}>
              <Typography variant="span" sx={{ color: "#ffea00" }}>
                Book
              </Typography>
              <Typography variant="span" sx={{ color: "lightgreen" }}>
                Shop
              </Typography>
            </Box>
            <Box>
              <CollectionsBookmarkIcon sx={{ color: "#263238",fontSize:"40px",cursor:"pointer" }} />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header