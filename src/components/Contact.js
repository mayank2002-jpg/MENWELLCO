import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Doctor from "../assets/images/doctor.avif";
import { Email } from "@material-ui/icons";
import Swal from 'sweetalert2';
const Contact = () => {
  const [formValid, setFormValid] = useState(false);
  const validateForm = () => {
    // Add your validation logic here
    const isValid = user.Name.trim() !== '' &&
                    user.Contact.trim() !== '' &&
                    user.Email.trim() !== '' &&
                    user.Query.trim() !== '';

    setFormValid(isValid);
  };
  const [user,setUser] = useState(
    {
      Name:'',Contact:'',Email:'',Query:''
    }
  )
  let name,value
  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({...user,[name]:value})
    validateForm();
  }
  const getdata = async (e)=>{
    const {Name,Contact,Email,Query} = user;
      e.preventDefault();
      if (!formValid) {
        // Display an error message or handle invalid form
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Incorrect Data",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
        return;
      }
      const options = {
        method : 'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          Name,Contact,Email,Query
        })
      }
      const res = await fetch(
        'https://menwellco-phone-auth-default-rtdb.firebaseio.com/UserData.json',
        options
      )
      if(res){
        Swal.fire("Message Sent!");
      }
      else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
  }
  return (
    <div className="form">
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
              name="Name"
              value={ user.Name }
              onChange={ data }
            />
            <TextField
              required
              id="outlined-required"
              label="Your Contact Number"
              margin="normal"
              placeholder="Enter Your Contact Number"
              name="Contact"
              value={ user.Contact }
              onChange={ data }
            />
            <TextField
              required
              id="outlined-required"
              label="Your Email"
              margin="normal"
              placeholder="Enter Your Email"
              name="Email"
              value={ user.Email }
              onChange={ data }
            />
            <TextField
              id="outlined-multiline-static"
              required
              label="Your Query"
              multiline
              margin="normal"
              rows={4}
              placeholder="Write Your Query..."
              name="Query"
              value={ user.Query }
              onChange={ data }
            />
          </div>
        </Box>
        <img className="w-1/2" src={Doctor} alt="img" />
      </Box>
      <div id="button">
        <button className="bg-green-600 w-1/2 relative bottom-24 p-2 text-white font-medium rounded-md" onClick={getdata}>
          Submit
        </button>
      </div>
    </div>
    </div>
  );
};

export default Contact;
