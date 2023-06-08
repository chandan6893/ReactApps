import React from 'react';
import { Toolbar, Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1a237e",
          width:"100%",
          height:"20vh",
          marginTop:"80px"
        }}
      >
        <Box>
          <Typography color={"lightcyan"} variant="h3">develoaped@2023</Typography>
        </Box>
      </Box>
    </>
  );
}

export default Footer