import React from "react";
import Box from "@mui/material/Box";
import Logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
const checkout = () => {
  return (
    <>
      <nav className="w-full container mx-auto flex justify-center items-center py-2 shadow-md">
        <Link to="/">
          <img className="w-14 rounded-full" src={Logo} alt="logo" />
        </Link>
      </nav>
    </>
  );
};

export default checkout;
