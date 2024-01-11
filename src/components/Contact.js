import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Doctor from "../assets/images/doctor.avif";
import Button from "@mui/material/Button";
const Contact = () => {
  return (
    <div className="container mx-auto px-4 text-center">
      <Typography variant="h3">Get Free Apointment!</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Box component="form" noValidate autoComplete="off">
          <div className="flex flex-col w-96">
            <TextField
              required
              id="outlined-required"
              label="Your Name"
              margin="normal"
              placeholder="Enter Your Name"
            />
            <TextField
              required
              id="outlined-required"
              label="Your Contact Number"
              margin="normal"
              placeholder="Enter Your Contact Number"
            />
            <TextField
              required
              id="outlined-required"
              label="Your Email"
              margin="normal"
              placeholder="Enter Your Email"
            />
            <TextField
              id="outlined-multiline-static"
              required
              label="Your Query"
              multiline
              margin="normal"
              rows={4}
              placeholder="Write Your Query..."
            />
          </div>
        </Box>
        <img className="w-1/2" src={Doctor} alt="img" />
      </Box>
      <Button
        sx={{
          position: "relative",
          right: "350px",
          width: "380px",
          marginTop: "-180px",
        }}
        variant="contained"
        color="success"
      >
        Submit
      </Button>
    </div>
  );
};

export default Contact;
