import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout/checkout";
import { ShopContextProvider } from "../context/shop-context";
import About from "../pages/About/index";
import Blog1 from "../pages/Blog/blog1";
import Blog2 from "../pages/Blog/blog2";
const Navigation = () => {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog1" element={<Blog1 />} />
          <Route path="/blog2" element={<Blog2 />} />
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>
  );
};

export default Navigation;
