import "../Styles/style.css"
import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Divider from "@mui/material/Divider";



export default function Highlights() {
  return (
    <Box
      sx={{
        width: "100vw",
        backgroundColor: "rgb(50, 50, 50)",
        boxShadow: "0 -10px 7px -7px grey inset",
      }}
    >
      <Typography
        sx={{ color: "white", textAlign: "center", padding: "3rem 0 1rem 0" }}
      >
        Highlights about India
      </Typography>
      <Divider
        sx={{
          margin: "2em 0",
          color: "white",
          boxShadow: "0 5px 5px bisque",
          margin: "0 50px 0 50px",
        }}
      />
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ padding: "4% 15%" }}
      >
        <Grid item xs={12} sm={6} md={6} lg={6} xl={2}>
          <Card sx={{ display: "flex" }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Republic of India
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardMedia
              sx={{ width: "30%", height: "auto" }}
              className="highlightsImage"
              component="img"
              height="100"
              image="..\src\Home\Images\img1.png"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={2}>
          <Card sx={{ display: "flex" }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Capital
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Delhi
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardMedia
              sx={{ width: "30%", height: "auto" }}
              className="highlightsImage"
              component="img"
              height="100"
              image="..\src\Home\Images\img2.png"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={2}>
          <Card sx={{ display: "flex" }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Language
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Hindi,Englishand many more regional languages
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardMedia
              sx={{ width: "30%", height: "auto" }}
              className="highlightsImage"
              component="img"
              height="100"
              image="..\src\Home\Images\img3.png"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={2}>
          <Card sx={{ display: "flex" }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Religion
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Hinduism,Islam,Christinity and others
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardMedia
              sx={{ width: "30%", height: "auto" }}
              component="img"
              className="highlightsImage"
              height="100"
              image="..\src\Home\Images\img4.png"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={2}>
          <Card sx={{ display: "flex" }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Population
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  136.64 crores (2019)
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardMedia
              sx={{ width: "30%", height: "auto" }}
              component="img"
              className="highlightsImage"
              height="100"
              image="..\src\Home\Images\img5.png"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={2}>
          <Card sx={{ display: "flex" }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Currency
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Indian Rupee (INR)
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardMedia
              sx={{ width: "30%", height: "auto" }}
              component="img"
              className="highlightsImage"
              height="100"
              image="..\src\Home\Images\img6.png"
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
