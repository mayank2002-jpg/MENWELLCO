import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.jpg";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Footer from "../../components/Footer";
const Login = () => {
  return (
    <>
      <nav className="w-full container mx-auto flex justify-center items-center py-2 shadow-md">
        <Link to="/">
          <img className="w-14 rounded-full" src={Logo} alt="logo" />
        </Link>
      </nav>
      <div className="flex flex-col justify-center items-center m-10">
        <Typography variant="h3">LOGIN</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 500,
            maxWidth: "100%",
            padding: "20px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Enter Your Phone Number"
            variant="outlined"
            margin="normal"
            placeholder="999999999"
            fullWidth
          />
          <Typography variant="h6">OR</Typography>
          <TextField
            id="outlined-basic"
            label="Enter Your Valid Email"
            variant="outlined"
            margin="normal"
            placeholder="someone@gmail.com"
            fullWidth
          />
          <Button sx={{ margin: "10px" }} fullWidth variant="contained">
            Submit
          </Button>
        </Box>
      </div>
      <Footer />
    </>
  );
};

export default Login;
