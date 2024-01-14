import React, { useState, useContext } from "react";
import logo from "../assets/images/logo.jpg";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { ShopContext } from "../context/shop-context";

const Header = () => {
  const [isHovering, setIsHovering] = useState(false);
  const { cartItems } = useContext(ShopContext);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const cartItemsCount = Object.values(cartItems).reduce(
    (acc, curr) => acc + curr,
    0
  );

  return (
    <>
      <div className="bg-yellow-400 text-center font-semibold p-1">
        Get 5% Off on All Orders
      </div>
      <nav
        className="w-full container mx-auto h-24  bg-black sticky top-0 z-50"
        id="navbar"
      >
        <Link to="/">
          <img className="w-24 rounded-full ml-6" src={logo} alt="logo" />
        </Link>
        <div className="flex justify-end -mt-16 mr-6 space-x-10 items-center">
          <a
            className="text-white text-xl hover:underline uppercase media"
            href="#blog"
          >
            Blog
          </a>
          <Link
            to="/about"
            className="text-white text-xl hover:underline uppercase media"
          >
            About
          </Link>
          <div id="book">
            <a
              href="#contact"
              className="bg-yellow-400 rounded-md p-3 border-none cursor-pointer font-medium hover:bg-yellow-300"
            >
              Book Free Appointment
            </a>
          </div>
          <Box sx={{ display: "flex" }}>
            <Box>
              <Badge badgeContent={cartItemsCount} color="primary">
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
