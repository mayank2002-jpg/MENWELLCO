import React from "react";
import logo from "../assets/images/logo.jpg";
import CallIcon from "@mui/icons-material/Call";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav className=" w-full container mx-auto px-4">
        <div className="flex mt-5 justify-between">
          <Link to="/">
            <img className="w-24 rounded-full" src={logo} alt="logo" />
          </Link>
          <div>
            <span>
              <CallIcon className="text-yellow-400" />
              9992228822
            </span>
            <Link to="/contact">
              <button className="bg-yellow-400 rounded-md p-3 border-none cursor-pointer font-medium mx-6">
                Book Free Appointment
              </button>
            </Link>
          </div>
        </div>

        <div className="flex justify-end -my-10 space-x-4 px-6">
          <Link to="/login">
            <button className="bg-green-500 rounded-md p-2 w-24 text-white font-medium">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-yellow-400 rounded-md p-2 w-24 text-black font-medium">
              SignUp
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
