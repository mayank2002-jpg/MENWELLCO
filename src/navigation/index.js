import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import SignUp from "../pages/SignUP";
import { ShopContextProvider } from "../context/shop-context";

const Navigation = () => {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>
  );
};

export default Navigation;
