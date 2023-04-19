import "../Styles/style.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function IndiaAbroad() {
  return (
    <Box sx={{ backgroundColor: "rgb(24, 24, 24)" }}>
      <Typography variant="h5" component="div" sx={{ textAlign: "center",color:"white",padding:"35px 0 15px 0" }}>
        Study India Vs Study Abroad
      </Typography>
      <Divider sx={{boxShadow:"0 5px 5px bisque",marginBottom:"30px",margin:"0 50px 0 50px"}} />
      <Box className="IndiaAbroadBox">
        <Card
          sx={{ minWidth: 275, backgroundColor: "bisque" }}
          className="indAbroadCard"
        >
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Details
            </Typography>
            <Divider />
            <Typography sx={{ textAlign: "center", padding: "7px 0 7px 0" }}>
              Language
            </Typography>
            <Divider />
            <Typography sx={{ textAlign: "center", padding: "7px 0 7px 0" }}>
              Living Budget
            </Typography>
            <Divider />
            <Typography sx={{ textAlign: "center", padding: "7px 0 7px 0" }}>
              Connectivity
            </Typography>
            <Divider />
            <Typography sx={{ textAlign: "center", padding: "7px 0 7px 0" }}>
              Visa
            </Typography>
            <Divider />
            <Typography sx={{ textAlign: "center", padding: "7px 0 7px 0" }}>
              Transport
            </Typography>
            <Divider />
            <Typography sx={{ textAlign: "center", padding: "7px 0 7px 0" }}>
              University
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{ minWidth: 275, boxShadow: "rgba(0, 0, 0, 0.653) 0px 5px 15px" }}
          className="indAbroadCard"
        >
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Study India
            </Typography>
            <Divider />
            <Typography sx={{ textAlign: "center", padding: "7px 0 7px 0" }}>
              Language is no barrier
            </Typography>
            <Divider />
            <Typography sx={{ textAlign: "center", padding: "7px 0 7px 0" }}>
              Living on a budget
            </Typography>
            <Divider />
            <Typography sx={{ textAlign: "center", padding: "7px 0 7px 0" }}>
              Always connected with family and friends
            </Typography>
            <Divider />
            <Typography sx={{ textAlign: "center", padding: "7px 0 7px 0" }}>
              No Visa problem
            </Typography>
            <Divider />
            <Typography sx={{ textAlign: "center", padding: "7px 0 7px 0" }}>
              good public transport facility
            </Typography>
            <Divider />
            <Typography sx={{ textAlign: "center", padding: "7px 0 7px 0" }}>
              India boasts the largest university in the world
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{ minWidth: 275, boxShadow: "rgba(0, 0, 0, 0.653) 0px 5px 15px" }}
          className="indAbroadCard"
        >
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Study Abroad
            </Typography>
            <Divider />
            <Typography sx={{ textAlign: "center", padding: "7px 0 7px 0" }}>
              Language is a barrier in many abroad countries
            </Typography>
            <Divider />
            <Typography sx={{ textAlign: "center", padding: "7px 0 7px 0" }}>
              High living costs as compare to India
            </Typography>
            <Divider />
            <Typography sx={{ textAlign: "center", padding: "7px 0 7px 0" }}>
              Connectivity with family is not as easy as in India
            </Typography>
            <Divider />
            <Typography sx={{ textAlign: "center", padding: "7px 0 7px 0" }}>
              lots of hurdles while applyinf for Visa
            </Typography>
            <Divider />
            <Typography sx={{ textAlign: "center", padding: "7px 0 7px 0" }}>
              Not familiar with public transport
            </Typography>
            <Divider />
            <Typography sx={{ textAlign: "center", padding: "7px 0 7px 0" }}>
             No university is as large as IGNOU Abroad
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
