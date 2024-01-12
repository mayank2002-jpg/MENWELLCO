import React, { useState } from "react";
import logo from "../assets/images/logo.jpg";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";

const Header = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [itemCount, setItemCount] = React.useState(0);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      <div className="bg-yellow-400 text-center font-semibold p-1">
        Get 5% Off on All Orders
      </div>
      <nav className="w-full container mx-auto h-24  bg-black sticky top-0 z-50">
        <Link to="/">
          <img className="w-24 rounded-full ml-6" src={logo} alt="logo" />
        </Link>
        <div className="flex justify-end -mt-16 mr-6 space-x-10 items-center">
          <div>
            <a
              href="#contact"
              className="bg-yellow-400 rounded-md p-3 border-none cursor-pointer font-medium hover:bg-yellow-300"
            >
              Book Free Appointment
            </a>
          </div>
          <Box sx={{ display: "flex" }}>
            <Box>
              <Badge badgeContent={itemCount} color="primary">
                <Link to="/cart">
                  <ShoppingCartIcon
                    sx={{
                      fontSize: "30px",
                      cursor: "pointer",
                      color: "white",
                    }}
                  />
                </Link>
              </Badge>
            </Box>
            <Link
              to="/login"
              style={{
                textDecoration: isHovering ? "underline" : "none",
                paddingLeft: "15px",
                marginRight: "10px",
                fontSize: "1.25rem",
                color: "white",
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
