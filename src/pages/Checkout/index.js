import React,{useContext,useState} from "react";
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
import AuthContext from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
const Checkout = () => {

  let authorize = false
  const { auth,setAuth } = useContext(AuthContext)
  if(auth === null || Object.keys(auth).length === 0){
    authorize=false
  }else{
    authorize=true
  }
  const [formValid, setFormValid] = useState(false);
  const validateForm = () => {
    // Add your validation logic here
    const isValid = user.Email.trim() !== '' &&
                    user.FirstName.trim() !== '' &&
                    user.LastName.trim() !== '' &&
                    user.Address.trim() !== '' &&
                    user.Landmark.trim() !== '' &&
                    user.Pincode.trim() !== '' &&
                    user.City.trim() !== '' &&
                    user.State.trim() !== '' ;

    setFormValid(isValid);
  };
  const [user,setUser] = useState(
    {
      Email:'',FirstName:'',LastName:'',Address:'',Landmark:'',Pincode:'',City:'',State:''
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
    const {Email,FirstName,LastName,Address,Landmark,Pincode,City,State} = user;
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
      if(!authorize){
        // Display an error message or handle invalid form
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "First Sign In",
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
          Email,FirstName,LastName,Address,Landmark,Pincode,City,State
        })
      }
      const res = await fetch(
        'https://menwellco-phone-auth-default-rtdb.firebaseio.com/OrderData.json',
        options
      )
      if(res){
        Swal.fire("Order Placed!");
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
        <div hidden={authorize} className="border-2 border-black p-2 mt-5">
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
            name="Email"
            value={ user.Email }
            onChange={ data }
          />
          <TextField
            required
            id="standard-required"
            label="First Name"
            variant="standard"
            placeholder="Enter Your First Name"
            name="FirstName"
            value={ user.FirstName }
            onChange={ data }
          />
          <TextField
            required
            id="standard-required"
            label="Last Name"
            variant="standard"
            placeholder="Enter Your Last Name"
            name="LastName"
            value={ user.LastName }
            onChange={ data }
          />
          <TextField
            required
            id="standard-required"
            label="Shipping Address"
            variant="standard"
            placeholder="Enter Your Address"
            name="Address"
            value={ user.Address }
            onChange={ data }
          />
          <TextField
            required
            id="standard-required"
            label="Landmark"
            variant="standard"
            placeholder="Enter Your Landmark"
            name="Landmark"
            value={ user.Landmark }
            onChange={ data }
          />
          <TextField
            required
            id="standard-required"
            label="Pincode"
            variant="standard"
            placeholder="Enter Your Pincode"
            name="Pincode"
            value={ user.Pincode }
            onChange={ data }
          />
          <TextField
            required
            id="standard-required"
            label="City"
            variant="standard"
            placeholder="Enter Your City"
            name="City"
            value={ user.City }
            onChange={ data }
          />
          <TextField
            required
            id="standard-required"
            label="State"
            variant="standard"
            placeholder="Enter Your State"
            name="State"
            value={ user.State }
            onChange={ data }
          />
        </Box>

        {/* <Box sx={{ marginTop: "18px" }}>
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
        </Box> */}
        <button className="w-full bg-yellow-400 text-black text-2xl font-medium mt-5 mb-5 p-2 hover:bg-yellow-300" onClick={ getdata }>
          Continue To Payment Page
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
