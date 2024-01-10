import React, { useState } from "react";
import logo from "../assets/images/logo.jpg";
import CallIcon from "@mui/icons-material/Call";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
const Header = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      <nav className=" w-full container mx-auto px-4">
        <Link to="/">
          <img className="w-24 rounded-full mt-5" src={logo} alt="logo" />
        </Link>
        <div className="flex justify-end -mt-20 space-x-10 items-center">
          <div>
            <Link to="/contact">
              <button className="bg-yellow-400 rounded-md p-3 border-none cursor-pointer font-medium hover:bg-yellow-300">
                Book Free Appointment
              </button>
            </Link>
          </div>
          <Box sx={{ display: "flex" }}>
            <Box>
              <Link to="/cart">
                <ShoppingCartIcon
                  sx={{
                    fontSize: "30px",
                    cursor: "pointer",
                  }}
                />
              </Link>
            </Box>
            <Link
              to="/login"
              style={{
                textDecoration: isHovering ? "underline" : "none",
                paddingLeft: "15px",
                marginRight: "10px",
                fontSize: "1.25rem",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseOut}
            >
              Account
            </Link>
          </Box>
        </div>
      </nav>
    </>
  );
};

export default Header;
