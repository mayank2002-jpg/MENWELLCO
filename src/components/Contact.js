import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Doctor from "../assets/images/doctor.avif";
const Contact = () => {
  return (
    <div className="container mx-auto px-4 text-center">
      <Typography variant="h3">Get Free Apointment!</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box component="form" noValidate autoComplete="off">
          <div id="formSubmit" className="flex flex-col w-96">
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
      <div id="button">
        <button className="bg-green-600 w-1/2 relative bottom-24 p-2 text-white font-medium rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
