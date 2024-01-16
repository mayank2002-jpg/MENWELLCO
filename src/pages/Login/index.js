import React, { useState,useContext } from "react";
import { Link , useNavigate} from "react-router-dom";
import Logo from "../../assets/images/logo.jpg";
import TextField from "@mui/material/TextField";
import OtpInput from "otp-input-react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Footer from "../../components/Footer";
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css";
import {authfirebase} from "../../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import AuthContext from "../../context/AuthProvider";
import { useAlert } from 'react-alert'

const Login = () => {
  const alert = useAlert()
  const { setAuth } =useContext(AuthContext)
  const [otp,setOtp] = useState("")
  const [ph,setPh] = useState("")
  const [showOtp,setShowOtp] = useState(false)
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        authfirebase
      );
    }
  }

  function onSignup() {
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(authfirebase, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setShowOtp(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        alert.error("Some Problem")
      });
  }

  function onOTPVerify() {
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setAuth(res.user);
        navigate('/')
        alert.success("successfully logged in")
      })
      .catch((err) => {
        console.log(err);
        alert.error("Some Problem")
      });
  }

  return (
    <>
      <nav className="w-full container mx-auto flex justify-center items-center py-2 shadow-md">
        <Link to="/">
          <img className="w-14 rounded-full" src={Logo} alt="logo" />
        </Link>
      </nav>
      <Toaster toastOptions={{ duration: 4000 }}/>
      <div id="recaptcha-container"></div>
      {user ? (   <h2>
        Login Success
      </h2>) : (
      <div className="flex flex-col justify-center items-center m-10">
      <Typography variant="h3">LOGIN</Typography>
        {
          showOtp ? 
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
                      <OtpInput
                      value={otp}
                      onChange={setOtp}
                      OTPLength={6}
                      otpType="number"
                      disabled={false}
                      autoFocus
                      className="opt-container "
                    >
                    </OtpInput>
                    <Button sx={{ margin: "10px" }} fullWidth variant="contained" onClick={onOTPVerify}>
                      Submit
                    </Button>
                  </Box> 
                  :  
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
                    <label
                        htmlFor=""
                        className="font-bold text-xl text-white text-center"
                    >
                    Verify your phone number
                    </label>
                    <PhoneInput country={"in"} value={ph} onChange={setPh} />
                  <Button sx={{ margin: "10px" }} fullWidth variant="contained" onClick={onSignup}>
                    Send Code
                  </Button>
                </Box>
        }
      </div>
      )}
      <Footer />
    </>
  );
};

export default Login;
