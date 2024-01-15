import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout/index";
import { ShopContextProvider } from "../context/shop-context";
import About from "../pages/About/index";
import Blog1 from "../pages/Blog/blog1";
import Blog2 from "../pages/Blog/blog2";
import Blog3 from "../pages/Blog/blog3";
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
          <Route path="/blog3" element={<Blog3 />} />
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>
  );
};

export default Navigation;
