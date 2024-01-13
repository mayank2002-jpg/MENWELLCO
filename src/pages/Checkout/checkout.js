import React from "react";
import Box from "@mui/material/Box";
import Logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Footer from "../../components/Footer";
const checkout = () => {
  return (
    <>
      <nav className="w-full container mx-auto flex justify-center items-center py-2 shadow-md">
        <Link to="/">
          <img className="w-14 rounded-full" src={Logo} alt="logo" />
        </Link>
      </nav>
      <div className="container mx-auto px-14">
        <Typography sx={{ textAlign: "center" }} variant="h2" gutterBottom>
          Checkout
        </Typography>
        <p className="text-lg font-semibold p-2 mt-5 text-white bg-red-500">
          Please review your order before making the payment.
        </p>
        <div className="border-2 border-black p-2 mt-5">
          <h4 className="text-xl font-medium">Are you an existing customer?</h4>
          <Link to="/login" className="uppercase hover:underline">
            Sign In
          </Link>
        </div>
        <Box
          sx={{ marginTop: "18px", display: "flex", flexDirection: "column" }}
        >
          <Typography variant="h5" gutterBottom>
            Shipping Address
          </Typography>
          <TextField
            required
            id="standard-required"
            label="Email"
            variant="standard"
            placeholder="Enter Your Email"
          />
          <TextField
            required
            id="standard-required"
            label="First Name"
            variant="standard"
            placeholder="Enter Your First Name"
          />
          <TextField
            required
            id="standard-required"
            label="Last Name"
            variant="standard"
            placeholder="Enter Your Last Name"
          />
          <TextField
            required
            id="standard-required"
            label="Shipping Address"
            variant="standard"
            placeholder="Enter Your Address"
          />
          <TextField
            required
            id="standard-required"
            label="Landmark"
            variant="standard"
            placeholder="Enter Your Landmark"
          />
          <TextField
            required
            id="standard-required"
            label="Pincode"
            variant="standard"
            placeholder="Enter Your Pincode"
          />
          <TextField
            required
            id="standard-required"
            label="City"
            variant="standard"
            placeholder="Enter Your City"
          />
          <TextField
            required
            id="standard-required"
            label="State"
            variant="standard"
            placeholder="Enter Your State"
          />
        </Box>

        <Box sx={{ marginTop: "18px" }}>
          <Typography variant="h5" gutterBottom>
            Payment Method
          </Typography>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel value="UPI" control={<Radio />} label="UPI" />
              <FormControlLabel
                value="Credit/Debit"
                control={<Radio />}
                label="Credit/Debit Card"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <button className="w-full bg-yellow-400 text-black text-2xl font-medium mt-5 mb-5 p-2 hover:bg-yellow-300">
          Place Order
        </button>
      </div>
      <Footer />
    </>
  );
};

export default checkout;
