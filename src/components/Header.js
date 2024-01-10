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
        <div className="flex mt-5 justify-between">
          <Link to="/">
            <img className="w-24 rounded-full" src={logo} alt="logo" />
          </Link>
          <div>
            <span>
              <CallIcon className="text-yellow-400" />
              9992228822
            </span>
            <button to="/contact">
              <button className="bg-yellow-400 rounded-md p-3 border-none cursor-pointer font-medium mx-6">
                Book Free Appointment
              </button>
            </button>
          </div>
        </div>

        <Box className="flex justify-end -my-10 px-6 space-x-4">
          <Box>
            <Link to="/cart">
              <ShoppingCartIcon
                sx={{
                  fontSize: "30px",
                  cursor: "pointer",
                  position: "relative",
                }}
              />
              <Box
                sx={{
                  bgcolor: "yellow",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "100%",
                  position: "absolute",
                  width: "15px",
                  height: "15px",
                  top: "90px",
                  right: "120px",
                  fontWeight: "medium",
                  transform: "translate(25%,25%)",
                }}
              >
                3
              </Box>
            </Link>
          </Box>
          <Link
            to="/login"
            style={{
              textDecoration: isHovering ? "underline" : "none",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseOut}
          >
            Account
          </Link>
        </Box>
      </nav>
    </>
  );
};

export default Header;
