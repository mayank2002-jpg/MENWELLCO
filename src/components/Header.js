import React from "react";
import logo from "../assets/images/logo.jpg";
import CallIcon from "@mui/icons-material/Call";
const Header = () => {
  return (
    <>
      <nav className="container mx-auto px-4">
        <div className="flex p-6 justify-between">
          <img className="w-24 rounded-full" src={logo} alt="logo" />
          <div>
            <span>
              <CallIcon className="text-yellow-400" />
              9992228822
            </span>
            <button className="bg-yellow-400 rounded-md p-3 border-none cursor-pointer font-medium mx-6">
              Book Free Appointment
            </button>
          </div>
        </div>

        <div className="flex justify-end -my-10 space-x-4 px-12">
          <button className="bg-green-500 rounded-md p-2 w-24 text-white font-medium">
            Login
          </button>
          <button className="bg-yellow-400 rounded-md p-2 w-24 text-black font-medium">
            SignUp
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
