import "../Styles/style.css";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
const TopCourses = () => {
  return (
    <>
      <Box className="containerOfTopCourses">
        <Typography
          variant="h5"
          component="div"
          sx={{ textAlign: "center", marginTop: "20px" }}
        >
          Top Courses To study India
        </Typography>
        <Typography
          variant="h10"
          component="p"
          sx={{ margin: "25px 180px 25px 180px" }}
        >
          The question students in the country often ask is Which is the
          toughest course in India.The answer to that question is not so simple
          as there are various courses that are difficult for multiple reasons,
          and one cannot just pick one course out and call it Indias toughest
          course.
        </Typography>
        <Box className="containerOfimgCompNdMedCourses">
          <Box className="imgCompNdMedCourses">
            <CardMedia
            className="mainImage"
              component="img"
              sx={{
                width: "44%",
                height: "auto",
                borderRadius: "8px",
              }}
              image="..\src\Home\Images\img7.png"
              alt="Paella dish"
            />

            <Card
            className="firstCardOfTopCourses"
              sx={{
                width: 275,
                height: 290,
                backgroundColor: "white",
                borderRadius: "5px",
                position: "absolute",
                left: "45%",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ textAlign: "center", font: "bold", color: "darkred" }}
                >
                  Computer Courses
                </Typography>
                <Divider />
                <Box sx={{ display: "flex", margin: "5px" }}>
                  <CardMedia
                    component="img"
                    sx={{
                      width: "18%",
                      height: "auto",
                      position: "relative",
                      marginRight: "3px",
                    }}
                    image="..\src\Home\Images\img8.png"
                    alt="Paella dish"
                  />
                  <Typography
                    sx={{ textAlign: "center", padding: "3px 0 3px 0" }}
                  >
                    BCA
                  </Typography>
                </Box>
                <Divider />
                <Box sx={{ display: "flex", margin: "5px" }}>
                  <CardMedia
                    component="img"
                    sx={{
                      width: "18%",
                      height: "auto",
                      position: "relative",
                      marginRight: "3px",
                    }}
                    image="..\src\Home\Images\img9.png"
                    alt="Paella dish"
                  />
                  <Typography
                    sx={{ textAlign: "center", padding: "3px 0 3px 0" }}
                  >
                    MCA
                  </Typography>
                </Box>
                <Divider />
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ textAlign: "center", font: "bold", color: "darkred" }}
                >
                  Medical Courses
                </Typography>
                <Divider />
                <Box sx={{ display: "flex", margin: "5px" }}>
                  <CardMedia
                    component="img"
                    sx={{
                      width: "18%",
                      height: "auto",
                      position: "relative",
                      marginRight: "3px",
                    }}
                    image="..\src\Home\Images\img10.png"
                    alt="Paella dish"
                  />
                  <Typography
                    sx={{ textAlign: "center", padding: "3px 0 3px 0" }}
                  >
                    BDS
                  </Typography>
                </Box>
                <Divider />
                <Box sx={{ display: "flex", margin: "5px" }}>
                  <CardMedia
                    component="img"
                    sx={{
                      width: "18%",
                      height: "auto",
                      position: "relative",
                      marginRight: "3px",
                    }}
                    image="..\src\Home\Images\img11.png"
                    alt="Paella dish"
                  />
                  <Typography
                    sx={{ textAlign: "center", padding: "3px 0 3px 0" }}
                  >
                    MBBS
                  </Typography>
                </Box>
                <Divider />
                <Box sx={{ display: "flex", margin: "5px" }}>
                  <CardMedia
                    component="img"
                    sx={{
                      width: "18%",
                      height: "auto",
                      position: "relative",
                      marginRight: "3px",
                    }}
                    image="..\src\Home\Images\img12.png"
                    alt="Paella dish"
                  />
                  <Typography
                    sx={{ textAlign: "center", padding: "3px 0 3px 0" }}
                  >
                    MD/MS
                  </Typography>
                </Box>
              </CardContent>
            </Card>
            <Card
            className="secondCardOfTopCourses"
              sx={{
                width: 275,
                height: "auto",
                backgroundColor: "white",
                borderRadius: "5px",
                marginLeft: "135px",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ textAlign: "center", font: "bold", color: "darkred" }}
                >
                  Management Courses
                </Typography>
                <Divider />
                <Box sx={{ display: "flex", margin: "5px" }}>
                  <CardMedia
                    component="img"
                    sx={{
                      width: "18%",
                      height: "auto",
                      position: "relative",
                      marginRight: "3px",
                    }}
                    image="..\src\Home\Images\img13.png"
                    alt="Paella dish"
                  />
                  <Typography
                    sx={{ textAlign: "center", padding: "3px 0 3px 0" }}
                  >
                    BBA
                  </Typography>
                </Box>
                <Divider />
                <Box sx={{ display: "flex", margin: "5px" }}>
                  <CardMedia
                    component="img"
                    sx={{
                      width: "18%",
                      height: "auto",
                      position: "relative",
                      marginRight: "3px",
                    }}
                    image="..\src\Home\Images\img14.png"
                    alt="Paella dish"
                  />
                  <Typography
                    sx={{ textAlign: "center", padding: "3px 0 3px 0" }}
                  >
                    MBA
                  </Typography>
                </Box>
                <Divider />
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ textAlign: "center", font: "bold", color: "darkred" }}
                >
                  Engineering Courses
                </Typography>
                <Divider />
                <Box sx={{ display: "flex", margin: "5px" }}>
                  <CardMedia
                    component="img"
                    sx={{
                      width: "18%",
                      height: "auto",
                      position: "relative",
                      marginRight: "3px",
                    }}
                    image="..\src\Home\Images\img15.png"
                    alt="Paella dish"
                  />
                  <Typography
                    sx={{ textAlign: "center", padding: "3px 0 3px 0" }}
                  >
                    B.Tech
                  </Typography>
                </Box>
                <Divider />
                <Box sx={{ display: "flex", margin: "5px" }}>
                  <CardMedia
                    component="img"
                    sx={{
                      width: "18%",
                      height: "auto",
                      position: "relative",
                      marginRight: "3px",
                    }}
                    image="..\src\Home\Images\img16.png"
                    alt="Paella dish"
                  />
                  <Typography
                    sx={{ textAlign: "center", padding: "3px 0 3px 0" }}
                  >
                    B.Arch
                  </Typography>
                </Box>
                <Divider />
                <Box sx={{ display: "flex", margin: "5px" }}>
                  <CardMedia
                    component="img"
                    sx={{
                      width: "18%",
                      height: "auto",
                      position: "relative",
                      marginRight: "3px",
                    }}
                    image="..\src\Home\Images\img17.png"
                    alt="Paella dish"
                  />
                  <Typography
                    sx={{ textAlign: "center", padding: "3px 0 3px 0" }}
                  >
                    M.Tech
                  </Typography>
                </Box>
                <Divider />
                <Box sx={{ display: "flex", margin: "5px" }}>
                  <CardMedia
                    component="img"
                    sx={{
                      width: "18%",
                      height: "auto",
                      position: "relative",
                      marginRight: "3px",
                    }}
                    image="..\src\Home\Images\img18.png"
                    alt="Paella dish"
                  />
                  <Typography
                    sx={{ textAlign: "center", padding: "3px 0 3px 0" }}
                  >
                    BE
                  </Typography>
                </Box>
                <Divider />
                <Box sx={{ display: "flex", margin: "5px" }}>
                  <CardMedia
                    component="img"
                    sx={{
                      width: "18%",
                      height: "auto",
                      position: "relative",
                      marginRight: "3px",
                    }}
                    image="..\src\Home\Images\img19.png"
                    alt="Paella dish"
                  />
                  <Typography
                    sx={{ textAlign: "center", padding: "3px 0 3px 0" }}
                  >
                    ME
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TopCourses;
